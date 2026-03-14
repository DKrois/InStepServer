import { app, dialog, ipcMain, nativeTheme } from 'electron';
import Store from 'electron-store';
import { defaultTimeSettings, Durations } from '../../common/time.js';
import type { InitialSettings, IPCResponse } from '../../common/types.js';
import { defaultDBPath } from '../constants.js';
import { canWriteToPath } from '../util.js';
import { isServerRunning } from '../api/server.js';
import { info as _info, warn as _warn } from '../log.js';

const logSource = 'settings';
const info = (str: string) => _info(str, logSource);
const warn = (str: string) => _warn(str, logSource);

export const store = new Store({
    defaults: {
        port: 5000,
        theme: 'system',
        language: '', // set in initStore
        hideToTray: false,
        startServerOnOpen: false,
        timeSettings: defaultTimeSettings,
        firstTimeRunning: true,
        blockUpdateNotification: false,
        passwordHash: '', // set on startup or update ipc
        lockoutMinutes: 10,
        maxLoginAttempts: 5,
        sessionSecret: '', // set on server init
        sessionMaxAge: 30 * Durations.msInDay,
        imdEnabled: false,
        projectDataPath: '', // set on initial modal close
        downloadCount: 0
    }
});

export function initStore() {
    if (!store.has('language') || !store.get('language')) {
        const locale = app.getLocale().split('-')[0];
        // Only set if locale is supported
        if (['en', 'de'].includes(locale)) {
            store.set('language', locale);
        } else {
            store.set('language', 'en'); // Fallback to English
        }
    }
}

export function registerSettingsIPC() {
    ipcMain.handle('get-initial-settings', (): InitialSettings => {
        const { port, language, timeSettings, imdEnabled, sessionMaxAge, maxLoginAttempts, lockoutMinutes } = store.store;
        const version = `v${app.getVersion()}`;
        const isDarkMode = nativeTheme.shouldUseDarkColors;
        const serverEnabled = isServerRunning();

        return {
            version,
            isDarkMode,
            language,
            port,
            serverEnabled,
            timeSettings,
            imdEnabled,
            sessionDuration: sessionMaxAge,
            maxLoginAttempts,
            lockoutMinutes
        };
    });

    ipcMain.on('save-language', (_event, language: string) => store.set('language', language));
    ipcMain.handle('set-project-data-path', (_event, currentlySelectedPath?: string) => handleUpdatePath(currentlySelectedPath));
}

async function handleUpdatePath(currentlySelected?: string): IPCResponse<'cancelled' | 'permission-denied', string> {
    const defaultPath = currentlySelected || defaultDBPath;
    const { canceled, filePaths } = await dialog.showOpenDialog({
        title: 'Select Project Storage Folder',
        defaultPath,
        properties: ['openDirectory']
    });

    if (canceled || filePaths.length === 0) {
        // User canceled, use default path
        store.set('projectDataPath', defaultPath);
        return { success: false, data: defaultPath, code: 'cancelled' };
    } else {
        const selectedPath = filePaths[0];

        const isWritable = await canWriteToPath(selectedPath);
        if (isWritable) {
            store.set('projectDataPath', selectedPath);

            info(`Updated db path to ${selectedPath}`);
            return { success: true, data: selectedPath };
        } else {
            warn(`Cannot write to selected db path ${selectedPath}`);
            // path is not writeable (admin, ...)
            return { success: false, code: 'permission-denied' };
        }
    }
}