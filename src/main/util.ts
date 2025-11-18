import { app } from 'electron';
import fs from 'node:fs/promises';
import { networkInterfaces } from 'node:os';
import { join } from 'node:path';
import { formatNumber } from '../common/util.js';

export function formatError(e: Error | string, additional?: any) {
    const message = typeof e === 'string' ? e : e.message;
    return {
        message,
        ...additional,
    };
}

export function normalizeSize(bytes: number, decimals: number = 2): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1000; // 1 kilobyte is 1000 bytes
    const dm = decimals < 0 ? 0 : decimals; // Number of decimal places to show
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']; // Possible sizes to display

    // Calculate the index of the sizes array that corresponds to the given number of bytes
    // by finding the base-1000 logarithm of the number of bytes and then rounding down to the nearest whole number
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    // Return a string that formats the number of bytes according to the given number of decimal places
    // and then appends the corresponding unit from the sizes array
    return `${formatNumber(bytes / Math.pow(k, i), dm)} ${sizes[i]}`
}

export function attempt<T>(fn: () => T): T | undefined;
export function attempt<T>(fn: () => T, fallback: T): T;
export function attempt<T>(fn: () => T, fallback?: T): T | undefined {
    try {
        return fn();
    } catch {
        return fallback;
    }
}

export function getOwnIPs(): { allResults: string[], pick: string | undefined } {
    const interfaces = networkInterfaces();
    const results: string[] = [];
    let ethernetIP: string | undefined = undefined;
    let wifiIP: string | undefined = undefined;
    let mobileDataIP: string | undefined = undefined;

    Object.keys(interfaces).forEach(key => {
        const lowercaseKey = key.toLowerCase();
        interfaces[key]?.forEach(net => {
            if (net.family === 'IPv4' && !net.internal) {
                results.push(net.address);
                if (ethernetIP) return; // don't check further as ethernet takes highest priority anyway
                if (lowercaseKey.startsWith('ethernet')) {
                    ethernetIP = net.address;
                } else if (lowercaseKey.startsWith('wlan') || lowercaseKey.startsWith('wifi') || lowercaseKey.startsWith('wi-fi')) {
                    wifiIP = net.address;
                } else if (lowercaseKey.startsWith('rmnet')) {
                    mobileDataIP = net.address;
                }
            }
        });
    });

    return { allResults: results, pick: ethernetIP || wifiIP || mobileDataIP };
}


export function getResource(path: string, nonPackagedBase: string = ''): string {
    return app.isPackaged ? join(process.resourcesPath, path) : join(process.cwd(), nonPackagedBase, path);
}

/**
 * Safely writes a JSON file at `path`.
 * This avoids corrupted or half-written files in case of a crash.
 */
export async function writeJSON(path: string, data: any) {
    const dataStr = typeof data === 'string' ? data : JSON.stringify(data, null, 2);

    const tmp = `${path}.tmp`;
    await fs.writeFile(tmp, dataStr, { encoding: 'utf8'});
    await fs.rename(tmp, path);
}

/**
 * Checks for write permissions in a directory by creating and then deleting a temporary file.
 * @param directoryPath The path to the directory to test.
 * @returns {Promise<boolean>} True if writeable, false otherwise.
 */
export async function canWriteToPath(directoryPath: string): Promise<boolean> {
    // Generate a unique, temporary filename
    const testFile = join(directoryPath, `.write-test-${Date.now()}`);

    try {
        // Step 1: Try to write a file. If this fails, the catch block will be executed.
        await fs.writeFile(testFile, 'test');

        // Step 2: If writing succeeded, immediately delete the file.
        await fs.rm(testFile);

        // If both operations succeeded, we have write permission.
        return true;
    } catch (error) {
        // If any error occurred (e.g., EPERM, EACCES), we don't have permission.
        return false;
    }
}