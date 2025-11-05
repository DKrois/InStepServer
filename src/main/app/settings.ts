import bcrypt from 'bcryptjs';
import { app, dialog, ipcMain, nativeTheme } from 'electron';
// @ts-ignore
import Store from 'electron-store';
import crypto from 'node:crypto';
import { defaultTimeSettings, Durations } from '../../common/time';
import { defaultDBPath } from '../database';
import { canWriteToPath, info } from '../util';


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
        sessionMaxAge: 30 * Durations.msInDay,
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

export function registerSettingsIPC() {
    ipcMain.handle('get-initial-settings', () => {
        const { port, language, timeSettings } = store.store;
        const isDarkMode = nativeTheme.shouldUseDarkColors;

        return { isDarkMode, language, port, timeSettings };
    });

    ipcMain.on('save-lang', (_event, language: string) => store.set('language', language));

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