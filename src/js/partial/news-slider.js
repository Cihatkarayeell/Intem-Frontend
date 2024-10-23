var swiper = new Swiper(".mySwiper-news", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next-news",
      prevEl: ".swiper-button-prev-news",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 40,
      }
      
    },
  });