import { dialog, ipcMain, Menu } from 'electron';
import { readFile, writeFile } from 'node:fs/promises';
import { schedulerIntervalTime } from '../../../config.json';
import { generateScheduleEvents, TimeSettings } from '../../common/time.js';
import { info as _info, warn as _warn } from '../log.js';
import {
    handleStartServer,
    handleStopServer,
    manualTimeOverride,
    serverStartTime,
    setManualTimeOverride
} from './ipc.js';
import { store } from './settings.js';
import { mainWindow } from './window.js';

let schedulerInterval: NodeJS.Timeout | null = null;

const logSource = 'scheduler';
const info = (str: string) => _info(str, logSource);
const warn = (str: string) => _warn(str, logSource);

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

async function handleExport(): Promise<{ success: boolean, code?: 'cancelled' }> {
    if (!mainWindow) {
        warn('Main window not available');
        return { success: false };
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
            return { success: true };
        } catch (error: any) {
            error('Error exporting time settings', error);
            return { success: false };
        }
    }
    return { success: false, code: 'cancelled' };
}

async function handleImport(): Promise<{ success: boolean, data?: TimeSettings, code?: 'cancelled' }> {
    if (!mainWindow) {
        warn('Main window not available');
        return { success: false };
    }

    const { filePaths } = await dialog.showOpenDialog(mainWindow, {
        title: 'Import Time Settings',
        properties: ['openFile'],
        filters: [{ name: 'JSON Files', extensions: ['json'] }]
    });

    if (filePaths && filePaths.length > 0) {
        try {
            const data = await readFile(filePaths[0], 'utf-8');
            const settings = JSON.parse(data);
            return { success: true, data: settings };
        } catch (error: any) {
            error('Error importing time settings', error);
            return { success: false };
        }
    }
    return { success: false, code: 'cancelled' };
}


function isValidTimeSettings(x: any): x is TimeSettings {
    return (
        typeof x === 'object'
        && typeof x.enabled === 'boolean'
        && typeof x.global === 'object'
        && x.weekdays && typeof x.weekdays === 'object'
    );
}

export async function startScheduler() {
    info('Starting time settings scheduler...');
    if (schedulerInterval) clearInterval(schedulerInterval);

    schedulerInterval = setInterval(checkSchedule, schedulerIntervalTime); // once every 20s

    // Run once on startup as well
    await checkSchedule();
}

async function checkSchedule() {
    const settings = store.get('timeSettings');
    if (!settings?.enabled || manualTimeOverride) return;

    const now = new Date();
    const isActuallyRunning = serverStartTime !== null;

    // get timeline of all scheduled events
    const events = generateScheduleEvents(settings);
    if (events.length === 0) return; // no schedule configured

    // find most recent event that has already occurred
    const pastEvents = events.filter(e => e.time <= now);
    const lastEvent = pastEvents.length > 0 ? pastEvents[pastEvents.length - 1] : null;

    // last event's type determines if server should be running
    // no past events → off
    const shouldBeRunning = lastEvent ? lastEvent.type === 'start' : false;

    // only start/stop if state differs from desired state
    if (shouldBeRunning && !isActuallyRunning) {
        info(`State should be ON. Starting server.`);
        handleStartServer();
    } else if (!shouldBeRunning && isActuallyRunning) {
        info(`State should be OFF. Stopping server.`);
        await handleStopServer();
    }
}