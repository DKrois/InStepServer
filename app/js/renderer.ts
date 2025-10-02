import i18next from 'i18next';
import en from '../locales/en.json';
import de from '../locales/de.json';

import '../css/styles.css';
import '../css/theme.css';

console.log('👋 This message is being logged by "renderer.js", included via webpack');

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
    themeSwitcher.textContent = isDarkMode ? '☀️' : '🌙';
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
    refreshStats();
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
    logsOutput.textContent += log + '\n';
    if (isScrolledToBottom) {
        logsContainer.scrollTop = logsContainer.scrollHeight;
    }
});