import { linkify, showTranslatedToast } from './logs';
import { getTranslation, type TranslationKey } from './translate';
import { marked } from 'marked';
import type { QRType } from '../../common/types.js';

// initial modal, qr, update, confirmation, popup

// enable gfm (github flavoured markdown)
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

const qrModal = document.getElementById('qr-modal')!;
const generateQRBtn = document.getElementById('generate-qr-btn')!; // opens the modal
const qrImage = document.getElementById('qr-image') as HTMLImageElement;
const qrSaveBtn = document.getElementById('qr-save-btn')!;
const qrCloseButton = document.getElementById('qr-close-btn')!;

const generateIpBtn = document.getElementById('qr-btn-ip')!;
const generateMdnsBtn = document.getElementById('qr-btn-mdns')!;
const generateHostBtn = document.getElementById('qr-btn-hostname')!;
const serverIPUrl = document.getElementById('server-ip-url')!;
const mDNSUrl = document.getElementById('mdns-url')!;
const hostnameMDNSUrl = document.getElementById('hostname-mdns-url')!;

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

const popupModal = document.getElementById('popup-modal')!;
const popupTitle = document.getElementById('popup-title')!;
const popupMessage = document.getElementById('popup-message')!;
const popupSideNote = document.getElementById('popup-side-note')!;
const popupCloseBtn = document.getElementById('popup-close-btn')!;

// --- Initial Modal ---
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
        currentPathSpan.textContent = result.data;
        currentPathSpan.title = result.data;

        showTranslatedToast('toastPathUpdated');
        pathErrorMessage.textContent = '';
    } else { // not writeable (admin perms, ...)
        switch (result.code) {
            case 'permission-denied':
                showTranslatedToast('toastPathError', undefined, 'error');

                pathErrorMessage.textContent = getTranslation('pathPermissionError');
                pathErrorMessage.classList.remove('hidden');
                break;

            case 'cancelled':
                showTranslatedToast('cancelled');
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

// --- QR modal ---
let currentQRType: QRType | null = null;

generateQRBtn.addEventListener('click', async () => {
    const urls = await window.api.getServerURLs();

    serverIPUrl.innerText = urls.ip ?? '';
    mDNSUrl.innerText = urls.mdns;
    hostnameMDNSUrl.innerText = urls.hostname;

    openModal(qrModal);
});
qrCloseButton.addEventListener('click', () => closeModal(qrModal));

generateIpBtn.addEventListener('click', () => handleGenerateQR('ip'));
generateMdnsBtn.addEventListener('click', () => handleGenerateQR('mdns'));
generateHostBtn.addEventListener('click', () => handleGenerateQR('hostname'));

qrSaveBtn.addEventListener('click', handleSaveQR);

// --- Update modal ---
window.api.onUpdateAvailable(showUpdateModal);

updateDownloadBtn.addEventListener('click', () => {
    closeModal(updateModal);
    window.api.openDownloadURL();
});
updateLaterBtn.addEventListener('click', () => {
    closeModal(updateModal);
    window.api.setUpdateNotification('later');
});
updateNeverBtn.addEventListener('click', () => {
    closeModal(updateModal);
    window.api.setUpdateNotification('never');
});

// --- Popup modal ---
window.api.onShowPopupModal(showPopupModal);

popupCloseBtn.addEventListener('click', () => {
    closeModal(popupModal);
});

// --- Helpers ---
export function openModal(el: HTMLElement) {
    el.classList.remove('hidden');
    el.classList.remove('closing');

    requestAnimationFrame(() => el.classList.add('opening'));

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

// --- QR Modal ---
const handleGenerateQR = async (type: QRType) => {
    currentQRType = type;
    try {
        const response = await window.api.generateQRCode(type);

        if (response.success) {
            qrImage.src = response.data;
            qrImage.classList.remove('hidden');
            qrSaveBtn.classList.remove('hidden');
        } else {
            if (response.code === 'ip-failed') showTranslatedToast('toastIPFailed', undefined, 'error');
            else showTranslatedToast('toastUnknownError', undefined, 'error');
        }
    } catch (error) {
        showTranslatedToast('toastUnknownError', undefined, 'error');
    }
};

async function handleSaveQR() {
    if (!currentQRType) return;

    const result = await window.api.saveQRCode(currentQRType);
    if (result.success) {
        showTranslatedToast('toastQRSaveSuccess');
    } else {
        if (result.code === 'cancelled') showTranslatedToast('cancelled');
        else showTranslatedToast('toastQRSaveFailed', undefined, 'error');
    }
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
export async function showConfirmation(messageKey: TranslationKey, titleKey: TranslationKey = 'confirmTitle'): Promise<boolean> {
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

/**
 * Show a generic modal for notifications that don't fit in toasts
 * @param titleKey
 * @param messageKey
 * @param sideNoteKey
 */
export function showPopupModal(titleKey: TranslationKey, messageKey: TranslationKey, sideNoteKey?: TranslationKey) {
    // set text from translation keys
    popupTitle.textContent = getTranslation(titleKey);
    popupMessage.textContent = getTranslation(messageKey);

    // show side note if present
    if (sideNoteKey) {
        popupSideNote.innerHTML = linkify(getTranslation(sideNoteKey)); // for documentationUnavailableNote
        popupSideNote.classList.remove('hidden');
    } else {
        popupSideNote.classList.add('hidden');
    }

    // show modal
    openModal(popupModal);
}