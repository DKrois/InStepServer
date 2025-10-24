import { showTranslatedToast } from './logs';

const modalBackdrop = document.getElementById('modal-backdrop')!;
const closeModalBtn = document.getElementById('close-modal-btn')!;

const shortcutOptionsContainer = document.getElementById('shortcut-options-container')!;
const createStartMenuShortcutBtn = document.getElementById('create-startMenu-shortcut-btn')!;
const createDesktopShortcutsBtn = document.getElementById('create-desktop-shortcut-btn')!;

const initialPasswordDisplay = document.getElementById('initial-password-display') as HTMLInputElement;

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