import { app } from 'electron';
import fs from 'node:fs/promises';
import { NetworkInterfaceInfo, networkInterfaces } from 'node:os';
import { join } from 'node:path';
import { formatNumber } from '../common/util.js';

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
    return `${formatNumber(bytes / Math.pow(k, i), dm)} ${sizes[i]}`;
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

interface IPCollection {
    ethernet: string | undefined;
    wifi: string | undefined;
    mobileData: string | undefined;
}

export function getLocalIPv4(): string {
    const ips = getOwnIPs();
    return ips.ipv4 ?? ips.ipv4Results[0];
}
export function getLocalIPs() {
    const ips = getOwnIPs();
    const ipv4 = ips.ipv4 ?? ips.ipv4Results[0];
    const ipv6 = ips.ipv6 ?? ips.ipv6Results[0];

    return { ipv4, ipv6 };
}
function getOwnIPs(): { ipv4Results: string[], ipv6Results: string[], ipv4: string | undefined, ipv6: string | undefined } {
    const interfaces = networkInterfaces();
    const ipv4Results: string[] = [];
    const ipv6Results: string[] = [];

    const ipv4: IPCollection = {
        ethernet: undefined,
        wifi: undefined,
        mobileData: undefined,
    };
    const ipv6: IPCollection = {
        ethernet: undefined,
        wifi: undefined,
        mobileData: undefined,
    };

    const check = (lowercaseKey: string, net: NetworkInterfaceInfo, arr: string[], obj: IPCollection) => {
        arr.push(net.address);

        if (!obj.ethernet) {
            // don't check further if ethernet is already found as it takes highest priority
            if (lowercaseKey.startsWith('ethernet')) {
                obj.ethernet = net.address;
            } else if (lowercaseKey.startsWith('wlan') || lowercaseKey.startsWith('wifi') || lowercaseKey.startsWith('wi-fi')) {
                obj.wifi = net.address;
            } else if (lowercaseKey.startsWith('rmnet')) {
                obj.mobileData = net.address;
            }
        }
    };

    Object.keys(interfaces).forEach(key => {
        const lowercaseKey = key.toLowerCase();
        interfaces[key]?.forEach(net => {
            if (!net.internal) {
                if (net.family === 'IPv4') check(lowercaseKey, net, ipv4Results, ipv4);
                if (net.family === 'IPv6') check(lowercaseKey, net, ipv6Results, ipv6);
            }
        });
    });

    const getPrioritised = (obj: IPCollection) => obj.ethernet || obj.wifi || obj.mobileData;
    return { ipv4Results, ipv6Results, ipv4: getPrioritised(ipv4), ipv6: getPrioritised(ipv6) };
}


export function getResource(path: string, nonPackagedBase: string = ''): string {
    return app.isPackaged ? join(process.resourcesPath, path) : join(process.cwd(), nonPackagedBase, path);
}

/**
 * Safely writes a JSON file at `path`.
 * This avoids corrupted or half-written files in case of a crash.
 */
export async function writeJSON(path: string, data: any) {
    const dataStr = typeof data === 'string' ? data : JSON.stringify(data);

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