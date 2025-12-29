import { app, BrowserWindow, Menu, screen, session, shell } from 'electron';
import { defaultWindowHeightPercent, defaultWindowWidthPercent, minWindowHeight, minWindowWidth } from '../../../config.json';
import { isServerRunning } from '../api/server.js';
import { defaultDBPath } from '../constants.js';
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
    // calc width
    const defaultWindowWidthPx = screenWidth * defaultWindowWidthPercent;
    const defaultWindowHeightPx = screenHeight * defaultWindowHeightPercent;

    // maximize if screen is too small
    const shouldMaximize = minWindowWidth > defaultWindowWidthPx || minWindowHeight > defaultWindowHeightPx;

    mainWindow = new BrowserWindow({
        width: shouldMaximize ? screenWidth : defaultWindowWidthPx,
        height: shouldMaximize ? screenHeight : defaultWindowHeightPx,
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

    // always open links in external browser
    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: 'deny' };
    });
    mainWindow.webContents.on('will-navigate', (event, url) => {
        if (!url.startsWith('file://') && !url.startsWith('app://')
            && !url.startsWith('http://localhost:3000') // for dev
        ) {
            event.preventDefault();
            shell.openExternal(url);
        }
    });

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
    } else if (store.get('startServerOnOpen') && !isServerRunning()) {
        await handleStartServer();
    }
    // update UI if server not running already handled by getInitialSettings
}