$(document).ready(function () {

    
    // Hamburger menu for mobiles.
    // if ($(window).width() < 481) {
    //     $('.toggle').show();
    //     $('.top-nav').hide();
    // }
    // On window resize.
    // $(window).resize(function () {
    //     if ($(window).width() < 481) {
    //         $('.toggle').show();
    //         $('.top-nav').hide();
    //     } else {
    //         $('.toggle').hide();
    //         $('.toggle').removeClass('open');
    //         $('.top-nav').show();
    //     }
    // });

    $('.hamburger-container').on("click", function () {
        // console.log("toggle clicked");
        // $('.top-nav').slideToggle();
                $('.top-nav').toggle()
                    
    });
});

