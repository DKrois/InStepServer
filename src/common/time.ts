export function getCurrentTime(includeMillis = false, gmt = false): string {
    return timeToString(new Date(), gmt, includeMillis);
}

function timeToString(time: number | Date | null, gmt = false, includeMillis = true): string {
    if (time === null) return 'time null';

    let dt;
    if (typeof time === 'number') {
        const isMillis = time.toString().length > 12;
        dt = isMillis ? new Date(time) : new Date(time * 1000);
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

type SplitDuration = { years: number, months: number, weeks: number, days: number, hours: number, minutes: number, seconds: number, milliseconds: number }
type DurationUnits = 'y' | 'M' | 'w' | 'd' | 'h' | 'm' | 's' | 'ms';
const DurationUnits: DurationUnits[] = ['y', 'M', 'w', 'd', 'h', 'm', 's', 'ms'];
export enum Durations {
    msInSecond = 1000,
    secondsInMinute = 60,
    msInMinute = msInSecond * secondsInMinute,
    minutesInHour = 60,
    msInHour = msInMinute * minutesInHour,
    hoursInDay = 24,
    msInDay = msInHour * hoursInDay,
    daysInWeek = 7,
    msInWeek = msInDay * daysInWeek,
    daysInYear = 365.2425,
    monthsInYear = daysInYear / 12,
    daysInMonth = daysInYear / monthsInYear,
    weeksInMonth = daysInMonth / daysInWeek,
    msInMonth = msInDay * daysInMonth,
    msInYear = msInDay * daysInYear,
}

export function getTotalMs(duration: SplitDuration | number[]) {
    if (Array.isArray(duration)) duration = createDuration(duration);

    return Math.floor(duration.milliseconds
        + duration.seconds * Durations.msInSecond
        + duration.minutes * Durations.msInMinute
        + duration.hours * Durations.msInHour
        + duration.days * Durations.msInDay
        + duration.weeks * Durations.msInWeek
        + duration.months * Durations.msInMonth
        + duration.years * Durations.msInYear);
}

export function normalizeDuration(duration: SplitDuration | number[] | number, returnArr?: false, highest?: DurationUnits, exclude?: DurationUnits[]): SplitDuration;
export function normalizeDuration(duration: SplitDuration | number[] | number, returnArr?: true, highest?: DurationUnits, exclude?: DurationUnits[]): number[];

export function normalizeDuration(duration: SplitDuration | number[] | number, returnArr?: boolean, highest: DurationUnits = 'y', exclude: DurationUnits[] = []): number[] | SplitDuration {
    let remainingMs = typeof duration === 'number' ? duration : getTotalMs(duration);
    const highestIndex = DurationUnits.indexOf(highest);

    const result: number[] = [];
    if (!exclude.includes('y') && highestIndex <= DurationUnits.indexOf('y')) {
        result.push(Math.floor(remainingMs / Durations.msInYear));
        remainingMs %= Durations.msInYear;
    } else result.push(0);
    if (!exclude.includes('M') && highestIndex <= DurationUnits.indexOf('M')) {
        result.push(Math.floor(remainingMs / Durations.msInMonth));
        remainingMs %= Durations.msInMonth;
    } else result.push(0);
    if (!exclude.includes('w') && highestIndex <= DurationUnits.indexOf('w')) {
        result.push(Math.floor(remainingMs / Durations.msInWeek));
        remainingMs %= Durations.msInWeek;
    } else result.push(0);
    if (!exclude.includes('d') && highestIndex <= DurationUnits.indexOf('d')) {
        result.push(Math.floor(remainingMs / Durations.msInDay));
        remainingMs %= Durations.msInDay;
    } else result.push(0);
    if (!exclude.includes('h') && highestIndex <= DurationUnits.indexOf('h')) {
        result.push(Math.floor(remainingMs / Durations.msInHour));
        remainingMs %= Durations.msInHour;
    } else result.push(0);
    if (!exclude.includes('m') && highestIndex <= DurationUnits.indexOf('m')) {
        result.push(Math.floor(remainingMs / Durations.msInMinute));
        remainingMs %= Durations.msInMinute;
    } else result.push(0);
    if (!exclude.includes('s') && highestIndex <= DurationUnits.indexOf('s')) {
        result.push(Math.floor(remainingMs / Durations.msInSecond));
        remainingMs %= Durations.msInSecond;
    } else result.push(0);

    result.push(remainingMs);

    return returnArr ? result : createDuration(result);
}

export function createDuration(duration: Partial<SplitDuration> | number[]): SplitDuration {
    if (Array.isArray(duration)) {
        return {
            years: duration[0],
            months: duration[1],
            weeks: duration[2],
            days: duration[3],
            hours: duration[4],
            minutes: duration[5],
            seconds: duration[6],
            milliseconds: duration[7],
        }
    } else {
        return {
            years: duration.years ?? 0,
            months: duration.months ?? 0,
            weeks: duration.weeks ?? 0,
            days: duration.days ?? 0,
            hours: duration.hours ?? 0,
            minutes: duration.minutes ?? 0,
            seconds: duration.seconds ?? 0,
            milliseconds: duration.milliseconds ?? 0,
        }
    }
}