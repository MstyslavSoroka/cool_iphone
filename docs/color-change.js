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

const updateImages = (colorImages) => {
  document.querySelector('.front-img').src = colorImages.front;
  document.querySelector('.side-img').src = colorImages.side;
  document.querySelector('.tilted').src = colorImages.tilted;
  document.querySelector('.front-back').src = colorImages.frontBack;
  document.querySelector('.chosen').src = colorImages.frontBack;
};

document.querySelector('.black').addEventListener('click', () => {
  updateImages({
    front: blackFront,
    side: blackSide,
    tilted: blackTilted,
    frontBack: blackFrontBack,
  });
});

document.querySelector('.natural').addEventListener('click', () => {
  updateImages({
    front: naturalFront,
    side: naturalSide,
    tilted: naturalTilted,
    frontBack: naturalFrontBack,
  });
});

document.querySelector('.white').addEventListener('click', () => {
  updateImages({
    front: whiteFront,
    side: whiteSide,
    tilted: whiteTilted,
    frontBack: whiteFrontBack,
  });
});

document.querySelector('.blue').addEventListener('click', () => {
  updateImages({
    front: blueFront,
    side: blueSide,
    tilted: blueTilted,
    frontBack: blueFrontBack,
  });
});
