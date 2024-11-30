var swiper = new Swiper(".slide-certs", {
    slidesPerView: 3,
    spaceBetween: 2,
    centerSlide: "true",
    grabCursor: "true",
    loop: true,
    fade: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1, 
      },
      520: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3, 
      },
      1000: {
        slidesPerView: 4
      },
    },
  });


