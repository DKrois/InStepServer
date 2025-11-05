import { app, BrowserWindow, Menu, screen, shell, Tray } from 'electron';
import { join } from 'node:path';
import { defaultDBPath, ProjectDatabase, projectDB } from '../database';
import { attempt, info } from '../util';
import { isQuitting } from './app';
import { handleStartServer, handleStopServer } from './ipc';
import { setInitialPassword, store } from './settings';
import { defaultWindowHeight, defaultWindowWidth, minWindowHeight, minWindowWidth } from '../../../config.json';
import { startScheduler } from './timeScheduler';

const iconPath = app.isPackaged ? join(process.resourcesPath, 'icon.ico') : join(process.cwd(), 'src/renderer/assets/icon.ico');

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

export let mainWindow: BrowserWindow | null = null;
let tray: Tray | null = null;

export function createWindow() {
    // get primary screens work area
    const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().size;
    const shouldMaximize = screenWidth < defaultWindowWidth || screenHeight < defaultWindowHeight;

    mainWindow = new BrowserWindow({
        width: shouldMaximize ? screenWidth : defaultWindowWidth,
        height: shouldMaximize ? screenHeight : defaultWindowHeight,
        minWidth: minWindowWidth,
        minHeight: minWindowHeight,
        show: false, // prevent visual flash of resize

        webPreferences: {
            contextIsolation: true,
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
                        // Use the shell module to open defined path
                        const desc = Object.getOwnPropertyDescriptor(ProjectDatabase.prototype, 'path');
                        const pathGetter = desc?.get?.bind(projectDB) as () => string ?? (() => '');
                        const path = attempt(pathGetter);
                        if (!path) return;
                        await shell.openPath(path);
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

    mainWindow.webContents.on('did-finish-load', async () => {
        info('Renderer finished loading...');

        if (store.get('firstTimeRunning')) {
            info('First time running, sending first-time-running IPC and generating password...');
            setInitialPassword();

            mainWindow?.webContents.send('first-time-running', defaultDBPath);
            // reset firstTimeRunning flag on initial modal close in case of program crash
        }

        const timeSettings = store.get('timeSettings') as any;
        // Time management takes precedence over the simple "start on open" setting
        if (timeSettings?.enabled) {
            await startScheduler();
        } else if (store.get('startServerOnOpen')) {
            handleStartServer();
        } else {
            mainWindow?.webContents.send('server-status-changed', { isRunning: false, port: null });
        }
    });
}

export function createTray() {
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

    // re-open app when user clicks tray icon
    tray.on('click', () => {
        mainWindow?.show();
    });
}