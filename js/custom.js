$(function () {

    //Animate on scroll
    new WOW().init();

});

$('.owl-brands').owlCarousel({
    animateOut: 'fadeOut',
    loop: true,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    nav:true,
    center:true,   
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 4,
      }
    }
  });

