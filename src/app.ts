import { app, BrowserWindow, ipcMain, nativeTheme } from 'electron';
import { initServer, getStats, stopServer } from './server';

/*
 * start / stop
 * logs
 * statistics ?
 */

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

let mainWindow: BrowserWindow | null = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
        },
    });

    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

export function sendLog(message: string) {
    if (mainWindow) mainWindow.webContents.send('log', message);
}

export function initApp() {
    if (require('electron-squirrel-startup')) {
        app.quit();
    }

    app.on('ready', () => {
        createWindow();

        // IPC Handlers
        ipcMain.on('start-server', initServer);
        ipcMain.on('stop-server', stopServer);
        ipcMain.handle('get-stats', getStats);

        ipcMain.handle('toggle-theme', () => {
            if (nativeTheme.shouldUseDarkColors) {
                nativeTheme.themeSource = 'light';
            } else {
                nativeTheme.themeSource = 'dark';
            }
            return nativeTheme.shouldUseDarkColors;
        });

        ipcMain.handle('get-initial-theme', () => nativeTheme.shouldUseDarkColors);
        ipcMain.handle('get-initial-locale', () => app.getLocale().split('-')[0]);
    });

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit();
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
}