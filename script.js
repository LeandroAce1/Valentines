document.addEventListener("DOMContentLoaded", function () {
    const prompt = document.getElementById("prompt");
    const okButton = document.getElementById("prompt-ok");
    const cancelButton = document.getElementById("prompt-cancel");
    const decorationsContainer = document.getElementById("decorations");
    const confettiContainer = document.getElementById("confetti");

    // Function to show confetti and hearts for celebration
    function celebrate() {
        confettiContainer.innerHTML = ""; // Clear old confetti
        decorationsContainer.innerHTML = ""; // Clear old hearts

        for (let i = 0; i < 50; i++) {
            let confetti = document.createElement("div");
            confetti.innerHTML = "🎉";
            confetti.classList.add("confetti");
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.animationDuration = (Math.random() * 2 + 3) + "s";
            confettiContainer.appendChild(confetti);
        }

        for (let i = 0; i < 30; i++) {
            let heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.classList.add("heart");
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
            decorationsContainer.appendChild(heart);
        }

        setTimeout(() => {
            confettiContainer.innerHTML = ""; // Remove confetti after 7s
            decorationsContainer.innerHTML = ""; // Remove hearts
        }, 7000);
    }

    // Shake effect for cancel button
    function shakePrompt() {
        prompt.classList.add("shake");
        setTimeout(() => {
            prompt.classList.remove("shake");
        }, 500);
    }

    // Prompt logic: Keep showing until "OK" is clicked
    function showPrompt() {
        prompt.style.display = "flex";
    }

    okButton.addEventListener("click", function () {
        prompt.style.display = "none";
        celebrate();
        setTimeout(() => {
            alert("YAAAY! I love you! ❤️🥰");
        }, 1000);
    });

    cancelButton.addEventListener("click", function () {
        shakePrompt();
        setTimeout(showPrompt, 1000);
    });

    showPrompt(); // Show prompt on page load

    // Function to add decorations
    function addDecoration(emoji) {
        let decoration = document.createElement("div");
        decoration.innerHTML = emoji;
        decoration.classList.add("decoration");
        decoration.style.left = Math.random() * 100 + "vw";
        decoration.style.top = Math.random() * 100 + "vh";
        decorationsContainer.appendChild(decoration);

        setTimeout(() => {
            decoration.remove();
        }, 10000);
    }

    // Create buttons dynamically
    const buttons = [
        { text: "Add Hearts ❤️", emoji: "❤️" },
        { text: "Add Tulips 🌷", emoji: "🌷" },
        { text: "Add Gifts 🎁", emoji: "🎁" },
        { text: "Add Love Letters 💌", emoji: "💌" },
        { text: "Add Cupcakes 🧁", emoji: "🧁" }
    ];

    const buttonsContainer = document.getElementById("buttons");
    buttons.forEach(btn => {
        let button = document.createElement("button");
        button.innerText = btn.text;
        button.classList.add("decor-button");
        button.addEventListener("click", () => addDecoration(btn.emoji));
        buttonsContainer.appendChild(button);
    });
});
