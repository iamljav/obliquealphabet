/**
 * OBLIQUE ALPHABET - Core Logic
 * Handles randomized navigation, video controls, and grid generation.
 */

// 1. RANDOMIZED NAVIGATION
function randomVideo() {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    
    // Check if we are already inside the assets folder to determine path prefix
    const isInsideAssets = window.location.pathname.includes('assets');
    const prefix = isInsideAssets ? '../videos/' : 'assets/videos/';
    
    window.location.href = `${prefix}${randomLetter}.html`;
}

function randomCard() {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    
    // Logic for randomized card navigation
    const isInsideAssets = window.location.pathname.includes('assets');
    const prefix = isInsideAssets ? '../cards/' : 'assets/cards/';
    
    window.location.href = `${prefix}${randomLetter}.html`;
}

// 2. VIDEO CONTROLS
function toggleSound() {
    const video = document.getElementById('letterVideo');
    const btn = document.getElementById('soundToggle');
    
    if (video) {
        if (video.muted) {
            video.muted = false;
            btn.innerText = 'SOUND OFF';
        } else {
            video.muted = true;
            btn.innerText = 'SOUND ON';
        }
    }
}

/**
 * Resets the video to the beginning and plays it.
 * Supports the "REPLAY THE VIDEO" button requirement.
 */
function replayVideo() {
    const video = document.getElementById('letterVideo');
    if (video) {
        video.currentTime = 0;
        video.play();
    }
}

// 3. HOMEPAGE GRID GENERATION
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('alphabet-container');
    
    // Only run this if we are on the index.html page
    if (container) {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        
        letters.forEach(letter => {
            const link = document.createElement('a');
            // Homepage always points to the videos subfolder
            link.href = `assets/videos/${letter.toLowerCase()}.html`;
            link.className = 'letter-link';
            link.innerText = letter;
            container.appendChild(link);
        });
    }
});
