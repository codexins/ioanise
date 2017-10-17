// smooth scrolling js area

$(function() {




    $('.circle').circleProgress({
        value: 0.50,
        size: 100,
        fill: {
            gradient: ["#fff", "#fff"]
        },
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
        // nextArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        // prevArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
    
        // prevArrow:'<i class="fa fa-angle-left" aria-hidden="true"></i>',
        // nextArrow:'<i class="fa fa-angle-right" aria-hidden="true"></i>'

    });





})