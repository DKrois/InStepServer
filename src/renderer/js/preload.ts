import { contextBridge, ipcRenderer } from 'electron';
import type { TOptions } from 'i18next';
import { TimeSettings } from '../../common/time';

const api = {
    getAppVersion: (): Promise<string> => ipcRenderer.invoke('get-app-version'),
    toggleTheme: (): Promise<boolean> => ipcRenderer.invoke('toggle-theme'),
    saveLanguage: (lang: string): void => ipcRenderer.send('save-language', lang),

    onUpdateAvailable: (callback: (details: { version: string, oldVersion: string, releaseNotes: string, url: string }) => void) => {
        ipcRenderer.on('update-available', (_event, details) => callback(details));
    },
    openDownloadURL: () => ipcRenderer.send('open-download-url'),
    setUpdateNotification: (notificationType: 'never' | 'later') => ipcRenderer.send('set-notification-update', notificationType),

    onFirstTimeRunning: (callback: (defaultDBPath: string) => void) => {
        // event can only happen once
        ipcRenderer.once('first-time-running', (_event, defaultDBPath: string) => callback(defaultDBPath));
    },
    getInitialSettings: (): Promise<any> => ipcRenderer.invoke('get-initial-settings'),
    setProjectDataPath: (currentlySelectedPath?: string): Promise<{ success: boolean, path: string, code?: 'user-canceled' | 'permission-denied' }> => ipcRenderer.invoke('set-project-data-path', currentlySelectedPath),

    saveTimeSettings: (settings: any) => ipcRenderer.send('save-time-settings', settings),
    exportTimeSettings: (): Promise<{ success: boolean, code?: 'cancelled' }> => ipcRenderer.invoke('export-time-settings'), // auto saves settings
    importTimeSettings: (): Promise<{ success: boolean, data?: TimeSettings, code?: 'cancelled' }> => ipcRenderer.invoke('import-time-settings'),
    showClearTimeContextMenu: (inputId: string) => ipcRenderer.send('show-clear-time-context-menu', inputId),
    onClearTimeInput: (callback: (inputId: string) => void) => {
        ipcRenderer.on('clear-time-input', (_event, inputId) => callback(inputId as string));
    },

    getInitialPassword: (): Promise<string> => ipcRenderer.invoke('get-initial-password'),
    verifyPassword: (password: string): Promise<boolean> => ipcRenderer.invoke('verify-password', password),
    updatePassword: (oldPassword: string, newPassword: string): Promise<{ success: boolean }> => ipcRenderer.invoke('update-password', oldPassword, newPassword),

    toggleIMDAPI: (enabled: boolean, password: string): Promise<{ success: boolean }> => ipcRenderer.invoke('toggle-imd-api', enabled, password),
    releaseIMDLock: (password: string): Promise<{ success: boolean }> => ipcRenderer.invoke('release-imd-lock', password),
    getSessionDuration: (): Promise<number> => ipcRenderer.invoke('get-session-duration'),
    updateSessionDuration: (ms: number, password: string): Promise<{ success: boolean }> => ipcRenderer.invoke('update-session-duration', ms, password),

    startServer: (port: number): Promise<boolean> => ipcRenderer.invoke('start-server', port),
    stopServer: () => ipcRenderer.send('stop-server'),
    savePort: (port: number) => ipcRenderer.send('save-port', port),
    onServerStatusChanged: (callback: (status: { isRunning: boolean, port?: number }) => void) => {
        ipcRenderer.on('server-status-changed', (_event, status) => callback(status));
    },

    createStartMenuShortcut: (): Promise<boolean> => ipcRenderer.invoke('create-start-menu-shortcut'),
    createDesktopShortcut: (): Promise<boolean> => ipcRenderer.invoke('create-desktop-shortcut'),
    isWindows: (): Promise<boolean> => ipcRenderer.invoke('is-windows'),

    onUpdateStats: (callback: (stats: { uptime: string, memory: string }) => void) => {
        ipcRenderer.on('update-stats', (_event, stats) => callback(stats));
    },
    getStats: (): Promise<any> => ipcRenderer.invoke('get-stats'),

    closeInitialModal: () => ipcRenderer.send('initial-modal-closed'),
    onProjectDBInitialized: (callback: () => void) => {
        ipcRenderer.on('project-db-initialized', () => callback());
    },

    onLog: (callback: (log: string[]) => void) => {
        ipcRenderer.on('log', (_event, value) => callback(value as string[]));
    },
    onShowToast: (callback: (key: string, options?: TOptions, type?: 'info' | 'error') => void) => {
        ipcRenderer.on('show-toast', (_event, key: string, options?: TOptions, type: 'info' | 'error' = 'info') => callback(key, options, type));
    },
    onShowPopupModal: (callback: (titleKey: string, messageKey: string, sideNoteKey?: string, option?: TOptions) => void) => {
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