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

    // Preloaders

    $(window).on('load', function() { 
        $('.cx-pageloader').delay(300).fadeOut('fast');
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

    // testimonial type 02

    $('.testimonial-carousel-type-02').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
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
  

  	//scroll to top
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


   // intelligent header

    var intHeight = $('.intelligent-header').height();
    $('.intelligent-header-space').height(intHeight);



});


    /*------------------------------------------
        1. Jquery scroll hide plugin.
    --------------------------------------------*/
    (function(){
        function Menu($element, options){

            var handler,
            defaults = {
                domObj : $element,
                position : '100px',
                onIntellingenceMenu : function(){},
                onNormalMenu : function(){}
            },
            config = $.extend({}, defaults, options),
            coreFuns = {
                displayMenu : function(){
                    if ( config.domObj.hasClass(config.className) ) {
                        config.domObj.removeClass(config.className);
                    }
                },
                hideMenu : function(){
                    if ( !config.domObj.hasClass(config.className) ) {
                        config.domObj.addClass(config.className);
                    }
                }
            },
            publicFuns = {
                intelligent_menu : function(){
                    var int = $('.intelligent-header').height();
                    var lastScrollTop = 0, direction;

                    if ( handler != undefined ) {
                        $(window).unbind('scroll', handler);
                    }

                    handler = function(e){
                        if (e.currentTarget.scrollY > lastScrollTop){
                            direction = 'down';
                        } else {
                            direction = 'up';
                        }
                        lastScrollTop = e.currentTarget.scrollY;

                        // check is user scrolling to up or down?
                        if ( direction == 'up' ) {
                        // so you are scrolling to up...

                            // lets display menu
                            coreFuns.displayMenu();
                             $('.intelligent-header').addClass('scrolling-up');   
                            
                             //var int = $('.intelligent-header').height();
                             if ((e.currentTarget.scrollY < 220)) {
                                 $('.intelligent-header').removeClass('scrolling-up');   
                            //     $('.intelligent-header-space').removeClass('space-animation'); 
                             }
                            

                        } else {
                        // so you are scrolling to down...

                            // se we have to hide only the small menu because the normal menu isn't sticky!
                            coreFuns.hideMenu();
                             $('.intelligent-header').removeClass('scrolling-up');
                            // $('.intelligent-header-space').addClass('space-animation');
                        }
                    };
                    $(window).bind('scroll', handler);

                    config.onNormalMenu();
                },
                fixed_menu : function(){
                    if ( handler != undefined ) {
                        $(window).unbind('scroll', handler);
                    }

                    handler = function(e){
                        // check have we display small menu or normal menu ?
                        coreFuns.displayMenu();
                    };

                    $(window).bind('scroll', handler);

                    config.onNormalMenu();
                },
                mobile_intelligent_menu : function(){

                    if ( jQuery.browser.mobile === true ) {
                        this.intelligent_menu();
                    } else {
                        this.fixed_menu();
                    }
                }
            };

            return publicFuns;
        }

        $.fn.menu = function( options ){
            var $element = this.first();
            var menuFuns = new Menu( $element, options );
            return menuFuns;
        };

    })();
    var menuFun = $('.intelligent-header').menu({
        className : 'hide-menu',
        position : '100px'
    });

    window.menuFun = menuFun;
    menuFun.intelligent_menu();