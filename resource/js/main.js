var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 17,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });