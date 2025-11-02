import { showTranslatedToast } from './logs';

const changePasswordSection = document.getElementById('change-password-section')!;
const currentPasswordInput = document.getElementById('current-password-input') as HTMLInputElement;
const newPasswordInput = document.getElementById('new-password-input') as HTMLInputElement;
const unlockBtn = document.getElementById('unlock-btn')!;

const savePasswordBtn = document.getElementById('save-password-btn')!;
const toggleCurrentPasswordBtn = document.getElementById('toggle-current-password')!;
const toggleNewPasswordBtn = document.getElementById('toggle-new-password')!;

const initialPasswordDisplay = document.getElementById('initial-password-display') as HTMLInputElement;
const copyInitialPasswordBtn = document.getElementById('copy-initial-password-btn')!;

function setLockedState(locked: boolean) {
    // unlockSection.classList.toggle('hidden', !locked); // hide unlock section when password is entered
    changePasswordSection.classList.toggle('hidden', locked);
    if (locked) {
        currentPasswordInput.value = '';
        newPasswordInput.value = '';
    }
}

// --- Event Listeners ---

window.api.onFirstTimeRunning(async () => {
    const initialPassword = await window.api.getInitialPassword();
    if (initialPassword) initialPasswordDisplay.value = initialPassword;
});

unlockBtn.addEventListener('click', handleUnlock);
currentPasswordInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleUnlock();
    }
});
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

savePasswordBtn.addEventListener('click', handleSavePassword);
newPasswordInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        // Trigger the same logic as clicking the save button
        handleSavePassword();
    }
});
async function handleSavePassword() {
    const newPassword = newPasswordInput.value;
    const currentPassword = currentPasswordInput.value;

    if (!newPassword) {
        showTranslatedToast('toastPasswordEmpty', undefined, 'error');
        return;
    }

    const result = await window.api.updatePassword(currentPassword, newPassword);

    if (result.success) {
        showTranslatedToast('toastPasswordUpdated');
        setLockedState(true); // Re-lock the form after successful change
    } else {
        showTranslatedToast('toastPasswordIncorrect', undefined, 'error');
    }
}

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

// Modal
copyInitialPasswordBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(initialPasswordDisplay.value);
    showTranslatedToast('toastPasswordCopied');
});
