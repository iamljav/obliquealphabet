/**
 * OBLIQUE ALPHABET - MASTER DYNAMIC ENGINE
 */

// 1. STARTUP: Load content based on URL parameters
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const letter = params.get('letter') || 'a'; // Default to 'a'
    const mode = params.get('mode') || 'video'; // Default to 'video'

    const videoElement = document.getElementById('letterVideo');
    const videoSource = document.getElementById('videoSource');
    const cardElement = document.getElementById('letterCard');

    if (mode === 'video') {
        // Prepare Video
        if (videoElement && videoSource) {
            videoElement.classList.remove('hidden');
            cardElement.classList.add('hidden');
            videoSource.src = `assets/videos/${letter}.mp4`;
            videoElement.load();
        }
    } else if (mode === 'card') {
        // Prepare Card
        if (cardElement && videoElement) {
            cardElement.classList.remove('hidden');
            videoElement.classList.add('hidden');
            cardElement.src = `assets/cards/${letter}.png`;
        }
    }
    
    // Update Page Title for Browser Tab
    document.title = `${letter.toUpperCase()} | OBLIQUE ALPHABET`;
});

// 2. CONTROLS: Sound Toggle
function toggleSound() {
    const video = document.getElementById('letterVideo');
    const btn = document.getElementById('soundToggle');
    if (!video) return;

    if (video.muted) {
        video.muted = false;
        btn.innerText = "SOUND OFF";
    } else {
        video.muted = true;
        btn.innerText = "SOUND ON";
    }
}

// 3. CONTROLS: Replay
function replayVideo() {
    const video = document.getElementById('letterVideo');
    if (video) {
        video.currentTime = 0;
        video.play();
    }
}

// 4. NAVIGATION: Master Randomizer
function getRandom(targetMode) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    
    // Redirects to the same template with new values
    window.location.href = `template.html?letter=${randomLetter}&mode=${targetMode}`;
}
