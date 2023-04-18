$(document).ready(function () {

  function swipe() {
    const swiper1 = new Swiper('.swiper', {
      slidesPerView: 'auto',     
      loop: true,          
      effect: 'creative',  
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      creativeEffect: {
        prev: {
          translate: ['0%', 0, 0],
        },
        next: {
          translate: ['100%', 0, 1],
        },
      },    
      on: {
        init : function () {    
          $('.swiper-pagination-current').text('01')
          $('.swiper-pagination-total').text('04')    
        },
        slideChange : function() {    
          let currentNum = $('.swiper-pagination-current').text()
          let totalNum = $('.swiper-pagination-total').text()           
          $('.swiper-pagination-current').text('0' + currentNum)
          $('.swiper-pagination-total').text('0' + totalNum)            
        },
      },       
    });   
  } //swipe

  swipe();
}); //document.ready
