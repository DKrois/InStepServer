import chalk from 'chalk';
import { networkInterfaces } from 'node:os';
import { sendLog } from './app.js';

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

export function log(message: any, includeTime = true, inApp = true) {
    console.log(strWithTime(message, includeTime));
    if (inApp) sendLog(message);
}

export function warn(message: any, includeTime = true, inApp = true) {
    console.warn(chalk.hex('ff4d00')(strWithTime(message, includeTime)));
    if (inApp) sendLog(chalk.hex('ff4d00')(message));
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
    console.error(chalk.red(strWithTime(message, includeTime)));
    console.error(err);
}

function printErr(message: any, includeTime = true) {
    if (message instanceof Error) {
        const stack = filterStack(message);
        message.stack = undefined;

        console.error(chalk.red(strWithTime(message, includeTime)));
        console.error(stack);
    } else {
        console.error(chalk.red(strWithTime(message, includeTime)));
    }
}

function strWithTime(message: any, includeTime: boolean) {
    return includeTime ? `${formatBackground(getCurrentTime())} ${message}` : message;
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