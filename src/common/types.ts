export type QRType = 'ip' | 'mdns' | 'hostname';

export type IPCCodes = 'error' | 'cancelled' | 'permission-denied' | 'ip-failed';

// pick which codes can be present
export type IPCPacket<C extends IPCCodes | '' = '', T = undefined> =
    | {
    success: true;
    code?: never;
    data: T;
}
    | {
    success: false;
    code: C;
    data?: T;
};