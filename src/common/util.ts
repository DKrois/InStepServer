import type { IPCCodes, IPCPacket } from './types.js';

export type IPCResponse<C extends IPCCodes | '' = '', T = undefined> = Promise<IPCPacket<C, T>>

export function formatNumber(x: number, fractionDigits = 0, useGrouping = true): string {
    const [intPart, fracPart = ''] = x
        .toFixed(fractionDigits)
        .split('.');

    const groupedInt = useGrouping
        ? intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        : intPart;

    // Remove trailing 0s
    const cleanedFrac = fracPart?.replace(/0+$/, '');

    return cleanedFrac ? `${groupedInt}.${cleanedFrac}` : groupedInt;
}

export function formatCase(str: string, restLowercase = false): string {
    str = str.trim();
    const rest = str.slice(1);
    return str.charAt(0).toUpperCase() + (restLowercase ? rest.toLowerCase() : rest);
}