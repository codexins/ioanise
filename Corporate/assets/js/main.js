jQuery(document).ready(function($){

    'use strict';

    /************************************************************
        Superfish Menu
    *************************************************************/
    $(".sf-menu").superfish({

        delay:       0,                            // one second delay on mouseout
        animation: {opacity: 'show', height: 'show'},
        animationOut: {opacity: 'hide'},
        speed:       'fast',                          // faster animation speed
        autoArrows:  false,
        disableHI: true, 

    });

    // Submenu Intelligent hover functionality
    $('.sub-menu').hover(function() {
        var menu = $(this);
        var child_menu = $(this).find('ul');
        if( $(menu).offset().left + $(menu).width() + $(child_menu).width() > $(window).width() ){
            $(child_menu).css({"left": "inherit", "right": "100%"});
           }        
    });

    
    /************************************************************
        Page Loader & intelligent Header
    *************************************************************/

    $(window).on('load', function() { 
        $('.cx-pageloader').delay(300).fadeOut('fast');

       // intelligent header
        var intHeight = $('.intelligent-header').outerHeight();
        $('.intelligent-header-space').height(intHeight);
    });


    
    /************************************************************
        Animated Counter
    *************************************************************/
    if($('body').find('.counter').length !== 0) {
        $('.counter').counterUp({
            delay: 100,
            time: 3000
        });
    }


    /************************************************************
        Isotope Js for Portfolio Section
    *************************************************************/
    if($('body').find('.portfolio-wrapper').length !== 0) {

        var $isocontainer = $('.portfolio-wrapper');

        $isocontainer.imagesLoaded(function() {
            $isocontainer.isotope({
                 itemSelector: ".portfolio",
                 layoutMode: 'masonry',
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

    }

    /************************************************************
        Slide left instantiation and action for Mobile Menu
    *************************************************************/
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


    /************************************************************
        Reasons to Choose Carousel
    *************************************************************/
    if($('body').find('.reasons-to-choose').length !== 0) {
        $('.reasons-to-choose').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: false ,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                }
            ]

        });
    }


    /************************************************************
        Testimonial Carousel
    *************************************************************/

    if($('body').find('.testimonial-carousel').length !== 0) { 
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
                    slidesToShow: 3,
                    slidesToScroll: 1, 
                  }
                }
              ]

        });
    }

    
    //Testimonial Carousel Type 02
    if($('body').find('.testimonial-carousel-type-02').length !== 0) {
        $('.testimonial-carousel-type-02').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        });
    }


    /************************************************************
        Client Carousel
    *************************************************************/
    if($('.client-section').hasClass('type-2')) {

      $('.client-carousel').slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: false,
          arrows: true ,
          autoplay :true ,
           responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                }
              },

              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },

              {
                breakpoint: 481,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1, 
                }
              }
          ]

      });
    } else {

    //client carosel type-1
    $('.client-carousel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        arrows: false ,
        autoplay :true,
           responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                }
              },

              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },

              {
                breakpoint: 481,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1, 
                }
              }
          ]

    });
    }
  

  	/************************************************************
        Scroll to Top JS 
    *************************************************************/
    $(window).on('scroll',function () {
        if($(window).scrollTop()>200) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });


	 $("#toTop").on('click', function() {
	      $("html,body").animate({
	          scrollTop:0
	      }, 800)
	  });  //scrollup finished


}); /****** End of Document.Ready Function ************/