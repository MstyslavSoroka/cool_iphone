const favourite = document.querySelector('.favourite');

favourite.addEventListener('click', (e) => {
  e.preventDefault();

  let activeGigabyte = getActiveElement('.gigabyte');
  let activeSim = getActiveElement('.sim');
  let activeColor = getActiveElement('.color-option');

  let favArray = JSON.parse(localStorage.getItem('favouriteItem')) || [];

  favArray.push({
    gigabyte: parseInt(activeGigabyte.value),
    sim: activeSim.value,
    color: activeColor.dataset.value,
  });

  localStorage.setItem('favouriteItem', JSON.stringify(favArray));
});
