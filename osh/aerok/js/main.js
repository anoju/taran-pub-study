$(function () {
  mainInit();
  $(document).on('click', 'a[href="#"]', (e) => {
    e.preventDefault();
  });
});

function mainInit() {
  mainBanner();
  toggleSlide();
  sec4Slide();
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
    const $stopTxt = '정지';
    const $playTxt = '재생';
    if ($this.hasClass('_stop')) {
      mainSwiper.autoplay.start();
      $this.removeClass('_stop').attr('aria-label', $playTxt);
    } else {
      mainSwiper.autoplay.stop();
      $this.addClass('_stop').attr('aria-label', $stopTxt);
    }
  });
}

function toggleSlide() {
  var swiper = new Swiper('.toggle-slide', {
    slidesPerView: 'auto'
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1.3,
    //     spaceBetween: 20
    //   }
    // }
    // loop: true
  });
}

function sec4Slide() {
  var swiper = new Swiper('.sec4-slide', {
    slidesPerView: 'auto'
  });
}
