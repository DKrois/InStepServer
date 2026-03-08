import { Bonjour } from 'bonjour-service';
import { hostname } from '../../../config.json';
import { getURL } from '../app/qr.js';
import { info as _info, warn as _warn } from '../log.js';
import * as os from 'node:os';

const logSource = 'mdns';
const info = (str: string) => _info(str, logSource);
const warn = (str: string) => _warn(str, logSource);

export let bonjour: Bonjour | null = null;
export async function startMDNSAdvertisement(port: number) {
    if (bonjour) {
        warn('MDNS Server already running');
        return;
    }
    bonjour = new Bonjour();

    // advertise on the local network
    bonjour.publish({
        name: hostname,
        type: 'http',
        port,
        host: `${hostname}.local`
    });

    info(`MDNS Server started advertising at ${getURL('mdns')} and ${getURL('hostname')}`);
}

export async function stopMDNSAdvertisement() {
    if (!bonjour) {
        warn('MDNS Server not running');
        return;
    }

    bonjour.unpublishAll(() =>
        bonjour?.destroy(() => {
            info('Stopped MDNS server.');
            bonjour = null;
        })
    );
}

export function getOSHostname() {
    return os.hostname().toLowerCase();
}