document.addEventListener('DOMContentLoaded', () => {
    const osText = document.getElementById('os-detect');
    const downloadBtn = document.getElementById('download-btn');
    
    // Simple User Agent Detection
    const userAgent = navigator.userAgent.toLowerCase();
    const isAndroid = userAgent.includes('android');
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    
    if (isAndroid) {
        osText.textContent = "Great! Your device is compatible.";
        osText.style.color = "#4ade80"; // Green success color
    } else if (isIOS) {
        osText.textContent = "iOS is currently not supported.";
        osText.style.color = "#ef4444"; // Red error color
        // Optional: Disable button
        // downloadBtn.style.opacity = "0.5";
        // downloadBtn.style.pointerEvents = "none";
        // downloadBtn.innerHTML = "<span>Coming Soon</span>";
    } else {
        // Desktop
        osText.textContent = "Download the APK to your Android device.";
    }
    
    // Optional: Add simple click ripple effect or analytics event here
    downloadBtn.addEventListener('click', () => {
        console.log('Download initiated');
    });
});