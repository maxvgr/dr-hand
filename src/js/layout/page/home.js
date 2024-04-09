import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import {
  Navigation,
  Autoplay,
  Mousewheel,
} from "swiper/modules";

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});


new Swiper(".profile-medication .swiper", {
  modules: [Navigation, Autoplay],

  slidesPerView: 1.5,
  spaceBetween: 20,
  // loop: true,

  speed: 2000,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 3.5,
      spaceBetween: 20
    },
    1400: {
      slidesPerView: 4.8,
      spaceBetween: 20
    }
  },

  navigation: {
    nextEl: ".profile-medication .swiper-button-next",
    prevEl: ".profile-medication .swiper-button-prev",
  },

});

new Swiper(".progress .swiper", {
  modules: [Navigation, Autoplay],

  slidesPerView: 2,
  spaceBetween: 20,
  // loop: true,

  speed: 2000,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  breakpoints: {
    540: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1400: {
      slidesPerView: 4.8,
      spaceBetween: 20
    }
  },

  navigation: {
    nextEl: ".progress .swiper-button-next",
    prevEl: ".progress .swiper-button-prev",
  },

});


const diplombtn = document.querySelector(".education__btn");
const diplomclose = document.querySelector(".education__btn.closed");
const diplomsgrid = document.querySelector(".education__diploms-wrapper");

diplombtn.addEventListener("click", () => {
  diplombtn.classList.toggle("is-active");
  diplomsgrid.classList.toggle("is-active");
  diplomclose.classList.toggle("is-active");
});

diplomclose.addEventListener("click", () => {
  diplombtn.classList.toggle("is-active");
  diplomsgrid.classList.toggle("is-active");
  diplomclose.classList.toggle("is-active");
});


