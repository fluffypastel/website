document.addEventListener("DOMContentLoaded", () => {

    const quotes = [
        "KitKat? No, I am Kitka.",
        "I love my friends!",
        "Who wouldn't eat a chocolate cake anyways...",
        "Yes I am a skunk..",
        "🦨🦨🦨",
        "Oh did you just paw at my site?"
    ];

    document.getElementById("quote").textContent =
        quotes[
            Math.floor(Math.random() * quotes.length)
        ];

});