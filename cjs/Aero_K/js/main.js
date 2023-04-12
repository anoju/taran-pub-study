$(document).ready(function () {
  $(window).scroll(function () {
    var scrollAmt = $(window).scrollTop();
    if (scrollAmt > 0) {
      $('.bottom_nav').css({ opacity: '1' });
    } else {
      $('.bottom_nav').css({ opacity: '0' });
    }
  });

  let sildeWrapper = $('.main_slide .slidewrapper'),
    slideContainer = sildeWrapper.find('.slidecontainer'),
    slides = slideContainer.find('.slide'),
    slideCount = slides.length,
    currentIdx = 0,
    timer,
    duration = 500,
    intervalTimer = 2000;

  slideContainer.prepend(slides.clone().addClass('clone'));
  slideContainer.append(slides.eq(0).clone().addClass('clone'));
  slideContainer.find('.slide').each(function (idx) {
    $(this).css({ left: idx * 100 + '%' });
  });
  slideContainer.css({ transform: 'translateX(' + slideCount * -100 + '%)' });

  function moveSlide(num) {
    slideContainer.stop().animate({ left: -100 * num + '%' }, duration, function () {
      currentIdx = num;
      num1 = num + 1;
      $('.current').text(num1);
      $('.scroll_bar').find($('.bar').css('width', 25 * num1 + '%'));
      if (currentIdx == slideCount || currentIdx == -slideCount) {
        slideContainer.css({ left: '0%' });
        currentIdx = 0;
        $('.current').text('1');
        $('.scroll_bar').find($('.bar').css('width', 25 + '%'));
      }
    });
  }
  function autoSlide() {
    timer = setInterval(function () {
      moveSlide(currentIdx + 1);
    }, intervalTimer);
  }

  function slideControl() {
    $('.slide_control')
      .find($('.pause'))
      .click(function (e) {
        clearInterval(timer);
        $(this).css('display', 'none');
        $(this).siblings($('.play')).css('display', 'inline-block');
      });
    $('.slide_control')
      .find($('.play'))
      .click(function (e) {
        autoSlide();
        $(this).css('display', 'none');
        $(this).siblings($('.pause')).css('display', 'inline-block');
      });
  }

  function tab1() {
    $('.tab a').click(function (e) {
      e.preventDefault();
      const tabMenu = $(this);
      const tabIndex = tabMenu.parent().index();
      const tabPanel = $('.tab_panel');

      $(this).parent().addClass('active').siblings().removeClass('active');
      $('.tab_panel').removeClass('active');
      $('.tab_panel').eq(tabIndex).addClass('active');
    });
  }
  function swiper1() {
    const swiper = new Swiper('.accommodation .swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerView: 'auto',
      slidesOffsetBefore: 24,
      slidesOffsetAfter: 24,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      }
    });
  }
  function swiper2() {
    const swiper = new Swiper('.activity .swiper', {
      slidesPerView: 1,
      spaceBetween: 28,
      slidesPerView: 'auto',
      slidesOffsetBefore: 24,
      slidesOffsetAfter: 24,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      }
    });
  }
  function swiper3() {
    const swiper = new Swiper('.intro .swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerView: 'auto',
      slidesOffsetBefore: 24,
      slidesOffsetAfter: 24,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      }
    });
  }
  swiper1();
  swiper2();
  swiper3();
  tab1();
  autoSlide();
  slideControl();
});
