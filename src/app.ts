import { app, BrowserWindow, ipcMain, nativeTheme, Menu, screen } from 'electron';
import Store from 'electron-store';
import { defaultWindowWidth, defaultWindowHeight, minWindowWidth, minWindowHeight } from '../config.json'
import { stats, initServer, stopServer } from './server.js';

const store = new Store({
    defaults: {
        port: 5000,
        theme: 'system', // 'system', 'light', or 'dark'
        language: app.getLocale().split('-')[0]
    }
});

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

let mainWindow: BrowserWindow | null = null;
let serverStartTime: number | null = null;
let statsInterval: NodeJS.Timeout | null = null;

function createWindow() {
    // get primary screens work area
    const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().workAreaSize;
    const shouldMaximize = screenWidth < defaultWindowWidth || screenHeight < defaultWindowHeight;

    mainWindow = new BrowserWindow({
        width: shouldMaximize ? screenWidth : defaultWindowWidth,
        height: shouldMaximize ? screenHeight : defaultWindowHeight,
        minWidth: minWindowWidth,
        minHeight: minWindowHeight,
        show: false, // prevent visual flash of resize

        webPreferences: {
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
        },
    });

    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

    if (shouldMaximize) mainWindow.maximize();

    // Once window is ready, show it. This avoids the flash
    mainWindow.once('ready-to-show', mainWindow?.show);

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
        // add custom menu
        const menuTemplate: (Electron.MenuItemConstructorOptions | Electron.MenuItem)[] = [
            {
                label: 'File',
                submenu: [
                    { role: 'quit', label: 'Exit' },
                    { role: 'toggleDevTools' }
                ]
            },
            {
                label: 'View',
                submenu: [
                    { role: 'reload' },
                    { role: 'forceReload' },
                    { type: 'separator' },
                    // Fixed zoom keybinds
                    { label: 'Zoom In', role: 'zoomIn', accelerator: 'CmdOrCtrl+=' },
                    { label: 'Zoom Out', role: 'zoomOut' },
                    { label: 'Reset Zoom', role: 'resetZoom' },
                    { type: 'separator' },
                    { role: 'togglefullscreen' }
                ]
            }
        ];
        const menu = Menu.buildFromTemplate(menuTemplate);
        Menu.setApplicationMenu(menu);

        // set stored theme
        nativeTheme.themeSource = store.get('theme') as 'system' | 'light' | 'dark';

        createWindow();

        // IPC Handlers
        ipcMain.on('start-server', (_event, port: number) => {
            initServer(port);

            serverStartTime = Date.now();
            if (statsInterval) clearInterval(statsInterval);
            statsInterval = setInterval(sendStats, 1000);

            mainWindow?.webContents.send('server-status-changed', { isRunning: true, message: `Server started on port ${port}` });
        });
        ipcMain.on('stop-server', () => {
            stopServer();

            serverStartTime = null;
            if (statsInterval) clearInterval(statsInterval);

            mainWindow?.webContents.send('server-status-changed', { isRunning: false, message: 'Server stopped successfully' });
        });
        ipcMain.handle('get-stats', () => stats);

        ipcMain.handle('toggle-theme', () => {
            const newTheme = nativeTheme.shouldUseDarkColors ? 'light' : 'dark';
            nativeTheme.themeSource = newTheme;
            store.set('theme', newTheme);

            return nativeTheme.shouldUseDarkColors;
        });

        ipcMain.handle('get-initial-theme', () => nativeTheme.shouldUseDarkColors);

        ipcMain.handle('get-initial-settings', () => {
            return {
                port: store.get('port'),
                theme: store.get('theme'),
                language: store.get('language')
            };
        });
        ipcMain.on('save-setting', (_event, { key, value }) => {
            store.set(key, value);
        });

        mainWindow?.webContents.on('did-finish-load', () => {
            mainWindow?.webContents.send('server-status-changed', true);
        });

        nativeTheme.themeSource = store.get('theme') as 'system' | 'light' | 'dark';

    });

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit();
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
}

function sendStats() {
    if (!serverStartTime || !mainWindow) return;

    const uptimeMs = Date.now() - serverStartTime;
    const hours = Math.floor(uptimeMs / 3600000).toString().padStart(2, '0');
    const minutes = Math.floor((uptimeMs % 3600000) / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((uptimeMs % 60000) / 1000).toString().padStart(2, '0');

    const memory = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);

    mainWindow.webContents.send('update-stats', {
        uptime: `${hours}:${minutes}:${seconds}`,
        memory: `${memory} MB`
    });
}