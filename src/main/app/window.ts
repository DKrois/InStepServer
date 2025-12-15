import { app, BrowserWindow, Menu, screen, session } from 'electron';
import { defaultWindowHeight, defaultWindowWidth, minWindowHeight, minWindowWidth } from '../../../config.json';
import { defaultDBPath } from '../api/database.js';
import { info } from '../log.js';
import { isQuitting } from './app.js';
import { handleStartServer } from './ipc.js';
import { createMenu } from './menu.js';
import { setInitialPassword, store } from './settings.js';
import { startScheduler } from './timeScheduler.js';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

export let mainWindow: BrowserWindow | null = null;

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
        await setInitialPassword();

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