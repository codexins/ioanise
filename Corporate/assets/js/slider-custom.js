jQuery(document).ready(function($){

    "use strict";
    
    // Slide Section JS (owl carousel)
    $('.primary-slider').owlCarousel({
        smartSpeed:1000,
        margin:0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        loop:true,
        mouseDrag: false,
        dots: true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],

    });

    //slider-section background setting function
    function sliderBgSetting() {
        if ($(".slider-section .slide-single").length) {
            $(".slider-section .slide-single").each(function() {
                var $this = $(this);
                var img = $this.find(".slider-image").attr("src");

                $this.css({
                    backgroundImage: "url("+ img +")",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                })
            });
        }
    }

    // call the function on windows load
    $(window).on('load', function() {
        sliderBgSetting();
    });
}); // document.ready closed