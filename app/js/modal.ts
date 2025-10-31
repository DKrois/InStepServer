import { showTranslatedToast } from './logs';
import { getTranslation } from './translate';

// Modal, confirmation

const modalBackdrop = document.getElementById('modal-backdrop')!;
const closeModalBtn = document.getElementById('close-modal-btn')!;

const shortcutOptionsContainer = document.getElementById('shortcut-options-container')!;
const createStartMenuShortcutBtn = document.getElementById('create-startMenu-shortcut-btn')!;
const createDesktopShortcutsBtn = document.getElementById('create-desktop-shortcut-btn')!;

const initialPasswordDisplay = document.getElementById('initial-password-display') as HTMLInputElement;

const confirmModal = document.getElementById('confirm-modal')!;
const confirmTitle = document.getElementById('confirm-title')!;
const confirmMessage = document.getElementById('confirm-message')!;
const confirmBtnOk = document.getElementById('confirm-btn-ok')!;
const confirmBtnCancel = document.getElementById('confirm-btn-cancel')!;

export async function setupModal() {
    const initialPassword = await window.api.getInitialPassword();
    if (initialPassword) { // first open
        initialPasswordDisplay.value = initialPassword;

        const isWindows = await window.api.isWindows();
        if (isWindows) {
            shortcutOptionsContainer.classList.remove('hidden');
        }

        modalBackdrop.classList.remove('hidden');
    }
}

createStartMenuShortcutBtn.addEventListener('click', async () => {
    const success = await window.api.createStartMenuShortcut();
    if (success) showTranslatedToast('toastShortcutCreated', { type: 'Start Menu' });
    else showTranslatedToast('toastShortcutFailed', { type: 'Start Menu' });
});
createDesktopShortcutsBtn.addEventListener('click', async () => {
    const success = await window.api.createDesktopShortcut();
    if (success) showTranslatedToast('toastShortcutCreated', { type: 'Desktop' });
    else showTranslatedToast('toastShortcutFailed', { type: 'Desktop' });
});

closeModalBtn.addEventListener('click', () => {
    modalBackdrop.classList.remove('hidden');
    initialPasswordDisplay.value = ''; // clear password
    modalBackdrop.addEventListener('transitionend', () => {
        modalBackdrop.classList.add('hidden');
    }, { once: true });
});

// --- Confirmation dialog ---
export function showConfirmation(messageKey: string, titleKey: string = 'confirmTitle'): Promise<boolean> {
    // Set the text from translation keys
    confirmTitle.textContent = getTranslation(titleKey);
    confirmMessage.textContent = getTranslation(messageKey);

    // Show the modal
    confirmModal.classList.remove('hidden');

    return new Promise((resolve) => {
        // Define cleanup function to remove listeners
        const cleanup = () => {
            confirmModal.classList.add('hidden');
            confirmBtnOk.removeEventListener('click', handleOk);
            confirmBtnCancel.removeEventListener('click', handleCancel);
        };

        const handleOk = () => {
            cleanup();
            resolve(true); // User confirmed
        };

        const handleCancel = () => {
            cleanup();
            resolve(false); // User cancelled
        };

        confirmBtnOk.addEventListener('click', handleOk);
        confirmBtnCancel.addEventListener('click', handleCancel);
    });
}