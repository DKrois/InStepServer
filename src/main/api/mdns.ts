import { Bonjour } from 'bonjour-service';
import { hostname } from '../../../config.json';
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
    const service = bonjour.publish({
        name: hostname,
        type: 'http',
        port,
        host: `${hostname}.local`
    });

    const getURL = (hostname: string) => `http://${hostname}:${port}`;
    info(`MDNS Server started advertising at ${getURL(`${os.hostname()}.local`)} and ${getURL(service.host)}`);
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