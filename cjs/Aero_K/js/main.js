$(document).ready(function () {
  $(window).scroll(function () {
    var scrollAmt = $(window).scrollTop();
    if (scrollAmt > 0) {
      $('.bottom_nav').css({ opacity: '1' });
    } else {
      $('.bottom_nav').css({ opacity: '0' });
    }
  });

  function tab1() {
    $('.tab a').click(function (e) {
      e.preventDefault();
      const tabMenu = $(this);
      const tabIndex = tabMenu.parent().index();
      const tabPanel = $('.tab_panel');

      $(this).parent().addClass('active').siblings().removeClass('active');
      tabPanel.removeClass('active');
      tabPanel.eq(tabIndex).addClass('active');
    });
  }
  function swiper() {
    const swiper = new Swiper('.main_slide .swiper', {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    });
    swiper.on('transitionEnd', function () {
      let num1 = swiper.realIndex + 1;
      $('.scroll_bar').find($('.bar').css('width', 25 * num1 + '%'));
    });
    $('.slide_control')
      .find($('.pause'))
      .click(function (e) {
        swiper.autoplay.stop();
        $(this).css('display', 'none');
        $(this).siblings($('.play')).css('display', 'inline-block');
      });
    $('.slide_control')
      .find($('.play'))
      .click(function (e) {
        swiper.autoplay.start();
        $(this).css('display', 'none');
        $(this).siblings($('.pause')).css('display', 'inline-block');
      });
  }
  function swiper1() {
    const swiper = new Swiper('.accommodation .swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerView: 'auto',
      slidesOffsetBefore: 24,
      slidesOffsetAfter: 24
    });
    const swiper1 = new Swiper('.activity .swiper', {
      slidesPerView: 1,
      spaceBetween: 28,
      slidesPerView: 'auto',
      slidesOffsetBefore: 24,
      slidesOffsetAfter: 24
    });
    const swiper2 = new Swiper('.intro .swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerView: 'auto',
      slidesOffsetBefore: 24,
      slidesOffsetAfter: 24
    });
  }

  swiper();
  swiper1();
  tab1();
});
