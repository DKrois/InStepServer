import i18next from 'i18next';
import AnsiToHTML from 'ansi-to-html';
import en from '../locales/en.json';
import de from '../locales/de.json';

import '../css/styles.css';
import '../css/theme.css';

const convert = new AnsiToHTML();

// --- ELEMENTS ---
const startBtn = document.getElementById('start-btn')!;
const stopBtn = document.getElementById('stop-btn')!;
const themeSwitcher = document.getElementById('theme-switcher')!;
const languageSwitcher = document.getElementById('language-switcher') as HTMLSelectElement;
const logsOutput = document.getElementById('logs-output')!;
const toggleLogsBtn = document.getElementById('toggle-logs-btn')!;
const logsContainer = document.getElementById('logs-container')!;
const resourceCountSpan = document.getElementById('resource-count')!;
const refreshStatsBtn = document.getElementById('refresh-stats-btn')!;

// --- I18N (TRANSLATION) ---
i18next.init({
    lng: 'en',
    debug: false,
    resources: {
        en: { translation: en },
        de: { translation: de }
    }
});

function updateUIText() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n')!;
        element.textContent = i18next.t(key);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title')!;
        element.setAttribute('title', i18next.t(key));
    });
}

// --- LOGIC ---
function updateTheme(isDarkMode: boolean) {
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
    // button icon switching handled by css
}

async function refreshStats() {
    const stats = await window.api.getStats();
    resourceCountSpan.textContent = stats.resourceAccessed.toString();
}

// --- EVENT LISTENERS & INITIALIZATION ---
window.addEventListener('DOMContentLoaded', async () => {
    // Set initial theme
    const isDarkMode = await window.api.getInitialTheme();
    updateTheme(isDarkMode);

    // Set initial language
    const initialLocale = await window.api.getInitialLocale();
    if (['en', 'de'].includes(initialLocale)) {
        languageSwitcher.value = initialLocale;
        await i18next.changeLanguage(initialLocale);
    }
    updateUIText();

    // Refresh stats on load
    await refreshStats();
});

startBtn.addEventListener('click', () => window.api.startServer());
stopBtn.addEventListener('click', () => window.api.stopServer());

themeSwitcher.addEventListener('click', async () => {
    const isDarkMode = await window.api.toggleTheme();
    updateTheme(isDarkMode);
});

languageSwitcher.addEventListener('change', async () => {
    await i18next.changeLanguage(languageSwitcher.value);
    updateUIText();
});

toggleLogsBtn.addEventListener('click', () => {
    logsContainer.classList.toggle('hidden');
    toggleLogsBtn.textContent = logsContainer.classList.contains('hidden')
        ? i18next.t('toggleLogs')
        : 'Hide Logs';
});

refreshStatsBtn.addEventListener('click', refreshStats);

window.api.onLog((log: string) => {
    const isScrolledToBottom = logsContainer.scrollHeight - logsContainer.clientHeight <= logsContainer.scrollTop + 1;
    logsOutput.innerHTML += formatLog(log, true) + '\n';
    if (isScrolledToBottom) logsContainer.scrollTop = logsContainer.scrollHeight;
});

export function formatLog(message: string, fromServer = false) {
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

export function formatBackground(str: string): string {
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

// noinspection DuplicatedCode
export function getCurrentTime(includeMillis = false, gmt = false): string {
    return timeToString(new Date(), gmt, includeMillis);
}

function timeToString(time: number | Date | null, gmt = false, includeMillis = true): string {
    if (time === null) return 'time null';

    let dt;
    if (typeof time === 'number') {
        const isMillis = time.toString().length > 12;
        dt = isMillis ? new Date(time) : new Date(time * 1000);
    } else {
        dt = time;
    }

    const year = addZeroes(gmt ? dt.getUTCFullYear() : dt.getFullYear(), 2);
    const month = addZeroes((gmt ? dt.getUTCMonth() : dt.getMonth()) + 1, 2);
    const day = addZeroes(gmt ? dt.getUTCDate() : dt.getDate(), 2);
    const hours = addZeroes(gmt ? dt.getUTCHours() : dt.getHours(), 2);
    const minutes = addZeroes(gmt ? dt.getUTCMinutes() : dt.getMinutes(), 2);
    const seconds = addZeroes(gmt ? dt.getUTCSeconds() : dt.getSeconds(), 2);
    const millis = includeMillis ? `.${addZeroes(gmt ? dt.getUTCMilliseconds() : dt.getMilliseconds(), 3)}` : '';

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}${millis}`;
}

function addZeroes(str: number, padAmount: number, radix: number = 10): string {
    return str.toString(radix).padStart(padAmount, '0');
}