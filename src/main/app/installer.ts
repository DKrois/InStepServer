import { app, ipcMain, shell } from 'electron';
import electron_log from 'electron-log';
import { spawn, spawnSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { basename,  dirname, resolve } from 'node:path';
import { updateElectronApp } from 'update-electron-app';
import { error, errorWithMessage, info, warn } from '../logging.js';
import { Durations } from '../../common/time.js';
import { store } from './settings';
import { mainWindow } from './window.js';

type ShortcutLocation = 'Desktop' | 'StartMenu';

// not much installer, just what happens on first run after install & updater
let updateUrl = '';
let updateNotificationInterval: NodeJS.Timeout; // allow for clearing

export function registerUpdateIPC() {
    ipcMain.on('open-download-url', () => {
        if (!updateUrl) return;
        shell.openExternal(updateUrl);
    });

    ipcMain.on('set-notification-update', (_event, notificationType: 'never' | 'later') => {
        if (notificationType === 'never') store.set('blockUpdateNotification', true);
        clearInterval(updateNotificationInterval);
        info(`Disabling update notification: ${notificationType}`);
    });
}

export function initUpdater() {
    if (!app.isPackaged) {
        info('Development mode: Auto-updater disabled.');
        return;
    }

    // updater only works on Windows & macOS
    if (process.platform !== 'win32' && process.platform !== 'darwin') {
        // show notification instead
        setTimeout(() => {
            if (store.get('blockUpdateNotification')) return;

            checkForUpdate();
            updateNotificationInterval = setInterval(checkForUpdate, 3 * Durations.msInHour);
        }, 5000); // short delay to ensure renderer is ready
        return;
    }

    const updateExe = resolve(dirname(process.execPath), '..', 'Update.exe');
    if (!fs.existsSync(updateExe)) {
        info('Auto-updater disabled.');
        return;
    }

    try {
        updateElectronApp({
            updateInterval: '5 minutes', // '1 hour', // TODO
            logger: electron_log,
        });
    } catch (error) {
        errorWithMessage('Failed to initialize auto-updater', error);
    }
}

async function checkForUpdate() {
    if (!mainWindow) return;
    if (store.get('blockUpdateNotification')) return;

    try {
        const response = await fetch('https://api.github.com/repos/DKrois/InStepServer/releases/latest');
        if (!response.ok) {
            error(`Failed to fetch releases: ${response.statusText}`);
            return;
        }

        const release = await response.json();
        const latestVersion = release.tag_name.replace('v', '');
        const currentVersion = app.getVersion();

        if (latestVersion > currentVersion) {
            info(`Update found: ${latestVersion}. Current: ${currentVersion}`);

            updateUrl = release.html_url;

            mainWindow.webContents.send('update-available', {
                version: latestVersion,
                oldVersion: currentVersion,
                releaseNotes: release.body, // release notes
                url: updateUrl
            });
        }
    } catch (error) {
        errorWithMessage('Failed to check for updates', error);
    }
}

// modified from https://www.npmjs.com/package/electron-squirrel-startup
// (the same functionality except for creating shortcuts)
export function handleSquirrelCommands() {
    if (process.platform === 'win32') {
        const cmd = process.argv[1];
        if (!cmd) return false;
        info(`processing squirrel command \`${cmd}\``);
        const target = basename(process.execPath);

        if (cmd === '--squirrel-install' || cmd === '--squirrel-updated') {
            // don't create shortcuts here
            return true;
        }
        if (cmd === '--squirrel-uninstall') {
            run(['--removeShortcut=' + target + ''], app.quit);
            return true;
        }
        if (cmd === '--squirrel-obsolete') {
            app.quit();
            return true;
        }
    }
    return false;
}

function run(args: string[], done: () => void) {
    const updateExe = resolve(dirname(process.execPath), '..', 'Update.exe');
    info(`Spawning ${updateExe}\` with args \`${args}\``);
    spawn(updateExe, args, {
        detached: true
    }).on('close', done);
}

export function registerShortcutsIPC() {
    ipcMain.handle('create-start-menu-shortcut', () => createShortcut('StartMenu'));
    ipcMain.handle('create-desktop-shortcut', () => createShortcut('Desktop'));
}

export function createShortcut(location: ShortcutLocation) {
    if (process.platform !== 'win32') {
        warn("Didn't create shortcut due to non-Windows OS");
        return false;
    }
    if (!app.isPackaged) {
        warn("Didn't create shortcut due to dev environment");
        return false;
    }

    const updateExePath = path.resolve(path.dirname(process.execPath), '..', 'Update.exe');
    const exeName = path.basename(process.execPath);

    if (fs.existsSync(updateExePath)) {
        // --- Squirrel Update.exe ---
        info(`Using Update.exe to create ${location} shortcut`);
        try {
            const result = spawnSync(updateExePath, [
                `--createShortcut=${exeName}`,
                `--shortcut-locations=${location}`,
                '--silent', // Suppress any UI
            ], { encoding: 'utf-8' });

            if (result.error) {
                errorWithMessage(`Failed to create ${location} shortcut via Update.exe`, result.error);
            } else {
                info(`${location} shortcut created successfully via Update.exe`);
                return true;
            }
        } catch (e) {
            errorWithMessage(`Failed to create ${location} shortcut via Update.exe`, e);
            // re-attempt with PowerShell
        }
    }

    // --- PowerShell ---
    info(`Using PowerShell to create ${location} shortcut`);
    try {
        // Build the specific PowerShell script snippet for the location
        const folderPath = `[System.Environment]::GetFolderPath('${location}')`;
        const shortcutPath = location === 'StartMenu'
            ? `${folderPath} + '\\Programs\\${app.getName()}.lnk'`
            : `${folderPath} + '\\${app.getName()}.lnk'`;

        const fullCommand = `
                $shell = New-Object -ComObject WScript.Shell
                $shortcut = $shell.CreateShortcut(${shortcutPath})
                $shortcut.TargetPath = '${process.execPath}'
                $shortcut.Save()
            `;

        const result = spawnSync('powershell.exe', [
            '-ExecutionPolicy', 'Bypass',
            '-NoProfile', '-NonInteractive',
            '-Command', fullCommand,
        ], { encoding: 'utf-8' });
        if (result.error) {
            errorWithMessage(`Failed to create ${location} shortcut via PowerShell`, result.error);
            return false;
        } else {
            info(`${location} shortcut created successfully via PowerShell.`);
            return true;
        }
    } catch (e) {
        errorWithMessage(`Failed to create ${location} shortcut via PowerShell`, e);
        return false;
    }
}