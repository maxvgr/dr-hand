import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

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

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

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
  // new ItcAccordion('#accordion-1');
  // new ItcAccordion('#accordion-1', {
  //   alwaysOpen: false
  // });
  // class ItcAccordion {
  //   constructor(target, config) {
  //     this._el = typeof target === 'string' ? document.querySelector(target) : target;
  //     const defaultConfig = {
  //       alwaysOpen: true
  //     };
  //     this._config = Object.assign(defaultConfig, config);
  //     this.addEventListener();
  //   }
  //   addEventListener() {
  //     this._el.addEventListener('click', (e) => {
  //       const elHeader = e.target.closest('.accordion__header');
  //       if (!elHeader) {
  //         return;
  //       }
  //       if (!this._config.alwaysOpen) {
  //         const elOpenItem = this._el.querySelector('.accordion__item_show');
  //         if (elOpenItem) {
  //           elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
  //         }
  //       }
  //       elHeader.parentElement.classList.toggle('accordion__item_show');
  //     });
  //   }
  // }
  new Accordion('.accordion-container');
}

