import { contextBridge, ipcRenderer } from 'electron';

const api = {
    toggleTheme: (): Promise<boolean> => ipcRenderer.invoke('toggle-theme'),

    onFirstTimeRunning: (callback: (defaultDBPath: string) => void) => {
        // event can only happen once
        ipcRenderer.once('first-time-running', (_event, defaultDBPath: string) => callback(defaultDBPath));
    },
    getInitialSettings: (): Promise<any> => ipcRenderer.invoke('get-initial-settings'),
    saveSetting: (key: string, value: any) => ipcRenderer.send('save-setting', { key, value }),
    saveTimeSettings: (settings: any) => ipcRenderer.send('save-time-settings', settings),
    setProjectDataPath: (currentlySelectedPath?: string): Promise<{ success: boolean, path: string, code?: 'user-canceled' | 'permission-denied' }> => ipcRenderer.invoke('set-project-data-path', currentlySelectedPath),

    getInitialPassword: (): Promise<string> => ipcRenderer.invoke('get-initial-password'),
    verifyPassword: (password: string): Promise<boolean> => ipcRenderer.invoke('verify-password', password),
    updatePassword: (oldPassword: string, newPassword: string): Promise<{ success: boolean }> => ipcRenderer.invoke('update-password', oldPassword, newPassword),

    getSessionDuration: (): Promise<number> => ipcRenderer.invoke('get-session-duration'),
    updateSessionDuration: (ms: number, password: string): Promise<{ success: boolean }> => ipcRenderer.invoke('update-session-duration', ms, password),

    startServer: (port: number) => ipcRenderer.send('start-server', port),
    stopServer: () => ipcRenderer.send('stop-server'),
    onServerStatusChanged: (callback: (status: { isRunning: boolean, port?: number | null }) => void) => {
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

    onLog: (callback: (log: string) => void) => {
        ipcRenderer.on('log', (_event, value) => callback(value as string));
    },
};

// --- Expose to Renderer ---
contextBridge.exposeInMainWorld('api', api);

declare global {
    interface Window {
        api: typeof api;
    }
}