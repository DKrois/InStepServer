(function() {
    try {
        const saved = localStorage.getItem('instep-theme');
        const sysLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        const theme = saved ? saved : (sysLight ? 'light' : 'dark');
        document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {}
})();