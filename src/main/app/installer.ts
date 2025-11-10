import { app, ipcMain, shell } from 'electron';
import electron_log from 'electron-log';
import { spawn, spawnSync } from 'node:child_process';
import * as fs from 'node:fs';
import { basename,  dirname, resolve } from 'node:path';
import { updateElectronApp } from 'update-electron-app';
import { name } from '../../../config.json'
import { error, errorWithMessage, info, warn } from '../util';
import { Durations } from '../../common/time';
import { mainWindow } from './window';

// not much installer, just what happens on first run after install & updater
let updateUrl = '';

export function registerUpdateIPC() {
    ipcMain.on('open-download-url', () => {
        if (!updateUrl) return;
        shell.openExternal(updateUrl);
    });
}

export function initUpdater() {
    if (!app.isPackaged) {
        info('Development mode: Auto-updater disabled.');
        return;
    }

    // updater only works on Windows & macos
    if (process.platform !== 'win32' && process.platform !== 'darwin') {
        // show notification instead
        setTimeout(checkForUpdate, 5000); // short delay to ensure renderer is ready

        // Then check periodically (e.g., every 4 hours)
        setInterval(checkForUpdate, 3 * Durations.msInHour);

        return;
    }

    const updateExe = resolve(dirname(process.execPath), '..', 'Update.exe');
    if (!fs.existsSync(updateExe)) {
        info('Auto-updater disabled.');
        return;
    }

    try {
        updateElectronApp({
            updateInterval: '1 hour',
            logger: electron_log,
        });
    } catch (error) {
        errorWithMessage('Failed to initialize auto-updater', error);
    }
}

async function checkForUpdate() {
    if (!mainWindow) return; // Can't send a message if the window doesn't exist

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

            mainWindow.webContents.send('update-available', {
                version: latestVersion,
                oldVersion: currentVersion,
                releaseNotes: release.body, // release notes
                url: release.html_url
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
    ipcMain.handle('create-start-menu-shortcut', createStartMenuShortcut);
    ipcMain.handle('create-desktop-shortcut', createDesktopShortcut);
}

async function createStartMenuShortcut() {
    const script = `
        $startMenuShortcutPath = [System.Environment]::GetFolderPath('StartMenu') + '\\Programs\\${name}.lnk'
        $startMenuShortcut = $shell.CreateShortcut($startMenuShortcutPath)
        $startMenuShortcut.TargetPath = '${process.execPath}'
        $startMenuShortcut.Save()
    `;

    return createShortcut(script, 'Start Menu');
}

async function createDesktopShortcut() {
    const script = `
        $desktopShortcutPath = [System.Environment]::GetFolderPath('Desktop') + '\\${name}.lnk'
        $desktopShortcut = $shell.CreateShortcut($desktopShortcutPath)
        $desktopShortcut.TargetPath = '${process.execPath}'
        $desktopShortcut.Save()
    `;

    return createShortcut(script, 'Desktop');
}

function createShortcut(script: string, type: 'Desktop' | 'Start Menu') {
    if (process.platform !== 'win32') {
        warn("Didn't create shortcut due to non-Windows OS");
        return false;
    }
    if (!app.isPackaged) {
        warn("Didn't create shortcut due to dev environment");
        return false;
    }

    try {
        const fullCommand = `
            $shell = New-Object -ComObject WScript.Shell
            
            ${script}
        `;

        const result = spawnSync('powershell.exe', [
            '-ExecutionPolicy', 'Bypass',
            '-NoProfile',
            '-NonInteractive',
            '-Command', fullCommand,
        ], { encoding: 'utf-8' });

        if (result.error) throw result.error;
    } catch (e) {
        errorWithMessage(`Failed to create ${type} shortcut`, e);
        return false;
    }
    return true;
}