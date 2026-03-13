import { ipcMain } from 'electron';
import { store } from './settings.js';
import bcrypt from 'bcryptjs';
import { info } from '../log.js';
import crypto from 'node:crypto';
import type { IPCResponse } from '../../common/util.js';
import { releaseLock } from '../api/auth.js';
import { generateSessionSecret, sessionStore } from '../api/server.js';

export function registerSecurityIPC() {
    ipcMain.handle('verify-password',  (_event, password) => verifyPassword(password));
    ipcMain.handle('update-password', async (_event, oldPassword, newPassword) => handleUpdatePassword(oldPassword, newPassword));

    ipcMain.handle('toggle-imd-api', (_event, enable: boolean, currentPassword: string) => handleToggleIMDAPI(enable, currentPassword));
    ipcMain.handle('release-imd-lock', (_event, currentPassword: string) => handleReleaseIMDLock(currentPassword));
    ipcMain.handle('clear-sessions', (_event, currentPassword: string) => handleClearSessions(currentPassword));
    ipcMain.handle('get-session-duration', () => store.get('sessionMaxAge'));
    ipcMain.handle('update-session-duration', (_event, durationMs, currentPassword) => handleUpdateSessionDuration(durationMs, currentPassword));

    ipcMain.handle('get-login-security-settings', () => {
        const maxAttempts = store.get('maxLoginAttempts');
        const lockoutMinutes = store.get('lockoutDurationMinutes');
        return { maxAttempts, lockoutMinutes };
    });

    // Handler to update the settings
    ipcMain.handle('update-login-security-settings', (_event, settings, currentPassword) => handleUpdateLoginSettings(settings, currentPassword));
}

export function setInitialPassword() {
    const newPassword = generateRandomPassword();

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newPassword, salt);
    store.set('passwordHash', hash);

    info('Initial password set', 'auth');
    return newPassword;
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

export function verifyPassword(password: string): boolean {
    const storedHash = store.get('passwordHash');
    return bcrypt.compareSync(password, storedHash);
}

async function handleUpdatePassword(oldPassword: string, newPassword: string): IPCResponse<'permission-denied'> {
    // First, verify the old password
    if (!verifyPassword(oldPassword)) return { success: false, code: 'permission-denied' };

    // If it matches, hash and save the new password
    const salt = await bcrypt.genSalt(10);
    const newHash = await bcrypt.hash(newPassword, salt);
    store.set('passwordHash', newHash);

    return { success: true, data: undefined };
}

async function handleUpdateLoginSettings(settings: { maxAttempts: number, lockoutMinutes: number }, currentPassword: string): IPCResponse<'permission-denied'> {
    const { maxAttempts, lockoutMinutes } = settings;

    // verify current password
    if (!verifyPassword(currentPassword)) return { success: false, code: 'permission-denied' };

    store.set('maxLoginAttempts', maxAttempts);
    store.set('lockoutDurationMinutes', lockoutMinutes);

    return { success: true, data: undefined };
}

async function handleToggleIMDAPI(enable: boolean, currentPassword: string): IPCResponse<'permission-denied'> {
    if (!verifyPassword(currentPassword)) return { success: false, code: 'permission-denied' };

    store.set('imdEnabled', enable);
    return { success: true, data: undefined };
}

async function handleReleaseIMDLock(currentPassword: string): IPCResponse<'permission-denied'> {
    if (!verifyPassword(currentPassword)) return { success: false, code: 'permission-denied' };

    releaseLock('explicit');
    return { success: true, data: undefined };
}

async function handleClearSessions(currentPassword: string): IPCResponse<'permission-denied'> {
    if (!verifyPassword(currentPassword)) return { success: false, code: 'permission-denied' };

    // session.Store declares clear() as sync, but nedb-promises-session-store implements it as async
    await sessionStore.clear?.();
    generateSessionSecret();
    return { success: true, data: undefined };
}

async function handleUpdateSessionDuration(durationMs: number, currentPassword: string) {
    if (!verifyPassword(currentPassword)) return { success: false };

    store.set('sessionMaxAge', durationMs);
    return { success: true };
}