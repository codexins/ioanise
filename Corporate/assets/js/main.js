jQuery(document).ready(function($) {

    "use strict";

    /************************************************************
        Full Screen header
    *************************************************************/

    if ( $(window).width() > 991) {      
        $(window).on("load resize", function() {
            $(".fill-screen").css("height", window.innerHeight);
        });
    } 
    else {
      $(".fill-screen").css("height", "500px");
    }


    /************************************************************
        Header background video  for home 02
    *************************************************************/
    if ($('body').find('#header_full_screen_video').length !== 0) {
        $("#header_full_screen_video").wallpaper({
            source: {
                poster: "assets/img/slider/home-2/poster.jpg",
                webm: "assets/videos/video.webm",
                mp4: "assets/videos/video.mp4",
                ogg: "assets/videos/video.ogv"
            }

        });
    }

    /************************************************************
        Header background slider for Home 04
    *************************************************************/
    if ($('body').find('#header_bg_slide').length !== 0) {
        $("#header_bg_slide").backstretch([
            "assets/img/slider/home-4/slide-1.jpg",
            "assets/img/slider/home-4/slide-2.jpg",
            "assets/img/slider/home-4/slide-3.jpg" 
        ], 
        {
            duration: 4000,
            fade: 750,
            preload: 0,
            start: 2

        });
    }

    /************************************************************
        Superfish Menu
    *************************************************************/
    $(".sf-menu").superfish({

        delay: 0, // one second delay on mouseout
        animation: {
            opacity: 'show',
            height: 'show'
        },
        animationOut: {
            opacity: 'hide'
        },
        speed: 'fast', // faster animation speed
        autoArrows: false,
        disableHI: true,

    });

    // Submenu Intelligent hover functionality
    $('.sf-menu').on('mouseover', ".sub-menu", function() {
        var menu = $(this);
        var child_menu = $(this).find('ul');
        if ($(menu).offset().left + $(menu).width() + $(child_menu).width() > $(window).width()) {
            $(child_menu).css({
                "left": "inherit",
                "right": "100%"
            });
        }
    });


    /************************************************************
        Page Loader & intelligent Header Space
    *************************************************************/

    $(window).on('load', function() {
        $('.cx-pageloader').delay(300).fadeOut('fast');

    });

    $(window).on('load resize', function() {
        // intelligent header
        var intHeight = $('.intelligent-header').outerHeight();
        $('.intelligent-header-space').height(intHeight);
    });


    /************************************************************
        Headroom Js for Auto Hide the header on scroll
    *************************************************************/

    // grab an element
    var myElement = document.querySelector(".intelligent-header");
    // construct an instance of Headroom, passing the element
    var headroom = new Headroom(myElement);
    // initialise
    headroom.init();


    $(window).on('scroll', function() {
        var height = $(window).scrollTop();

        if (height < 200) {
            $('.intelligent-header').removeClass('scrolling-up');
        } else {
            $('.intelligent-header').addClass('scrolling-up');
        }
    });


    /************************************************************
        Animated Counter
    *************************************************************/
    if ($('body').find('.counter').length !== 0) {
        $('.counter').counterUp({
            delay: 100,
            time: 3000
        });
    }


    /************************************************************
        Isotope Js for Portfolio Section
    *************************************************************/
    if ($('body').find('.portfolio-wrapper').length !== 0) {

        var $isocontainer = $('.portfolio-wrapper');

        $isocontainer.imagesLoaded(function() {
            $isocontainer.isotope({
                itemSelector: ".portfolio",
                layoutMode: 'masonry',
            });

        });


        $('.portfolio-filter li').on('click', function(e) {
            var $this = $(this);
            var $filter = $this.attr('data-filter');

            $isocontainer.isotope({
                filter: $filter,
            });

            $('.portfolio-filter li').removeClass('active');
            $this.addClass('active');
        });

    }


    //Targeting Portfolio a tag for click event

    $(".portfolio .primary-title").on('click', function(e) {
        $(this).find("a.clickable").first().click();
    });

    $(".portfolio .primary-title a.clickable").on('click', function(e) {
        e.stopPropagation();
    });

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
    if ($('body').find('.reasons-to-choose').length !== 0) {
        $('.reasons-to-choose').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            responsive: [{
                    breakpoint: 992,
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

    if ($('body').find('.testimonial-carousel').length !== 0) {
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
    if ($('body').find('.testimonial-carousel-type-02').length !== 0) {
        $('.testimonial-carousel-type-02').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        });
    }


    /************************************************************
        Smooth Scroll to anchor tags
    *************************************************************/

    $('.explore').on('click', function() {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top + 30
        }, 1000, 'easeOutCubic');
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    });


    /************************************************************
        Client Carousel
    *************************************************************/
    if ($('body').find('.client-section').length !== 0) {
        if ($('.client-section').hasClass('type-2')) {

            $('.client-carousel').slick({
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                autoplay: true,
                responsive: [{
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
                arrows: false,
                autoplay: true,
                responsive: [{
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
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });


    $("#toTop").on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 800)
    }); //scrollup finished


    /************************************************************
        Placeholder JS
    *************************************************************/



    $(function() {
        var input = document.createElement("input");
        if (('placeholder' in input) === false) {
            $('[placeholder]').on('focus', function() {
                var i = $(this);
                if (i.val() === i.attr('placeholder')) {
                    i.val('').removeClass('placeholder');
                    if (i.hasClass('password')) {
                        i.removeClass('password');
                        this.type = 'password';
                    }
                }
            }).on('blur', function() {
                var i = $(this);
                if (i.val() === '' || i.val() === i.attr('placeholder')) {
                    if (this.type === 'password') {
                        i.addClass('password');
                        this.type = 'text';
                    }
                    i.addClass('placeholder').val(i.attr('placeholder'));
                }
            }).blur().parents('form').on('submit', function() {
                $(this).find('[placeholder]').each(function() {
                    var i = $(this);
                    if (i.val() === i.attr('placeholder'))
                        i.val('');
                })
            });
        }
    });




}); /****** End of Document.Ready Function ************/