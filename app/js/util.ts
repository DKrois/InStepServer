// noinspection DuplicatedCode
export function getCurrentTime(includeMillis = false, gmt = false): string {
    return timeToString(new Date(), gmt, includeMillis);
}

// noinspection DuplicatedCode
function timeToString(time: number | Date | null, gmt = false, includeMillis = true): string {
    if (time === null) return 'time null';

    let dt;
    if (typeof time === 'number') {
        const isMillis = time.toString().length > 12;
        dt = isMillis ? new Date(time) : new Date(time * 1000);
    } else {
        dt = time;
    }

    const year = addZeroes(gmt ? dt.getUTCFullYear() : dt.getFullYear(), 2);
    const month = addZeroes((gmt ? dt.getUTCMonth() : dt.getMonth()) + 1, 2);
    const day = addZeroes(gmt ? dt.getUTCDate() : dt.getDate(), 2);
    const hours = addZeroes(gmt ? dt.getUTCHours() : dt.getHours(), 2);
    const minutes = addZeroes(gmt ? dt.getUTCMinutes() : dt.getMinutes(), 2);
    const seconds = addZeroes(gmt ? dt.getUTCSeconds() : dt.getSeconds(), 2);
    const millis = includeMillis ? `.${addZeroes(gmt ? dt.getUTCMilliseconds() : dt.getMilliseconds(), 3)}` : '';

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}${millis}`;
}

function addZeroes(str: number, padAmount: number, radix: number = 10): string {
    return str.toString(radix).padStart(padAmount, '0');
}