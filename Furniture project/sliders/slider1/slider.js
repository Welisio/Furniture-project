var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 1,
    navigation: {
      nextEl: ".header-slider-next",
      prevEl: ".header-slider-previous",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        620: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 0,
        }
      }
});
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 1,
  breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      620: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 0,
      }
    }
});
var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  navigation: {
      nextEl: ".most-popular-next",
      prevEl: ".most-popular-previous",
  },
  spaceBetween: 1,
  breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      620: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 0,
      }
    }
});
var swiper4 = new Swiper(".mySwiper4", {
  slidesPerView: 3,
  navigation: {
      nextEl: ".slider4-next",
      prevEl: ".slider4-previous",
  },
  spaceBetween: 1,
  breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      620: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 0,
      }
    }
});
var swiper5 = new Swiper(".mySwiper5", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".mySwiper7", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper6", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});
