// @ts-ignore
import { getTranslation } from './theme';

const statsSidebar = document.getElementById('stats-sidebar')!;
const toggleStatsBtn = document.getElementById('toggle-stats-btn')!;
const refreshStatsBtn = document.getElementById('refresh-stats-btn')!;
const resourceCount = document.getElementById('resource-count')!;
const uptimeDisplay = document.getElementById('uptime-display')!;
const memoryDisplay = document.getElementById('memory-display')!;

const appBody = document.getElementById('app-body')!;

export async function refreshStats() {
    const stats = await window.api.getStats();
    resourceCount.textContent = stats.resourceAccessed.toString();
}

refreshStatsBtn.addEventListener('click', refreshStats);
toggleStatsBtn.addEventListener('click', () => {
    const isVisible = statsSidebar.classList.toggle('visible');
    toggleStatsBtn.textContent = isVisible ? getTranslation('hideStatistics') : getTranslation('showStatistics');

    appBody.classList.toggle('stats-visible', isVisible);
});

window.api.onUpdateStats(stats => {
    uptimeDisplay.textContent = stats.uptime;
    memoryDisplay.textContent = stats.memory;
});