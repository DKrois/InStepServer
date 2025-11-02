import { showTranslatedToast } from './logs';
import { closeModal, openModal, showConfirmation } from './modal';
import { getTranslation } from './translate';

const countdownContainer = document.getElementById('time-countdown')!;
const countdownLabel = document.getElementById('countdown-label')!;
const countdownDisplay = document.getElementById('countdown-display')!;

const globalStartInput = document.getElementById('time-global-start') as HTMLInputElement;
const globalEndInput = document.getElementById('time-global-end') as HTMLInputElement;

const advancedBtn = document.getElementById('time-advanced-btn')!;
const saveBtn = document.getElementById('time-save-btn')!;
const clearBtn = document.getElementById('time-clear-btn')!;

const timeModalBackdrop = document.getElementById('time-modal-backdrop')!;
const weekdayList = document.getElementById('weekday-list')!;

const modalSaveBtn = document.getElementById('time-modal-save-btn')!;
const modalClearBtn = document.getElementById('time-modal-clear-btn')!;
const modalCancelBtn = document.getElementById('time-modal-cancel-btn')!;

// --- Type definitions ---
type Time = `${number}:${number}` | '';
type Mode = 'custom' | 'wholeday' | 'off';
interface GlobalRule {
    start: Time;
    end: Time;
    mode: 'custom';
}
interface WeekdayRule {
    enabled: boolean;
    mode: Mode;
    start: Time;
    end: Time;
}
interface TimeSettings {
    enabled: boolean;
    global: GlobalRule;
    weekdays: { [key: number]: WeekdayRule };
}

// --- State management ---
const defaultState: TimeSettings = {
    enabled: false,
    global: { start: '' as Time, end: '' as Time, mode: 'custom' },
    weekdays: Object.fromEntries(Array.from({ length: 7 }, (_, i) => [i, { enabled: false, mode: 'custom', start: '', end: '' }])) as TimeSettings['weekdays']
};

let timeSettings: TimeSettings = JSON.parse(JSON.stringify(defaultState));
let lastSavedSettings: TimeSettings = JSON.parse(JSON.stringify(defaultState));
const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export function setInitialTimeSettings(settings: TimeSettings) {
    createWeekdayRows();
    populateUI(settings);
    startOrUpdateCountdown();
}

function createWeekdayRows() {
    weekdayList.innerHTML = ''; // Clear existing
    weekdays.forEach((day, index) => {
        const li = document.createElement('li');
        li.className = 'weekday-row';
        li.dataset.dayIndex = index.toString();

        li.innerHTML = `
            <input type="checkbox" class="weekday-enabled-toggle">
            <span class="weekday-name" data-i18n="${day}">${day}</span>
            <select class="weekday-mode-select">
                <option value="custom" data-i18n="customTime">Custom Time</option>
                <option value="wholeday" data-i18n="wholeday">Entire day</option>
                <option value="off" data-i18n="off">Off</option>
            </select>
            <input type="time" class="weekday-start-time">
            <input type="time" class="weekday-end-time">
        `;
        weekdayList.appendChild(li);
    });
}

function populateUI(settings: TimeSettings) {
    timeSettings = settings;
    lastSavedSettings = JSON.parse(JSON.stringify(settings)); // Deep copy for cancel functionality

    globalStartInput.value = settings.global.start || '';
    globalEndInput.value = settings.global.end || '';

    Object.entries(settings.weekdays).forEach(([i, dayConfig]) => {
        const row = weekdayList.querySelector(`[data-day-index="${i}"]`) as HTMLLIElement;
        if (!row) return;

        (row.querySelector('.weekday-enabled-toggle') as HTMLInputElement).checked = dayConfig.enabled;
        (row.querySelector('.weekday-mode-select') as HTMLSelectElement).value = dayConfig.mode;
        const startInput = row.querySelector('.weekday-start-time') as HTMLInputElement;
        const endInput = row.querySelector('.weekday-end-time') as HTMLInputElement;
        startInput.value = dayConfig.start || '';
        endInput.value = dayConfig.end || '';

        // Disable time inputs if mode is not 'custom'
        const isCustom = dayConfig.mode === 'custom';
        startInput.disabled = !isCustom;
        endInput.disabled = !isCustom;
    });
}

function readUIState() {
    const newSettings: TimeSettings = JSON.parse(JSON.stringify(timeSettings)); // Start with a copy
    newSettings.global.start = globalStartInput.value as Time;
    newSettings.global.end = globalEndInput.value as Time;

    Object.entries(newSettings.weekdays).forEach(([i, dayConfig]) => {
        const row = weekdayList.querySelector(`[data-day-index="${i}"]`) as HTMLLIElement;
        if (!row) return;
        dayConfig.enabled = (row.querySelector('.weekday-enabled-toggle') as HTMLInputElement).checked;
        dayConfig.mode = (row.querySelector('.weekday-mode-select') as HTMLSelectElement).value as Mode;
        dayConfig.start = (row.querySelector('.weekday-start-time') as HTMLInputElement).value as Time;
        dayConfig.end = (row.querySelector('.weekday-end-time') as HTMLInputElement).value as Time;
    });

    // disable if nothing configured
    newSettings.enabled = isScheduleConfigured(newSettings);
    return newSettings;
}

// --- Handlers ---
function handleSave() {
    const newSettings = readUIState();

    window.api.saveTimeSettings(newSettings);
    lastSavedSettings = newSettings;
    timeSettings = newSettings;

    showTranslatedToast('toastTimeSettingsSaved');
    closeModal(timeModalBackdrop);
    startOrUpdateCountdown();
}

async function handleClear(save = false) {
    const confirmation = await showConfirmation('confirmClearTimeSettings');

    if (confirmation) {
        populateUI(defaultState);
        if (save) handleSave();
        showTranslatedToast('toastTimeSettingsCleared');
    }
}

function handleWeekdayInteraction(event: Event) {
    const target = event.target as HTMLElement;
    const row = target.closest('.weekday-row');
    if (!row) return; // Exit if the event was not inside a row

    const enabledToggle = row.querySelector('.weekday-enabled-toggle') as HTMLInputElement;

    // If the user interacts with the mode select or time inputs, and the toggle is not already checked, check it.
    if ((target.classList.contains('weekday-mode-select') || target.classList.contains('weekday-start-time') || target.classList.contains('weekday-end-time')) && !enabledToggle.checked ) {
        enabledToggle.checked = true;
    }

    // disable time inputs if mode is not 'custom'
    if (target.classList.contains('weekday-mode-select')) {
        const startInput = row.querySelector('.weekday-start-time') as HTMLInputElement;
        const endInput = row.querySelector('.weekday-end-time') as HTMLInputElement;
        const isCustom = (target as HTMLSelectElement).value === 'custom';

        startInput.disabled = !isCustom;
        endInput.disabled = !isCustom;

        if (!isCustom) {
            startInput.value = '';
            endInput.value = '';
        }
    }
}

// Helpers
function isScheduleConfigured(settings: TimeSettings): boolean {
    if (settings.global.start && settings.global.end) {
        return true;
    }
    for (const day of Object.values(settings.weekdays)) {
        if (day.enabled) {
            if (day.mode === 'wholeday' || day.mode === 'off') {
                return true;
            }
            if (day.mode === 'custom' && day.start && day.end) {
                return true;
            }
        }
    }
    return false;
}

function parseTimeToDate(timeStr: Time, referenceDate: Date): Date {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const date = new Date(referenceDate);
    date.setHours(hours, minutes, 0, 0);
    return date;
}

function formatTimeDiff(ms: number): string {
    if (ms < 0) return '00:00:00';
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function convertJsDayToCustom(jsDay: number): number {
    // JS: 0 (Sun) - 6 (Sat) → 0 (Mon) - 6 (Sun)
    return jsDay === 0 ? 6 : jsDay - 1;
}

// --- Countdown ---
let countdownInterval: NodeJS.Timeout | null = null;
let isServerRunning = false;

function startOrUpdateCountdown() {
    if (countdownInterval) clearInterval(countdownInterval);
    updateCountdown(); // Run once immediately
    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    if (!timeSettings.enabled) {
        countdownContainer.classList.add('hidden');
        return;
    }

    const now = new Date();
    let nextEventTime: Date | null = null;
    let isNextEventAStart = !isServerRunning;

    // Find the next upcoming event in the next 7 days
    for (let i = 0; i < 7; i++) {
        const referenceDate = new Date(now);
        referenceDate.setDate(now.getDate() + i);
        referenceDate.setHours(0, 0, 0, 0); // Start of the day

        // 2. Get the JS day index and convert it to your custom index
        const dayIndex = convertJsDayToCustom(referenceDate.getDay());

        let rule: GlobalRule | WeekdayRule = timeSettings.global;
        const dayRule = timeSettings.weekdays[dayIndex];
        if (dayRule && dayRule.enabled) rule = dayRule;

        const isToday = i === 0;

        if (rule.mode === 'custom' && rule.start && rule.end) {
            const startTime = parseTimeToDate(rule.start, referenceDate);
            const endTime = parseTimeToDate(rule.end, referenceDate);

            if (!isServerRunning && startTime > now) {
                nextEventTime = startTime;
                isNextEventAStart = true;
                break;
            }
            if (isServerRunning && endTime > now) {
                nextEventTime = endTime;
                isNextEventAStart = false;
                break;
            }
        } else if (rule.mode === 'wholeday') {
            if (!isServerRunning) { // If server is off, the next event is to start
                nextEventTime = isToday ? now : referenceDate; // Start now if it's today, else start at midnight
                isNextEventAStart = true;
                break;
            }
            // If server is on, we continue to the next day to find a potential 'off' day
        } else if (rule.mode === 'off') {
            if (isServerRunning) { // If server is on, the next event is to stop
                nextEventTime = isToday ? now : referenceDate; // Stop now if it's today, else stop at midnight
                isNextEventAStart = false;
                break;
            }
            // If server is off, we continue to the next day
        }
    }

    if (nextEventTime) {
        const timeDiff = nextEventTime.getTime() - now.getTime();
        countdownDisplay.textContent = formatTimeDiff(timeDiff);

        countdownLabel.textContent = getTranslation('countdownLabel', { nextAction: isNextEventAStart ? getTranslation('startup') : getTranslation('shutdown') });

        countdownContainer.classList.remove('hidden');
    } else {
        // If no events are scheduled in the next 7 days, hide the countdown
        countdownContainer.classList.add('hidden');
    }
}

// --- Event Listeners ---
advancedBtn.addEventListener('click', () => openModal(timeModalBackdrop));
modalCancelBtn.addEventListener('click', () => {
    populateUI(lastSavedSettings); // Revert to last saved state
    closeModal(timeModalBackdrop);
});
saveBtn.addEventListener('click', handleSave);
modalSaveBtn.addEventListener('click', handleSave);
clearBtn.addEventListener('click', () => handleClear(true)); // auto-save if not within modal
modalClearBtn.addEventListener('click', () => handleClear());

weekdayList.addEventListener('change', handleWeekdayInteraction);
weekdayList.addEventListener('input', handleWeekdayInteraction);

// Listen for server status changes to keep countdown accurate
window.api.onServerStatusChanged(status => {
    isServerRunning = status.isRunning;
    startOrUpdateCountdown(); // Re-evaluate countdown when server state changes
});