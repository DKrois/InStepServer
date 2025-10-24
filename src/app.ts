import { app, BrowserWindow, Menu, nativeTheme, screen, shell, Tray } from 'electron';
import { join } from 'node:path';
import { updateElectronApp } from 'update-electron-app';
import { defaultWindowHeight, defaultWindowWidth, minWindowHeight, minWindowWidth } from '../config.json';
import { handleStartServer, handleStopServer, initStore, registerIPCHandlers, store } from './ipc';
import { projectDB } from './database.js';
import { initLogging } from './util.js';

const iconPath = app.isPackaged ? join(process.resourcesPath, 'icon.ico') : join(process.cwd(), 'app/assets/icon.ico');
const projectStoragePath = projectDB.path;

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

export let mainWindow: BrowserWindow | null = null;
let tray: Tray | null = null;
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
    updateElectronApp();
    if (require('electron-squirrel-startup')) {
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
        registerIPCHandlers();

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
