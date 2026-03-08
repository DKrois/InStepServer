import { showTranslatedToast } from './logs';
import { createDuration, getTotalMs, normalizeDuration } from '../../common/time';
import { setRestartServerInfoVisible } from './serverStatus';

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
releaseIMDLockBtn.addEventListener('click', releaseIMDLock);

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

export function setInitialSecuritySettings(settings: { imdEnabled: boolean, sessionDuration: number, maxLoginAttempts: number, lockoutMinutes: number }) {
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
    const currentPassword = currentPasswordInput.value;
    if (!currentPassword) {
        showTranslatedToast('toastPasswordEmpty', undefined, 'error');
        return;
    }

    // -- handle session --
    const enableIMDAPI = enableIMDAPICheckbox.checked;
    if (enableIMDAPI !== previousEnableIMDAPI) {
        previousEnableIMDAPI = enableIMDAPI;
        const enableIMDAPIResult = await window.api.toggleIMDAPI(enableIMDAPI, currentPassword);
        if (enableIMDAPIResult.success) {
            showTranslatedToast( enableIMDAPI ? 'toastIMDAPIEnabled' : 'toastIMDAPIDisabled');
        } else {
            showTranslatedToast('toastPasswordIncorrect', undefined, 'error');
            setLockedState(true);
            return;
        }
    }

    const durationResult = await handleSaveDuration();

    // user entered invalid duration; toast already shown. don't lock, don't continue (avoid confusion if pw changed)
    if (durationResult.code === 'invalid-duration') return;

    // pw wrong for duration update
    if (durationResult.code === 'invalid-password') {
        // lock and don't continue (as update pw request would fail anyway)
        setLockedState(true);
        return;
    }
    if (durationResult.success) setRestartServerInfoVisible(true);

    // if duration change successful or duration wasn't changed, continue
    // -- handle password change --
    const passwordResult = await handleSavePassword();

    // duration unchanged but user tried to change pw & current pw is wrong
    if (passwordResult.code === 'invalid-password') {
        // duration request wasn't made (→ invalid pw toast wasn't shown yet)
        setLockedState(true);
        return;
    }

    const securityResult = await handleSaveLockoutSettings();
    if (securityResult.code === 'invalid-settings') return;
    if (securityResult.code === 'invalid-password') {
        setLockedState(true);
        return;
    }

    // lock again
    setLockedState(true);
}

async function handleSavePassword(): Promise<{ success: boolean, code?: 'empty-password' | 'invalid-password' }> {
    const newPassword = newPasswordInput.value;
    const currentPassword = currentPasswordInput.value;

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

async function handleSaveLockoutSettings() {
    const newMaxTries = parseInt(maxLoginAttemptsInput.value, 10);
    const newLockoutMinutes = parseInt(lockoutMinutesInput.value, 10);

    // Basic validation
    if (isNaN(newMaxTries) || isNaN(newLockoutMinutes) || newMaxTries < 1 || newLockoutMinutes < 1) {
        showTranslatedToast('toastInvalidLoginSecuritySettings', undefined, 'error');
        return { code: 'invalid-settings' };
    }

    const maxTriesChanged = newMaxTries !== previousMaxAttempts;
    const lockoutMinutesChanged = newLockoutMinutes !== previousLockoutMinutes;

    // If nothing changed, we don't need to do anything
    if (!maxTriesChanged && !lockoutMinutesChanged) {
        return { success: true, changed: false };
    }

    // Something changed, so we need the password and must call the API
    const currentPassword = currentPasswordInput.value;
    const result = await window.api.updateLoginSecuritySettings({
        maxAttempts: newMaxTries,
        lockoutMinutes: newLockoutMinutes
    }, currentPassword);

    if (result.success) {
        // Update the in-memory state
        previousMaxAttempts = newMaxTries;
        previousLockoutMinutes = newLockoutMinutes;
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

// --- Session config ---
async function releaseIMDLock() {
    const currentPassword = currentPasswordInput.value;

    const result = await window.api.releaseIMDLock(currentPassword);
    if (result.success) {
        showTranslatedToast( 'toastIMDLockReleased');
    } else {
        showTranslatedToast('toastPasswordIncorrect', undefined, 'error');
        setLockedState(true);
        return;
    }
}

async function handleSaveDuration(): Promise<{ success: boolean, code?: 'invalid-duration' | 'unchanged-duration' | 'invalid-password' }> {
    const years = parseInt(sessionYearsInput.value) ?? 0;
    const days = parseInt(sessionDaysInput.value) ?? 0;
    const hours = parseInt(sessionHoursInput.value) ?? 0;
    const minutes = parseInt(sessionMinutesInput.value) ?? 0;
    const currentPassword = currentPasswordInput.value;

    // Basic validation
    if (years < 0 || days < 0 || hours < 0 || minutes < 0) {
        showTranslatedToast('toastInvalidDuration', undefined, 'error');
        return { success: false, code: 'invalid-duration' };
    }

    const duration = createDuration({
        years,
        days,
        hours,
        minutes,
    });

    const totalMs = getTotalMs(duration);
    if (totalMs === currentDurationMs) return { success: false, code: 'unchanged-duration' };

    const result = await window.api.updateSessionDuration(totalMs, currentPassword);
    if (result.success) {
        // only show toast if duration was actually changed
        showTranslatedToast('toastDurationUpdated');
        currentDurationMs = totalMs;
        return { success: true };
    } else {
        showTranslatedToast('toastPasswordIncorrect', undefined, 'error');
        return { success: false, code: 'invalid-password' };
    }
}