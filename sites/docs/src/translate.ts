export function setupLanguageSwitcher() {
    const selector = document.getElementById('language-switcher') as HTMLSelectElement;
    if (!selector) return;

    selector.addEventListener('change', () => {
        const targetLang = selector.value;
        const baseRoute = selector.dataset.base || 'docs';
        const currentPath = selector.dataset.path || 'introduction'; // e.g. "server/overview"

        // redirect to new language, keeping the same page
        window.location.href = `${baseRoute}/${targetLang}/${currentPath}`;
    });
}