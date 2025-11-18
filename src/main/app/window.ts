import type { MenuItem, MenuItemConstructorOptions } from 'electron';
import { app, BrowserWindow, Menu, screen, session, shell, Tray } from 'electron';
import { defaultWindowHeight, defaultWindowWidth, minWindowHeight, minWindowWidth } from '../../../config.json';
import { defaultDBPath, projectDB } from '../database.js';
import { errorWithMessage, info } from '../logging.js';
import { getResource } from '../util.js';
import { isQuitting, showToast } from './app.js';
import { createShortcut } from './installer';
import { handleStartServer, handleStopServer } from './ipc.js';
import { setInitialPassword, store } from './settings.js';
import { startScheduler } from './timeScheduler.js';

const iconPath = getResource(process.platform === 'win32' ? 'icon.ico' : 'icon.png', 'src/renderer/assets');

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

export let mainWindow: BrowserWindow | null = null;
let tray: Tray | null = null;

export function createWindow() {
    const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().size;
    // maximize if screen is too small
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
    Menu.setApplicationMenu(createMenu());

    // set CSP
    session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
        callback({
            responseHeaders: {
                ...details.responseHeaders,
                'Content-Security-Policy': [
                    // Only allow 'unsafe-eval' in development (webpack-dev-server)
                    `default-src 'self'; script-src 'self' ${!app.isPackaged ? "'unsafe-eval'" : ''}; style-src 'self' 'unsafe-inline'; img-src 'self' data:`
                ]
            }
        });
    });

    if (shouldMaximize) mainWindow.maximize();

    // once window is ready, show it. This avoids the flash
    mainWindow.once('ready-to-show', mainWindow?.show);

    mainWindow.on('close', event => {
        if (!isQuitting && store.get('hideToTray')) {
            // hide window to tray rather than full close
            event.preventDefault();
            mainWindow?.hide();
        }
    });
    mainWindow.on('closed', () => mainWindow = null);

    mainWindow.webContents.on('did-finish-load', finishedLoad);
}

async function finishedLoad() {
    info('Renderer finished loading...');

    if (store.get('firstTimeRunning')) {
        info('First time running, sending first-time-running IPC and generating password...');
        setInitialPassword();

        mainWindow?.webContents.send('first-time-running', defaultDBPath);
        // reset firstTimeRunning flag on initial modal close in case of program crash
    }

    const timeSettings = store.get('timeSettings') as any;
    // time management takes precedence over "start on open" setting
    if (timeSettings?.enabled) {
        await startScheduler();
    } else if (store.get('startServerOnOpen')) {
        handleStartServer();
    } else {
        mainWindow?.webContents.send('server-status-changed', { isRunning: false, port: null });
    }
}

function createMenu() {
    const menu: (MenuItemConstructorOptions | MenuItem)[] = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'Open Project Storage Path',
                    click: async () => {
                        try {
                            const path = projectDB.path;
                            await shell.openPath(path);
                        } catch (e) {
                            errorWithMessage('Failed to open project storage path', e);
                            return;
                        }
                    }
                },
                { type: 'separator' },
                {
                    label: 'Hide to Tray',
                    click: () => mainWindow?.hide()
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
                    click: menuItem => store.set('hideToTray', menuItem.checked)
                },
                {
                    label: 'Start server when starting app',
                    type: 'checkbox',
                    checked: store.get('startServerOnOpen'),
                    click: menuItem => store.set('startServerOnOpen', menuItem.checked)
                },
            ]
        }
    ];

    if (process.platform === 'win32') {
        const options: MenuItemConstructorOptions[] = [
            { type: 'separator' },
            {
                label: 'Create Start Menu Shortcut',
                click: () => {
                    const success = createShortcut('StartMenu');
                    if (success) showToast('toastShortcutCreated', { type: 'Start Menu' });
                    else showToast('toastShortcutFailed', { type: 'Start Menu' });
                }
            },
            {
                label: 'Create Desktop Shortcut',
                click: () => {
                    const success = createShortcut('Desktop');
                    if (success) showToast('toastShortcutCreated', { type: 'Desktop' });
                    else showToast('toastShortcutFailed', { type: 'Desktop' });
                }
            }
        ];

        const optionsMenu = menu.find(m => m.label === 'Options');
        (optionsMenu?.submenu as MenuItemConstructorOptions[]).push(...options);
    }

    return Menu.buildFromTemplate(menu);
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
    tray.on('click', () => mainWindow?.show());
}