import { showTranslatedToast } from './logs';
import { getTranslation } from './translate';

// Modal, confirmation

const modalBackdrop = document.getElementById('modal-backdrop')!;
const closeModalBtn = document.getElementById('close-modal-btn')!;

const changePathBtn = document.getElementById('change-path-btn')!;
const currentPathSpan = document.getElementById('current-project-path')!;
const pathErrorMessage = document.getElementById('path-error-message')!;

const shortcutOptionsContainer = document.getElementById('shortcut-options-container')!;
const createStartMenuShortcutBtn = document.getElementById('create-startMenu-shortcut-btn')!;
const createDesktopShortcutsBtn = document.getElementById('create-desktop-shortcut-btn')!;

const initialPasswordDisplay = document.getElementById('initial-password-display') as HTMLInputElement;

const confirmModal = document.getElementById('confirm-modal')!;
const confirmTitle = document.getElementById('confirm-title')!;
const confirmMessage = document.getElementById('confirm-message')!;
const confirmBtnOk = document.getElementById('confirm-btn-ok')!;
const confirmBtnCancel = document.getElementById('confirm-btn-cancel')!;

window.api.onFirstTimeRunning(async (defaultDBPath: string) => {
    const isWindows = await window.api.isWindows();
    if (isWindows) shortcutOptionsContainer.classList.remove('hidden');

    currentPathSpan.textContent = defaultDBPath;
    currentPathSpan.title = defaultDBPath;

    modalBackdrop.classList.remove('hidden');
});

changePathBtn.addEventListener('click', async () => {
    // Hide previous error message when user tries again
    pathErrorMessage.classList.add('hidden');
    const result = await window.api.setProjectDataPath(currentPathSpan.textContent ?? undefined);

    // show toast if cancelled
    if (result.code === 'user-canceled') showTranslatedToast('cancelled');

    if (result.success) {
        // Update UI with new path
        currentPathSpan.textContent = result.path;
        currentPathSpan.title = result.path;

        // only show additional toast if not cancelled
        if (!result.code) showTranslatedToast('toastPathUpdated');
        pathErrorMessage.textContent = '';
    } else { // not writeable (admin perms, ...)
        switch (result.code) {
            case 'permission-denied':
                showTranslatedToast('toastPathError', undefined, 'error');

                pathErrorMessage.textContent = getTranslation('pathPermissionError');
                pathErrorMessage.classList.remove('hidden');
                break;

            default:
                showTranslatedToast('toastUnknownError', undefined, 'error');
                break;
        }

    }
});

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

    // tell main process that the modal is closed → init db using chosen path
    window.api.closeInitialModal();

    modalBackdrop.addEventListener('transitionend', () => {
        modalBackdrop.classList.add('hidden');
    }, { once: true });
});

// --- Confirmation dialog ---
export function showConfirmation(messageKey: string, titleKey: string = 'confirmTitle'): Promise<boolean> {
    // set text from translation keys
    confirmTitle.textContent = getTranslation(titleKey);
    confirmMessage.textContent = getTranslation(messageKey);

    // show modal
    confirmModal.classList.remove('hidden');

    return new Promise((resolve) => {
        // define cleanup function to remove listeners
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