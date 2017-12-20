jQuery(document).ready(function($){

    'use strict';

    /************************************************************
      image - SVG inline
    *************************************************************/

    
        $('.logo img').each(function(){
            var $img = $(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
        
            $.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = $(data).find('svg');
        
                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }
        
                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');
                
                // Check if the viewport is set, else we gonna set it if we can.
                if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }
        
                // Replace image with new SVG
                $img.replaceWith($svg);
        
            }, 'xml');
        
        });

    /************************************************************
        Skin Switcher
    *************************************************************/

        $('#colorPanel').ColorPanel({
            styleSheet: '#cpswitch',
            //animateContainer: '#o-wrapper',
            colors: {
                '#1ca5b8': 'assets/css/main.css',
                '#01578F': 'assets/css/main-florence.css',
                '#E74C3C': 'assets/css/main-flat.css',
            }
        });
    

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
    if($('body').find('.client-section').length !== 0) {
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