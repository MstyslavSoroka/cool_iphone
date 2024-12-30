// Select buttons for each color
const black = document.querySelector('.black');
const natural = document.querySelector('.natural');
const white = document.querySelector('.white');
const blue = document.querySelector('.blue');

// Select the image elements
const front = document.querySelector('.front-img');
const tilted = document.querySelector('.tilted');
const side = document.querySelector('.side-img');
const frontBack = document.querySelector('.front-back');
const chosen = document.querySelector('.chosen');

// Function to update images dynamically based on selected color
const updateImages = (color) => {
  front.src = `./img/${color}/front.jpg`;
  side.src = `./img/${color}/side.jpg`;
  tilted.src = `./img/${color}/tilted.jpg`;
  frontBack.src = `./img/${color}/front-back.jpg`;
  chosen.src = `./img/${color}/front-back.jpg`;
};

// Add event listeners for each color
black.addEventListener('click', () => updateImages('black'));
natural.addEventListener('click', () => updateImages('natural'));
white.addEventListener('click', () => updateImages('white'));
blue.addEventListener('click', () => updateImages('blue'));
