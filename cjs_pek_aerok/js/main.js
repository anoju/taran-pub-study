$(document).ready(function () {
  function swipe() {
    const swiper2 = new Swiper('.swiper', {
      slidesPerView: 'auto',               
      effect: 'creative',
      creativeEffect: {
        prev: {
          translate: ['0%', 0, 0],
        },
        next: {
          translate: ['100%', 0, 1],
        },
      },
      
    });
  } //swipe

  swipe();
}); //document.ready
