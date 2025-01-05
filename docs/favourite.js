const favourite = document.querySelector('.favourite');

favourite.addEventListener('click', (e) => {
  e.preventDefault();

  let activeGigabyte = document.querySelector('.gigabyte.active');
  let activeSim = document.querySelector('.sim.active');
  let activeColor = document.querySelector('.color-option.active');

  let favArray = JSON.parse(localStorage.getItem('favouriteItem')) || [];

  favArray.push({
    gigabyte: parseInt(activeGigabyte.value),
    sim: activeSim.value,
    color: activeColor.dataset.value,
  });

  localStorage.setItem('favouriteItem', JSON.stringify(favArray));
});
