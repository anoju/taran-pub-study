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
  sreviceSlide();
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
  var swiper = new Swiper('.hotel', {
    slidesPerView: 'auto'
  });

  $('.btn-toggle').click(function (e) {
    $('.btn-toggle').removeClass('active');
    $(this).addClass('active');
  });

  $('.menu1').click(function (e) {
    $('.hotel').show();
    $('.rental').hide();
  });
  $('.menu2').click(function (e) {
    $('.rental').show();
    $('.hotel').hide();
  });

  var swiper = new Swiper('.rental', {
    slidesPerView: 'auto'
  });
}

function sec4Slide() {
  var swiper = new Swiper('.sec4-slide', {
    slidesPerView: 'auto'
  });
}

function sreviceSlide() {
  var swiper = new Swiper('.srevice', {
    slidesPerView: 'auto'
  });
}
