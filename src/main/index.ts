// force color support before imports as electron breaks it otherwise
import process from 'node:process';
process.env.FORCE_COLOR = '1';

import { app } from 'electron';
import { name } from '../../config.json';
import 'source-map-support/register';
import { stopServer } from './api/server.js';
import { initApp } from './app/app.js';
import { error, info } from './log.js';

/*
 * disable i18n debug
 *
 * docs mobile ?
 *
 * links to specific section in docs in apiDisabled, imdInUse
 *      session
 *
 *
 *
 * sponsoredBy
 *
 *
 * "sessionIMDDesc": "Diese Checkbox aktiviert oder deaktiviert den Zugriff auf den Indoor Map Digitalizer (IMD). Da nur eine Person gleichzeitig bearbeiten kann, 'sperrt' der erste Benutzer den Editor. Die Schaltfläche 'IMD-Sperre aufheben' beendet die aktive Sitzung zwangsweise. <br><strong>Warnung:</strong> Das Aufheben der Sperre, während jemand aktiv arbeitet, unterbricht dessen Sitzung und führt wahrscheinlich zum Verlust von nicht gespeicherten Änderungen. Nur verwenden, um eine blockierte Sitzung freizugeben.",
 * "sessionDurationDesc": "Legen Sie fest, wie lange ein Benutzer angemeldet bleibt, bevor eine erneute Anmeldung erforderlich ist. Änderungen gelten für alle neuen Anmeldungen; bereits aktive Sitzungen behalten ihre ursprüngliche Ablaufzeit bei.",
 *
 * "sessionIMDDesc": "This checkbox enables or disables access to the Indoor Map Digitalizer (IMD) endpoints. Because only one person can edit at a time, the first user to connect 'locks' the editor. The 'Release IMD Lock' button forcibly ends the active session. <br><strong>Warning:</strong> Releasing the lock while someone is actively working will interrupt them and likely cause a loss of unsaved changes. Only use this to free a stuck session.",
 * "sessionDurationDesc": "Set how long a user remains logged in before needing to sign in again. Changes will apply to all new logins; currently active sessions will keep their original expiry time.",
 *
 */


async function main() {
    console.log(`${name} v${app.getVersion()} (electron v${process.versions.electron}, node v${process.versions.node})`);
    initApp();
    //setInterval(() => console.log(normalizeSize(process.memoryUsage().heapUsed)), 1000)

    app.on('before-quit', () => cleanup());
    process.on('SIGINT', () => exit());
    process.on('SIGTERM', () => exit());
    process.on('uncaughtException', exception => error('Unhandled Exception:', exception));
    process.on('unhandledRejection', reason => error('Unhandled Rejection:', reason));
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