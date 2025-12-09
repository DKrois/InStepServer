// force color support before imports as electron breaks it otherwise
import process from 'node:process';
process.env.FORCE_COLOR = '1';

import { app } from 'electron';
import { name } from '../../config.json';
import 'source-map-support/register';
import { stopServer } from './api/server';
import { initApp } from './app/app.js';
import { errorWithMessage, info } from './logging.js';

/*
 * basic data validation (include version, id in payload too?)
 *
 * mdns ?
 */

/*
 * links to specific section in docs in apiDisabled, imdInUse
 * cookie { secure: true } if https
 */


async function main() {
    console.log(`${name} v${app.getVersion()} (electron v${process.versions.electron}, node v${process.versions.node})`);
    initApp();
    //setInterval(() => console.log(normalizeSize(process.memoryUsage().heapUsed)), 1000)

    app.on('before-quit', () => cleanup());
    process.on('SIGINT', () => exit());
    process.on('SIGTERM', () => exit());
    process.on('uncaughtException', exception => errorWithMessage('Unhandled Exception:', exception));
    process.on('unhandledRejection', reason => errorWithMessage('Unhandled Rejection:', reason));
}

function cleanup() {
    info('Cleaning up...');
    stopServer();
}

function exit(exitCode = 0) {
    cleanup();
    info('Exiting...');
    process.exit(exitCode);
}

main();