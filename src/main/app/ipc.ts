import { app, ipcMain, nativeTheme } from 'electron';
import { initDB, projectDB } from '../api/database.js';
import { initServer, stopServer } from '../api/server.js';
import { defaultDBPath } from '../constants.js';
import { normalizeSize } from '../util.js';
import { registerShortcutsIPC, registerUpdateIPC } from './installer.js';
import { registerSecurityIPC, registerSettingsIPC, store } from './settings.js';
import { registerTimeSettingsIPC } from './timeScheduler.js';
import { mainWindow } from './window.js';
import { registerQRIPC } from './qr.js';

export let serverStartTime: number | null = null;
let statsInterval: NodeJS.Timeout | null = null;

export let manualTimeOverride = false;

export async function registerIPCHandlers() {
    registerThemeIPC();
    registerSettingsIPC();
    registerTimeSettingsIPC();
    registerUpdateIPC();
    registerSecurityIPC();
    registerServerIPC();
    registerQRIPC();
    registerShortcutsIPC();
    registerStatsIPC();

    ipcMain.handle('get-app-version', () => app.getVersion());
    ipcMain.handle('is-windows', () => process.platform === 'win32');
    ipcMain.on('initial-modal-closed', handleInitialModalClosed);
}

function registerThemeIPC() {
    ipcMain.handle('toggle-theme', () => {
        const newTheme = nativeTheme.shouldUseDarkColors ? 'light' : 'dark';
        nativeTheme.themeSource = newTheme;
        store.set('theme', newTheme);

        return nativeTheme.shouldUseDarkColors;
    });
}

function registerServerIPC() {
    ipcMain.handle('start-server', (_event, port: number) => {
        manualTimeOverride = true;
        return handleStartServer(port);
    });

    ipcMain.on('stop-server', () => {
        manualTimeOverride = true;
        return handleStopServer();
    });

    ipcMain.on('save-port', (_event, port: number) => store.set('port', port));
}

function registerStatsIPC() {
    ipcMain.handle('get-stats', async () => {
        const dbStats = await getDBStats();
        const version = app.getVersion();
        return { version, ...dbStats };
    });
}

// --- Server ---
export async function handleStartServer(port?: number) {
    const p = port ?? store.get('port');
    if (!(await initServer(p))) return false;

    serverStartTime = Date.now();
    if (statsInterval) clearInterval(statsInterval);
    statsInterval = setInterval(sendUsageStats, 1000);

    mainWindow?.webContents.send('server-status-changed', { isRunning: true, port: p });
    return true;
}

export async function handleStopServer() {
    await stopServer();

    serverStartTime = null;
    if (statsInterval) clearInterval(statsInterval);

    mainWindow?.webContents.send('server-status-changed', { isRunning: false });
}

export function setManualTimeOverride(override: boolean) {
    manualTimeOverride = override;
}

function handleInitialModalClosed() {
    const projectDataPath = store.get('projectDataPath');
    if (!projectDataPath) {
        store.set('projectDataPath', defaultDBPath);
        initDB(defaultDBPath);
    } else {
        initDB(projectDataPath);
    }
    store.set('firstTimeRunning', false);
}

// --- Stats ---

function sendUsageStats() {
    if (!serverStartTime || !mainWindow) return;

    const uptimeMs = Date.now() - serverStartTime;
    const hours = Math.floor(uptimeMs / 3600000).toString().padStart(2, '0');
    const minutes = Math.floor((uptimeMs % 3600000) / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((uptimeMs % 60000) / 1000).toString().padStart(2, '0');

    const memory = normalizeSize(process.memoryUsage().heapUsed, 2);

    mainWindow.webContents.send('update-stats', {
        uptime: `${hours}:${minutes}:${seconds}`,
        memory
    });
}

async function getDBStats() {
    const base = await projectDB.getStats();

    const { directoryCount: projectsCount, fileCount } = base;
    const sizeUsed = normalizeSize(base.size, 2);

    return { projectsCount, fileCount, sizeUsed };
}