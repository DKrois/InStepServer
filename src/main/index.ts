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
 * test shortcuts
 *
 */

/* TODO
 *
 * installer: banner / bg?
 *
 * code sign?
 *
 */

/* OTHER
 * cookie { secure: true } if https
 *
 * Installer:
 * https://stackoverflow.com/questions/19271862/wix-how-to-run-exe-files-after-installation-from-installed-directory
 * https://skjoldrun.github.io/docs/other/wix-v3-installer.html
 * icons / images
 * (Machine)
 * https://github.com/electron-userland/electron-wix-msi/tree/master/src
 * https://github.com/electron-userland/electron-wix-msi/blob/master/src/creator.ts#L426
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