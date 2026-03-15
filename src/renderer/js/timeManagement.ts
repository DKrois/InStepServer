import { addZeroes, defaultTimeSettings, getEventsInfo, updateEvents } from '../../common/time';
import { schedulerCheckIntervalSeconds, schedulerUpdateEventsIntervalSeconds } from '../../../config.json';
import type { Mode, Time, TimeEvent, TimeSettings } from '../../common/types.js';
import { showTranslatedToast } from './logs';
import { closeModal, openModal, showConfirmation } from './modal';
import { getTranslation } from './translate';

const countdownContainer = document.getElementById('time-countdown')!;
const countdownLabel = document.getElementById('countdown-label')!;
const countdownDisplay = document.getElementById('countdown-display')!;

const globalStartInput = document.getElementById('time-global-start') as HTMLInputElement;
const globalEndInput = document.getElementById('time-global-stop') as HTMLInputElement;

const advancedBtn = document.getElementById('time-advanced-btn')!;
const saveBtn = document.getElementById('time-save-btn')!;
const clearBtn = document.getElementById('time-clear-btn')!;
const exportBtn = document.getElementById('time-export-btn')!;
const importBtn = document.getElementById('time-import-btn')!;

const timeModalBackdrop = document.getElementById('time-modal-backdrop')!;
const weekdayList = document.getElementById('weekday-list')!;

const modalSaveBtn = document.getElementById('time-modal-save-btn')!;
const modalClearBtn = document.getElementById('time-modal-clear-btn')!;
const modalCancelBtn = document.getElementById('time-modal-cancel-btn')!;

let timeSettings: TimeSettings = JSON.parse(JSON.stringify(defaultTimeSettings));
let lastSavedSettings: TimeSettings = JSON.parse(JSON.stringify(defaultTimeSettings));
const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

// --- Event Listeners ---
advancedBtn.addEventListener('click', () => openModal(timeModalBackdrop, () => {
    populateUI(lastSavedSettings); // Revert to last saved state
    closeModal(timeModalBackdrop);
}));
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

weekdayList.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('weekday-clear-btn')) {
        const row = target.closest('.weekday-row')!;
        const startInput = row.querySelector('.weekday-start-time') as HTMLInputElement;
        const endInput = row.querySelector('.weekday-stop-time') as HTMLInputElement;
        (row.querySelector('.weekday-enabled-toggle') as HTMLInputElement).checked = false;
        (row.querySelector('.weekday-mode-select') as HTMLSelectElement).value = 'custom';
        startInput.value = '';
        endInput.value = '';
        startInput.disabled = false;
        endInput.disabled = false;
    }
});

[globalStartInput, globalEndInput].forEach(createRightClickListeners);
window.api.onClearTimeInput((inputId) => {
    const input = document.getElementById(inputId) as HTMLInputElement;
    if (input) input.value = '';
});

// Listen for server status changes to keep countdown accurate
window.api.onServerStatusChanged(() => {
    startOrUpdateCountdown(); // Re-evaluate countdown when server state changes
});

exportBtn.addEventListener('click', async () => {
    handleSave();
    const result = await window.api.exportTimeSettings();
    if (result.success) {
        showTranslatedToast('toastExportSuccess');
    } else if (result.code === 'cancelled') {
        showTranslatedToast('cancelled');
    } else {
        showTranslatedToast('toastExportFailed', undefined, 'error');
    }
});
importBtn.addEventListener('click', async () => {
    const result = await window.api.importTimeSettings();
    if (result.success && result.data) {
        populateUI(result.data);
        startOrUpdateCountdown();
        showTranslatedToast('toastImportSuccess');
    } else if (result.code === 'cancelled') {
        showTranslatedToast('cancelled');
    } else {
        showTranslatedToast('toastImportFailed', undefined, 'error');
    }
});

// --- Handlers ---

export function setInitialTimeSettings(settings: TimeSettings) {
    createWeekdayRows();
    populateUI(settings);
    startOrUpdateCountdown();
}

function createWeekdayRows() {
    weekdayList.innerHTML = ''; // Clear existing

    const headerRow = document.createElement('li');
    headerRow.classList.add('weekday-header');
    headerRow.innerHTML = `
        <p></p>
        <p data-i18n="weekday">Weekday</p>
        <p data-i18n="mode">Mode</p>
        <p data-i18n="start">Start</p>
        <p data-i18n="stop">Stop</p>
        <p></p>
    `;

    weekdayList.appendChild(headerRow);

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
            <input type="time" class="weekday-start-time" id="time-weekday-${index}-start">
            <input type="time" class="weekday-stop-time" id="time-weekday-${index}-stop">
            <button class="weekday-clear-btn icon-button" data-i18n-title="clearDaySettings">
                <img src="assets/cross-dark.png" class="button-image no-click light-icon" alt="X">
                <img src="assets/cross-light.png" class="button-image no-click dark-icon" alt="X">
            </button>
        `;
        weekdayList.appendChild(li);
    });
}

function createRightClickListeners(input: HTMLInputElement) {
    input.addEventListener('contextmenu', event => {
        event.preventDefault(); // Stop the default right-click menu
        window.api.showClearTimeContextMenu(input.id);
    });
}

function populateUI(settings: TimeSettings) {
    timeSettings = settings;
    lastSavedSettings = JSON.parse(JSON.stringify(settings)); // Deep copy for cancel functionality

    globalStartInput.value = settings.global.start || '';
    globalEndInput.value = settings.global.stop || '';

    Object.entries(settings.weekdays).forEach(([i, dayConfig]) => {
        const row = weekdayList.querySelector(`[data-day-index="${i}"]`) as HTMLLIElement;
        if (!row) return;

        (row.querySelector('.weekday-enabled-toggle') as HTMLInputElement).checked = dayConfig.enabled;
        (row.querySelector('.weekday-mode-select') as HTMLSelectElement).value = dayConfig.mode;
        const startInput = row.querySelector('.weekday-start-time') as HTMLInputElement;
        const endInput = row.querySelector('.weekday-stop-time') as HTMLInputElement;
        startInput.value = dayConfig.start || '';
        endInput.value = dayConfig.stop || '';

        [startInput, endInput].forEach(createRightClickListeners);

        // Disable time inputs if mode is not 'custom'
        const isCustom = dayConfig.mode === 'custom';
        startInput.disabled = !isCustom;
        endInput.disabled = !isCustom;
    });
}

function readUIState() {
    const newSettings: TimeSettings = JSON.parse(JSON.stringify(timeSettings)); // Start with a copy
    newSettings.global.start = globalStartInput.value as Time;
    newSettings.global.stop = globalEndInput.value as Time;

    Object.entries(newSettings.weekdays).forEach(([i, dayConfig]) => {
        const row = weekdayList.querySelector(`[data-day-index="${i}"]`) as HTMLLIElement;
        if (!row) return;
        dayConfig.enabled = (row.querySelector('.weekday-enabled-toggle') as HTMLInputElement).checked;
        dayConfig.mode = (row.querySelector('.weekday-mode-select') as HTMLSelectElement).value as Mode;
        dayConfig.start = (row.querySelector('.weekday-start-time') as HTMLInputElement).value as Time;
        dayConfig.stop = (row.querySelector('.weekday-stop-time') as HTMLInputElement).value as Time;
    });

    // disable if nothing configured
    newSettings.enabled = isScheduleConfigured(newSettings);
    return newSettings;
}

// --- Handlers ---
function handleSave() {
    const newSettings = readUIState();

    if (JSON.stringify(lastSavedSettings) !== JSON.stringify(newSettings)) {
        window.api.saveTimeSettings(newSettings);
        lastSavedSettings = newSettings;
        timeSettings = newSettings;

        showTranslatedToast('toastTimeSettingsSaved');
        startOrUpdateCountdown();
    }

    closeModal(timeModalBackdrop);
}

async function handleClear(save = false) {
    const confirmation = await showConfirmation('confirmClearTimeSettings');

    if (confirmation) {
        populateUI(defaultTimeSettings);
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
    if ((target.classList.contains('weekday-mode-select') || target.classList.contains('weekday-start-time') || target.classList.contains('weekday-stop-time')) && !enabledToggle.checked ) {
        enabledToggle.checked = true;
    }

    // disable time inputs if mode is not 'custom'
    if (target.classList.contains('weekday-mode-select')) {
        const startInput = row.querySelector('.weekday-start-time') as HTMLInputElement;
        const endInput = row.querySelector('.weekday-stop-time') as HTMLInputElement;
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
    if (settings.global.start || settings.global.stop) {
        return true;
    }
    for (const day of Object.values(settings.weekdays)) {
        if (day.enabled) {
            if (day.mode === 'wholeday' || day.mode === 'off') return true;
            if (day.mode === 'custom' && (day.start || day.stop)) return true;
        }
    }
    return false;
}

function formatTimeDiff(ms: number): string {
    if (ms < 0) return '00:00:00';
    const totalSeconds = Math.floor(ms / 1000);
    const hours = addZeroes(Math.floor(totalSeconds / 3600));
    const minutes = addZeroes(Math.floor((totalSeconds % 3600) / 60));
    const seconds = addZeroes((totalSeconds % 60));
    return `${hours}:${minutes}:${seconds}`;
}

// --- Countdown ---
/* Intervals:
 * - updateEventsInterval: Generates list of events
 * - checkEventsInterval: Checks for the next event
 * - countdownInterval: Updates countdown (once per sec)
 */
let updateEventsInterval: NodeJS.Timeout | null = null;
let checkEventsInterval: NodeJS.Timeout | null = null;
let countdownInterval: NodeJS.Timeout | null = null;
let nextEvent: TimeEvent | undefined = undefined;

function startOrUpdateCountdown() {
    if (updateEventsInterval) clearInterval(updateEventsInterval);
    if (checkEventsInterval) clearInterval(checkEventsInterval);
    if (countdownInterval) clearInterval(countdownInterval);

    // Run once immediately
    updateEvents(timeSettings);
    checkEvents();
    updateCountdown();

    updateEventsInterval = setInterval(() => updateEvents(timeSettings), schedulerUpdateEventsIntervalSeconds * 1000);
    checkEventsInterval = setInterval(checkEvents, schedulerCheckIntervalSeconds * 1000);
    countdownInterval = setInterval(updateCountdown, 1000);
}

function checkEvents() {
    if (!timeSettings.enabled) {
        nextEvent = undefined;
        return;
    }
    nextEvent = getEventsInfo().nextStateChangeEvent;
}

function updateCountdown() {
    if (!nextEvent) {
        countdownContainer.classList.add('hidden');
        return;
    }

    const timeDiff = nextEvent.time - Date.now();
    if (timeDiff < 0) {
        countdownContainer.classList.add('hidden');
        return;
    }

    const isNextEventAStart = nextEvent.type === 'start';
    // update ui
    countdownDisplay.textContent = formatTimeDiff(timeDiff);
    countdownLabel.textContent = getTranslation('countdownLabel', {
        nextAction: getTranslation(isNextEventAStart ? 'startup' : 'shutdown')
    });
    countdownContainer.classList.remove('hidden');
}