import { initTheme } from './theme.js';
import { initNavigation } from './navigation.js';
import { initTOC } from './toc.js';
import { initI18n } from './translate.js';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initTOC();
    initI18n().catch(console.error);
});