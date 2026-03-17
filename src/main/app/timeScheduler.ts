import { dialog, ipcMain, Menu } from 'electron';
import { readFile, writeFile } from 'node:fs/promises';
import { schedulerCheckIntervalSeconds, schedulerUpdateEventsIntervalSeconds } from '../../../config.json';
import { getEventsInfo, updateEvents } from '../../common/time.js';
import type { IPCResponse, TimeSettings } from '../../common/types.js';
import { info as _info, warn as _warn, error as _error } from '../log.js';
import {
    handleStartServer,
    handleStopServer,
    manualTimeOverride,
    serverStartTime,
    setManualTimeOverride
} from './ipc.js';
import { store } from './settings.js';
import { mainWindow } from './window.js';

const logSource = 'scheduler';
const info = (str: string) => _info(str, logSource);
const warn = (str: string) => _warn(str, logSource);
const error = (str: string, err: unknown) => _error(str, err, logSource);

let schedulerInterval: NodeJS.Timeout | null = null;
let updateEventsInterval: NodeJS.Timeout | null = null;

export function registerTimeSettingsIPC() {
    ipcMain.on('save-time-settings', async (_event, settings) => {
        if (!isValidTimeSettings(settings)) {
            warn('Rejected invalid time settings payload');
            return;
        }

        store.set('timeSettings', settings);
        setManualTimeOverride(false); // Saving new settings resets any manual override
        await checkSchedule(); // Immediately check the new schedule
        if (settings.enabled) await startScheduler();
    });

    ipcMain.handle('export-time-settings', handleExport);
    ipcMain.handle('import-time-settings', handleImport);

    ipcMain.on('show-clear-time-context-menu', (_event, inputId: string) => {
        if (!mainWindow) {
            warn('Main window not available');
            return;
        }

        const template: (Electron.MenuItemConstructorOptions | Electron.MenuItem)[] = [
            {
                label: 'Clear Time',
                click: () => {
                    // Send a message back to the renderer to clear the specific input
                    mainWindow?.webContents.send('clear-time-input', inputId);
                }
            }
        ];
        const menu = Menu.buildFromTemplate(template);
        menu.popup({ window: mainWindow });
    });
}

async function handleExport(): IPCResponse<'cancelled' | ''> {
    if (!mainWindow) {
        warn('Export failed: Main window not available');
        return { success: false, code: '' };
    }

    const { filePath } = await dialog.showSaveDialog(mainWindow, {
        title: 'Export Time Settings',
        defaultPath: 'time-settings.json',
        filters: [{ name: 'JSON Files', extensions: ['json'] }]
    });

    if (filePath) {
        try {
            const settings = store.get('timeSettings');
            await writeFile(filePath, JSON.stringify(settings, null, 2));
            return { success: true, data: undefined };
        } catch (error: any) {
            error('Error exporting time settings', error);
            return { success: false, code: '' };
        }
    }
    return { success: false, code: 'cancelled' };
}

async function handleImport(): IPCResponse<'cancelled' | 'invalid-data' | '', TimeSettings> {
    if (!mainWindow) {
        warn('Import failed: Main window not available');
        return { success: false, code: '' };
    }

    const { filePaths } = await dialog.showOpenDialog(mainWindow, {
        title: 'Import Time Settings',
        properties: ['openFile'],
        filters: [{ name: 'JSON Files', extensions: ['json'] }]
    });

    if (filePaths.length > 0) {
        try {
            const data = await readFile(filePaths[0], 'utf-8');
            const settings = JSON.parse(data);
            if (!isValidTimeSettings(settings)) return { success: false, code: 'invalid-data' };

            store.set('timeSettings', settings);
            return { success: true, data: settings };
        } catch (e) {
            error('Error importing time settings', e);
            return { success: false, code: '' };
        }
    }
    return { success: false, code: 'cancelled' };
}

function isValidTimeSettings(x: any): x is TimeSettings {
    const weekdays = x.weekdays;
    if (
        typeof x !== 'object'
        || typeof x.enabled !== 'boolean'
        || typeof x.global !== 'object'
        || !weekdays
        || typeof weekdays !== 'object'
    ) return false;

    for (let [k, value] of Object.entries(weekdays)) {
        const key = parseInt(k);

        if (isNaN(key) || typeof value !== 'object') return false;
    }

    return true;
}

export async function startScheduler() {
    info('Starting time settings scheduler...');
    if (schedulerInterval) clearInterval(schedulerInterval);
    if (updateEventsInterval) clearInterval(updateEventsInterval);

    schedulerInterval = setInterval(checkSchedule, schedulerCheckIntervalSeconds * 1000);
    updateEventsInterval = setInterval(() => updateEvents(store.get('timeSettings')), schedulerUpdateEventsIntervalSeconds * 1000);

    // Run once on startup as well
    updateEvents(store.get('timeSettings'));
    await checkSchedule();
}

async function checkSchedule() {
    if (manualTimeOverride) return;

    const { shouldBeRunning } = getEventsInfo();
    if (shouldBeRunning === undefined) return;

    // only start/stop if state differs from desired state
    const isActuallyRunning = serverStartTime !== null;
    if (shouldBeRunning && !isActuallyRunning) {
        info(`Starting server...`);
        await handleStartServer();
    } else if (!shouldBeRunning && isActuallyRunning) {
        info(`Stopping server...`);
        await handleStopServer();
    }
}