// smooth scrolling js area

$(function() {







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