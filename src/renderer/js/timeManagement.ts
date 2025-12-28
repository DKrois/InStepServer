import { addZeroes, defaultTimeSettings, generateScheduleEvents, Mode, Time, TimeSettings } from '../../common/time';
import { schedulerIntervalTime } from '../../../config.json';
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

weekdayList.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('weekday-clear-btn')) {
        const row = target.closest('.weekday-row')!;
        const startInput = row.querySelector('.weekday-start-time') as HTMLInputElement;
        const endInput = row.querySelector('.weekday-end-time') as HTMLInputElement;
        (row.querySelector('.weekday-enabled-toggle') as HTMLInputElement).checked = false;
        (row.querySelector('.weekday-mode-select') as HTMLSelectElement).value = 'custom';
        startInput.value = '';
        endInput.value = '';
        startInput.disabled = false;
        endInput.disabled = false;
    }
});

[globalStartInput, globalEndInput].forEach(input => {
    input.addEventListener('contextmenu', (event) => {
        event.preventDefault(); // Stop the default right-click menu
        window.api.showClearTimeContextMenu(input.id);
    });
});
window.api.onClearTimeInput((inputId) => {
    const input = document.getElementById(inputId) as HTMLInputElement;
    if (input) {
        input.value = '';
    }
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
            <button class="weekday-clear-btn icon-button" data-i18n-title="clearDaySettings">
                <img src="assets/cross-dark.png" class="button-image no-click light-icon" alt="X">
                <img src="assets/cross-light.png" class="button-image no-click dark-icon" alt="X">
            </button>
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
    if (settings.global.start || settings.global.end) {
        return true;
    }
    for (const day of Object.values(settings.weekdays)) {
        if (day.enabled) {
            if (day.mode === 'wholeday' || day.mode === 'off') return true;
            if (day.mode === 'custom' && (day.start || day.end)) return true;
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
let countdownInterval: NodeJS.Timeout | null = null;
let scheduleUpdateInterval: NodeJS.Timeout | null = null;
let nextEvent: { time: Date, type: 'start' | 'stop' } | null = null;

function startOrUpdateCountdown() {
    if (scheduleUpdateInterval) clearInterval(scheduleUpdateInterval);
    if (countdownInterval) clearInterval(countdownInterval);

    // Run once immediately
    updateSchedule();
    updateCountdown();

    scheduleUpdateInterval = setInterval(updateSchedule, schedulerIntervalTime);
    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateSchedule() {
    if (!timeSettings.enabled) {
        nextEvent = null;
        return;
    }

    const now = new Date();
    const events = generateScheduleEvents(timeSettings);

    if (events.length === 0) {
        nextEvent = null;
        return;
    }

    // find most recent event in the past to know what the state should be
    const pastEvents = events.filter(e => e.time <= now);
    const lastEvent = pastEvents.length > 0 ? pastEvents[pastEvents.length - 1] : null;
    const isRunningAccordingToSchedule = lastEvent ? lastEvent.type === 'start' : false;

    // find next event that will change state
    let nextStateChangeEvent;
    if (isRunningAccordingToSchedule) {
        nextStateChangeEvent = events.find(e => e.time > now && e.type === 'stop');
    } else {
        nextStateChangeEvent = events.find(e => e.time > now && e.type === 'start');
    }

    nextEvent = nextStateChangeEvent || null;
}

function updateCountdown() {
    if (!nextEvent) {
        countdownContainer.classList.add('hidden');
        return;
    }

    const now = new Date();
    const timeDiff = nextEvent.time.getTime() - now.getTime();

    if (timeDiff < 0) {
        countdownContainer.classList.add('hidden');
        return;
    }

    const isNextEventAStart = nextEvent.type === 'start';

    // update ui
    countdownDisplay.textContent = formatTimeDiff(timeDiff);
    countdownLabel.textContent = getTranslation('countdownLabel', {
        nextAction: isNextEventAStart ? getTranslation('startup') : getTranslation('shutdown')
    });
    countdownContainer.classList.remove('hidden');
}