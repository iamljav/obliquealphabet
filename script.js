/**
 * OBLIQUE ALPHABET - MASTER DYNAMIC ENGINE
 * Optimized for smooth transitions and pre-loading
 */

window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const letter = (params.get('letter') || 'a').toLowerCase();
    const mode = params.get('mode') || 'video';

    const videoElement = document.getElementById('letterVideo');
    const videoSource = document.getElementById('videoSource');
    const cardElement = document.getElementById('letterCard');
    const mediaContainer = document.querySelector('.media-container');

    // 1. Initial State: Hide container to prevent "glitchy" loading
    mediaContainer.style.opacity = '0';
    mediaContainer.style.transition = 'opacity 0.5s ease-in-out';

    if (mode === 'video') {
        if (videoElement && videoSource) {
            videoElement.classList.remove('hidden');
            cardElement.classList.add('hidden');
            videoSource.src = `assets/videos/${letter}.mp4`;
            
            videoElement.load();
            
            // Smooth Reveal: Only show once the video can play
            videoElement.oncanplaythrough = () => {
                mediaContainer.style.opacity = '1';
            };
        }
    } else if (mode === 'card') {
        if (cardElement && videoElement) {
            cardElement.classList.remove('hidden');
            videoElement.classList.add('hidden');
            
            // Smooth Reveal: Only show once the image is fully loaded
            cardElement.onload = () => {
                mediaContainer.style.opacity = '1';
            };
            cardElement.src = `assets/cards/${letter}.png`;
        }
    }
    
    document.title = `${letter.toUpperCase()} | OBLIQUE ALPHABET`;
});

/**
 * BUTTON CONTROLS
 */

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

function replayVideo() {
    const video = document.getElementById('letterVideo');
    if (video) {
        video.currentTime = 0;
        video.play();
    }
}

/**
 * NAVIGATION
 */

function getRandom(targetMode) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    
    // Add a quick fade-out before navigating for a "cinematic" feel
    document.querySelector('.media-container').style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = `template.html?letter=${randomLetter}&mode=${targetMode}`;
    }, 300); // Wait for fade-out to finish
}
