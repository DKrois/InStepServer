import { showTranslatedToast } from './logs';
import { type Duration, getTotalMsPartial, normalizeDuration } from '../../common/time';
import { setRestartServerInfoVisible } from './serverStatus';
import type { InitialSettings } from '../../common/types.js';

const securityCard = document.getElementById('security-card')!;

const lockedSection = document.getElementById('locked-section')!;
const currentPasswordInput = document.getElementById('current-password-input') as HTMLInputElement;
const newPasswordInput = document.getElementById('new-password-input') as HTMLInputElement;
const unlockBtn = document.getElementById('unlock-btn')!;
const lockBtn = document.getElementById('lock-btn')!;
const saveBtn = document.getElementById('save-security-btn')!;

const toggleCurrentPasswordBtn = document.getElementById('toggle-current-password')!;
const toggleNewPasswordBtn = document.getElementById('toggle-new-password')!;

const releaseIMDLockBtn = document.getElementById('release-imd-lock')!;
const enableIMDAPICheckbox = document.getElementById('imd-api-toggle')! as HTMLInputElement;
const clearSessionsBtn = document.getElementById('clear-sessions-btn')!;

const sessionYearsInput = document.getElementById('session-years-input') as HTMLInputElement;
const sessionDaysInput = document.getElementById('session-days-input') as HTMLInputElement;
const sessionHoursInput = document.getElementById('session-hours-input') as HTMLInputElement;
const sessionMinutesInput = document.getElementById('session-minutes-input') as HTMLInputElement;

const maxLoginAttemptsInput = document.getElementById('max-attempts-input') as HTMLInputElement;
const lockoutMinutesInput = document.getElementById('lockout-minutes-input') as HTMLInputElement;

// local flags
let currentDurationMs = 0;
let previousEnableIMDAPI = false;
let previousMaxAttempts = 5;
let previousLockoutMinutes = 10;

// --- Event Listeners ---
unlockBtn.addEventListener('click', handleUnlock);
lockBtn.addEventListener('click', () => setLockedState(true));
saveBtn.addEventListener('click', handleSave);

currentPasswordInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleUnlock();
    }
});

// save on enter
lockedSection.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        // Don't trigger save if the user is typing in a textarea
        /*const targetElement = event.target as HTMLElement;
        if (targetElement && targetElement.tagName === 'TEXTAREA') {
            return; // Do nothing, allow the default newline behavior
        }*/

        event.preventDefault();
        handleSave();
    }
});

// Show/Hide password functionality
toggleCurrentPasswordBtn.addEventListener('click', () => {
    const isPassword = currentPasswordInput.type === 'password';
    currentPasswordInput.type = isPassword ? 'text' : 'password';
    toggleCurrentPasswordBtn.classList.toggle('password-shown', isPassword);
});

toggleNewPasswordBtn.addEventListener('click', () => {
    const isPassword = newPasswordInput.type === 'password';
    newPasswordInput.type = isPassword ? 'text' : 'password';
    toggleNewPasswordBtn.classList.toggle('password-shown', isPassword);
});

releaseIMDLockBtn.addEventListener('click', async () => {
    const currentPassword = currentPasswordInput.value;

    const result = await window.api.releaseIMDLock(currentPassword);
    if (result.success) {
        showTranslatedToast( 'toastIMDLockReleased');
    } else {
        showTranslatedToast('toastPasswordIncorrect', undefined, 'error');
        setLockedState(true);
    }
});

clearSessionsBtn.addEventListener('click', async () => {
    const currentPassword = currentPasswordInput.value;

    const result = await window.api.clearSessions(currentPassword);
    if (result.success) {
        showTranslatedToast('toastSessionsCleared');
        setRestartServerInfoVisible(true);
    } else {
        showTranslatedToast('toastPasswordIncorrect', undefined, 'error');
        setLockedState(true);
    }
});

export function setInitialSecuritySettings(settings: Pick<InitialSettings, 'imdEnabled' | 'sessionDuration' | 'maxLoginAttempts' | 'lockoutMinutes'>) {
    const { imdEnabled, sessionDuration, maxLoginAttempts, lockoutMinutes } = settings;
    currentDurationMs = sessionDuration;
    previousMaxAttempts = maxLoginAttempts;
    previousLockoutMinutes = lockoutMinutes;
    previousEnableIMDAPI = imdEnabled;

    enableIMDAPICheckbox.checked = imdEnabled;

    const duration = normalizeDuration(currentDurationMs, false, 'y', ['M', 'w']);
    sessionYearsInput.value = String(duration.years);
    sessionDaysInput.value = String(duration.days);
    sessionHoursInput.value = String(duration.hours);
    sessionMinutesInput.value = String(duration.minutes);

    maxLoginAttemptsInput.value = maxLoginAttempts.toString(10);
    lockoutMinutesInput.value = lockoutMinutes.toString(10);
}

function setLockedState(locked: boolean) {
    securityCard.classList.toggle('is-locked', locked);

    if (locked) {
        currentPasswordInput.value = '';
        newPasswordInput.value = '';
    }
}

async function handleUnlock() {
    const password = currentPasswordInput.value;
    const isCorrect = await window.api.verifyPassword(password);

    if (isCorrect) {
        setLockedState(false); // Unlock the form
    } else {
        showTranslatedToast('toastPasswordIncorrect', undefined, 'error');
        currentPasswordInput.value = '';
    }
}

async function handleSave() {
    // validation first to avoid changing anything (& locking) if smth is invalid
    const currentPassword = currentPasswordInput.value;
    if (!currentPassword) {
        showTranslatedToast('toastPasswordEmpty', undefined, 'error');
        return;
    }

    // duration
    const p = (e: HTMLInputElement) => parseInt(e.value, 10) ?? 0;
    const years = p(sessionYearsInput);
    const days = p(sessionDaysInput);
    const hours = p(sessionHoursInput);
    const minutes = p(sessionMinutesInput);
    if (years < 0 || days < 0 || hours < 0 || minutes < 0) {
        showTranslatedToast('toastInvalidDuration', undefined, 'error');
        return;
    }

    // lockout settings
    const maxAttempts = parseInt(maxLoginAttemptsInput.value, 10);
    const lockoutMinutes = parseInt(lockoutMinutesInput.value, 10);
    if (isNaN(maxAttempts) || isNaN(lockoutMinutes) || maxAttempts < 1 || lockoutMinutes < 1) {
        showTranslatedToast('toastInvalidLoginSecuritySettings', undefined, 'error');
        return;
    }

    // --- handle saves ---
    const imdEnabledResult = await handleSaveIMDEnabledState(currentPassword);
    if (imdEnabledResult.code === 'invalid-password') {
        setLockedState(true);
        return;
    }

    const durationResult = await handleSaveDuration({ years, days, hours, minutes }, currentPassword);
    if (durationResult.code === 'invalid-password') {
        setLockedState(true);
        return;
    }

    const passwordResult = await handleSavePassword(currentPassword);
    if (passwordResult.code === 'invalid-password') {
        setLockedState(true);
        return;
    }

    const lockoutResult = await handleSaveLockoutSettings({ maxAttempts, lockoutMinutes }, currentPassword);
    if (lockoutResult.code === 'invalid-password') {
        setLockedState(true);
        return;
    }

    setLockedState(true);
}

async function handleSaveIMDEnabledState(currentPassword: string): Promise<{ success: boolean, code?: 'invalid-password' }> {
    const enableIMDAPI = enableIMDAPICheckbox.checked;
    if (enableIMDAPI !== previousEnableIMDAPI) {
        previousEnableIMDAPI = enableIMDAPI;

        const enableIMDAPIResult = await window.api.toggleIMDAPI(enableIMDAPI, currentPassword);
        if (enableIMDAPIResult.success) {
            showTranslatedToast( enableIMDAPI ? 'toastIMDAPIEnabled' : 'toastIMDAPIDisabled');
            return { success: true };
        } else {
            showTranslatedToast('toastPasswordIncorrect', undefined, 'error');
            setLockedState(true);
            return { success: false, code: 'invalid-password' };
        }
    }

    // just return success: true for simplicity
    return { success: true };
}

async function handleSaveDuration(
    d: Partial<Duration>, currentPassword: string
) : Promise<{ success: boolean, code?: 'unchanged-duration' | 'invalid-password' }> {
    const totalMs = getTotalMsPartial(d);
    if (totalMs === currentDurationMs) return { success: false, code: 'unchanged-duration' };

    const result = await window.api.updateSessionDuration(totalMs, currentPassword);
    if (result.success) {
        showTranslatedToast('toastDurationUpdated');
        setRestartServerInfoVisible(true);

        currentDurationMs = totalMs;
        return { success: true };
    } else {
        showTranslatedToast('toastPasswordIncorrect', undefined, 'error');
        return { success: false, code: 'invalid-password' };
    }
}

async function handleSavePassword(currentPassword: string): Promise<{ success: boolean, code?: 'empty-password' | 'invalid-password' }> {
    const newPassword = newPasswordInput.value;
    if (!newPassword) return { success: false, code: 'empty-password' };

    const result = await window.api.updatePassword(currentPassword, newPassword);
    if (result.success) {
        showTranslatedToast('toastPasswordUpdated');
        return { success: true };
    } else {
        showTranslatedToast('toastPasswordIncorrect', undefined, 'error');
        return { success: false, code: 'invalid-password' };
    }
}

async function handleSaveLockoutSettings(settings: { maxAttempts: number; lockoutMinutes: number }, currentPassword: string) {
    const { maxAttempts, lockoutMinutes } = settings;

    if (maxAttempts === previousMaxAttempts && lockoutMinutes === previousLockoutMinutes) {
        return { changed: false };
    }

    const result = await window.api.updateLoginSecuritySettings(settings, currentPassword);
    if (result.success) {
        // Update the in-memory state
        previousMaxAttempts = maxAttempts;
        previousLockoutMinutes = lockoutMinutes;
        showTranslatedToast('toastLoginSecuritySettingsUpdated');
        return { success: true, changed: true };
    }

    if (result.code === 'permission-denied') {
        showTranslatedToast('toastPasswordIncorrect', undefined, 'error');
        return { code: 'permission-denied' };
    }

    // Catch any other unexpected errors
    return { code: 'error' };
}