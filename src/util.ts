import type { ChalkInstance } from 'chalk';
import chalk from 'chalk';
import { networkInterfaces } from 'node:os';

export function formatError(e: Error | string, additional?: any) {
    const message = typeof e === 'string' ? e : e.message;
    return {
        error: message,
        ...additional,
    };
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

export function log(message: any, includeTime = true) {
    console.log(strWithTime(message, includeTime));
}

export function warn(message: any, includeTime = true) {
    console.warn(strWithTime(message, includeTime, chalk.hex('ff4d00')));
}

export function error(message: string | Error | unknown, printFull = true, includeTime = true) {
    if (printFull) {
        let err: Error;
        if (typeof message === 'string') {
            err = new Error(message);
            Error.captureStackTrace(err, error);
        } else {
            err = message as Error;
        }

        printErr(err, includeTime);
    } else {
        printErr(message, includeTime);
    }
}

export function errorWithMessage(message: string, err: Error | unknown, includeTime = true) {
    console.error(strWithTime(message, includeTime, chalk.red));
    console.error(err);
}

function printErr(message: any, includeTime = true) {
    if (message instanceof Error) {
        const stack = filterStack(message);
        message.stack = undefined;

        console.error(strWithTime(message, includeTime, chalk.red));
        console.error(stack);
    } else {
        console.error(strWithTime(message, includeTime, chalk.red));
    }
}

function strWithTime(message: any, includeTime: boolean, formatter?: ChalkInstance) {
    const base = includeTime ? `${chalk.hex('#909090').dim(getCurrentTime())} ${message}` : message;
    return formatter ? formatter(base) : base;
}

function filterStack(err: Error) {
    return err.stack
        ?.split('\n')
        .filter(line => !/node_modules|internal\//.test(line))
        .join('\n');
}
function getCurrentTime(includeMillis = false, gmt = false): string {
    return timeToString(new Date(), gmt, includeMillis);
}

function timeToString(time: number | Date | null, gmt = false, includeMillis = true): string {
    if (time === null) return 'time null';

    let dt;
    if (typeof time === 'number') {
        const isMillis = time.toString().length > 12;
        dt = isMillis ? new Date(time) : new Date(time * 1000);
    } else {
        dt = time;
    }

    if (gmt) {
        const year = addZeroes(dt.getUTCFullYear(), 2);
        const month = addZeroes(dt.getUTCMonth() + 1, 2);
        const day = addZeroes(dt.getUTCDate(), 2);
        const hours = addZeroes(dt.getUTCHours(), 2);
        const minutes = addZeroes(dt.getUTCMinutes(), 2);
        const seconds = addZeroes(dt.getUTCSeconds(), 2);
        const millis = includeMillis ? `.${addZeroes(dt.getUTCMilliseconds(), 3)}` : '';

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}${millis}`;
    } else {
        const year = addZeroes(dt.getFullYear(), 2);
        const month = addZeroes(dt.getMonth() + 1, 2);
        const day = addZeroes(dt.getDate(), 2);
        const hours = addZeroes(dt.getHours(), 2);
        const minutes = addZeroes(dt.getMinutes(), 2);
        const seconds = addZeroes(dt.getSeconds(), 2);
        const millis = includeMillis ? `.${addZeroes(dt.getMilliseconds(), 3)}` : '';

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}${millis}`;
    }
}

function addZeroes(str: number, padAmount: number, radix: number = 10): string {
    return str.toString(radix).padStart(padAmount, '0');
}