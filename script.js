// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Dynamic Sliding Text
const dynamicTextElement = document.getElementById('dynamic-text');
const textArray = [
  "Building the future, one project at a time.",
  "Designing spaces that inspire.",
  "Crafting timeless architecture.",
  "Turning your vision into reality."
];
let currentTextIndex = 0;

function updateDynamicText() {
  // Remove the 'show' class to start the slide-out
  dynamicTextElement.classList.remove('show');

  setTimeout(() => {
    // Update the text content
    dynamicTextElement.textContent = textArray[currentTextIndex];

    // Reset the slide-in animation by adding the 'show' class
    dynamicTextElement.classList.add('show');

    // Update the index for the next text
    currentTextIndex = (currentTextIndex + 1) % textArray.length;
  }, 1000); // Wait for the slide-out transition to complete
}

// Start the dynamic text update cycle
updateDynamicText();
setInterval(updateDynamicText, 3000); // Adjust interval for better readability
