import { showTranslatedToast } from './logs';
import { getTranslation } from './translate';
import { marked } from 'marked';

// Initial modal, update modal, confirmation
marked.setOptions({ gfm: true, breaks: true, pedantic: false });

const initialModalBackdrop = document.getElementById('initial-modal')!;
const closeInitialModalBtn = document.getElementById('close-modal-btn')!;

const initialPasswordDisplay = document.getElementById('initial-password-display') as HTMLInputElement;
const copyInitialPasswordBtn = document.getElementById('copy-initial-password-btn')!;

const changePathBtn = document.getElementById('change-path-btn')!;
const currentPathSpan = document.getElementById('current-project-path')!;
const pathErrorMessage = document.getElementById('path-error-message')!;

const shortcutOptionsContainer = document.getElementById('shortcut-options-container')!;
const createStartMenuShortcutBtn = document.getElementById('create-startMenu-shortcut-btn')!;
const createDesktopShortcutsBtn = document.getElementById('create-desktop-shortcut-btn')!;

const updateModal = document.getElementById('update-modal')!;
const updateVersionParagraph = document.getElementById('update-version-paragraph')!;
const updateReleaseNotes = document.getElementById('update-release-notes')!;
const updateDownloadBtn = document.getElementById('update-download-btn')!;
const updateLaterBtn = document.getElementById('update-later-btn')!;
const updateNeverBtn = document.getElementById('update-never-btn')!;

const confirmModal = document.getElementById('confirm-modal')!;
const confirmTitle = document.getElementById('confirm-title')!;
const confirmMessage = document.getElementById('confirm-message')!;
const confirmBtnOk = document.getElementById('confirm-btn-ok')!;
const confirmBtnCancel = document.getElementById('confirm-btn-cancel')!;

window.api.onFirstTimeRunning(async (defaultDBPath: string) => {
    const isWindows = await window.api.isWindows();
    if (isWindows) shortcutOptionsContainer.classList.remove('hidden');

    initialPasswordDisplay.value = await window.api.getInitialPassword();

    currentPathSpan.textContent = defaultDBPath;
    currentPathSpan.title = defaultDBPath;

    initialModalBackdrop.classList.remove('hidden');
    initialModalBackdrop.classList.add('visible');
});

copyInitialPasswordBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(initialPasswordDisplay.value);
    showTranslatedToast('toastPasswordCopied');
});

changePathBtn.addEventListener('click', async () => {
    // Hide previous error message when user tries again
    pathErrorMessage.classList.add('hidden');
    const result = await window.api.setProjectDataPath(currentPathSpan.textContent ?? undefined);

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

closeInitialModalBtn.addEventListener('click', () => {
    initialModalBackdrop.classList.remove('hidden');
    initialPasswordDisplay.value = ''; // clear password

    // tell main process that the modal is closed → init db using chosen path
    window.api.closeInitialModal();

    closeModal(initialModalBackdrop);
});

window.api.onUpdateAvailable(showUpdateModal);

updateDownloadBtn.addEventListener('click', () => {
    window.api.openDownloadURL();
    closeModal(updateModal);
});
updateLaterBtn.addEventListener('click', () => {
    closeModal(updateModal);
    window.api.setUpdateNotification('later');
});
updateNeverBtn.addEventListener('click', () => {
    closeModal(updateModal);
    window.api.setUpdateNotification('never');
});

export function openModal(el: HTMLElement) {
    el.classList.remove('hidden');
    el.classList.remove('closing');

    requestAnimationFrame(() => {
        el.classList.add('opening');
    });

    // after animation ends → lock state to visible
    el.addEventListener('transitionend', () => {
        el.classList.remove('opening');
        el.classList.add('visible');
    }, { once: true });
}

export function closeModal(el: HTMLElement) {
    el.classList.remove('opening');
    el.classList.remove('visible');
    el.classList.add('closing');
    el.addEventListener('transitionend', () => {
        el.classList.remove('closing');
        el.classList.add('hidden');
    }, { once: true });
}

// --- Update modal ---
function showUpdateModal(details: { version: string, oldVersion: string, releaseNotes: string, url: string }) {
    // populate modal with version info
    updateVersionParagraph.textContent = getTranslation('newVersionAvailable', {
        version: details.version,
        oldVersion: details.oldVersion
    });

    const releaseNotes = details.releaseNotes || getTranslation('noReleaseNotes');
    updateReleaseNotes.innerHTML = marked.parse(releaseNotes, { async: false});

    openModal(updateModal);
}

// --- Confirmation dialog ---
export function showConfirmation(messageKey: string, titleKey: string = 'confirmTitle'): Promise<boolean> {
    // set text from translation keys
    confirmTitle.textContent = getTranslation(titleKey);
    confirmMessage.textContent = getTranslation(messageKey);

    // show modal
    openModal(confirmModal);

    return new Promise(resolve => {
        // define cleanup function to remove listeners
        const cleanup = () => {
            closeModal(confirmModal);
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