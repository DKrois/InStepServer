// @ts-ignore
import chalk from 'chalk';
import log from 'electron-log';
import fs from 'node:fs/promises';
import { networkInterfaces } from 'node:os';
import { join } from 'node:path';
import { getCurrentTime } from '../common/time';
import { formatNumber } from '../common/util';
import { sendLog } from './app/app.js';

export function initLogging() {
    log.initialize();
    log.errorHandler.startCatching();
    log.eventLogger.startLogging();

    log.info('Logger initialized.');
}

export function info(message: any, includeTime = true, inApp = true) {
    console.info(strWithTime(message, includeTime));
    log.info(message);
    if (inApp) sendLog(message);
}

export function infoWithBackground(message: any, backgroundInfo: string, inApp = true) {
    return info(`${formatBackground(backgroundInfo)} ${message}`, true, inApp);
}

export function warn(message: any, includeTime = true, inApp = true) {
    console.warn(chalk.hex('ff4d00')(strWithTime(message, includeTime)));
    log.warn(message);
    if (inApp) sendLog(chalk.hex('ff4d00')(message));
}

export function error(err: string | Error | unknown, includeTime = true) {
    const errorObj = err instanceof Error ? err : new Error(String(err));

    printErr(errorObj, includeTime);
    log.error(errorObj);
    sendLog(errToString(errorObj, true));
}

export function errorWithMessage(message: string, err: Error | unknown, includeTime = true) {
    const errorObj = err instanceof Error ? err : new Error(String(err));

    console.error(chalk.red(strWithTime(message, includeTime)));
    console.error(errorObj);

    log.error(message, errorObj);

    sendLog(errToString(errorObj, true));
}

function printErr(err: Error, includeTime = true) {
    const stack = filterStack(err);
    const message = strWithTime(err.message, includeTime);

    console.error(chalk.red(message));
    console.error(stack);
}

function strWithTime(message: any, includeTime: boolean, format = true) {
    if (includeTime) {
        const time = getCurrentTime();
        return format ? `${formatBackground(time)} ${message}` : `${time} ${message}`;
    } else {
        return message;
    }
}

function formatBackground(str: string) {
    return chalk.hex('#909090').dim(str);
}

function filterStack(err: Error) {
    return err.stack
        ?.split('\n')
        .filter(line => !/node_modules|internal\//.test(line))
        .join('\n');
}

export function errToString(err: Error | undefined | unknown, formatChalk = false): string {
    try {
        const error = err as Error;
        const parts: string[] = [];

        if (error.name) {
            if (error.message) parts.push(`${error.name}: ${error.message}`);
            else parts.push(error.name);
        } else if (error.message) {
            parts.push(error.message);
        }

        if (error.cause) {
            parts.push(`Cause: ${errToString(error.cause)}`);
        }

        const str = parts.join('  \n');
        return formatChalk ? chalk.red(str) : str;
    } catch (e) {
        return chalk.red(`${err}`);
    }
}

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