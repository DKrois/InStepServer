import { app, ipcMain } from 'electron';
import electron_log from 'electron-log';
import { spawn, spawnSync } from 'node:child_process';
import * as fs from 'node:fs';
import { basename,  dirname, resolve } from 'node:path';
import { updateElectronApp } from 'update-electron-app';
import { name } from '../../../config.json'
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
    /*if (!app.isPackaged) {
        warn("Didn't create shortcut due to dev environment");
        return false;
    }*/

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