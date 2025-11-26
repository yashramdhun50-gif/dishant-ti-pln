const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const mainVirus = document.getElementById("mainVirus");
const recordDot = document.getElementById("recordDot");
const notifContainer = document.getElementById("notifContainer");
const glitchSound = document.getElementById("glitchSound");

// Messages for notifications
const messages = [
    "⚠️ VIRUS DETECTED",
    "⚠️ SYSTEM BREACH",
    "⚠️ DATA CORRUPTION",
    "⚠️ CAMERA ACTIVATED",
    "⚠️ SIM REMOVED",
    "⚠️ STORAGE ERASED",
    "⚠️ PHONE RESET",
    "⚠️ SYSTEM OVERRIDE",
    "⚠️ UNAUTHORIZED ACCESS"
];

// When he presses "pezz ladn pln"
startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    mainVirus.style.display = "block";
    recordDot.style.display = "block";

    try {
        glitchSound.play();
    } catch (e) {}

    if ("vibrate" in navigator) {
        navigator.vibrate([500, 200, 500, 200, 500]);
    }

    // Lock screen (fake fullscreen)
    document.documentElement.requestFullscreen?.();

    startChaos();
});

function startChaos() {
    setInterval(() => {
        // Spam picture
        let img = document.createElement("img");
        img.src = "friend.jpg";
        img.classList.add("imgSpam");
        img.style.left = Math.random() * 80 + "%";
        img.style.top = Math.random() * 80 + "%";
        notifContainer.appendChild(img);

        // Fake notifications
        let notif = document.createElement("div");
        notif.classList.add("notif");
        notif.innerText = messages[Math.floor(Math.random() * messages.length)];
        notif.style.left = Math.random() * 70 + "%";
        notif.style.top = Math.random() * 70 + "%";
        notifContainer.appendChild(notif);
    }, 250);

    // Random red screen flashes
    setInterval(() => {
        document.body.style.background = "red";
        setTimeout(() => document.body.style.background = "black", 120);
    }, 700);

    // Extra vibration
    if ("vibrate" in navigator) {
        setInterval(() => navigator.vibrate(180), 900);
    }
}
