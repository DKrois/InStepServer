import { app, BrowserWindow, Menu, screen, session, shell } from 'electron';
import { defaultWindowHeightPercent, defaultWindowWidthPercent, defaultWindowWidthPx, defaultWindowHeightPx, minWindowHeight, minWindowWidth } from '../../../config.json';
import { isServerRunning } from '../api/server.js';
import { defaultDBPath } from '../constants.js';
import { info as _info } from '../log.js';
import { isQuitting } from './app.js';
import { supportedOSForShortcuts } from './installer.js';
import { handleStartServer } from './ipc.js';
import { createMenu } from './menu.js';
import { store } from './settings.js';
import { startScheduler } from './timeScheduler.js';
import { setInitialPassword } from './security.js';

const logSource = 'window';
const info = (str: string) => _info(str, logSource);

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

export let mainWindow: BrowserWindow | null = null;

export function createWindow() {
    const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().size;
    // calc width
    const calcDefaultWindowWidthPx = Math.floor(screenWidth * defaultWindowWidthPercent);
    const calcDefaultWindowHeightPx = Math.floor(screenHeight * defaultWindowHeightPercent);

    // if px default is bigger than % default => use max
    const defaultWindowWidth = Math.max(calcDefaultWindowWidthPx, defaultWindowWidthPx);
    const defaultWindowHeight = Math.max(calcDefaultWindowHeightPx, defaultWindowHeightPx);

    // maximize if screen is too small
    const shouldMaximize = defaultWindowHeight > screenHeight || defaultWindowWidth > screenWidth;

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

    if (shouldMaximize) mainWindow.maximize();

    // only show window when ready to avoid flashes
    mainWindow.once('ready-to-show', mainWindow?.show);

    mainWindow.on('close', event => {
        if (!isQuitting && store.get('hideToTray')) {
            info('Hiding window to tray');
            // hide window to tray rather than full close
            event.preventDefault();
            mainWindow?.hide();
        }
    });
    mainWindow.on('closed', () => mainWindow = null);

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
        info('First time running, generating password and showing modal...');
        const initialPassword = setInitialPassword();
        const canCreateShortcuts = supportedOSForShortcuts.includes(process.platform);

        mainWindow?.webContents.send('first-time-running', defaultDBPath, initialPassword, canCreateShortcuts);
        // reset firstTimeRunning flag on initial modal close in case of program crash
    }

    const timeSettings = store.get('timeSettings');
    // time management takes precedence over 'start on open' setting
    if (timeSettings?.enabled) {
        await startScheduler();
    } else if (store.get('startServerOnOpen') && !isServerRunning()) {
        await handleStartServer();
    }
    // update UI if server not running already handled by getInitialSettings
}