import { app, BrowserWindow, ipcMain, nativeTheme } from 'electron';
import { initServer, stats, stopServer } from './server';

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

function logToRenderer(log: string) {
    if (mainWindow) {
        mainWindow.webContents.send('log', log);
    }
}

function sendLog(message: string) {
    logToRenderer(`[Server] ${message}`);
}

export function initApp() {
    if (require('electron-squirrel-startup')) {
        app.quit();
    }

    app.on('ready', () => {
        createWindow();

        // IPC Handlers
        ipcMain.on('start-server', () => initServer());
        ipcMain.on('stop-server', () => stopServer());
        ipcMain.handle('get-stats', () => stats);

        ipcMain.handle('toggle-theme', () => {
            if (nativeTheme.shouldUseDarkColors) {
                nativeTheme.themeSource = 'dark';
            } else {
                nativeTheme.themeSource = 'light';
            }
            return nativeTheme.shouldUseDarkColors;
        });

        ipcMain.handle('get-initial-theme', () => nativeTheme.shouldUseDarkColors);
        ipcMain.handle('get-initial-locale', () => app.getLocale().split('-')[0]);
    });

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
}