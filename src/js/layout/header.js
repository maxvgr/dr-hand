import MicroModal from 'micromodal';
// var MicroModal = require('micromodal');

const hamburger = document.querySelector(".hamburger--spin");
const mobileNavs = document.querySelector(".header__menu-mobile");
const overlay = document.querySelector(".header__menu-mobile--overlay");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  mobileNavs.classList.toggle("is-active");
  overlay.classList.toggle("is-active");
});
MicroModal.init();
