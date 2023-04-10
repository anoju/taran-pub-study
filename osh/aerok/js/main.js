$(function () {
  mainInit();
  $(document).on('click', 'a[href="#"]', (e) => {
    e.preventDefault();
  });
});

function mainInit() {
  event();
}

function event() {
  var swiper = new Swiper('.event', {
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    loop: true
  });

  // $('.swiper-slide').hover(
  //   function () {
  //     swiper.autoplay.stop();
  //   },
  //   function () {
  //     swiper.autoplay.start();
  //   }
  // );
}
