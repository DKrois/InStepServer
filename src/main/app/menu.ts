import { app, Menu, shell, Tray } from 'electron';
import type { MenuItem, MenuItemConstructorOptions } from 'electron';
import { join } from 'node:path';
import { projectDB } from '../api/database.js';
import { isServerRunning } from '../api/server.js';
import { Routes, SitesPaths } from '../constants.js';
import { error } from '../log.js';
import { sendPopup, sendToast } from './app.js';
import { createShortcut } from './installer.js';
import { handleStartServer, handleStopServer } from './ipc.js';
import { store } from './settings.js';
import { mainWindow } from './window.js';

const iconPath = join(SitesPaths.assets, process.platform === 'win32' ? 'icon.ico' : 'icon.png');
let tray: Tray | null = null;

export function createMenu() {
    const menu: (MenuItemConstructorOptions | MenuItem)[] = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'Open Project Storage Path',
                    click: async () => {
                        try {
                            const path = projectDB.path;
                            await shell.openPath(path);
                        } catch (e) {
                            error('Failed to open project storage path', e);
                            return;
                        }
                    }
                },
                { type: 'separator' },
                {
                    label: 'Hide to Tray',
                    click: () => mainWindow?.hide()
                },
                {
                    label: 'Restart',
                    click: () => {
                        app.relaunch(); // only works on production
                        app.exit(0);
                    }
                },
                { label: 'Quit', role: 'quit' },
            ]
        },
        {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { role: 'toggleDevTools' },
                { type: 'separator' },

                { label: 'Zoom In', role: 'zoomIn', accelerator: 'CmdOrCtrl+=' },
                { label: 'Zoom Out', role: 'zoomOut' },
                { label: 'Reset Zoom', role: 'resetZoom' },
                { type: 'separator' },

                { role: 'togglefullscreen' },
            ]
        },
        {
            label: 'Options',
            submenu: [
                {
                    label: 'Hide to tray on close',
                    type: 'checkbox',
                    checked: store.get('hideToTray'),
                    click: menuItem => store.set('hideToTray', menuItem.checked)
                },
                {
                    label: 'Start server when starting app',
                    type: 'checkbox',
                    checked: store.get('startServerOnOpen'),
                    click: menuItem => store.set('startServerOnOpen', menuItem.checked)
                },
            ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'Documentation',
                    click: async () => {
                        if (!isServerRunning()) {
                            sendPopup('documentationUnavailableTitle', 'documentationUnavailableDesc', 'documentationUnavailableNote');
                            return;
                        }
                        // open docs in browser
                        await shell.openExternal(`http://localhost:5000${Routes.docs}`);
                    }
                }
            ]
        }
    ];

    if (process.platform === 'win32') {
        const options: MenuItemConstructorOptions[] = [
            { type: 'separator' },
            {
                label: 'Create Start Menu Shortcut',
                click: () => {
                    const success = createShortcut('StartMenu');
                    if (success) sendToast('toastShortcutCreated', { type: 'Start Menu' });
                    else sendToast('toastShortcutFailed', { type: 'Start Menu' });
                }
            },
            {
                label: 'Create Desktop Shortcut',
                click: () => {
                    const success = createShortcut('Desktop');
                    if (success) sendToast('toastShortcutCreated', { type: 'Desktop' });
                    else sendToast('toastShortcutFailed', { type: 'Desktop' });
                }
            }
        ];

        const optionsMenu = menu.find(m => m.label === 'Options');
        (optionsMenu?.submenu as MenuItemConstructorOptions[]).push(...options);
    }

    return Menu.buildFromTemplate(menu);
}

export function createTray() {
    // Create the tray icon
    tray = new Tray(iconPath);

    // Define the context menu for the tray icon
    const contextMenu = Menu.buildFromTemplate([
        { label: 'Open', click: () => mainWindow?.show() },
        { type: 'separator' },

        { label: 'Start Server', click: async () => await handleStartServer() },
        { label: 'Stop Server', click: handleStopServer },
        { type: 'separator' },

        { label: 'Quit', role: 'quit' }
    ]);
    tray.setToolTip('InStep Server Control Panel');
    tray.setContextMenu(contextMenu);

    // re-open app when user clicks tray icon
    tray.on('click', () => mainWindow?.show());
}