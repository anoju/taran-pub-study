$(document).ready(function () {
  //최재석

  function scrollActionBanner() {
    $(window).on('scroll', function () {
      const boxOffset = $('.letter_box').offset().top;
      const y = $(window).height() / 3;
      const x = $(window).scrollTop();

      //console.log(x+y, boxOffset)
      if (x + y > boxOffset) {
        $('.letter_box')
          .stop()
          .animate({ backgroundSize: `${100 + parseInt(x / 100, 0)}%` }, 400);
        $('.letter_box p')
          .stop()
          .animate({ fontSize: parseInt(x / 180, 0) }, 400);
      } else {
        $('.letter_box')
          .stop()
          .animate({ backgroundSize: `${100 + parseInt(x / 200, 0)}%` }, 400);
      }
    });
  }

  function mainSwipe() {
    const swiper1 = new Swiper('.main-swiper', {
      slidesPerView: 'auto',
      loop: true,
      effect: 'creative',
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },
      creativeEffect: {
        prev: {
          translate: ['0%', 0, -1]
        },
        next: {
          translate: ['100%', 1, 0]
        }
      },
      on: {
        init: function () {
          $('.swiper-pagination-current').text('01');
          $('.swiper-pagination-total').text('04');
        },
        slideChange: function () {
          let currentNum = $('.swiper-pagination-current').text();
          let totalNum = $('.swiper-pagination-total').text();
          $('.swiper-pagination-current').text('0' + currentNum);
          $('.swiper-pagination-total').text('0' + totalNum);
        }
      }
    });
  } //swipe

  function subSwipe() {
    const swiper2 = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      slidesOffsetBefore: 24,
      slidesOffsetAfter: 24
    });
  } //subswipe

  function selectBox() {
    $('select[name=recommend]').change(function () {
      const val = $(this).val();
      const option = $(this)
        .find($('option[value=' + val + ']'))
        .attr('class');
      $('#' + option)
        .addClass('active')
        .siblings()
        .removeClass('active');
    });
  } //selectBox

  mainSwipe();
  subSwipe();
  selectBox();
  scrollActionBanner();

  // 박은교
}); //document.ready
