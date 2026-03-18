import { contextBridge, ipcRenderer } from 'electron';
import type { TOptions } from 'i18next';
import type { InitialSettings, IPCResponse, QRType, Stats, TimeSettings } from '../../common/types.js';
import type { TranslationKey } from './translate.js';

const api = {
    toggleTheme: (): Promise<boolean> => ipcRenderer.invoke('toggle-theme'),
    saveLanguage: (lang: string) => ipcRenderer.send('save-language', lang),

    onUpdateAvailable: (callback: (details: { version: string, oldVersion: string, releaseNotes: string, url: string }) => void) => {
        ipcRenderer.on('update-available', (_event, details) => callback(details));
    },
    openDownloadURL: () => ipcRenderer.send('open-download-url'),
    setUpdateNotification: (notificationType: 'never' | 'later') => ipcRenderer.send('set-update-notification', notificationType),

    onFirstTimeRunning: (callback: (defaultDBPath: string, initialPassword: string, canCreateShortcuts: boolean) => void) => {
        // event can only happen once
        ipcRenderer.once('first-time-running', (_event, defaultDBPath: string, initialPassword: string, canCreateShortcuts: boolean) => callback(defaultDBPath, initialPassword, canCreateShortcuts));
    },
    getInitialSettings: (): Promise<InitialSettings> => ipcRenderer.invoke('get-initial-settings'),
    setProjectDataPath: (currentlySelectedPath?: string): IPCResponse<'cancelled' | 'permission-denied', string> => ipcRenderer.invoke('set-project-data-path', currentlySelectedPath),

    startServer: (port: number): Promise<boolean> => ipcRenderer.invoke('start-server', port),
    stopServer: () => ipcRenderer.send('stop-server'),
    onServerStatusChanged: (callback: (status: { isRunning: boolean, port?: number }) => void) =>
        ipcRenderer.on('server-status-changed', (_event, status) => callback(status)),

    clearCache: () => ipcRenderer.send('clear-cache'),

    getServerURLs: (): Promise<{ ip: string | null, mdns: string, hostname: string }> => ipcRenderer.invoke('get-server-urls'),
    generateQRCode: (type: QRType): IPCResponse<'ip-failed' | 'error', string> => ipcRenderer.invoke('generate-qr-code', type),
    saveQRCode: (type: QRType): IPCResponse<'cancelled' | 'ip-failed' | 'error', string> => ipcRenderer.invoke('save-qr-code', type),

    saveTimeSettings: (settings: TimeSettings) => ipcRenderer.send('save-time-settings', settings),
    exportTimeSettings: (): IPCResponse<'cancelled'> => ipcRenderer.invoke('export-time-settings'),
    importTimeSettings: (): IPCResponse<'cancelled' | 'invalid-data', TimeSettings> => ipcRenderer.invoke('import-time-settings'),
    showClearTimeContextMenu: (inputId: string) => ipcRenderer.send('show-clear-time-context-menu', inputId),
    onClearTimeInput: (callback: (inputId: string) => void) =>
        ipcRenderer.on('clear-time-input', (_event, inputId) => callback(inputId as string)),

    verifyPassword: (password: string): Promise<boolean> => ipcRenderer.invoke('verify-password', password),
    updatePassword: (oldPassword: string, newPassword: string): IPCResponse<'permission-denied'> => ipcRenderer.invoke('update-password', oldPassword, newPassword),

    toggleIMDAPI: (enabled: boolean, password: string): IPCResponse<'permission-denied'> => ipcRenderer.invoke('toggle-imd-api', enabled, password),
    releaseIMDLock: (password: string): IPCResponse<'permission-denied'> => ipcRenderer.invoke('release-imd-lock', password),
    clearSessions: (password: string): IPCResponse<'permission-denied'> => ipcRenderer.invoke('clear-sessions', password),
    updateSessionDuration: (ms: number, password: string): IPCResponse<'permission-denied'> => ipcRenderer.invoke('update-session-duration', ms, password),
    updateLoginSecuritySettings: (settings: { maxAttempts: number, lockoutMinutes: number }, password: string): IPCResponse<'permission-denied'> => ipcRenderer.invoke('update-login-security-settings', settings, password),

    createStartMenuShortcut: (): Promise<boolean> => ipcRenderer.invoke('create-start-menu-shortcut'),
    createDesktopShortcut: (): Promise<boolean> => ipcRenderer.invoke('create-desktop-shortcut'),

    onUpdateStats: (callback: (stats: { uptime: string, memory: string }) => void) => {
        ipcRenderer.on('update-stats', (_event, stats) => callback(stats));
    },
    getStats: (): Promise<Stats> => ipcRenderer.invoke('get-stats'),

    closeInitialModal: () => ipcRenderer.send('initial-modal-closed'),

    onLog: (callback: (log: string[]) => void) => {
        ipcRenderer.on('log', (_event, value) => callback(value));
    },
    onShowToast: (callback: (key: TranslationKey, options?: TOptions, type?: 'info' | 'error') => void) => {
        ipcRenderer.on('show-toast', (_event, key: TranslationKey, options?: TOptions, type: 'info' | 'error' = 'info') => callback(key, options, type));
    },
    onShowPopupModal: (callback: (titleKey: TranslationKey, messageKey: TranslationKey, sideNoteKey?: TranslationKey, option?: TOptions) => void) => {
        ipcRenderer.on('show-popup-modal', (_event, titleKey, messageKey, sideNoteKey, options) => callback(titleKey, messageKey, sideNoteKey, options));
    }
};

// --- Expose to Renderer ---
contextBridge.exposeInMainWorld('api', api);

declare global {
    interface Window {
        api: typeof api;
    }
}