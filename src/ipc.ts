import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { app, ipcMain, nativeTheme } from 'electron';
// @ts-ignore
import Store from 'electron-store';
import { execSync } from 'node:child_process';
import { mainWindow } from './app';
import { name } from '../config.json'
import { projectDB } from './database';
import { initServer, stopServer } from './server';
import { errorWithMessage, info, normalizeSize, warn } from './util';

export const store = new Store({
    defaults: {
        port: 5000,
        theme: 'system',
        language: '', // → init in initStore
        hideToTray: false, // TODO
        startServerOnOpen: false,
        timeSettings: {
            enabled: false,
            global: { start: '', end: '' },
            weekdays: {
                0: { enabled: false, mode: 'custom', start: '', end: '' }, // Monday
                1: { enabled: false, mode: 'custom', start: '', end: '' },
                2: { enabled: false, mode: 'custom', start: '', end: '' },
                3: { enabled: false, mode: 'custom', start: '', end: '' },
                4: { enabled: false, mode: 'custom', start: '', end: '' },
                5: { enabled: false, mode: 'custom', start: '', end: '' },
                6: { enabled: false, mode: 'custom', start: '', end: '' } // Sunday
            }
        },
        passwordHash: '',
    }
});

let serverStartTime: number | null = null;
let statsInterval: NodeJS.Timeout | null = null;

export function initStore() {
    if (!store.has('language') || !store.get('language')) {
        const locale = app.getLocale().split('-')[0];
        // Only set if the locale is one of your supported languages
        if (['en', 'de'].includes(locale)) {
            store.set('language', locale);
        } else {
            store.set('language', 'en'); // Fallback to English
        }
    }
}

let manualTimeOverride = false;

export function registerIPCHandlers() {
    ipcMain.on('start-server', (_event, port: number) => {
        manualTimeOverride = true;
        handleStartServer(port);
    });
    ipcMain.on('stop-server', () => {
        manualTimeOverride = true;
        handleStopServer();
    });

    ipcMain.on('save-time-settings', (_event, settings) => {
        store.set('timeSettings', settings);
        manualTimeOverride = false; // Saving new settings resets any manual override
        checkSchedule(); // Immediately check the new schedule
        if (settings.enabled) startScheduler();
    });

    ipcMain.handle('get-stats', sendDBStats);

    ipcMain.handle('toggle-theme', () => {
        const newTheme = nativeTheme.shouldUseDarkColors ? 'light' : 'dark';
        nativeTheme.themeSource = newTheme;
        store.set('theme', newTheme);

        return nativeTheme.shouldUseDarkColors;
    });

    ipcMain.handle('get-initial-theme', () => nativeTheme.shouldUseDarkColors);

    ipcMain.handle('get-initial-settings', () => {
        // don't send passwordHash
        const { passwordHash, ...settings } = store.store;
        return settings;
    });
    ipcMain.on('save-setting', (_event, { key, value }) => {
        store.set(key, value);
    });

    initializeSecurity(); // Run the check on startup

    ipcMain.handle('get-initial-password', () => {
        const pass = initialPassword;
        initialPassword = null; // Ensure it can only be retrieved once
        return pass;
    });

    ipcMain.handle('verify-password', async (_event, password) => {
        const storedHash = store.get('passwordHash') as string;
        return await bcrypt.compare(password, storedHash);
    });

    ipcMain.handle('update-password', async (_event, oldPassword, newPassword) => {
        await handleUpdatePassword(oldPassword, newPassword);
    });

    ipcMain.handle('is-windows', () => {
        return process.platform === 'win32';
    });

    ipcMain.handle('create-start-menu-shortcut', createStartMenuShortcut);
    ipcMain.handle('create-desktop-shortcut', createDesktopShortcut);
}

// *** Server ***

export function handleStartServer(port?: number) {
    const p = port ?? store.get('port');
    initServer(p);

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

let schedulerInterval: NodeJS.Timeout | null = null;
let lastActionWasStart = false;

function checkSchedule() {
    const settings = store.get('timeSettings') as any;

    if (!settings?.enabled || manualTimeOverride) return;

    const now = new Date();
    const dayOfWeek = now.getDay() === 0 ? 6 : now.getDay() - 1; // default: 0 = Sunday; change so 0 = Monday
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    // determine if global or specific day
    let rule = settings.global;
    const dayRule = settings.weekdays?.[dayOfWeek];

    // specific, enabled rule for today exists → override global
    if (dayRule && dayRule.enabled) rule = dayRule;

    // decide if the server should be running right now based on rule
    let shouldBeRunning = false;
    if (rule.mode === 'wholeday') {
        shouldBeRunning = true;
    } else if ((rule.mode === 'custom' || !rule.mode) && rule.start && rule.end) { // global rule doesn't have a mode
        const { start, end } = rule;
        if (start < end) {
            shouldBeRunning = currentTime >= start && currentTime < end;
        } else { // handle overnight schedules (e.g., 22:00 to 02:00)
            shouldBeRunning = currentTime >= start || currentTime < end;
        }
    }
    // shouldBeRunning = false if mode is 'off'

    // start / stop if needed
    const isActuallyRunning = serverStartTime !== null;

    if (shouldBeRunning && !isActuallyRunning) {
        // Prevent re-triggering a start command every minute
        if (!lastActionWasStart) {
            info(`[Scheduler] Time matches. Starting server.`);
            handleStartServer();
            lastActionWasStart = true;
        }
    } else if (!shouldBeRunning && isActuallyRunning) {
        // Prevent re-triggering a stop command every minute
        if (lastActionWasStart) {
            info(`[Scheduler] Time matches. Stopping server.`);
            handleStopServer();
            lastActionWasStart = false;
        }
    }

    // Reset the last action state when we cross a time boundary
    if (currentTime === rule.start || currentTime === rule.end) {
        lastActionWasStart = !shouldBeRunning;
    }
}

// --- Scheduler Control ---
export function startScheduler() {
    info('Starting time settings scheduler...');
    if (schedulerInterval) clearInterval(schedulerInterval);

    schedulerInterval = setInterval(checkSchedule, 5000); //60 * 1000); TODO

    // Run once on startup as well
    checkSchedule();
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

// ** Password ***
let initialPassword: string | null = null;

function initializeSecurity() {
    if (!store.has('passwordHash') || !store.get('passwordHash')) {
        info('No password found. Generating a new one.');
        const newPassword = generateRandomPassword();
        initialPassword = newPassword; // Store it to show the user once

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(newPassword, salt);
        store.set('passwordHash', hash);

        info('Initial password set');
    }
}

function generateRandomPassword() {
    const length = 12;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';
    const randomBytes = crypto.randomBytes(length);
    for (let i = 0; i < length; i++) {
        password += charset[randomBytes[i] % charset.length];
    }
    return password;
}

async function handleUpdatePassword(oldPassword: string, newPassword: string) {
    const storedHash = store.get('passwordHash') as string;

    // First, verify the old password is correct
    const isMatch = await bcrypt.compare(oldPassword, storedHash);
    if (!isMatch) {
        return { success: false, error: 'Incorrect current password.' };
    }

    // If it matches, hash and save the new password
    const salt = await bcrypt.genSalt(10);
    const newHash = await bcrypt.hash(newPassword, salt);
    store.set('passwordHash', newHash);

    return { success: true };
}

// *** Shortcuts ***
async function createStartMenuShortcut() {
    const script = `
        $shell = New-Object -ComObject WScript.Shell
        
        $startMenuShortcutPath = [System.Environment]::GetFolderPath('StartMenu') + '\\Programs\\${name}.lnk'
        $startMenuShortcut = $shell.CreateShortcut($startMenuShortcutPath)
        $startMenuShortcut.TargetPath = '${process.execPath}'
        $startMenuShortcut.Save()
    `;

    return createShortcut(script, 'Start Menu');
}

async function createDesktopShortcut() {
    const script = `
        $shell = New-Object -ComObject WScript.Shell
        
        $desktopShortcutPath = [System.Environment]::GetFolderPath('Desktop') + '\\${name}.lnk'
        $desktopShortcut = $shell.CreateShortcut($desktopShortcutPath)
        $desktopShortcut.TargetPath = '${process.execPath}'
        $desktopShortcut.Save()
    `;

    return createShortcut(script, 'Desktop');
}

function createShortcut(script: string, type: 'Desktop' | 'Start Menu') {
    if (process.platform !== 'win32') {
        warn("Didn't create shortcut due to non-Windows OS");
        return false;
    }
    if (!app.isPackaged) {
        warn("Didn't create shortcut due to dev environment");
        return false;
    }

    try {
        execSync(`powershell.exe -ExecutionPolicy Bypass -NoProfile -NonInteractive -Command "${script}"`);
    } catch (e) {
        errorWithMessage(`Failed to create ${type} shortcut`, e);
        return false;
    }
    return true;
}