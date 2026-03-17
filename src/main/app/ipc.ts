import { ipcMain } from 'electron';
import { formatTimeDiff } from '../../common/time.js';
import type { Stats } from '../../common/types.js';
import { initDB, projectDB } from '../api/database.js';
import { appDownloadCount, initServer, stopServer } from '../api/server.js';
import { defaultDBPath } from '../constants.js';
import { info as _info } from '../log.js';
import { normalizeSize } from '../util.js';
import { registerShortcutsIPC, registerUpdateIPC } from './installer.js';
import { registerQRIPC } from './qr.js';
import { registerSecurityIPC } from './security.js';
import { registerSettingsIPC, store } from './settings.js';
import { registerTimeSettingsIPC } from './timeScheduler.js';
import { mainWindow } from './window.js';

const logSource = 'ipc';
const info = (str: string) => _info(str, logSource);

export let serverStartTime: number | null = null;
let statsInterval: NodeJS.Timeout | null = null;

export let manualTimeOverride = false;

export async function registerIPCHandlers() {
    info('Registering IPC handlers');
    registerThemeIPC();
    registerSettingsIPC();
    registerTimeSettingsIPC();
    registerUpdateIPC();
    registerSecurityIPC();
    registerServerIPC();
    registerQRIPC();
    registerShortcutsIPC();
    registerStatsIPC();

    ipcMain.once('initial-modal-closed', handleInitialModalClosed);
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
        store.set('port', port);
        return handleStartServer(port);
    });

    ipcMain.on('stop-server', () => {
        manualTimeOverride = true;
        return handleStopServer();
    });

    ipcMain.on('clear-cache', () => projectDB.clearCache());
}

function registerStatsIPC() {
    ipcMain.handle('get-stats', async (): Promise<Stats> => {
        const dbStats = await getDBStats();
        return { appDownloadCount, ...dbStats };
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
    if (projectDataPath) {
        initDB(projectDataPath);
    } else {
        store.set('projectDataPath', defaultDBPath);
        initDB(defaultDBPath);
    }
    store.set('firstTimeRunning', false);
}

// --- Stats ---

function sendUsageStats() {
    if (!serverStartTime || !mainWindow) return;

    const uptimeMs = Date.now() - serverStartTime;
    const uptime = formatTimeDiff(uptimeMs);

    const memory = normalizeSize(process.memoryUsage().heapUsed, 2);

    mainWindow.webContents.send('update-stats', {
        uptime,
        memory
    });
}

async function getDBStats(): Promise<{ projectsCount: number, fileCount: number, sizeUsed: string }> {
    const base = await projectDB.getStats();

    const { directoryCount: projectsCount, fileCount } = base;
    const sizeUsed = normalizeSize(base.size, 2);

    return { projectsCount, fileCount, sizeUsed };
}