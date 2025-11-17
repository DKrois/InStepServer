// force color support before imports as electron breaks it otherwise
import process from 'node:process';
process.env.FORCE_COLOR = '1';

import { app } from 'electron';
import { name } from '../../config.json';
import 'source-map-support/register';
import { initApp } from './app/app.js';
import { errorWithMessage, info } from './logging.js';

/*
 * installer: banner / bg
 * http://docs.firegiant.com/wix3/wixui/wixui_customizations/
 */

/* OTHER
 * cookie { secure: true } if https
 *
 * Installer:
 * https://stackoverflow.com/questions/19271862/wix-how-to-run-exe-files-after-installation-from-installed-directory
 * https://skjoldrun.github.io/docs/other/wix-v3-installer.html
 * https://github.com/electron-userland/electron-wix-msi/tree/master/src
 * https://github.com/electron-userland/electron-wix-msi/blob/master/src/creator.ts#L426
 */


async function main() {
    console.log(`${name} v${app.getVersion()} (electron v${process.versions.electron}, node v${process.versions.node})`);
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