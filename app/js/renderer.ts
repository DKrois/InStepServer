import { setupModal } from './modal';
import { setInitialPort } from './serverStatus';
import { refreshStats } from './stats';
import { setInitialTimeSettings } from './timeManagement';
import { setInitialLanguage, setInitialTheme } from './translate';
import './security'; // to register event listeners

import '../css/styles.css';
import '../css/theme.css';

window.addEventListener('DOMContentLoaded', async () => {
    // Update to stored settings
    const settings = await window.api.getInitialSettings();

    setInitialPort(settings.port);
    setInitialLanguage(settings.language);
    setInitialTheme();
    setInitialTimeSettings(settings.timeSettings);

    setupModal();

    // Refresh stats on load
    await refreshStats();
});