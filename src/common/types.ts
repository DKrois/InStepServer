export type QRType = 'ip' | 'mdns' | 'hostname';

export type IPCCodes = 'error' | 'cancelled' | 'invalid-data' | 'permission-denied' | 'ip-failed';

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

export type IPCResponse<C extends IPCCodes | '' = '', T = undefined> = Promise<IPCPacket<C, T>>;

export type TimeEvent = { time: number; type: 'start' | 'stop' };
export type Time = `${number}:${number}` | '';
export type Mode = 'custom' | 'wholeday' | 'off';
export interface GlobalRule {
    start: Time;
    stop: Time;
    mode: 'custom';
}

export interface WeekdayRule {
    enabled: boolean;
    mode: Mode;
    start?: Time;
    stop?: Time;
}

export interface TimeSettings {
    enabled: boolean;
    global: GlobalRule;
    weekdays: { [key: number]: WeekdayRule };
}

export interface InitialSettings {
    version: string;
    port: number;
    language: string;
    timeSettings: TimeSettings;
    imdEnabled: boolean;
    sessionDuration: number;
    maxLoginAttempts: number;
    lockoutMinutes: number;
    isDarkMode: boolean;
    serverEnabled: boolean;
}

export interface Stats {
    appDownloadCount: number;
    projectsCount: number;
    fileCount: number;
    sizeUsed: string;
}