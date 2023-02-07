const hamburger = document.querySelector(".hamburger");
const navigationMenu = document.querySelector(".navigation-menu");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("change");
  navigationMenu.classList.toggle("show");
  navigationMenu.classList.toggle("change");
});