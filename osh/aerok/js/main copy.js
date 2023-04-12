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
    if ($this.hasClass('playing')) {
      mainSwiper.autoplay.stop();
      $this.removeClass('playing').find('img').attr('src', $playImg);
    } else {
      mainSwiper.autoplay.start();
      $this.addClass('playing').find('img').attr('src', $stopImg);
    }
  });

  // $('.swiper-auto-btn').click(function (e) {
  //   e.preventDefault();
  //   const $this = $(this);
  //   const $txt = $this.text();
  //   const $stopTxt = '정지';
  //   const $playTxt = '재생';
  //   if ($txt === $stopTxt) {
  //     mainSwiper.autoplay.stop();
  //     $this.text($playTxt);
  //   } else {
  //     mainSwiper.autoplay.start();
  //     $this.text($stopTxt);
  //   }
  // });
} //end mainBanner

//section3 js 이렇게 말고 플러그인으로
/* function toggleSlide() {
  let curPos = 0;
  let postion = 0;
  let start_x, end_x;
  const IMAGE_WIDTH = 280;
  const images = document.querySelector('.slide1');

  images.addEventListener('touchstart', touch_start);
  images.addEventListener('touchend', touch_end);

  function prev() {
    if (curPos > 0) {
      postion += IMAGE_WIDTH;
      images.style.transform = `translateX(${postion}px)`;
      curPos = curPos - 1;
    }
  }
  function next() {
    if (curPos < 3) {
      postion -= IMAGE_WIDTH;
      images.style.transform = `translateX(${postion}px)`;
      curPos = curPos + 1;
    }
  }

  function touch_start(event) {
    start_x = event.touches[0].pageX;
  }

  function touch_end(event) {
    end_x = event.changedTouches[0].pageX;
    if (start_x > end_x) {
      next();
    } else {
      prev();
    }
  }
} //end toggleSlide */

var swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
