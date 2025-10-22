import { contextBridge, ipcRenderer } from 'electron';

const api = {
    startServer: (port: number) => ipcRenderer.send('start-server', port),
    stopServer: () => ipcRenderer.send('stop-server'),
    onServerStatusChanged: (callback: (status: { isRunning: boolean, port?: number | null }) => void) => {
        ipcRenderer.on('server-status-changed', (_event, status) => callback(status));
    },

    toggleTheme: () => ipcRenderer.invoke('toggle-theme'),
    getInitialTheme: () => ipcRenderer.invoke('get-initial-theme'),

    getInitialPassword: () => ipcRenderer.invoke('get-initial-password'),
    verifyPassword: (password: string) => ipcRenderer.invoke('verify-password', password),
    updatePassword: (oldPassword: string, newPassword: string) => ipcRenderer.invoke('update-password', oldPassword, newPassword),

    onUpdateStats: (callback: (stats: { uptime: string, memory: string }) => void) => {
        ipcRenderer.on('update-stats', (_event, stats) => callback(stats));
    },
    getStats: () => ipcRenderer.invoke('get-stats'),

    getInitialSettings: () => ipcRenderer.invoke('get-initial-settings'),
    saveSetting: (key: string, value: any) => ipcRenderer.send('save-setting', { key, value }),

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