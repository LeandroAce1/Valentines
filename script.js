document.addEventListener("DOMContentLoaded", function () {
    // Keep prompting until "OK" is clicked
    function askValentine() {
        let answer = confirm("Will you be my Valentine? 💖");
        if (answer) {
            celebrate();
            setTimeout(() => {
                alert("YAAAY! I love you! ❤️🥰");
            }, 1000);
        } else {
            shakeScreen();
            setTimeout(askValentine, 1000);
        }
    }
    
    askValentine(); // Start the prompt loop

    // Function to shake the screen on cancel
    function shakeScreen() {
        document.body.style.animation = "shake 0.5s";
        setTimeout(() => {
            document.body.style.animation = "";
        }, 500);
    }

    // Function to trigger celebration
    function celebrate() {
        const celebrationContainer = document.createElement("div");
        celebrationContainer.style.position = "fixed";
        celebrationContainer.style.top = "0";
        celebrationContainer.style.left = "0";
        celebrationContainer.style.width = "100vw";
        celebrationContainer.style.height = "100vh";
        celebrationContainer.style.pointerEvents = "none";
        celebrationContainer.style.zIndex = "1000";
        document.body.appendChild(celebrationContainer);

        // Create confetti 🎉
        for (let i = 0; i < 50; i++) {
            let confetti = document.createElement("div");
            confetti.innerHTML = "🎉";
            confetti.style.position = "absolute";
            confetti.style.fontSize = "2rem";
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.top = "-5vh";
            confetti.style.animation = "fall 4s linear infinite";
            celebrationContainer.appendChild(confetti);
        }

        // Create floating hearts ❤️
        for (let i = 0; i < 30; i++) {
            let heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.style.position = "absolute";
            heart.style.fontSize = "2.5rem";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.top = Math.random() * 100 + "vh";
            heart.style.animation = "float 5s ease-in-out infinite";
            celebrationContainer.appendChild(heart);
        }

        // Remove celebration after 7 seconds
        setTimeout(() => {
            celebrationContainer.remove();
        }, 7000);
    }

    // Function to add decorations when clicking buttons
    function addDecoration(emoji) {
        let decoration = document.createElement("div");
        decoration.innerHTML = emoji;
        decoration.style.position = "absolute";
        decoration.style.fontSize = "2rem";
        decoration.style.left = Math.random() * 100 + "vw";
        decoration.style.top = Math.random() * 100 + "vh";
        decoration.style.animation = "float 4s ease-in-out infinite";
        document.body.appendChild(decoration);

        // Remove decorations after a while
        setTimeout(() => {
            decoration.remove();
        }, 10000);
    }

    // Event listeners for decoration buttons
    document.getElementById("heartsButton").addEventListener("click", () => addDecoration("❤️"));
    document.getElementById("tulipsButton").addEventListener("click", () => addDecoration("🌷"));
    document.getElementById("giftsButton").addEventListener("click", () => addDecoration("🎁"));

    // Add keyframe animations
    const styles = document.createElement("style");
    styles.innerHTML = `
    @keyframes fall {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0; }
    }
    @keyframes float {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        50% { transform: translateY(-20px) scale(1.1); }
        100% { transform: translateY(0) scale(1); opacity: 1; }
    }
    @keyframes
