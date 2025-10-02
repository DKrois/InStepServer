import { contextBridge, ipcRenderer } from 'electron';

// --- API Definition ---
const api = {
    startServer: () => ipcRenderer.send('start-server'),
    stopServer: () => ipcRenderer.send('stop-server'),
    onLog: (callback: (log: string) => void) => {
        ipcRenderer.on('log', (_event, value) => callback(value as string));
    },
    getStats: () => ipcRenderer.invoke('get-stats'),
    toggleTheme: () => ipcRenderer.invoke('toggle-theme'),
    getInitialTheme: () => ipcRenderer.invoke('get-initial-theme'),
    getInitialLocale: () => ipcRenderer.invoke('get-initial-locale'),
};

// --- Expose to Renderer ---
contextBridge.exposeInMainWorld('api', api);

// --- Type Augmentation for the Window object ---
declare global {
    interface Window {
        api: typeof api;
    }
}