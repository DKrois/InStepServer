import i18next from 'i18next';
import en from '../locales/en.json';
import de from '../locales/de.json';

export async function initI18n() {
    const savedLang = localStorage.getItem('instep_docs_lang') || 'en';

    await i18next.init({
        lng: savedLang,
        debug: true,
        fallbackLng: 'en',
        resources: {
            en: { translation: en },
            de: { translation: de }
        }
    });

    updateUIText();
    updateActiveButton(savedLang);

    setupSwitcher();
}

function setupSwitcher() {
    const btn = document.getElementById('lang-switcher-btn');
    const menu = document.getElementById('lang-menu');
    const options = document.querySelectorAll('.lang-option');

    // Toggle Dropdown
    btn?.addEventListener('click', (e) => {
        e.stopPropagation();
        menu?.classList.toggle('show');
    });

    // Close on click outside
    document.addEventListener('click', () => {
        menu?.classList.remove('show');
    });

    // Handle Option Click
    options.forEach(opt =>
        opt.addEventListener('click', async () => {
            const newLang = opt.getAttribute('data-lang');
            if (newLang) {
                await i18next.changeLanguage(newLang);

                // Update State
                localStorage.setItem('instep_docs_lang', newLang);
                updateUIText();
                updateActiveButton(newLang);

                // Close Menu
                menu?.classList.remove('show');
            }
        }));
}

// Visual update for the dropdown itself
function updateActiveButton(lang: string) {
    const label = document.getElementById('current-lang-label');
    if (label) label.innerText = lang.toUpperCase();

    document.querySelectorAll('.lang-option').forEach(opt => {
        if (opt.getAttribute('data-lang') === lang) {
            opt.classList.add('active');
        } else {
            opt.classList.remove('active');
        }
    });
}

export function updateUIText() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key) {
            const translation = i18next.t(key);
            if (translation) element.innerHTML = translation;
        }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (key) {
            element.setAttribute('title', i18next.t(key));
        }
    });
}