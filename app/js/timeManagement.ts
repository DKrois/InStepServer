import { showTranslatedToast } from './logs';
import { getTranslation } from './translate';

const globalStartInput = document.getElementById('time-global-start') as HTMLInputElement;
const globalEndInput = document.getElementById('time-global-end') as HTMLInputElement;

const advancedBtn = document.getElementById('time-advanced-btn')!;
const saveBtn = document.getElementById('time-save-btn')!;
const clearBtn = document.getElementById('time-clear-btn')!;

const modalBackdrop = document.getElementById('time-modal-backdrop')!;
const weekdayList = document.getElementById('weekday-list')!;

const modalSaveBtn = document.getElementById('time-modal-save-btn')!;
const modalClearBtn = document.getElementById('time-modal-clear-btn')!;
const modalCancelBtn = document.getElementById('time-modal-cancel-btn')!;

type Time = `${number}:${number}` | '';
type Mode = 'custom' | 'wholeday' | 'off';
interface Weekday {
    enabled: boolean;
    mode: Mode;
    start: Time;
    end: Time;
}
interface TimeSettings {
    enabled: boolean;
    global: { start: Time, end: Time };
    weekdays: {
        0: Weekday; // Monday
        1: Weekday;
        2: Weekday;
        3: Weekday;
        4: Weekday;
        5: Weekday;
        6: Weekday; // Sunday
    }
}

const defaultState = {
    enabled: false,
    global: { start: '' as Time, end: '' as Time },
    weekdays: Object.fromEntries(Array.from({ length: 7 }, (_, i) => [i, { enabled: false, mode: 'custom', start: '', end: '' }])) as TimeSettings['weekdays']
};

let timeSettings: TimeSettings = defaultState;
let lastSavedSettings: TimeSettings = defaultState;
const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export function setInitialTimeSettings(settings: TimeSettings) {
    createWeekdayRows();
    populateUI(settings);
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
    const newSettings = JSON.parse(JSON.stringify(timeSettings)); // Start with a copy
    newSettings.enabled = true; // Saving implies enabling
    newSettings.global.start = globalStartInput.value;
    newSettings.global.end = globalEndInput.value;

    for (let i = 0; i < 7; i++) {
        const row = weekdayList.querySelector(`[data-day-index="${i}"]`) as HTMLLIElement;
        if (!row) continue;
        newSettings.weekdays[i].enabled = (row.querySelector('.weekday-enabled-toggle') as HTMLInputElement).checked;
        newSettings.weekdays[i].mode = (row.querySelector('.weekday-mode-select') as HTMLSelectElement).value;
        newSettings.weekdays[i].start = (row.querySelector('.weekday-start-time') as HTMLInputElement).value;
        newSettings.weekdays[i].end = (row.querySelector('.weekday-end-time') as HTMLInputElement).value;
    }
    return newSettings;
}

function handleSave() {
    const newSettings = readUIState();
    window.api.saveTimeSettings(newSettings);
    lastSavedSettings = newSettings; // Update the "last saved" state
    showTranslatedToast('toastTimeSettingsSaved');
    modalBackdrop.classList.add('hidden');
}

function handleClear(save = false) {
    const confirmation = confirm(getTranslation('confirmClearTimeSettings'));

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

    // --- LOGIC FOR DISABLING TIME INPUTS (from your existing code) ---
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

// --- Event Listeners ---
advancedBtn.addEventListener('click', () => modalBackdrop.classList.remove('hidden'));
modalCancelBtn.addEventListener('click', () => {
    populateUI(lastSavedSettings); // Revert to last saved state
    modalBackdrop.classList.add('hidden');
});
saveBtn.addEventListener('click', handleSave);
modalSaveBtn.addEventListener('click', handleSave);
clearBtn.addEventListener('click', () => handleClear(true));
modalClearBtn.addEventListener('click', () => handleClear());

weekdayList.addEventListener('change', handleWeekdayInteraction);
weekdayList.addEventListener('input', handleWeekdayInteraction);