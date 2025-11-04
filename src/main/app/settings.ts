import bcrypt from 'bcryptjs';
import { app, dialog, ipcMain, nativeTheme } from 'electron';
// @ts-ignore
import Store from 'electron-store';
import crypto from 'node:crypto';
import {
    convertJsDayToCustom,
    defaultTimeSettings,
    GlobalRule,
    parseTimeToDate,
    TimeSettings,
    WeekdayRule
} from '../../common/time';
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
        timeSettings: defaultTimeSettings,
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
export function registerSettingsIPC() {
    ipcMain.handle('get-initial-settings', () => {
        const { port, language, timeSettings } = store.store;
        const isDarkMode = nativeTheme.shouldUseDarkColors;

        return { isDarkMode, language, port, timeSettings };
    });

    ipcMain.on('save-lang', (_event, language: string) => store.set('language', language));

    ipcMain.on('save-time-settings', async (_event, settings) => {
        if (!isValidTimeSettings(settings)) {
            warn('Rejected invalid time settings payload');
            return;
        }

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

// --- Scheduling ---
function isValidTimeSettings(x: any): x is TimeSettings {
    return (
        typeof x === 'object'
        && typeof x.enabled === 'boolean'
        && typeof x.global === 'object'
        && x.weekdays && typeof x.weekdays === 'object'
    );
}

export async function startScheduler() {
    info('Starting time settings scheduler...');
    if (schedulerInterval) clearInterval(schedulerInterval);

    schedulerInterval = setInterval(checkSchedule, 20000); // once every 20s

    // Run once on startup as well
    await checkSchedule();
}

async function checkSchedule() {
    const settings = store.get('timeSettings');

    if (!settings?.enabled || manualTimeOverride) return;

    const now = new Date();
    const dayOfWeek = now.getDay() === 0 ? 6 : now.getDay() - 1; // default: 0 = Sunday; change so 0 = Monday
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    // determine if global or specific day
    let rule: GlobalRule | WeekdayRule = settings.global;
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

/**
 * Generates a chronological list of start/stop events based on time settings.
 * @param {object} timeSettings - The full time settings object
 * @returns {{time: Date, type: 'start' | 'stop'}[]} A sorted array of event objects.
 */
function generateScheduleEvents(timeSettings: any) {
    if (!timeSettings?.enabled) return [];

    const events = [];
    const now = new Date();

    // Generate events for a wide window to catch all relevant past/future events
    // (-7 days to +14 days is very safe)
    for (let i = -7; i < 14; i++) {
        const date = new Date(now);
        date.setDate(now.getDate() + i);
        date.setHours(0, 0, 0, 0); // Start of the day

        const dayIndex = convertJsDayToCustom(date.getDay());

        // Determine the effective rule for this day
        let rule = timeSettings.global;
        const dayRule = timeSettings.weekdays?.[dayIndex];
        if (dayRule && dayRule.enabled) {
            rule = dayRule;
        }

        // --- Translate rules into discrete start/stop events ---
        if (rule.mode === 'wholeday') {
            // 'wholeday' is equivalent to a 'start' at the beginning of the day.
            // The server stays on until a 'stop' event is found on a subsequent day.
            events.push({ time: date, type: 'start' });

        } else if (rule.mode === 'off') {
            // 'off' is equivalent to a 'stop' at the beginning of the day.
            events.push({ time: date, type: 'stop' });

        } else if (rule.mode === 'custom' || !rule.mode) { // Catches global rule and custom rules
            if (rule.start) {
                events.push({ time: parseTimeToDate(rule.start, date), type: 'start' });
            }
            if (rule.end) {
                // To handle overnight logic correctly, a 'stop' event belongs to the day it occurs on.
                // If start is 22:00 and end is 02:00, the 'stop' is on the *next* day.
                const startDate = rule.start ? parseTimeToDate(rule.start, date) : null;
                const endDate = parseTimeToDate(rule.end, date);

                if (startDate && endDate < startDate) {
                    // This is an overnight schedule, move the end date to the next day
                    endDate.setDate(endDate.getDate() + 1);
                }
                events.push({ time: endDate, type: 'stop' });
            }
        }
    }

    // Sort all events chronologically, which is crucial for the logic to work
    return events.sort((a, b) => a.time.getTime() - b.time.getTime());
}