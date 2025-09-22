import readline from 'node:readline';
import { projectDB } from './database';
import { initServer } from './server';
import { log } from './util';

function main() {
    initServer();
    projectDB.connect();

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
            case 'restart':
                return exit(100);
        }
    });

    process.on('SIGINT', () => exit());
    process.on('SIGTERM', () => exit());
}

async function exit(exitCode = 0) {
    projectDB.disconnect();
    log('Exiting...');
    process.exit(exitCode);
}

main();

// GUI for server ?
// repo for IDM?