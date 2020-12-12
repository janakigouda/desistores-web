
// carousel
$(document).ready(function () {
    $("#owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots:false,
        touchDrag: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplaySpeed: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });
  });
  
  // block1
  $(document).ready(function () {
    $("#block-1").owlCarousel({
        items: 5,
        loop: true,
        touchDrag: true,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    });
  
  // block-2
      $("#block-2").owlCarousel({
          items: 6,
          loop: true,
          touchDrag: true,
          responsiveClass: true,
          nav: true,
          responsive: {
              0: {
                  items: 2,
                  nav: true
              },
              600: {
                  items: 4,
                  nav: true
              },
              1000: {
                  items: 6,
                  nav: true,
                  loop: true
              }
          }
      });
  //  block-3
      $("#block-3").owlCarousel({
          items: 6,
          loop: true,
          touchDrag: true,
          responsiveClass: true,
          nav: true,
          responsive: {
              0: {
                  items: 2,
                  nav: true
              },
              600: {
                  items: 4,
                  nav: true
              },
              1000: {
                  items: 6,
                  nav: true,
                  loop: true
              }
          }
      });
    });
  