const btn = document.getElementById("prankBtn");
let fails = 0;

btn.addEventListener("mouseover", () => {
    fails++;
    
    // Make the button run away randomly
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    btn.style.left = x + "px";
    btn.style.top = y + "px";

    // After 6 fails, show the picture + shake it
    if (fails === 6) {
        const pic = document.getElementById("funnyPic");
        pic.style.display = "block";
        pic.style.animation = "shake 0.25s infinite";
    }
});
