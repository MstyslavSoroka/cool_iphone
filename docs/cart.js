const addToCart = document.querySelector('.buy-btn');

function getActiveElement(selector) {
  return document.querySelector(selector + '.active');
}

addToCart.addEventListener('click', (e) => {
  e.preventDefault();

  let activeGigabyte = getActiveElement('.gigabyte');
  let activeSim = getActiveElement('.sim');
  let activeColor = getActiveElement('.color-option');

  let cartArray = JSON.parse(localStorage.getItem('cartItem')) || [];

  cartArray.push({
    gigabyte: parseInt(activeGigabyte.value),
    sim: activeSim.value,
    color: activeColor.dataset.value,
  });

  localStorage.setItem('cartItem', JSON.stringify(cartArray));
});
