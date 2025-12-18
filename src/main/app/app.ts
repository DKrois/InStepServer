import { app, BrowserWindow, nativeTheme } from 'electron';
import log from 'electron-log';
import type { TOptions } from 'i18next';
import { initDB } from '../api/database.js';
import { initLogging } from '../log.js';
import { handleSquirrelCommands, initUpdater } from './installer.js';
import { registerIPCHandlers } from './ipc.js';
import { createTray } from './menu.js';
import { initStore, store } from './settings.js';
import { createWindow, mainWindow } from './window.js';

export let isQuitting = false;

// request single instance lock (only one app instance allowed)
const gotTheLock = app.requestSingleInstanceLock();

export function initApp() {
    log.transports.console.level = false;
    if (!gotTheLock) { // ensure single instance
        app.quit();
        return;
    }
    initUpdater();
    if (handleSquirrelCommands()) {
        app.quit();
        return;
    }

    app.on('ready', () => {
        initLogging();
        // set stored theme
        nativeTheme.themeSource = store.get('theme') as 'system' | 'light' | 'dark';

        createWindow();
        createTray();
        initStore();

        // db init
        // first run already handled by ipc / handleInitialModalClosed
        const projectDataPath = store.get('projectDataPath');
        if (projectDataPath) initDB(projectDataPath);

        registerIPCHandlers();
    });

    app.on('before-quit', () => {
        isQuitting = true;
    });

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit();
    });

    // will be emitted on the first instance when a second instance is launched
    app.on('second-instance', (_event, _commandLine, _workingDirectory) => {
        if (mainWindow) {
            if (!mainWindow.isVisible()) mainWindow.show();
            if (mainWindow.isMinimized()) mainWindow.restore();

            mainWindow.focus();
        }
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
}

export function sendLog(message: string | string[]) {
    const m = Array.isArray(message) ? message : [message];
    mainWindow?.webContents.send('log', m);
}

export function showToast(key: string, options?: TOptions, type: 'info' | 'error' = 'info') {
    mainWindow?.webContents.send('show-toast', key, options, type);
}