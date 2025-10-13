// @ts-ignore
import { getTranslation } from './theme';
// @ts-ignore
import { getCurrentTime } from './util';
import AnsiToHTML from 'ansi-to-html';

const convert = new AnsiToHTML();

const logsOutput = document.getElementById('logs-output')!;
const logsSection = document.querySelector('.logs-section')!;
const toggleLogsBtn = document.getElementById('toggle-logs-btn')!;
const clearLogsBtn = document.getElementById('clear-logs-btn')!;
const logsContainer = document.getElementById('logs-container')!;
const logActions = document.getElementById('log-actions')!;

toggleLogsBtn.addEventListener('click', () => {
    const isHidden = logsSection.classList.toggle('hidden');
    logActions.classList.toggle('hidden', isHidden);
    document.body.classList.toggle('logs-visible', !isHidden);

    toggleLogsBtn.textContent = isHidden ? getTranslation('showLogs') : getTranslation('hideLogs');
});

clearLogsBtn.addEventListener('click', () => {
    logsOutput.innerHTML = '';
});

window.api.onLog((log: string) => {
    const isScrolledToBottom = logsContainer.scrollHeight - logsContainer.clientHeight <= logsContainer.scrollTop + 1;
    logsOutput.innerHTML += formatLog(log, true) + '\n';
    if (isScrolledToBottom) logsContainer.scrollTop = logsContainer.scrollHeight;
});

// ** Log formatting **
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

// *** Notification toasts ***
export function showToast(message: string, type: 'info' | 'error' = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}