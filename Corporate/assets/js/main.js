// smooth scrolling js area

jQuery(document).ready(function($){

  // superfish menu

    // activating superfish menu
    $(".sf-menu").superfish({

        delay:       0,                            // one second delay on mouseout
        animation: {opacity: 'show', height: 'show'},
        animationOut: {opacity: 'hide'},
        speed:       'fast',                          // faster animation speed
        autoArrows:  false,
        disableHI: true, 

    });

    $('.sub-menu').hover(function() {
        var menu = $(this);
        // var child_menu = $('.site-nav ul.sub-menu .sub-menu');
        var child_menu = $(this).find('ul');
        if( $(menu).offset().left + $(menu).width() + $(child_menu).width() > $(window).width() ){
            $(child_menu).css({"left": "inherit", "right": "100%"});
           }        
    });


    // counter 

    $('.counter').counterUp({
        delay: 100,
        time: 3000
    });

    /*--------------------------------------------------------------
    Isotope Js for Portfolio Section
    ---------------------------------------------------------------- */

    var $isocontainer = $('.portfolio-wrapper');

    $isocontainer.imagesLoaded(function() {
        $isocontainer.isotope({
             itemSelector: ".portfolio",
             layoutMode: 'masonry',
             //percentPosition: true,
        });

    });


    $('.portfolio-filter li').click(function(e) {
        var $this = $(this);
        var $filter = $this.attr('data-filter');

        $isocontainer.isotope({
            filter: $filter,
        });

        $('.portfolio-filter li').removeClass('active');
        $this.addClass('active');
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


    // main slider

    $('.slider-wrapper').slick({
      dots: true
    });

    // reason-to-choose

    $('.reasons-to-choose').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        arrows: false ,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1, 
              }
            }
        ]

    });
    // testimonial 

    $('.testimonial-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.testimonial-nav'
    });
    $('.testimonial-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-carousel',
        centerMode: true,
        focusOnSelect: true,
        responsive: [
           
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1, 
              }
            }
          ]

    });

    //  client  carousel 
    if($('section').hasClass('type-2')) {

      $('.client-carousel').slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: false,
          arrows: true ,
          autoplay :true ,
           responsive: [
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1, 
                }
              }
          ]

      });
  } else {


    //client carosel type-2

    $('.client-carousel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        dots: true,
        arrows: false ,
        autoplay :false ,
         responsive: [
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1, 
              }
            }
        ]

    });
  }
  

 $("#toTop").on('click', function() {
      $("html,body").animate({
          scrollTop:0
      }, 800)
  });  //scrollup finished


}); 