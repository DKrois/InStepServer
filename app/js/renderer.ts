// @ts-nocheck
import { setInitialStatus } from './serverStatus';
import { refreshStats } from './stats';
import { setInitialLanguage, setInitialTheme } from './theme';

import '../css/styles.css';
import '../css/theme.css';

window.addEventListener('DOMContentLoaded', async () => {
    // Update to stored settings
    const settings = await window.api.getInitialSettings();

    setInitialStatus(settings);
    setInitialLanguage(settings.language);
    setInitialTheme();

    // Refresh stats on load
    await refreshStats();
});