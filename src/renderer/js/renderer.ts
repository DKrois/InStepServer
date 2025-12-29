import { setInitialServerSettings } from './serverStatus';
import { setInitialTimeSettings } from './timeManagement';
import { setInitialLanguage, updateTheme } from './translate';
import './security'; // to register event listeners
import './stats';

import '../css/theme.css';
import '../css/layout.css';
import '../css/components.css';
import '../css/features.css';
import '../css/modals.css';

const title = document.getElementById('title')!;

window.addEventListener('DOMContentLoaded', async () => {
    const version = await window.api.getAppVersion();
    // titles can't contain span element
    title.textContent = title.textContent?.replace('vx.x.x', `v${version}`) ?? `InStep Server Control Panel v${version}`;

    // update to stored settings
    const settings = await window.api.getInitialSettings();
    const { isDarkMode, language, port, serverEnabled, timeSettings } = settings;

    updateTheme(isDarkMode);
    setInitialLanguage(language);
    setInitialServerSettings({ port, serverEnabled });
    setInitialTimeSettings(timeSettings);

    // refresh stats on load → done in stats.ts after projectDB init
});