const hamburger = document.querySelector('.hamburger');
const navigationMenu = document.querySelector('.navbar');
const logo = document.querySelector('.logo');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('change');
  navigationMenu.classList.toggle('show');
  navigationMenu.classList.toggle('change');
  logo.classList.toggle('change');
});