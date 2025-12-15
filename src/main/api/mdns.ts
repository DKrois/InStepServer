import Bonjour from 'bonjour-service';
import { hostname } from '../../../config.json';
import { info as _info, warn as _warn } from '../log';

const logSource = 'mdns';
const info = (str: string) => _info(str, logSource);
const warn = (str: string) => _warn(str, logSource);

export let bonjour: Bonjour | null = null;
export function startMDNSAdvertisement(port: number) {
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

    info(`MDNS Server started advertising at http://${service.name}.local:${port}`);
}

export function stopMDNSAdvertisement() {
    if (!bonjour) {
        warn('MDNS Server not running');
        return;
    }

    bonjour.unpublishAll(() =>
        bonjour?.destroy(() =>
            info('Stopped MDNS server.')
        )
    );
    bonjour = null;
}