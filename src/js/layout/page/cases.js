import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import {
  Navigation,
  Autoplay,
  Mousewheel,
} from "swiper/modules";

if (document.querySelector('#single-cases')) {
  new Swiper(".cases .swiper", {
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
      nextEl: ".cases .swiper-button-next",
      prevEl: ".cases .swiper-button-prev",
    },
  });
  new Accordion('.accordion-container');
}


if (document.querySelector('#single-help')) {
  new Swiper(".case .swiper", {
    modules: [Navigation, Autoplay],

    slidesPerView: 1.5,
    spaceBetween: 20,
    loop: true,

    speed: 2000,

    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },

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
      nextEl: ".case .swiper-button-next",
      prevEl: ".case .swiper-button-prev",
    },

  });
}

