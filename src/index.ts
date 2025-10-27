import process from 'node:process';
// force color support before imports as electron breaks it otherwise
process.env.FORCE_COLOR = '1';

import { initApp } from './app.js';
import 'source-map-support/register';
import { errorWithMessage, info } from './util.js';

/* DONE
 *
 * auto time stuff → testing for weekdays
 *
 */

/* WIP
 *
 * translations
 *
 */

/* OTHER
 *
 * Open existing one rather than new instance if shortcut clicked
 * Disable desktop shortcut by default
 * → electron-squirrel-startup, msi template...
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