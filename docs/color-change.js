import blackFront from './img/black/front.jpg';
import blackSide from './img/black/side.jpg';
import blackTilted from './img/black/tilted.jpg';
import blackFrontBack from './img/black/front-back.jpg';

import naturalFront from './img/natural/front.jpg';
import naturalSide from './img/natural/side.jpg';
import naturalTilted from './img/natural/tilted.jpg';
import naturalFrontBack from './img/natural/front-back.jpg';

import whiteFront from './img/white/front.jpg';
import whiteSide from './img/white/side.jpg';
import whiteTilted from './img/white/tilted.jpg';
import whiteFrontBack from './img/white/front-back.jpg';

import blueFront from './img/blue/front.jpg';
import blueSide from './img/blue/side.jpg';
import blueTilted from './img/blue/tilted.jpg';
import blueFrontBack from './img/blue/front-back.jpg';

const black = document.querySelector('.black');
const natural = document.querySelector('.natural');
const white = document.querySelector('.white');
const blue = document.querySelector('.blue');

const front = document.querySelector('.front-img');
const tilted = document.querySelector('.tilted');
const side = document.querySelector('.side-img');
const frontBack = document.querySelector('.front-back');
const chosen = document.querySelector('.chosen');

const updateImages = (colorImages) => {
  front.src = colorImages.front;
  side.src = colorImages.side;
  tilted.src = colorImages.tilted;
  frontBack.src = colorImages.frontBack;
  chosen.src = colorImages.frontBack;
};

black.addEventListener('click', () => {
  updateImages({
    front: blackFront,
    side: blackSide,
    tilted: blackTilted,
    frontBack: blackFrontBack,
  });
});

natural.addEventListener('click', () => {
  updateImages({
    front: naturalFront,
    side: naturalSide,
    tilted: naturalTilted,
    frontBack: naturalFrontBack,
  });
});

white.addEventListener('click', () => {
  updateImages({
    front: whiteFront,
    side: whiteSide,
    tilted: whiteTilted,
    frontBack: whiteFrontBack,
  });
});

blue.addEventListener('click', () => {
  updateImages({
    front: blueFront,
    side: blueSide,
    tilted: blueTilted,
    frontBack: blueFrontBack,
  });
});
