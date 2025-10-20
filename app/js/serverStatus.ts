// @ts-ignore
import { showToast, showTranslatedToast } from './logs';
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
        showTranslatedToast('toastInvalidPort', undefined, 'error');
    }
});

stopBtn.addEventListener('click', () => {
    stopBtn.disabled = true;
    stopBtn.textContent = getTranslation('serverStopping');
    window.api.stopServer();
});


export function setInitialPort(settings: any) {
    portInput.value = settings.port;
}

window.api.onServerStatusChanged((status: { isRunning: boolean, port?: number | null }) => {
    const { isRunning, port } = status;

    serverStatusIndicator.classList.toggle('status-running', isRunning);
    serverStatusIndicator.classList.toggle('status-stopped', !isRunning);

    serverStatusIndicator.title = isRunning
        ? getTranslation('statusRunning')
        : getTranslation('statusStopped');

    portInput.disabled = isRunning;
    startBtn.disabled = isRunning;
    stopBtn.disabled = !isRunning;

    portInput.title = isRunning ? getTranslation('requireStop') : '';

    // Revert button text from "Starting..." / "Stopping..."
    startBtn.textContent = getTranslation('startServer');
    stopBtn.textContent = getTranslation('stopServer');

    // don't show toast if port is null (in case of startup)
    if (port !== null) {
        if (status.isRunning) showTranslatedToast('toastServerStarted', { port: port });
        else showTranslatedToast('toastServerStopped');
    }
});