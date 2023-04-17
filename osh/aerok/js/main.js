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
  passenger();
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
} //end mainBanner

function toggleSlide() {
  new Swiper('.hotel', {
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

  new Swiper('.rental', {
    slidesPerView: 'auto'
  });
} //end toggleSlide

function sec4Slide() {
  new Swiper('.sec4-slide', {
    slidesPerView: 'auto'
  });
} //end sec4Slide

function sreviceSlide() {
  new Swiper('.srevice', {
    slidesPerView: 'auto'
  });
} //end sreviceSlide

function passenger() {
  let cnt = 0;
  const $btnPlus = $('.plus');
  const $btnMinus = $('.minus');
  const $num = $('.num');

  $num.text(cnt);

  $btnPlus.click(function () {
    cnt++;
    if (cnt > 5) {
      cnt = 0;
    }
    $num.text(cnt);
  });

  $btnMinus.click(function () {
    cnt--;
    if (cnt < 0) {
      cnt = 5;
    }
    $num.text(cnt);
  });
}

/* 

function sreviceSlide() {
  var swiper = new Swiper('.srevice', {
    slidesPerView: 'auto'
  });

이 스크립트 중  var swiper는 생략 가능

*/
