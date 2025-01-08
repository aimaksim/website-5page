// preloader
$(document).ready(function(){
  $(window).load(function () {
    $("#loading").fadeOut(400);
  });
})

//Animation Page
// js
wow = new WOW(
{
boxClass:     'wow',      // default
animateClass: 'animated', // default
offset:       0,          // default
mobile:       true,       // default
live:         true        // default
}
)
wow.init();

// jQuery
$(document).ready(function(){
  $("#example").typer({
    strings: [
      "Hello!!!",
      "It's MD Ariful Islam...",
    ]
  });
})

$(document).ready(function(){
  $('.wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });
})

$(document).ready(function(){

$('.center').slick({
centerMode: true,
centerPadding: '40px',
slidesToShow: 4,
speed: 300,
arrows: false,
autoplay: true,
autoplaySpeed: 2000,
responsive: [
{
  breakpoint: 768,
  settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1
  }
},
{
  breakpoint: 480,
  settings: {
    arrows: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }
}
]
});
})


// counterup Page
// jQuery
$(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});




AOS.init();




//new
// js
var mixer = mixitup('#hello', {
  animation: {
  duration: 300
  }

});



var swiper = new Swiper(".mySwiper", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 2500,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });



// JQ
$(document).ready(function(){
     $('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});


// load more
$(document).ready(function(){
$('.some-list').simpleLoadMore({
  item: 'div'
});
})