import { app, dialog, ipcMain } from 'electron';
import { getLocalIPv4 } from '../util.js';
import { store } from './settings.js';
import { hostname } from '../../../config.json';
import * as os from 'node:os';
import QRCode from 'qrcode';
import { error } from 'electron-log';
import { warn } from '../log.js';
import type { IPCResponse } from '../../common/util.js';
import type { QRType } from '../../common/types.js'

export function registerQRIPC() {
    ipcMain.handle('get-server-urls', getServerURLs);
    ipcMain.handle('generate-qr-code', (_event, type: QRType) => generateQRCode(type));
    ipcMain.handle('save-qr-code', (_event, type: QRType) => saveQRCode(type));
}

function getServerURLs(): { ip: string | null, mdns: string, hostname: string } {
    const ip = getURL('ip');
    const mdns = getURL('mdns');
    const hostname = getURL('hostname');

    return { ip, mdns, hostname };
}

async function generateQRCode(type: QRType): IPCResponse<'ip-failed' | 'error', string> {
    try {
        const url = getURL(type);
        if (!url) return { success: false, code: 'ip-failed' };

        // Generate the QR code as a Data URL to be used in an <img> tag
        const data = await QRCode.toDataURL(url, {
            errorCorrectionLevel: 'H', // High resistance
            width: 256,
            margin: 2,
        });

        return { success: true, data };
    } catch (err) {
        error('Failed to generate QR code', err);
        return { success: false, code: 'error' };
    }
}

async function saveQRCode(type: QRType): IPCResponse<'cancelled' | 'ip-failed' | 'error', string> {
    const { canceled, filePath } = await dialog.showSaveDialog({
        title: 'Save QR Code',
        defaultPath: `${app.getPath('downloads')}/instep-qr-code.png`,
        filters: [
            { name: 'PNG Images', extensions: ['png'] }
        ]
    });

    if (canceled || !filePath) return { success: false, code: 'cancelled' };

    try {
        const url = getURL(type);
        if (!url) return { success: false, code: 'ip-failed' };

        await QRCode.toFile(filePath, url, {
            type: 'png',
            errorCorrectionLevel: 'H',
            width: 512,
            margin: 2,
        });
        return { success: true, data: filePath };
    } catch (err) {
        error('Failed to save QR code', err);
        return { success: false, code: 'error' };
    }
}

function getURL<T extends QRType>(type: T): T extends 'ip' ? (string | null) : string {
    const port = store.get('port');

    switch (type) {
        case 'ip':
            const ip = getLocalIPv4();
            if (!ip) {
                warn('Could not determine local IP address.');
                return null as (T extends 'ip' ? (string | null) : string);
            }
            return `http://${ip}:${port}/`;

        case 'mdns':
            return `http://${hostname}.local:${port}`;

        case 'hostname':
            return `http://${os.hostname()}.local:${port}`;

        default:
            throw new Error('Invalid QR code type specified.');
    }
}