import { app, BrowserWindow, ipcMain, Menu, nativeTheme, screen, shell, Tray } from 'electron';
// @ts-ignore
import Store from 'electron-store';
import { join } from 'node:path';
import { defaultWindowHeight, defaultWindowWidth, minWindowHeight, minWindowWidth } from '../config.json';
import { projectDB } from './database.js';
import { initServer, stopServer } from './server.js';
import { initLogging, normalizeSize } from './util.js';

const iconPath = app.isPackaged ? join(process.resourcesPath, 'icon.ico') : join(process.cwd(), 'app/assets/icon.ico');
const projectStoragePath = projectDB.path;

const store = new Store({
    defaults: {
        port: 5000,
        theme: 'system', // 'system', 'light', or 'dark'
        language: app.getLocale().split('-')[0],
        hideToTray: true,
        startServerOnOpen: false,
    }
});

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

let mainWindow: BrowserWindow | null = null;
let tray: Tray | null = null;
let serverStartTime: number | null = null;
let statsInterval: NodeJS.Timeout | null = null;
let isQuitting = false;

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

    const menu = Menu.buildFromTemplate([
        {
            label: 'File',
            submenu: [
                {
                    label: 'Open Project Storage Path',
                    click: async () => {
                        // Use the shell module to open the defined path
                        await shell.openPath(projectStoragePath);
                    }
                },
                { type: 'separator' },
                {
                    label: 'Hide to Tray',
                    click: () => {
                        mainWindow?.hide();
                    }
                },
                {
                    label: 'Restart',
                    click: () => {
                        app.relaunch(); // only works on production
                        app.exit(0);
                    }
                },
                { label: 'Quit', role: 'quit' },
            ]
        },
        {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { role: 'toggleDevTools' },
                { type: 'separator' },

                { label: 'Zoom In', role: 'zoomIn', accelerator: 'CmdOrCtrl+=' },
                { label: 'Zoom Out', role: 'zoomOut' },
                { label: 'Reset Zoom', role: 'resetZoom' },
                { type: 'separator' },

                { role: 'togglefullscreen' },
            ]
        },
        {
            label: 'Options',
            submenu: [
                {
                    label: 'Hide to tray on close',
                    type: 'checkbox',
                    checked: store.get('hideToTray'),
                    click: (menuItem) => {
                        store.set('hideToTray', menuItem.checked);
                    }
                },
                {
                    label: 'Start server when starting app',
                    type: 'checkbox',
                    checked: store.get('startServerOnOpen'),
                    click: (menuItem) => {
                        store.set('startServerOnOpen', menuItem.checked);
                    }
                },
            ]
        }
    ]);
    Menu.setApplicationMenu(menu);

    if (shouldMaximize) mainWindow.maximize();
    // Once window is ready, show it. This avoids the flash
    mainWindow.once('ready-to-show', mainWindow?.show);

    mainWindow.on('close', event => {
        if (!isQuitting && store.get('hideToTray')) {
            // hide window to tray rather than full close
            event.preventDefault();
            mainWindow?.hide();
        }
    });
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

function createTray() {
    // Create the tray icon
    tray = new Tray(iconPath);

    // Define the context menu for the tray icon
    const contextMenu = Menu.buildFromTemplate([
        { label: 'Open', click: () => mainWindow?.show() },
        { type: 'separator' },

        { label: 'Start Server', click: () => handleStartServer() },
        { label: 'Stop Server', click: handleStopServer },
        { type: 'separator' },

        { label: 'Quit', role: 'quit' }
    ]);
    tray.setToolTip('InStep Server Control Panel');
    tray.setContextMenu(contextMenu);

    // --- Add a 'click' event listener to the tray icon ---
    // This makes the app re-open when the user clicks the icon
    tray.on('click', () => {
        mainWindow?.show();
    });
}

export function initApp() {
    if (require('electron-squirrel-startup')) app.quit();

    app.on('ready', () => {
        initLogging();
        // set stored theme
        nativeTheme.themeSource = store.get('theme') as 'system' | 'light' | 'dark';

        createWindow();
        createTray();

        // IPC Handlers
        ipcMain.on('start-server', (_event, port: number) => handleStartServer(port));
        ipcMain.on('stop-server', handleStopServer);
        ipcMain.handle('get-stats', sendDBStats);

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

        if (store.get('startServerOnOpen')) {
            handleStartServer();
        } else {
            mainWindow?.webContents.send('server-status-changed', { isRunning: false, port: null });
        }
    });

    app.on('before-quit', () => {
        isQuitting = true;
    });

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit();
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
}

export function sendLog(message: string) {
    if (mainWindow) mainWindow.webContents.send('log', message);
}


// *** Server ***
function handleStartServer(port?: number) {
    const p = port ?? store.get('port');
    initServer(p);

    serverStartTime = Date.now();
    if (statsInterval) clearInterval(statsInterval);
    statsInterval = setInterval(sendUsageStats, 1000);

    mainWindow?.webContents.send('server-status-changed', { isRunning: true, port: p });
}

function handleStopServer() {
    stopServer();

    serverStartTime = null;
    if (statsInterval) clearInterval(statsInterval);

    mainWindow?.webContents.send('server-status-changed', { isRunning: false });
}


// *** Stats ***
function sendUsageStats() {
    if (!serverStartTime || !mainWindow) return;

    const uptimeMs = Date.now() - serverStartTime;
    const hours = Math.floor(uptimeMs / 3600000).toString().padStart(2, '0');
    const minutes = Math.floor((uptimeMs % 3600000) / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((uptimeMs % 60000) / 1000).toString().padStart(2, '0');

    const memory = normalizeSize(process.memoryUsage().heapUsed, 2);

    mainWindow.webContents.send('update-stats', {
        uptime: `${hours}:${minutes}:${seconds}`,
        memory: memory
    });
}

async function sendDBStats() {
    if (!mainWindow) return;
    const base = await projectDB.getStats();

    const { directoryCount: projectsCount, fileCount } = base;
    const sizeUsed = normalizeSize(base.size, 2);

    return { projectsCount, fileCount, sizeUsed };
}