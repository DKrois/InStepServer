export function initTheme() {
    const toggleButton = document.getElementById('theme-switcher');
    toggleButton?.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('instep-theme', newTheme);
}

