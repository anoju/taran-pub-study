$(document).ready(function () {
  function swipe() {
    const swiper2 = new Swiper('.swiper', {
      slidesPerView: 'auto',
      grabCursor: true,
      effect: 'creative',
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ['-100%', 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }
    });
  } //swipe

  swipe();
}); //document.ready
