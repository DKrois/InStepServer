import { setupModal } from './modal';
import { setInitialPort } from './serverStatus';
import { refreshStats } from './stats';
import { setInitialLanguage, setInitialTheme } from './translate';

import '../css/styles.css';
import '../css/theme.css';

window.addEventListener('DOMContentLoaded', async () => {
    // Update to stored settings
    const settings = await window.api.getInitialSettings();

    setInitialPort(settings);
    setInitialLanguage(settings.language);
    setInitialTheme();

    setupModal();

    // Refresh stats on load
    await refreshStats();
});