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
            // Redirect to the main application; the browser will now have the session cookie
            window.location.href = '/app'; // or /index.html
        } else {
            // Login failed.
            const errorData = await response.json();
            errorMessage.textContent = errorData.error || 'Invalid password.';
        }
    } catch (error) {
        console.error('Login request failed:', error);
        errorMessage.textContent = 'Could not connect to the server.';
    }
});