import { showTranslatedToast } from './logs';
import { createDuration, getTotalMs, normalizeDuration } from '../../common/time';
import { setRestartServerInfoVisible } from './serverStatus';

const securityCard = document.getElementById('security-card')!;

const currentPasswordInput = document.getElementById('current-password-input') as HTMLInputElement;
const newPasswordInput = document.getElementById('new-password-input') as HTMLInputElement;
const unlockBtn = document.getElementById('unlock-btn')!;
const lockBtn = document.getElementById('lock-btn')!;
const saveBtn = document.getElementById('save-security-btn')!;

const toggleCurrentPasswordBtn = document.getElementById('toggle-current-password')!;
const toggleNewPasswordBtn = document.getElementById('toggle-new-password')!;

const sessionYearsInput = document.getElementById('session-years-input') as HTMLInputElement;
const sessionDaysInput = document.getElementById('session-days-input') as HTMLInputElement;
const sessionHoursInput = document.getElementById('session-hours-input') as HTMLInputElement;
const sessionMinutesInput = document.getElementById('session-minutes-input') as HTMLInputElement;

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

newPasswordInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
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

function setLockedState(locked: boolean) {
    securityCard.classList.toggle('is-locked', locked);

    if (locked) {
        currentPasswordInput.value = '';
        newPasswordInput.value = '';
    } else {
        loadCurrentSessionDuration();
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

    // -- handle duration --
    const durationResult = await handleSaveDuration();

    // user entered invalid duration; toast already shown. don't lock, don't continue (avoid confusion if pw gets changed anyway)
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

// --- Session config ---
let currentTotalMs = 0;
async function loadCurrentSessionDuration() {
    currentTotalMs = await window.api.getSessionDuration();
    const duration = normalizeDuration(currentTotalMs, false, 'y', ['M', 'w']);

    sessionYearsInput.value = String(duration.years);
    sessionDaysInput.value = String(duration.days);
    sessionHoursInput.value = String(duration.hours);
    sessionMinutesInput.value = String(duration.minutes);
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
    if (totalMs === currentTotalMs) return { success: false, code: 'unchanged-duration' };

    const result = await window.api.updateSessionDuration(totalMs, currentPassword);
    if (result.success) {
        // only show toast if duration was actually changed
        showTranslatedToast('toastDurationUpdated');
        currentTotalMs = totalMs;
        return { success: true };
    } else {
        showTranslatedToast('toastPasswordIncorrect', undefined, 'error');
        return { success: false, code: 'invalid-password' };
    }
}