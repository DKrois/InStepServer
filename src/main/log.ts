import chalk from 'chalk';
import log from 'electron-log';
import { getCurrentTime } from '../common/time';
import { sendLog } from './app/app';
import { errorToString, indent } from './errorformatting';

export function initLogging() {
    log.initialize();
    log.errorHandler.startCatching();
    log.eventLogger.startLogging();

    log.info('Logger initialized.');
}

// functions to ignore in the stack trace (internal logger functions & internal runtime functions)
//const IGNORED_LOG_FUNCTIONS = new Set(['log', 'info', 'warn', 'error', 'getCallerLocation', 'formatLogString', 'processTicksAndRejections']);

const enum Color {
    darkAqua = 0x3c7ac0,
    darkOrange = 0xff4d00,
    gray = 0x909090,
}

/**
 * Formats a log string using chalk.
 * Format:
 * `time [source] <message>
 * @param message
 * @param source
 * @param useColor Whether to apply chalk formatting
 */
function formatLogString(message: string, source?: string, useColor?: boolean): string {
    const timeStr = getCurrentTime();
    //const callerLocation = getCallerLocation();
    const fullSource = source ? ` [${source}]` : '';

    if (useColor) {
        const bgFormatter = chalk.hex(Color.gray.toString(16)).dim;
        const sourceFormatter = chalk.hex(Color.darkAqua.toString(16));

        //const cl = callerLocation ? ` [${callerLocation}]` : '';

        const bg = bgFormatter(timeStr);
        const src = sourceFormatter(fullSource);

        return `${bg}${src} ${message}`;
    } else {
        return `${timeStr}${fullSource} ${message}`;
    }
}

export function info(message: string, source?: string): void {
    const formatted = formatLogString(message, source, true);
    const plain = formatLogString(message, source, false);

    console.info(formatted);
    sendLog(formatted);

    log.info(plain);
}

export function warn(message: string, source?: string): void {
    const warnFormatter = chalk.hex(Color.darkOrange.toString(16));
    const formatted = warnFormatter(formatLogString(message, source));
    const plain = formatLogString(message, source, false);

    console.warn(formatted);
    sendLog(formatted);

    log.warn(plain);
}

export function error(message: string, err?: Error | unknown, source?: string): void {
    const errorFormatter = chalk.red;

    const header = formatLogString(message || 'An error occurred', source);
    const plainHeader = formatLogString(message || 'An error occured', source, false);

    console.error(errorFormatter(header));
    log.error(plainHeader);

    if (err) {
        // console
        const errorStr = errorToString(err, {
            color: true,
            includeStack: true
        });
        console.error(indent(errorStr, 1, 4));

        // renderer
        const errorStrWithoutStack = errorToString(err, {
            color: true,
            includeStack: false,
        });
        sendLog([message, indent(errorStrWithoutStack, 1, 4)]);

        // electron-log
        const errorStrPlain = errorToString(err, {
            color: false,
            includeStack: false,
        });
        log.error(indent(errorStrPlain, 1, 4));
    } else {
        sendLog(message);
    }
}

/**
 * Gets the caller function's location, filtering out internal logging functions.
 * @return file:number
 */
/*function getCallerLocation(showFullPath = false): string {
    const stack = new Error().stack;
    if (!stack) return '';

    const lines = stack.split('\n');

    // 0 is "Error"
    // 1 usually getCallerLocation
    // 2+ are actual calls
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];

        // Regex to parse V8/Node/Bun stack lines
        // Matches: "    at FunctionName (/path/to/file.ts:10:5)"
        // OR:      "    at /path/to/file.ts:10:5"
        const match = line?.match(/at\s+(?:(?<func>.+?)\s+\()?(?<path>.+?):(?<line>\d+)(?::\d+)?\)?$/);

        if (!match?.groups) continue;

        const { func, path: filePath, line: lineNumber } = match.groups;

        if (!filePath) continue;

        // found a function name -> check if ignored
        if (func) {
            // clean up function name (sometimes it's "Object.info" or "async info")
            const cleanName = func.split('.').pop()?.replace(/^async\s+/, '').trim();
            // skip if internal
            if (cleanName && IGNORED_LOG_FUNCTIONS.has(cleanName)) continue;
        }

        // make path relative to cwd, or extract file name
        const relativePath = showFullPath ? relative(process.cwd(), filePath) : basename(filePath);

        return `${relativePath}:${lineNumber}`;
    }

    return '';
}*/