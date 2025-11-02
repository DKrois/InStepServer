import { setInitialPort } from './serverStatus';
import { setInitialTimeSettings } from './timeManagement';
import { setInitialLanguage, updateTheme } from './translate';
import './security'; // to register event listeners
import './stats';

import '../css/theme.css';
// import '../css/styles.css';
import '../css/layout.css';
import '../css/components.css';
import '../css/features.css';
import '../css/modals.css';

window.addEventListener('DOMContentLoaded', async () => {
    // update to stored settings
    const settings = await window.api.getInitialSettings();

    setInitialPort(settings.port);
    setInitialLanguage(settings.language);
    updateTheme(settings.isDarkMode);
    setInitialTimeSettings(settings.timeSettings);

    // refresh stats on load → done in stats.ts after projectDB init
});