function manageSingleActive(groupClass) {
  const groupButtons = document.querySelectorAll(`.${groupClass}`);

  groupButtons.forEach((button) => {
    button.addEventListener('click', () => {
      groupButtons.forEach((btn) => btn.classList.remove('active'));

      button.classList.add('active');
    });
  });
}

manageSingleActive('gigabyte');
manageSingleActive('sim');
manageSingleActive('color-option');
manageSingleActive('favourite');
manageSingleActive('buy-btn');
