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

    // reason-to-choose

    $('.reasons-to-choose').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        arrows: false ,
    });
    // testimonial 

    $('.testimonial-carosel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.testimonial-nav'
    });
    $('.testimonial-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-carosel',
        centerMode: true,
        focusOnSelect: true

    });

    //  client  carosel 
    $('.client-carosel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        dots: true,
        arrows: false ,
        autoplay :true 

    });


})