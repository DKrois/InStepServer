import { spawn } from 'node:child_process';

function runApp() {
    const loaderImport = 'file:/C:/Program Files/JetBrains/WebStorm 2024.2.3/plugins/nodeJS/js/ts-file-loader/node_modules/tsx/dist/loader.cjs';
    const args = [
        '--import', loaderImport,
        '--trace-warnings', '--no-deprecation',
        'src/index.ts'
    ];

    const child = spawn('node', args, { stdio: 'inherit' });

    child.on('exit', code => {
        if (code === 100) {
            console.clear();
            console.log('Restarting...');
            runApp();
        } else {
            console.log('Exited with code', code);
        }
    });
}

runApp();