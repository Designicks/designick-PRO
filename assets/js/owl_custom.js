 $('.solution-carousel').owlCarousel({
        loop:true,
        item:3,
        margin:12,
        nav:true,
        center: true,
        dots: false,
        dotsData:false,
        dotsEach:false,
        autoplayHoverPause:true,
        smartSpeed:1000,
        fluidSpeed:100,
        slideSpeed: 5000,
        rewind:false,
        mouseDrag:true,
        touchDarg:true,
        lazyload:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:2
            },
            400:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


$(document).ready(function() {
  $('.port-mobile-owlnew').owlCarousel({
     items: 1,
    loop: true,              
    center: true,
    dots: false,
    nav: true,
    margin:20,
    autoplayHoverPause:true,
    smartSpeed:2000,
    fluidSpeed:100,
    slideSpeed: 8000,
    rewind:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      }
    }
 })
});

 $(document).ready(function() {
    $('.port-mobile-owl').owlCarousel({
       items: 1,
      loop: true,              
      center: true,
      dots: false,
      nav: true,
      margin:20,
      autoplayHoverPause:true,
      smartSpeed:2000,
      fluidSpeed:100,
      slideSpeed: 8000,
      rewind:false,
      autoplay:true,
      autoplayTimeout:3000,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
      }
   });
 
 });

  $('.port-web-owl').owlCarousel({
     items: 3,
    loop: true,              
    center: true,
    dots: false,
    nav: true,
    margin:70,
    autoplayHoverPause:true,
    smartSpeed:2000,
    fluidSpeed:100,
    slideSpeed: 8000,
    rewind:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
      }
    }
 });