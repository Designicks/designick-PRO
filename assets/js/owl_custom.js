$(document).ready(function(){
        $('.clients-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        center: false,
        dots: false,
        dotsData:false,
        dotsEach:false,
        autoplayHoverPause:true,
        smartSpeed:2000,
        fluidSpeed:100,
        slideSpeed: 8000,
        rewind:false,
        autoplay:false,
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
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

