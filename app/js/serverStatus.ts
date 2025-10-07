// @ts-ignore
import { showToast } from './logs';
// @ts-ignore
import { getTranslation } from './theme';

const startBtn = document.getElementById('start-btn')! as HTMLButtonElement;
const stopBtn = document.getElementById('stop-btn')! as HTMLButtonElement;
const portInput = document.getElementById('port-input') as HTMLInputElement;
const serverStatusIndicator = document.getElementById('server-status-indicator')!;

startBtn.addEventListener('click', () => {
    const port = parseInt(portInput.value, 10);
    if (port && port > 79 && port < 65536) {
        startBtn.disabled = true;
        startBtn.textContent = 'Starting...';
        window.api.startServer(port);
        window.api.saveSetting('port', port); // Save the port on start
    } else {
        showToast('Invalid port number', 'error');
    }
});

stopBtn.addEventListener('click', () => {
    stopBtn.disabled = true;
    stopBtn.textContent = 'Stopping...';
    window.api.stopServer();
});

window.api.onServerStatusChanged(handleServerStatus);

export function setInitialStatus(settings: any) {
    portInput.value = settings.port;
}

function handleServerStatus(status: { isRunning: boolean, message?: string }) {
    serverStatusIndicator.classList.toggle('status-running', status.isRunning);
    serverStatusIndicator.classList.toggle('status-stopped', !status.isRunning);
    serverStatusIndicator.title = status.isRunning ? 'Server is running' : 'Server is stopped';

    portInput.disabled = status.isRunning;
    startBtn.disabled = status.isRunning;
    stopBtn.disabled = !status.isRunning;

    // Revert button text from "Starting..."/"Stopping..."
    startBtn.textContent = getTranslation('startServer');
    stopBtn.textContent = getTranslation('stopServer');

    if (status.message) showToast(status.message);
}