// @ts-ignore
import { setInitialPort } from './serverStatus';
// @ts-ignore
import { refreshStats } from './stats';
// @ts-ignore
import { setInitialLanguage, setInitialTheme } from './theme';

import '../css/styles.css';
import '../css/theme.css';

window.addEventListener('DOMContentLoaded', async () => {
    // Update to stored settings
    const settings = await window.api.getInitialSettings();

    setInitialPort(settings);
    setInitialLanguage(settings.language);
    setInitialTheme();

    // Refresh stats on load
    await refreshStats();
});