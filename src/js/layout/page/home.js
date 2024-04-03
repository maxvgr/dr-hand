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

  slidesPerView: 2,
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