const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
  
    //   Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//     //   spaceBetween: 20
//     },
//     // when window width is >= 480px
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 6,
//     },
//     // when window width is >= 640px
//     1280: {
//       slidesPerView: 3,
//       spaceBetween: 16,
//     }
//   }

  // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
});