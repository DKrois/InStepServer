// @ts-ignore
import chalk from 'chalk';
import log from 'electron-log';
import { getCurrentTime } from '../common/time';
import { sendLog } from './app/app';

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

function errToString(err: Error | undefined | unknown, formatChalk = false): string {
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