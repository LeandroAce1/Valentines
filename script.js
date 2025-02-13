// Wait for the page to load
document.addEventListener('DOMContentLoaded', function () {
    const decorationsContainer = document.getElementById('decorations');
    const prompt = document.getElementById('prompt');
    const confettiContainer = document.getElementById('confetti');
    const promptOkButton = document.getElementById('prompt-ok');
    const promptCancelButton = document.getElementById('prompt-cancel');
  
    // Array of decoration emojis
    const decorations = ['💖', '❤️', '🌷', '💐', '💘', '💕', '🌸', '💝', '💌'];
  
    // Function to add decoration to the page
    function addDecoration(emoji) {
      const emojiElement = document.createElement('div');
      emojiElement.classList.add('decor-item');
      emojiElement.innerText = emoji;
      decorationsContainer.appendChild(emojiElement);
    }
  
    // Populate the decoration buttons
    decorations.forEach(function (emoji) {
      const button = document.createElement('button');
      button.classList.add('decor-box');
      button.innerText = `Add ${emoji}`;
      button.onclick = function () {
        addDecoration(emoji);
      };
      document.getElementById('buttons').appendChild(button);
    });
  
    // Pop-up prompt interaction
    function showPrompt() {
      prompt.style.display = 'flex';
    }
  
    function hidePrompt() {
      prompt.style.display = 'none';
    }
  
    // Handling button clicks for OK and Cancel
    promptOkButton.addEventListener('click', function () {
      hidePrompt();
      // Trigger a celebration effect (confetti and hearts)
      triggerCelebration();
    });
  
    promptCancelButton.addEventListener('click', function () {
      // Add a shake effect on incorrect input (Cancel)
      promptCancelButton.classList.add('shake');
      setTimeout(function () {
        promptCancelButton.classList.remove('shake');
      }, 500);  // Remove shake effect after 500ms
    });
  
    // Trigger the confetti and hearts effect
    function triggerCelebration() {
      // Confetti effect
      for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = '💖';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        heart.style.animationDuration = `${Math.random() * 2 + 1}s`;
        confettiContainer.appendChild(heart);
  
        // Remove the heart after the animation ends
        setTimeout(function () {
          heart.remove();
        }, 3000); // Hearts disappear after 3 seconds
      }
    }
  
    // Function to check if the user is ready to be my Valentine
    function askToBeValentine() {
      showPrompt();
    }
  
    // Prompting the user to click OK or Cancel
    setTimeout(askToBeValentine, 1000);  // Delay for 1 second to simulate loading
  
  });
