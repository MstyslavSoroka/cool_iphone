const addToCart = document.querySelector('.buy-btn');

addToCart.addEventListener('click', (e) => {
  e.preventDefault();

  let activeGigabyte = document.querySelector('.gigabyte.active');
  let activeSim = document.querySelector('.sim.active');
  let activeColor = document.querySelector('.color-option.active');

  let cartArray = JSON.parse(localStorage.getItem('cartItem')) || [];

  cartArray.push({
    gigabyte: parseInt(activeGigabyte.value),
    sim: activeSim.value,
    color: activeColor.dataset.value,
  });

  localStorage.setItem('cartItem', JSON.stringify(cartArray));
});
