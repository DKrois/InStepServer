import { getTranslation } from './translate';

const statsSidebar = document.getElementById('stats-sidebar')!;
const toggleStatsBtn = document.getElementById('toggle-stats-btn')!;
const refreshStatsBtn = document.getElementById('refresh-stats-btn')!;

const uptimeDisplay = document.getElementById('uptime-display')!;
const memoryDisplay = document.getElementById('memory-display')!;

const projectsAmountDisplay = document.getElementById('projects-amount')!;
const filesAmountDisplay = document.getElementById('files-amount')!;
const storageUsed = document.getElementById('storage-used')!;

// const resourceCount = document.getElementById('resource-count')!;

export async function refreshStats() {
    const stats = await window.api.getStats();
    const { projectsCount, fileCount, sizeUsed } = stats;

    projectsAmountDisplay.textContent = projectsCount.toString();
    filesAmountDisplay.textContent = fileCount.toString();
    storageUsed.textContent = sizeUsed;
}

refreshStatsBtn.addEventListener('click', refreshStats);
toggleStatsBtn.addEventListener('click', () => {
    const isVisible = statsSidebar.classList.toggle('visible');
    document.body.classList.toggle('stats-visible', isVisible);

    toggleStatsBtn.textContent = isVisible ? getTranslation('hideStatistics') : getTranslation('showStatistics');

    // update if expanded
    if (isVisible) refreshStats();
});

window.api.onUpdateStats(stats => {
    uptimeDisplay.textContent = stats.uptime;
    memoryDisplay.textContent = stats.memory;
});