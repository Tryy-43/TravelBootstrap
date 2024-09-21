const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-slider",
    prevEl: ".swiper-button-prev-slider",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
// const anima = document.querySelector(".wrap-icon > span > i");
// anima.addEventListener("mouseleave", (e) => {
//   console.log("dd");
// });
