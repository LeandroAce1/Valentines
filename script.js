function addEmoji(emoji) {
    const decorations = document.getElementById("decorations");
    const item = document.createElement("div");
    item.classList.add("decor-item");
    item.innerHTML = emoji;
    decorations.appendChild(item);
  }
  
  let valentinePromptShown = false;
  
  function showValentinePrompt() {
    if (!valentinePromptShown) {
      const prompt = document.getElementById("valentinePrompt");
      prompt.style.display = "flex";
      valentinePromptShown = true;
    }
  }
  
  function respondToPrompt(answer) {
    const prompt = document.getElementById("valentinePrompt");
    if (answer) {
      prompt.style.display = "none";
      displayCelebration();
    } else {
      const cancelButton = document.getElementById("cancelButton");
      cancelButton.classList.add("shake");
      setTimeout(() => cancelButton.classList.remove("shake"), 300);
    }
  }
  
  function displayCelebration() {
    // Light up the page with confetti and hearts
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    document.body.appendChild(confetti);
    
    for (let i = 0; i < 30; i++) {
      let heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "%";
      heart.style.animationDuration = Math.random() * 2 + 1 + "s";
      heart.innerHTML = "💖";
      confetti.appendChild(heart);
    }
  
    setTimeout(() => confetti.remove(), 5000); // Remove confetti after 5 seconds
  }
  
  // Show the prompt when the page loads
  window.onload = function() {
    showValentinePrompt();
  };
  