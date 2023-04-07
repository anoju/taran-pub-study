$(document).ready(function () {
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
  autoSlide();

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

  $('.accommodation .swiper').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    variableWidth: true,
    infinite: true,
    arrows: false
  });
});
