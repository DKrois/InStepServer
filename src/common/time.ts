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

    const year = addZeroes(gmt ? dt.getUTCFullYear() : dt.getFullYear());
    const month = addZeroes((gmt ? dt.getUTCMonth() : dt.getMonth()) + 1);
    const day = addZeroes(gmt ? dt.getUTCDate() : dt.getDate());
    const hours = addZeroes(gmt ? dt.getUTCHours() : dt.getHours());
    const minutes = addZeroes(gmt ? dt.getUTCMinutes() : dt.getMinutes());
    const seconds = addZeroes(gmt ? dt.getUTCSeconds() : dt.getSeconds());
    const millis = includeMillis ? `.${addZeroes(gmt ? dt.getUTCMilliseconds() : dt.getMilliseconds(), 3)}` : '';

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}${millis}`;
}
export function addZeroes(str: number, padAmount: number = 2, radix: number = 10): string {
    return str.toString(radix).padStart(padAmount, '0');
}

type SplitDuration = { years: number, months: number, weeks: number, days: number, hours: number, minutes: number, seconds: number, milliseconds: number }
const DurationUnits = ['y', 'M', 'w', 'd', 'h', 'm', 's', 'ms'] as const;
type DurationUnit = typeof DurationUnits[number];
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

export function normalizeDuration(duration: SplitDuration | number[] | number, returnArr?: false, highest?: DurationUnit, exclude?: DurationUnit[]): SplitDuration;
export function normalizeDuration(duration: SplitDuration | number[] | number, returnArr?: true, highest?: DurationUnit, exclude?: DurationUnit[]): number[];

export function normalizeDuration(duration: SplitDuration | number[] | number, returnArr?: boolean, highest: DurationUnit = 'y', exclude: DurationUnit[] = []): number[] | SplitDuration {
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

// --- Scheduler ---
export type Time = `${number}:${number}` | '';
export type Mode = 'custom' | 'wholeday' | 'off';
export interface GlobalRule {
    start: Time;
    end: Time;
    mode: 'custom';
}
export interface WeekdayRule {
    enabled: boolean;
    mode: Mode;
    start: Time;
    end: Time;
}
export interface TimeSettings {
    enabled: boolean;
    global: GlobalRule;
    weekdays: { [key: number]: WeekdayRule };
}

export const defaultTimeSettings: TimeSettings = {
    enabled: false,
    global: { start: '' as Time, end: '' as Time, mode: 'custom' },
    weekdays: Object.fromEntries(Array.from({ length: 7 }, (_, i) => [i, { enabled: false, mode: 'custom', start: '', end: '' }])) as TimeSettings['weekdays']
};
// Define a default rule for when no other configuration applies
const DEFAULT_RULE = { mode: 'off', enabled: true };

export function parseTimeToDate(timeStr: Time, referenceDate: Date): Date {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const date = new Date(referenceDate);
    date.setHours(hours, minutes, 0, 0);
    return date;
}

export function convertJsDayToCustom(jsDay: number): number {
    // JS: 0 (Sun) - 6 (Sat) → 0 (Mon) - 6 (Sun)
    return jsDay === 0 ? 6 : jsDay - 1;
}

/**
 * Generates a chronological list of start/stop events based on time settings.
 * @param {object} timeSettings - The full time settings object
 * @returns {{time: Date, type: 'start' | 'stop'}[]} A sorted array of event objects.
 */
export function generateScheduleEvents(timeSettings: any): { time: Date; type: 'start' | 'stop'; }[] {
    if (!timeSettings?.enabled) return [];

    const events: { time: Date, type: 'start' | 'stop' }[] = [];
    const now = new Date();

    // Generate events for a wide window to catch all relevant past/future events
    for (let i = -7; i < 14; i++) {
        const date = new Date(now);
        date.setDate(now.getDate() + i);
        date.setHours(0, 0, 0, 0); // Start of the day

        const dayIndex = convertJsDayToCustom(date.getDay());

        let rule = timeSettings.weekdays?.[dayIndex];
        if (!rule?.enabled) rule = timeSettings.global; // fallback to global
        if (!rule?.enabled) rule = DEFAULT_RULE; // fallback to default

        const { mode, start, end } = rule;

        // --- Translate the effective rule into events ---
        if (mode === 'wholeday') {
            events.push({ time: date, type: 'start' });
        } else if (mode === 'off') {
            events.push({ time: date, type: 'stop' });
        } else if (mode === 'custom' || !mode) { // Catches global and custom rules

            // treat undefined rules as off day
            if (!start && !end) {
                events.push({ time: date, type: 'stop' });
                continue; // move to next day
            }

            if (start && end) {
                const startDate = parseTimeToDate(start, date);
                const endDate = parseTimeToDate(end, date);
                events.push({ time: startDate, type: 'start' });
                if (endDate < startDate) {
                    endDate.setDate(endDate.getDate() + 1);
                }
                events.push({ time: endDate, type: 'stop' });
            } else if (start) {
                events.push({ time: parseTimeToDate(start, date), type: 'start' });
            } else if (end) {
                events.push({ time: parseTimeToDate(end, date), type: 'stop' });
            }
        }
    }

    // sort all events chronologically
    return events.sort((a, b) => a.time.getTime() - b.time.getTime());
}