import bcrypt from 'bcryptjs';
import { app, dialog, ipcMain, nativeTheme } from 'electron';
// @ts-ignore
import Store from 'electron-store';
import crypto from 'node:crypto';
import { defaultDBPath } from '../database';
import { handleStartServer, handleStopServer, manualTimeOverride, serverStartTime, setManualTimeOverride } from './ipc';
import { canWriteToPath, info, warn } from '../util';

let schedulerInterval: NodeJS.Timeout | null = null;
let lastActionWasStart = false;

let initialPassword: string | null = null;

export const store = new Store({
    defaults: {
        port: 5000,
        theme: 'system',
        language: '', // init in initStore
        hideToTray: true,
        startServerOnOpen: false,
        timeSettings: {
            enabled: false,
            global: { start: '', end: '', mode: 'custom' },
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
        firstTimeRunning: true,
        passwordHash: '', // set on startup or update ipc
        sessionSecret: '', // set on server init
        sessionMaxAge: 1000 * 60 * 60 * 24 * 30, // 30d
        projectDataPath: '', // set on initial modal close
    }
});

export function initStore() {
    if (!store.has('language') || !store.get('language')) {
        const locale = app.getLocale().split('-')[0];
        // Only set if locale is supported
        if (['en', 'de'].includes(locale)) {
            store.set('language', locale);
        } else {
            store.set('language', 'en'); // Fallback to English
        }
    }
}

// --- Settings / time scheduling ---

function getUnprotectedProperties() {
    const { passwordHash, sessionSecret, sessionMaxAge, ...others } = store.store;
    return others;
}

export function registerSettingsIPC() {
    ipcMain.handle('get-initial-settings', () => {
        // don't send passwordHash and sessionSecret
        const settings = getUnprotectedProperties();

        // include whether to use dark mode or not
        return { ...settings, isDarkMode: nativeTheme.shouldUseDarkColors };
    });

    ipcMain.on('save-setting', (_event, { key, value }) => {
        // don't allow setting password, secret, ... through save-setting ipc (can be triggered through DevTools)
        const unprotected = Object.keys(getUnprotectedProperties());
        if (!unprotected.includes(key)) {
            warn(`Attempted overwrite of protected property ${key}.`);
            return;
        }

        store.set(key, value);
    });

    ipcMain.on('save-time-settings', async (_event, settings) => {
        store.set('timeSettings', settings);
        setManualTimeOverride(false); // Saving new settings resets any manual override
        await checkSchedule(); // Immediately check the new schedule
        if (settings.enabled) await startScheduler();
    });

    ipcMain.handle('set-project-data-path', (_event, currentlySelectedPath?: string) => handleUpdatePath(currentlySelectedPath));
}

async function handleUpdatePath(currentlySelected?: string): Promise<{ success: boolean, path: string | null, code?: 'user-canceled' | 'permission-denied' }> {
    const defaultPath = currentlySelected || defaultDBPath;
    const { canceled, filePaths } = await dialog.showOpenDialog({
        title: 'Select Project Storage Folder',
        defaultPath: defaultPath,
        properties: ['openDirectory']
    });

    if (canceled || filePaths.length === 0) {
        // User canceled, use default path
        store.set('projectDataPath', defaultPath);
        return { success: true, path: defaultPath, code: 'user-canceled' };
    } else {
        const selectedPath = filePaths[0];

        const isWritable = await canWriteToPath(selectedPath);
        if (isWritable) {
            store.set('projectDataPath', selectedPath);
            return { success: true, path: selectedPath };
        } else {
            // path is not writeable (admin, ...)
            return { success: false, path: null, code: 'permission-denied' };
        }
    }
}

async function checkSchedule() {
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
    } else if ((!('mode' in rule) || rule.mode === 'custom') && rule.start && rule.end) { // global rule doesn't have a mode
        const { start, end } = rule;
        if (start < end) {
            shouldBeRunning = currentTime >= start && currentTime < end;
        } else { // handle overnight schedules (e.g., 22:00 to 02:00)
            shouldBeRunning = currentTime >= start || currentTime < end;
        }
    }
    // shouldBeRunning is false if mode is 'off'

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
            await handleStopServer();
            lastActionWasStart = false;
        }
    }

    // Reset the last action state when we cross a time boundary
    if (currentTime === rule.start || currentTime === rule.end) {
        lastActionWasStart = !shouldBeRunning;
    }
}

export async function startScheduler() {
    info('Starting time settings scheduler...');
    if (schedulerInterval) clearInterval(schedulerInterval);

    schedulerInterval = setInterval(checkSchedule, 20000); // once every 20s

    // Run once on startup as well
    await checkSchedule();
}

// --- Password ---
export function registerSecurityIPC() {
    ipcMain.handle('get-initial-password', () => {
        const pass = initialPassword;
        initialPassword = null; // Ensure it can only be retrieved once
        return pass;
    });

    ipcMain.handle('verify-password',  (_event, password) => verifyPassword(password));
    ipcMain.handle('update-password', async (_event, oldPassword, newPassword) => handleUpdatePassword(oldPassword, newPassword));

    ipcMain.handle('get-session-duration', () => store.get('sessionMaxAge'));
    ipcMain.handle('update-session-duration', (_event, durationMs, currentPassword) => handleUpdateSessionDuration(durationMs, currentPassword));
}

export function setInitialPassword() {
    const newPassword = generateRandomPassword();
    initialPassword = newPassword; // Store it to show the user once

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newPassword, salt);
    store.set('passwordHash', hash);

    info('Initial password set');
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

export function verifyPassword(password: string) {
    const storedHash = store.get('passwordHash');
    return bcrypt.compare(password, storedHash);
}

async function handleUpdatePassword(oldPassword: string, newPassword: string) {
    // First, verify the old password
    if (!verifyPassword(oldPassword)) return { success: false };

    // If it matches, hash and save the new password
    const salt = await bcrypt.genSalt(10);
    const newHash = await bcrypt.hash(newPassword, salt);
    store.set('passwordHash', newHash);

    return { success: true };
}

async function handleUpdateSessionDuration(durationMs: number, currentPassword: string) {
    const isPasswordCorrect = await verifyPassword(currentPassword);
    if (!isPasswordCorrect) return { success: false };

    store.set('sessionMaxAge', durationMs);
    return { success: true };
}