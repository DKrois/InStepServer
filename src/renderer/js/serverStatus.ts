import { showTranslatedToast } from './logs';
import { getTranslation } from './translate';

const startBtn = document.getElementById('start-btn')! as HTMLButtonElement;
const stopBtn = document.getElementById('stop-btn')! as HTMLButtonElement;
const portInput = document.getElementById('port-input') as HTMLInputElement;
const serverStatusIndicator = document.getElementById('server-status-indicator')!;

const restartServerInfo = document.getElementById('restart-server-info')!;

let previousPortValue: number | null = null;
startBtn.addEventListener('click', () => {
    const port = parseInt(portInput.value, 10);

    if (port && port > 79 && port < 65536) {
        startBtn.disabled = true;
        startBtn.textContent = 'Starting...';

        const success = window.api.startServer(port);
        if (!success) showTranslatedToast('toastStartFailed', undefined, 'error');
        window.api.savePort(port); // save port on start
    } else {
        showTranslatedToast('toastInvalidPort', undefined, 'error');
    }
});

stopBtn.addEventListener('click', () => {
    stopBtn.disabled = true;
    stopBtn.textContent = getTranslation('serverStopping');
    window.api.stopServer();
});

portInput.addEventListener('focusout', () => {
    // only show warning if port was actually changed since last start
    if (previousPortValue !== parseInt(portInput.value, 10)) setRestartServerInfoVisible(true);
});

window.api.onServerStatusChanged((status: { isRunning: boolean, port?: number | null }) => {
    const { isRunning, port } = status;

    serverStatusIndicator.classList.toggle('status-running', isRunning);
    serverStatusIndicator.classList.toggle('status-stopped', !isRunning);

    serverStatusIndicator.title = isRunning
        ? getTranslation('statusRunning')
        : getTranslation('statusStopped');

    startBtn.disabled = isRunning;
    stopBtn.disabled = !isRunning;

    // revert button text from "Starting..." / "Stopping..."
    startBtn.textContent = getTranslation('startServer');
    stopBtn.textContent = getTranslation('stopServer');

    // remove restart-server-info
    setRestartServerInfoVisible(false);
    if (port) previousPortValue = port;

    // don't show toast if port is null (in case of startup)
    if (port !== null) {
        if (status.isRunning) showTranslatedToast('toastServerStarted', { port });
        else showTranslatedToast('toastServerStopped');
    }
});

export function setInitialPort(port: any) {
    portInput.value = port;
}

export function setRestartServerInfoVisible(visible: boolean) {
    // only show warning if server is running rn; always disable if server isn't running
    if (serverStatusIndicator.classList.contains('status-running') || !visible) restartServerInfo.classList.toggle('hidden', !visible);
}