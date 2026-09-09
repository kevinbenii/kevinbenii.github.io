// Speech bubble
document.getElementById("card-speech").onclick = (e) => {
    const bubble = document.getElementById("speech-bubble");
    bubble.classList.toggle("show");
};

// Beverage select
document.getElementById("beverage-select").onchange = (e) => {
    const choice = e.target.value;
    document.getElementById("beverage-message").innerHTML = `${choice}: Nice Choice!`;
};

// Sticker
document.getElementById("sticker-wrapper").onclick = (e) => {
    const wrapper = document.getElementById("sticker-wrapper");
    const existingEmoji = document.getElementById("soccer-sticker");

    if (existingEmoji) {
        existingEmoji.remove();
        return;
    }

    const emoji = document.createElement("span");
    emoji.id = "soccer-sticker";
    emoji.classList.add("sticker-emoji");
    emoji.innerHTML = "\u26bd";
    emoji.style.top = "15%";
    emoji.style.left = "10%";

    wrapper.appendChild(emoji);
};