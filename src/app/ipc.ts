import { ipcMain, nativeTheme } from 'electron';
import { defaultDBPath, initDB, projectDB } from '../database';
import { initServer, stopServer } from '../server';
import { registerShortcutsIPC } from './installer';
import { registerSecurityIPC, registerSettingsIPC, store } from './settings';
import { normalizeSize } from '../util';
import { mainWindow } from './window';

export let serverStartTime: number | null = null;
let statsInterval: NodeJS.Timeout | null = null;

export let manualTimeOverride = false;

export function registerIPCHandlers() {
    registerThemeIPC();
    registerSettingsIPC();
    registerSecurityIPC();
    registerServerIPC();
    registerShortcutsIPC();
    registerStatsIPC();

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

    ipcMain.handle('get-initial-theme', () => nativeTheme.shouldUseDarkColors);
}

function registerServerIPC() {
    ipcMain.on('start-server', (_event, port: number) => {
        manualTimeOverride = true;
        handleStartServer(port);
    });

    ipcMain.on('stop-server', () => {
        manualTimeOverride = true;
        handleStopServer();
    });
}

function registerStatsIPC() {
    ipcMain.handle('get-stats', sendDBStats);
}

// --- Server ---
export function handleStartServer(port?: number) {
    const p = port ?? store.get('port');
    if (!initServer(p)) return false;

    serverStartTime = Date.now();
    if (statsInterval) clearInterval(statsInterval);
    statsInterval = setInterval(sendUsageStats, 1000);

    mainWindow?.webContents.send('server-status-changed', { isRunning: true, port: p });
}

export function handleStopServer() {
    stopServer();

    serverStartTime = null;
    if (statsInterval) clearInterval(statsInterval);

    mainWindow?.webContents.send('server-status-changed', { isRunning: false });
}

export function setManualTimeOverride(override: boolean) {
    manualTimeOverride = override;
}

function handleInitialModalClosed() {
    const projectDataPath = store.get('projectDataPath') || defaultDBPath;
    initDB(projectDataPath);
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