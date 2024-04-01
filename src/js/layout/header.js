const hamburger = document.querySelector(".hamburger--spin");
const mobileNavs = document.querySelector(".header__menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  mobileNavs.classList.toggle("is-active");
});

