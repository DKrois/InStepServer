import readline from 'node:readline';
import { initApp } from './app';
import { initServer } from './server';
import { log } from './util';

async function main() {
    initServer();
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
            case 'restart':
                return exit(100);
        }
    });

    process.on('SIGINT', () => exit());
    process.on('SIGTERM', () => exit());
}

async function exit(exitCode = 0) {
    log('Exiting...');
    process.exit(exitCode);
}

main();