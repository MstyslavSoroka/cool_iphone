
const black = document.querySelector('.black');
const natural = document.querySelector('.natural');
const white = document.querySelector('.white');
const blue = document.querySelector('.blue');

const front = document.querySelector('.front-img');
const tilted = document.querySelector('.tilted');
const side = document.querySelector('.side-img');
const frontBack = document.querySelector('.front-back');
const chosen = document.querySelector('.chosen');

const updateImages = (color) => {
  front.src = `./img/${color}/front.jpg`;
  side.src = `./img/${color}/side.jpg`;
  tilted.src = `./img/${color}/tilted.jpg`;
  frontBack.src = `./img/${color}/front-back.jpg`;
  chosen.src = `./img/${color}/front-back.jpg`;
};

black.addEventListener('click', () => updateImages('black'));
natural.addEventListener('click', () => updateImages('natural'));
white.addEventListener('click', () => updateImages('white'));
blue.addEventListener('click', () => updateImages('blue'));
