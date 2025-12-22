import { initTheme } from './theme.js';
import { generateTOC, setupSidebarToggles } from './navigation.js';
import { setupLanguageSwitcher } from './translate.js';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    generateTOC();
    setupLanguageSwitcher();
    setupSidebarToggles();
});