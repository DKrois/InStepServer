import process from 'node:process';
// force color support before imports as electron breaks it otherwise
process.env.FORCE_COLOR = '1';

import readline from 'node:readline';
import { initApp } from './app.js';
import 'source-map-support/register';
import { errorWithMessage, log } from './util.js';

/*
 * Auto update ? → forge.config / MakerWix : autoUpdate
 *
 * Storing images
 *
 * Hide to tray
 *
 * Button to open db path
 *  Manage files menu?
 *  → change version, ...
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
    log('Exiting...');
    process.exit(exitCode);
}

main();