(function($) {
    "use strict";

    /* feather icon */
    feather.replace();

    /*=============================================
    =       Menu sticky & Scroll to top          =
    =============================================*/
    var windows = $(window);
    var screenSize = windows.width();
    var sticky = $('.mainheader');
    var $html = $('html');
    var $body = $('body');

    windows.on('scroll', function () {
        var scroll = windows.scrollTop();
        var headerHeight = sticky.height();

        if (screenSize >= 320) {
            if (scroll < headerHeight) {
                sticky.removeClass('is-sticky');
            } else {
                sticky.addClass('is-sticky');
            }
        }

    });

    $(".mobile-menu-active").vsmobilemenu({ menuContainer: ".vs-mobile-menu", expandScreenWidth: 992, menuToggleBtn: ".vs-menu-toggle" });
    var t, a, n, s, i, o, l = "";
    function r() {
        let t = e(".main-menu > .menu-item-has-children > ul"),
            a = e(".main-menu .menu-item-has-children > ul > ul");
        t.each(function () {
            $(window).width() > 991 && (e(this).offset().left + e(this).width() > e(window).width() ? e(this).css({ left: "auto", right: "100%" }) : e(this).css({ left: "0", right: "auto" }));
        }),
            a.each(function () {
                $(window).width() > 991 && e(this).offset().left + e(this).width() > e(window).width() && (e(this).css({ left: "auto", right: "100%" }), e(this).find(".sub-menu").css({ left: "auto", right: "100%" }));
            });
    }

    //LightBox / Fancybox
    $('.lightbox-image').fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        helpers: {
            media: {}
        }
    });

    /*  Expert-Freelancer-Owl-carousel  */
    if ($('.slider-banner').length) {
      $('.slider-banner').owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        dots: false,
        nav: true,
        autoplay: true,
        animateOut: 'slideOutDown',
        animateIn: 'fadeIn',
        active: true,
        autoplayTimeout: 3000,
        smartSpeed:4000,
        navText: [
                "<i class='icofont-rounded-left' aria-hidden='true'></i>",
                "<i class='icofont-rounded-right' aria-hidden='true'></i>",
        ],
      });
    }


})(window.jQuery);
