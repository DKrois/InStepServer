import i18next from 'i18next';
import en from '../locales/en.json';
import de from '../locales/de.json';

const themeSwitcher = document.getElementById('theme-switcher')!;
const languageSwitcher = document.getElementById('language-switcher') as HTMLSelectElement;

// *** Translation ***

i18next.init({
    lng: 'en',
    debug: false,
    resources: {
        en: { translation: en },
        de: { translation: de }
    }
});

languageSwitcher.addEventListener('change', async () => {
    const newLang = languageSwitcher.value;
    await i18next.changeLanguage(newLang);
    updateUIText();
    window.api.saveSetting('language', newLang);
});

export async function setInitialLanguage(language: string) {
    languageSwitcher.value = language;
    await i18next.changeLanguage(language);

    updateUIText();
}

export function getTranslation(str: string) {
    return i18next.t(str);
}

export function updateUIText() {
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

export async function setInitialTheme() {
    const isDarkMode = await window.api.getInitialTheme();
    updateTheme(isDarkMode);
}

function updateTheme(isDarkMode: boolean) {
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
    // button icon switching handled by css
}