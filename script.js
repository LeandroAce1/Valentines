document.addEventListener('DOMContentLoaded', function () {
    const decorationsContainer = document.getElementById('decorations');
    const prompt = document.getElementById('prompt');
    const confettiContainer = document.getElementById('confetti');
    const promptOkButton = document.getElementById('prompt-ok');
    const promptCancelButton = document.getElementById('prompt-cancel');

    // Safe emojis that work on all devices
    const decorations = ['❤️', '💖', '🎈', '🎀', '💌', '🌹', '✨', '💘', '🎉'];

    // Function to add decoration to the page
    function addDecoration(emoji) {
        const emojiElement = document.createElement('div');
        emojiElement.classList.add('decor-item');
        emojiElement.innerText = emoji;
        emojiElement.style.left = `${Math.random() * 90}vw`; // Random horizontal position
        emojiElement.style.top = `${Math.random() * 90}vh`;  // Random vertical position
        decorationsContainer.appendChild(emojiElement);
    }

    // Create buttons dynamically for each decoration
    decorations.forEach(function (emoji) {
        const button = document.createElement('button');
        button.classList.add('decor-box');
        button.innerText = emoji;
        button.onclick = function () {
            addDecoration(emoji);
        };
        document.getElementById('buttons').appendChild(button);
    });

    // Show the Valentine's prompt
    function showPrompt() {
        prompt.style.display = 'flex';
    }

    // Hide the prompt
    function hidePrompt() {
        prompt.style.display = 'none';
    }

    // OK Button: Triggers celebration effect
    promptOkButton.addEventListener('click', function () {
        hidePrompt();
        triggerCelebration();
        alert("Yaaay! I love you! ❤️"); // Fallback message for mobile users
    });

    // Cancel Button: Shakes on incorrect input
    promptCancelButton.addEventListener('click', function () {
        promptCancelButton.classList.add('shake');
        setTimeout(function () {
            promptCancelButton.classList.remove('shake');
        }, 500);
    });

    // Confetti and hearts celebration effect
    function triggerCelebration() {
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerText = '❤️';
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDelay = `${Math.random() * 2}s`;
            heart.style.animationDuration = `${Math.random() * 2 + 1}s`;
            confettiContainer.appendChild(heart);

            // Remove hearts after animation
            setTimeout(function () {
                heart.remove();
            }, 3000);
        }
    }

    // Ensure the prompt keeps showing until "OK" is clicked
    function askToBeValentine() {
        showPrompt();
    }

    // Show the prompt after page loads
    setTimeout(askToBeValentine, 1500);
});
