// smooth scrolling js area

$(function() {





$('.counter').counterUp({
    delay: 100,
    time: 3000
});





    $('.portfolio-wrape').isotope({
      // options
      itemSelector: '.item',
      // layoutMode: 'fitColumns',
      columnWidth:  '.item',
      
    });

  /**
   * Slide left instantiation and action.
   */
      var slideLeft = new Menu({
        wrapper: '#o-wrapper',
        type: 'slide-left',
        menuOpenerClass: '.c-button',
        maskId: '#c-mask'
      });

      var slideLeftBtn = document.querySelector('#c-button--slide-left');
      
      slideLeftBtn.addEventListener('click', function(e) {
        e.preventDefault;
        slideLeft.open();
      });



    // reason-reason-to-choose

    $('.reasons-to-choose').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        arrows: false ,
    });
    // testimonial 

    $('.testimonial-carosel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false ,
    });
    //  post gallery carosel 
    $('.gallery-carosel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true ,
      
    });

   
    // $('.odometer').innerHTML = 500 // Native, or...
    // $('.odometer').html(123) // with jQuery
    // setTimeout(function(){
    //     $('.odometer').html(500);
    // }, 1000);





})