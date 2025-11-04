import { app, ipcMain } from 'electron';
import electron_log from 'electron-log';
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import { dirname, resolve } from 'node:path';
import { updateElectronApp } from 'update-electron-app';
import { errorWithMessage, info, warn } from '../util';

// not much installer, just what happens on first run after install & updater

export function initUpdater() {
    if (!app.isPackaged) {
        info('Development mode: Auto-updater disabled.');
        return;
    }

    // 2. The updater only works on Windows
    if (process.platform !== 'win32' && process.platform !== 'darwin') {
        info('Non-Windows / MacOS platform: Auto-updater disabled.');
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

export function registerShortcutsIPC() {
    ipcMain.handle('create-start-menu-shortcut', createStartMenuShortcut); // TODO ?
    ipcMain.handle('create-desktop-shortcut', createDesktopShortcut);
}

async function createStartMenuShortcut() {
    const script = `
        $shell = New-Object -ComObject WScript.Shell
        
        $startMenuShortcutPath = [System.Environment]::GetFolderPath('StartMenu') + '\\Programs\\${name}.lnk'
        $startMenuShortcut = $shell.CreateShortcut($startMenuShortcutPath)
        $startMenuShortcut.TargetPath = '${process.execPath}'
        $startMenuShortcut.Save()
    `;

    return createShortcut(script, 'Start Menu');
}

async function createDesktopShortcut() {
    const script = `
        $shell = New-Object -ComObject WScript.Shell
        
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
        execSync(`powershell.exe -ExecutionPolicy Bypass -NoProfile -NonInteractive -Command "${script}"`);
    } catch (e) {
        errorWithMessage(`Failed to create ${type} shortcut`, e);
        return false;
    }
    return true;
}