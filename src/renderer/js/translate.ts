import type { TOptions } from 'i18next';
import i18next from 'i18next';
import de from '../locales/de.json';
import en from '../locales/en.json';
import { showTranslatedToast } from './logs';

// Translation, Theme

const themeSwitcher = document.getElementById('theme-switcher')!;
const languageSwitcher = document.getElementById('language-switcher') as HTMLSelectElement;

// --- Translation ---
export type TranslationKey = keyof typeof en;

i18next.init({
    lng: 'en',
    debug: false,
    fallbackLng: 'en',
    resources: {
        en: { translation: en },
        de: { translation: de }
    }
});

languageSwitcher.addEventListener('change', async () => {
    const newLang = languageSwitcher.value;
    await updateLanguage(newLang);
    window.api.saveLanguage(newLang);

    const fullLang = languageSwitcher.selectedOptions.item(0)?.innerText;
    showTranslatedToast('toastLangSwitch', { lang: fullLang });
});

export async function setInitialLanguage(lang: string) {
    languageSwitcher.value = lang;
    await updateLanguage(lang);
}

async function updateLanguage(lang: string) {
    await i18next.changeLanguage(lang);
    updateUIText();
    document.documentElement.setAttribute('lang', lang);

    const version = document.documentElement.getAttribute('version') ?? `v1.0.0`;
    document.title = `${getTranslation('title')} ${version}`;
}

export function getTranslation(str: TranslationKey, options?: TOptions) {
    return i18next.t(str, options);
}

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

// *** Theme ***

themeSwitcher.addEventListener('click', async () => {
    const isDarkMode = await window.api.toggleTheme();
    updateTheme(isDarkMode);
});

export function updateTheme(isDarkMode: boolean) {
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
    // button icon switching handled by css
}