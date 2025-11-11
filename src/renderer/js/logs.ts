import AnsiToHTML from 'ansi-to-html';
import type { TOptions } from 'i18next';
import { toastTimeout } from '../../../config.json';
import { getTranslation } from './translate';
import { getCurrentTime } from '../../common/time';

const convert = new AnsiToHTML();

const logsOutput = document.getElementById('logs-output')! as HTMLPreElement;
const logsSection = document.querySelector('.logs-section')!;
const toggleLogsBtn = document.getElementById('toggle-logs-btn')!;
const clearLogsBtn = document.getElementById('clear-logs-btn')!;
const logActions = document.getElementById('log-actions')!;
const toastContainer = document.getElementById('toast-container')!;

let isAutoScrollActive = true;

window.api.onLog(addLogMessage);
window.api.onShowToast(showTranslatedToast);

toggleLogsBtn.addEventListener('click', () => {
    const isHidden = logsSection.classList.toggle('hidden');
    logActions.classList.toggle('hidden', isHidden);
    document.body.classList.toggle('logs-visible', !isHidden);

    toggleLogsBtn.textContent = isHidden ? getTranslation('showLogs') : getTranslation('hideLogs');
});

clearLogsBtn.addEventListener('click', () => {
    logsOutput.innerHTML = '';
});

logsOutput.addEventListener('scroll', () => {
    // Using a small threshold to account for fractional pixel values
    const scrollThreshold = 5;

    // Calculate how close the user is to the bottom and autoscroll if at bottom
    isAutoScrollActive = logsOutput.scrollHeight - logsOutput.scrollTop - logsOutput.clientHeight < scrollThreshold;
});

function addLogMessage(message: string) {
    const formatted = formatLog(message);
    logsOutput.insertAdjacentHTML('beforeend', `${formatted}\n`);

    if (isAutoScrollActive) scrollToBottom();
}

// - Log formatting -
function formatLog(message: string, fromServer = false) {
    const base = `${getCurrentTime()}${fromServer ? ' [Server]' : ''}`;
    const baseFormatted = formatBackground(base);

    const m = escapeHtml(message);
    const str = convert.toHtml(`${baseFormatted} ${m}`);
    return linkify(str);
}

function linkify(text: string): string {
    const urlRegex = /(https?:\/\/\S+)/g;
    return text.replace(urlRegex, '<a href="$1" target="_blank">$1</a>');
}

function formatBackground(str: string): string {
    return `<span style="color: #909090; opacity: 0.6;">${str}</span>`;
}

function escapeHtml(unsafe: string): string {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function scrollToBottom() {
    logsOutput.scrollTop = logsOutput.scrollHeight;
}

// --- Notification toasts ---
function showToast(message: string, type: 'info' | 'error' = 'info') {
    // create container element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    // add toast to container
    toastContainer.appendChild(toast);

    // Trigger the "show" animation shortly after adding the element
    setTimeout(() => {
        toast.classList.add('show');
    }, 10); // A small delay is needed to allow the browser to apply initial styles

    // Set a timer to remove the toast
    setTimeout(() => {
        // Trigger the "hide" animation
        toast.classList.remove('show');

        // Wait for the animation to finish before removing the element from the DOM
        toast.addEventListener('transitionend', () => {
            toast.remove();
        });
    }, toastTimeout);
}

export function showTranslatedToast(key: string, options?: TOptions, type: 'info' | 'error' = 'info') {
    const message = getTranslation(key, options);
    showToast(message, type);
}