const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// 1. GENERATE GRID
const container = document.getElementById('alphabet-container');
if (container) {
    alphabet.forEach(letter => {
        const link = document.createElement('a');
        link.href = `assets/videos/${letter.toLowerCase()}.html`;
        link.className = 'letter-link';
        link.innerText = letter;
        container.appendChild(link);
    });
}

// 2. PATH RESOLUTION HELPER
function getPathPrefix() {
    const path = window.location.pathname;
    if (path.includes('/videos/') || path.includes('/cards/')) {
        return '../../assets/';
    }
    return 'assets/';
}

// 3. NAVIGATION
function randomVideo() {
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)].toLowerCase();
    window.location.href = getPathPrefix() + "videos/" + randomLetter + ".html";
}

function randomCard() {
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)].toLowerCase();
    window.location.href = getPathPrefix() + "cards/" + randomLetter + ".html";
}

// 4. SOUND TOGGLE
function toggleSound() {
    const video = document.getElementById('letterVideo');
    const btn = document.getElementById('soundToggle');
    if (video && btn) {
        if (video.muted) {
            video.muted = false;
            btn.innerText = "SOUND OFF";
        } else {
            video.muted = true;
            btn.innerText = "SOUND ON";
        }
    }
}
