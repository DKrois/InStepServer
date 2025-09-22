import { Temporal } from '@js-temporal/polyfill';
import chalk from 'chalk';
import type { ChalkInstance } from 'chalk';

export function log(message: any, includeTime = true) {
    console.log(strWithTime(message, includeTime));
}

const warnColor = 'ff4d00';
export function warn(message: any, includeTime = true) {
    console.warn(strWithTime(message, includeTime, chalk.hex(warnColor)));
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
    const time = chalk.hex('#909090').dim(getCurrentTime());
    const base = includeTime ? `${time} ${message}` : message;
    return formatter ? formatter(base) : base;
}

function filterStack(err: Error) {
    return err.stack
        ?.split('\n')
        .filter(line => !/node_modules|internal\//.test(line))
        .join('\n');
}

export function errToString(err: Error | undefined | unknown, includeName = true): string {
    try {
        const error = err as Error;

        const parts: string[] = [];
        let end = '';

        if (includeName && error.name) {
            if (error.message) parts.push(`${error.name}: ${error.message}`);
            else parts.push(error.name);
        } else if (error.message) {
            parts.push(error.message);
        }

        if (error.cause) {
            parts.push(`Cause: ${String(error.cause)}`);
        }

        if (end) parts.push(end);
        return parts.join('\n');
    } catch (e) {
        return `${(err)}`;
    }
}

function getCurrentTime(includeTimezone = false, includeMillis = false, gmt = false): string {
    return timeToString(gmt ? Temporal.Now.instant() : Temporal.Now.zonedDateTimeISO(), includeTimezone, includeMillis);
}

function timeToString(time: Temporal.ZonedDateTime | Temporal.Instant | number | null, includeTimezone = true, includeMillis = true): string {
    if (time === null) return 'time null';

    if (typeof time === 'number') {
        const isMillis = time.toString().length > 12;
        time = isMillis ? Temporal.Instant.fromEpochMilliseconds(time) : Temporal.Instant.fromEpochMilliseconds(time * 1000);
    }
    if (time instanceof Temporal.Instant) time = time.toZonedDateTimeISO('+00:00');

    const year = addZeroes(time.year, 2);
    const month = addZeroes(time.month, 2);
    const day = addZeroes(time.day, 2);
    const hours = addZeroes(time.hour, 2);
    const minutes = addZeroes(time.minute, 2);
    const seconds = addZeroes(time.second, 2);
    const millis = includeMillis ? `.${addZeroes(time.millisecond, 3)}` : '';
    const timezone = includeTimezone ? ` ${time.timeZoneId}` : '';

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}${millis}${timezone}`;
}

function addZeroes(str: number, padAmount: number, radix: number = 10): string {
    return str.toString(radix).padStart(padAmount, '0');
}