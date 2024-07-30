 jQuery(document).ready(function($) {
    $('.loop').owlCarousel({
    center: true,
    items: 1.5,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
    600: {
    items: 3
    }
    }
    });
    });



$(document).ready(function() {
    // Initialize Owl Carousel
    $('.owl-menu').owlCarousel({
        loop: false,
        margin: 5,
        padding: 5,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 4
            },
            400: {
                items: 4
            },
            1000: {
                items: 8
            }
        }
    });

    // Sticky functionality
    var stickyOffset = $('.catemenu').offset().top;

    $(window).scroll(function() {
        var sticky = $('.catemenu'),
            scroll = $(window).scrollTop();

        if (scroll >= stickyOffset) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
});



$(document).ready(function() {
    $('.subcate').owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        padding:0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1 // Show more items on larger screens
            },
            1000: {
                items: 1 // Adjust number of items as needed
            }
        }
    });
});



jQuery(document).ready(function($) {
    function initializeImageSlider() {
        $('.scrollable-carousel').owlCarousel({
            items: 2,             // Show one item at a time
            loop: false,           // Enable looping
            margin: 20,           // Margin between items
            nav: false,            // Enable navigation buttons
            dots: false,          // Disable dots
            autoplay: false,       // Enable autoplay
            autoplayHoverPause: true, // Pause on hover
            mouseDrag: true,      // Enable mouse drag
            touchDrag: true, 
            responsive: {
                0: {
                    items: 1.3
                },
                600: {
                    items: 1.3
                },
                1000: {
                    items: 1.5
                }
            }
        });
    }

    initializeImageSlider();
});

jQuery(document).ready(function($) {
    function initializeImageSlider() {
        $('.Featured').owlCarousel({
            items: 2,             // Show one item at a time
            loop: false,           // Enable looping
            margin: 20,           // Margin between items
            nav: false,            // Enable navigation buttons
            dots: false,          // Disable dots
            autoplay: false,       // Enable autoplay
            autoplayHoverPause: true, // Pause on hover
            mouseDrag: true,      // Enable mouse drag
            touchDrag: true, 
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });
    }

    initializeImageSlider();
});



