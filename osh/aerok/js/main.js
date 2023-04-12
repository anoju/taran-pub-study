$(function () {
  mainInit();
  $(document).on('click', 'a[href="#"]', (e) => {
    e.preventDefault();
  });
});

function mainInit() {
  mainBanner();
  toggleSlide();
}

function mainBanner() {
  var mainSwiper = new Swiper('.main-banner', {
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

  //main-banner 정지 재생 버튼
  $('.swiper-auto-btn').click(function (e) {
    e.preventDefault();
    const $this = $(this);
    const $stopImg = 'images/icon_pause.png';
    const $playImg = 'images/icon_stop.png';
    if tt($this.hasClass('playing')) {
      mainSwiper.autoplay.stop();
      $this.removeClass('playing').find('img').attr('src', $playImg);
    } else {
      mainSwiper.autoplay.start();
      $this.addClass('playing').find('img').attr('src', $stopImg);
    }
  });
}

function toggleSlide() {
  var swiper = new Swiper('.toggle-slide', {
    breakpoints: {
      320: {
        slidesPerView: 1.3,
        spaceBetween: 20
      }
    },
    loop: true
  });
}
