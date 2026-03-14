import { setInitialSecuritySettings } from './security';
import { setInitialServerSettings } from './serverStatus';
import { setInitialTimeSettings } from './timeManagement';
import { getTranslation, setInitialLanguage, updateTheme } from './translate';
import './stats'; // to register event listeners

import '../css/theme.css';
import '../css/layout.css';
import '../css/components.css';
import '../css/features.css';
import '../css/modals.css';

const versionDisplay = document.getElementById('app-version')!;

window.addEventListener('DOMContentLoaded', async () => {
    // update to stored settings
    const settings = await window.api.getInitialSettings();
    const { version, isDarkMode, language, port, serverEnabled, timeSettings, imdEnabled, sessionDuration, maxLoginAttempts, lockoutMinutes } = settings;

    document.title = `${getTranslation('title')} ${version}`;
    document.documentElement.setAttribute('version', version);
    versionDisplay.textContent = version;

    updateTheme(isDarkMode);
    setInitialLanguage(language);
    setInitialServerSettings({ port, serverEnabled });
    setInitialTimeSettings(timeSettings);
    setInitialSecuritySettings({ imdEnabled, sessionDuration, maxLoginAttempts, lockoutMinutes });

    // refresh stats on load → done in stats.ts after projectDB init
});