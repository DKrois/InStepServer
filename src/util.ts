// @ts-ignore
import chalk from 'chalk';
import log from 'electron-log';
import { networkInterfaces } from 'node:os';
import { sendLog } from './app.js';

export function initLogging() {
    log.initialize();
    log.errorHandler.startCatching();
    log.eventLogger.startLogging();

    log.info('Logger initialized.');
}

export function info(message: any, includeTime = true, inApp = true) {
    console.log(strWithTime(message, includeTime));
    log.info(message);
    if (inApp) sendLog(message);
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

// noinspection DuplicatedCode
function getCurrentTime(includeMillis = false, gmt = false): string {
    return timeToString(new Date(), gmt, includeMillis);
}

// noinspection DuplicatedCode
function timeToString(time: number | Date | null, gmt = false, includeMillis = true): string {
    if (time === null) return 'time null';

    let dt;
    if (typeof time === 'number') {
        const isMillis = time.toString().length > 12;
        dt = isMillis ? new Date(time) : new Date(time * 1000);
    } else {
        dt = time;
    }

    const year = addZeroes(gmt ? dt.getUTCFullYear() : dt.getFullYear(), 2);
    const month = addZeroes((gmt ? dt.getUTCMonth() : dt.getMonth()) + 1, 2);
    const day = addZeroes(gmt ? dt.getUTCDate() : dt.getDate(), 2);
    const hours = addZeroes(gmt ? dt.getUTCHours() : dt.getHours(), 2);
    const minutes = addZeroes(gmt ? dt.getUTCMinutes() : dt.getMinutes(), 2);
    const seconds = addZeroes(gmt ? dt.getUTCSeconds() : dt.getSeconds(), 2);
    const millis = includeMillis ? `.${addZeroes(gmt ? dt.getUTCMilliseconds() : dt.getMilliseconds(), 3)}` : '';

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}${millis}`;
}

function addZeroes(str: number, padAmount: number, radix: number = 10): string {
    return str.toString(radix).padStart(padAmount, '0');
}

export function normalizeSize(bytes: number, decimals: number = 2): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1000;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${formatNumber(bytes / Math.pow(k, i), dm)} ${sizes[i]}`
}

export function formatNumber(x: number, fractionDigits = 0, useGrouping = true) {
    const [intPart, fracPart = ''] = x
        .toFixed(fractionDigits)
        .split('.');

    const groupedInt = useGrouping
        ? intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        : intPart;

    // Remove trailing 0s
    const cleanedFrac = fracPart?.replace(/0+$/, '');

    return cleanedFrac ? `${groupedInt}.${cleanedFrac}` : groupedInt;
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
                if (lowercaseKey.startsWith('ethernet')) {
                    ethernetIP = net.address;
                } else if (lowercaseKey.startsWith('wlan') || lowercaseKey.startsWith('wifi') || lowercaseKey.startsWith('wi-fi')) {
                    wifiIP = net.address;
                } else if (lowercaseKey.startsWith('rmnet')) {
                    mobileDataIP = net.address;
                }
                results.push(net.address);
            }
        });
    });

    return { allResults: results, pick: ethernetIP || wifiIP || mobileDataIP };
}