import process from 'node:process';
// force color support before imports as electron breaks it otherwise
process.env.FORCE_COLOR = '1';

import { initApp } from './app/app.js';
import 'source-map-support/register';
import { errorWithMessage, info } from './util.js';

/* DONE
 *
 * auto time stuff
 * Open existing one rather than new instance if shortcut clicked
 * implement security
 * options → change data path (startup modal → IPC after close to init db ?)
 * organize files
 *
 */

/* WIP
 *
 * test auto update
 *
 * time: overnight & 'entire day' → only end, ...
 *
 */

/* TODO
 *
 * Disable desktop shortcut by default ?
 * → electron-squirrel-startup, msi template...
 *
 */

/* OTHER
 * cookie { secure: true } if https
 *
 * Installer:
 * Read default template? (msiCreator.wixTemplate)
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
    //setInterval(() => console.log(normalizeSize(process.memoryUsage().heapUsed)), 1000)

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