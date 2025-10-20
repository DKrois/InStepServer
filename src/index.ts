import process from 'node:process';
// force color support before imports as electron breaks it otherwise
process.env.FORCE_COLOR = '1';

import readline from 'node:readline';
import { initApp } from './app.js';
import 'source-map-support/register';
import { errorWithMessage, info } from './util.js';

/*
 * Auto update ? → forge.config / MakerWix : autoUpdate
 *
 * electron-log
 *
 * Storing images
 *
 * Hide to tray
 * → Also hide on normal close
 *      (isQuitting flag, set in app.on('before-quit', ...))
 *
 *
 * TESTING:
 * - open storage path also on final build
 *
 * Installer:
 * github.com/markmorris/electron-wix-msi ??
 * "ui": {
 *     ...,
 *     "images": {
 *         "background": "[...]/path/to/background-493x312.bmp",
 *         "banner": "[...]/path/to/banner-493x58.bmp"
 *     }
 * }
 */


async function main() {
    initApp();

    listenForExit();
}

function listenForExit() {
    const rl = readline.createInterface({
        input: process.stdin
    });

    rl.on('line', (input) => {
        input = input.trim();
        switch (input) {
            case 'exit':
                return exit();
        }
    });

    process.on('SIGINT', () => exit());
    process.on('SIGTERM', () => exit());
    process.on('uncaughtException', exception => errorWithMessage('Unhandled Exception:', exception));
    process.on('unhandledRejection', reason => errorWithMessage('Unhandled Rejection:', reason));
}

function exit(exitCode = 0) {
    info('Exiting...');
    process.exit(exitCode);
}

main();