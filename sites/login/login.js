document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    /** @type {HTMLInputElement} */
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const password = passwordInput.value;
    errorMessage.textContent = '';

    try {
        const response = await fetch(window.location.href, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password }),
        });

        if (response.ok) {
            // Redirect to main application; browser will now have the session cookie
            window.location.href = '/app';
        } else {
            // Login failed
            const errorData = await response.json();

            if (errorData.lockoutUntil) {
                // user locked out
                errorMessage.textContent = formatRemainingTime(errorData.lockoutUntil);

                // periodically update timer on the page
                const interval = setInterval(() => {
                    errorMessage.textContent = formatRemainingTime(errorData.lockoutUntil);
                    if (Date.now() > errorData.lockoutUntil) {
                        errorMessage.textContent = 'You can try again now.';
                        clearInterval(interval);
                    }
                }, 1000);
            } else if (errorData.remainingTries !== undefined) {
                // incorrect password, with tries remaining
                errorMessage.textContent = `Invalid password. You have ${errorData.remainingTries} ${errorData.remainingTries === 1 ? 'try' : 'tries'} left.`;
            } else {
                // generic error
                errorMessage.textContent = errorData.error || 'Invalid password.';
            }
        }
    } catch (error) {
        console.error('Login request failed:', error);
        errorMessage.textContent = 'Could not connect to the server.';
    }
});

function formatRemainingTime(timestamp) {
    const remainingMs = timestamp - Date.now();
    if (remainingMs <= 0) {
        return 'Please try again now.';
    }
    const totalSeconds = Math.ceil(remainingMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    let timeString = 'You can try again in ';
    if (minutes > 0) {
        timeString += `${minutes} minute${minutes > 1 ? 's' : ''}`;
    }
    if (minutes > 0 && seconds > 0) {
        timeString += ' and ';
    }
    if (seconds > 0) {
        timeString += `${seconds} second${seconds > 1 ? 's' : ''}`;
    }
    return timeString + '.';
}