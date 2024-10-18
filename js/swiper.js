document.addEventListener("DOMContentLoaded", function() {
  const mainSwiper = new Swiper(".mv", {
    loop: true,
    speed: 4000,
    effect: "fade",
    autoplay: {
      delay: 2000,
    },
  });

  const gallerySwiper = new Swiper(".gallery", {
    loop: true,
    slidesPerView: 2,
    speed: 10000,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });
})