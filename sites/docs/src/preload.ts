(function() {
    try {
        const theme = localStorage.getItem('instep-theme')
            ?? window.matchMedia('(prefers-color-scheme: light)').matches
                ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {}
})();