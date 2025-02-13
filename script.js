function addHeart() {
  const decorations = document.getElementById("decorations");
  const heart = document.createElement("div");
  heart.classList.add("decor-item");
  heart.innerHTML = "💖";
  decorations.appendChild(heart);
}

function addTulip() {
  const decorations = document.getElementById("decorations");
  const tulip = document.createElement("div");
  tulip.classList.add("decor-item");
  tulip.innerHTML = "🌷";
  decorations.appendChild(tulip);
}

// Show the Valentine prompt
let valentinePromptShown = false;

function showValentinePrompt() {
  if (!valentinePromptShown) {
    const prompt = document.getElementById("valentinePrompt");
    prompt.style.display = "flex";
    valentinePromptShown = true;
  }
}

// Respond to the Valentine prompt
function respondToPrompt(answer) {
  const prompt = document.getElementById("valentinePrompt");
  if (answer) {
    prompt.style.display = "none";
    alert("Yaaay! I love you! ❤️");
  } else {
    showValentinePrompt();
  }
}

// Show the prompt right away when the page loads
window.onload = function() {
  showValentinePrompt();
};
