document.addEventListener('DOMContentLoaded', function () {
    const decorationsContainer = document.getElementById('decorations');
    const confettiContainer = document.getElementById('confetti');
    const prompt = document.getElementById('prompt');
    const promptOkButton = document.getElementById('prompt-ok');
    const promptCancelButton = document.getElementById('prompt-cancel');
    const buttonsContainer = document.getElementById('buttons');

    // Valentine's decorations
    const decorations = ['❤️', '💖', '🎈', '💌', '🌹', '✨', '💘', '🎀', '🎊'];

    // Function to add decoration emoji to the page
    function addDecoration(emoji) {
        const emojiElement = document.createElement('div');
        emojiElement.classList.add('decor-item');
        emojiElement.innerText = emoji;
        emojiElement.style.left = `${Math.random() * 90}vw`; // Random horizontal position
        emojiElement.style.top = `${Math.random() * 90}vh`;  // Random vertical position
        decorationsContainer.appendChild(emojiElement);
    }

    // Generate buttons dynamically
    decorations.forEach(function (emoji) {
        const button = document.createElement('button');
        button.classList.add('decor-box');
        button.innerText = emoji;
        button.addEventListener('click', function () {
            addDecoration(emoji);
        });
        buttonsContainer.appendChild(button);
    });

    // Function to show the popup
    function showPrompt() {
        prompt.style.display = 'flex';
    }

    // Function to hide the popup
    function hidePrompt() {
        prompt.style.display = 'none';
    }

    // OK Button: Triggers celebration effect
    promptOkButton.addEventListener('click', function () {
        hidePrompt();
        triggerCelebration();
        alert("Yaaay! I love you! ❤️"); // Fallback message
    });

    // Cancel Button: Shake effect
    promptCancelButton.addEventListener('click', function () {
        promptCancelButton.classList.add('shake');
        setTimeout(function () {
            promptCancelButton.classList.remove('shake');
        }, 500);
    });

    // Confetti and hearts animation
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

    // Ensure the popup appears on page load
    setTimeout(showPrompt, 1000);
});
