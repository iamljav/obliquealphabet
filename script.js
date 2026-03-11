// 1. UTILITY: GET URL PARAMETERS
function getParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// 2. CORE SETUP ON LOAD
window.addEventListener('DOMContentLoaded', () => {
    const letter = getParam('letter') || 'a';
    const mode = getParam('mode') || 'video';
    
    updateMedia(letter, mode);
    updateButtons(letter, mode);
});

// 3. UPDATE MEDIA DISPLAY
function updateMedia(letter, mode) {
    const video = document.getElementById('letterVideo');
    const card = document.getElementById('letterCard');
    const container = document.querySelector('.media-container');

    // Reset visibility
    video.classList.add('hidden');
    card.classList.add('hidden');
    container.style.opacity = '0';

    if (mode === 'video') {
        video.classList.remove('hidden');
        document.getElementById('videoSource').src = `assets/videos/${letter}.mp4`;
        video.load();
        video.loop = true; // Auto-loop replaces the Replay button
    } else {
        card.classList.remove('hidden');
        card.src = `assets/cards/${letter}.png`;
    }

    // Fade in for smooth transition
    setTimeout(() => { container.style.opacity = '1'; }, 100);
}

// 4. DYNAMIC BUTTON LABELS & ACTIONS
function updateButtons(letter, mode) {
    const btn1 = document.getElementById('btn-1'); // Sound / Random Video
    const btn2 = document.getElementById('btn-2'); // Random Video / Random Card
    const btn3 = document.getElementById('btn-3'); // View Card / View Video
    const btn4 = document.getElementById('btn-4'); // Back to Alphabet

    if (mode === 'video') {
        btn1.innerText = "SOUND ON";
        btn1.onclick = () => toggleSound();
        
        btn2.innerText = "ANOTHER RANDOM VIDEO";
        btn2.onclick = () => getRandom('video');
        
        btn3.innerText = "VIEW CARD VERSION";
        btn3.onclick = () => window.location.href = `template.html?letter=${letter}&mode=card`;
    } else {
        btn1.innerText = "PICK A RANDOM VIDEO";
        btn1.onclick = () => getRandom('video');
        
        btn2.innerText = "ANOTHER RANDOM CARD";
        btn2.onclick = () => getRandom('card');
        
        btn3.innerText = "VIEW VIDEO VERSION";
        btn3.onclick = () => window.location.href = `template.html?letter=${letter}&mode=video`;
    }

    // Bottom Right is always the Exit
    btn4.innerText = "BACK TO ALPHABET";
    btn4.onclick = () => window.location.href = 'index.html';
}

// 5. RANDOMIZER LOGIC
function getRandom(targetMode) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    window.location.href = `template.html?letter=${randomLetter}&mode=${targetMode}`;
}

// 6. SOUND TOGGLE
function toggleSound() {
    const video = document.getElementById('letterVideo');
    const btn = document.getElementById('btn-1');
    if (video.muted) {
        video.muted = false;
        btn.innerText = "SOUND OFF";
    } else {
        video.muted = true;
        btn.innerText = "SOUND ON";
    }
}
