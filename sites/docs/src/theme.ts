export function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon') as HTMLImageElement;

    // Check localStorage or System preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let currentTheme = savedTheme ? savedTheme : (systemDark ? 'dark' : 'light');

    const applyTheme = (theme: string) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        // Update Icon path based on theme (assuming you have different icons or use CSS filters)
        // For this example, we keep the same icon or toggle class
    };

    applyTheme(currentTheme);

    themeToggle?.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(currentTheme);
    });
}