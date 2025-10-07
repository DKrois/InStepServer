// force color support before imports as electron breaks it otherwise
process.env.FORCE_COLOR = '1';

import readline from 'node:readline';
import { initApp } from './app.js';
import { port } from '../config.json';
import { initServer } from './server.js';
import 'source-map-support/register';
import { errorWithMessage, log } from './util.js';

/*
* Auto update ?
*/

async function main() {
    initServer(port);
    initApp();

    listenForExit();
}

async function listenForExit() {
    const rl = readline.createInterface({
        input: process.stdin
    });

    rl.on('line', async input => {
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