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

if (document.querySelector('#single-help')) {
  new Swiper(".help .swiper", {
    modules: [Navigation, Autoplay],

    slidesPerView: 1.5,
    spaceBetween: 20,
    loop: true,

    speed: 2000,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    breakpoints: {
      540: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 20
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },

    navigation: {
      nextEl: ".help .swiper-button-next",
      prevEl: ".help .swiper-button-prev",
    },

  });
}

