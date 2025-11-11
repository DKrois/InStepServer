import { app, BrowserWindow, nativeTheme } from 'electron';
import log from 'electron-log';

// variable needs to be set before importing projectDB as it uses it during initialization
export const userDataPath = app.getPath('userData');
import { initDB } from '../database.js';
import { handleSquirrelCommands, initUpdater } from './installer';
import { registerIPCHandlers } from './ipc';
import { initLogging } from '../util.js';
import { initStore, store } from './settings';
import { createTray, createWindow, mainWindow } from './window';

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

export function sendLog(message: string) {
    if (mainWindow) mainWindow.webContents.send('log', message);
}