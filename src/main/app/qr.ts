import { app, dialog, ipcMain } from 'electron';
import { getOSHostname } from '../api/mdns.js';
import { getLocalIPv4 } from '../util.js';
import { store } from './settings.js';
import { hostname } from '../../../config.json';
import QRCode from 'qrcode';
import { info as _info, warn as _warn, error as _error } from '../log.js';
import type { IPCResponse, QRType } from '../../common/types.js'
import { extname } from 'node:path';

const logSource = 'qr';
const info = (str: string) => _info(str, logSource);
const warn = (str: string) => _warn(str, logSource);
const error = (str: string, err: unknown) => _error(str, err, logSource);

export function registerQRIPC() {
    ipcMain.handle('get-server-urls', getServerURLs);
    ipcMain.handle('generate-qr-code', (_event, type: QRType) => generateQRCode(type));
    ipcMain.handle('save-qr-code', (_event, type: QRType) => saveQRCode(type));
}

function getServerURLs(): { ip: string | null, mdns: string | null, hostname: string | null } {
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

        info(`Generated QR Code of type ${type}`);
        return { success: true, data };
    } catch (err) {
        error('Failed to generate QR code', err);
        return { success: false, code: 'error' };
    }
}

async function saveQRCode(type: QRType): IPCResponse<'cancelled' | 'ip-failed' | 'error', string> {
    const { canceled, filePath } = await dialog.showSaveDialog({
        title: 'Save QR Code',
        defaultPath: `${app.getPath('downloads')}/instep-qr-code-${type}`,
        filters: [
            { name: 'PNG Images', extensions: ['png'] },
            { name: 'SVG Images', extensions: ['svg'] },
            { name: 'All files', extensions: ['*'] }
        ]
    });

    if (canceled || !filePath) return { success: false, code: 'cancelled' };

    try {
        const url = getURL(type);
        if (!url) return { success: false, code: 'ip-failed' };

        let ext = extname(filePath).replaceAll('.', '') as 'png' | 'svg';
        let p = filePath;
        if (ext !== 'png' && ext !== 'svg') {
            ext = 'png';
            p += '.png';
        }
        await QRCode.toFile(p, url, {
            type: ext,
            errorCorrectionLevel: 'H',
            width: 512,
            margin: 2,
        });
        info(`Saved QR Code of type ${type} at ${p}`);
        return { success: true, data: p };
    } catch (err) {
        error('Failed to save QR code', err);
        return { success: false, code: 'error' };
    }
}

export function getURL(type: QRType): string | null {
    const port = store.get('port');

    switch (type) {
        case 'ip':
            const ip = getLocalIPv4();
            if (!ip) {
                warn('Could not determine local IP address');
                return null;
            }
            return `http://${ip}:${port}/`;

        case 'mdns':
            return `http://${hostname}.local:${port}/`;

        case 'hostname':
            return `http://${getOSHostname()}.local:${port}/`;

        default:
            throw new Error('Invalid QR code type specified.');
    }
}