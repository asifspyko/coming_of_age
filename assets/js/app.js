$(document).foundation();


// Sticky Header
window.floatingHeaderLock = false;
$(window).on(
    'scroll',
    function () {
        if ($(window).scrollTop() > 0) {
            $('body').addClass('is-scrolling');
            $('.site-header').addClass('site-header--sticked-top');
        } else {
            $('body').removeClass('is-scrolling');
            $('.site-header').removeClass('site-header--sticked-top');
        }
    }
).on(
    'load',
    function () {
        var $window = $(window);
        $window.on('scroll', function () {
            handleStickyHeader();
        });
    }
);
handleStickyHeader();
var headerHeight = $('.site-header').height();
var lastScrollTop = 0;

function handleStickyHeader() {
    if (window.floatingHeaderLock) {
        return;
    }

    var currentScrollTop = $(window).scrollTop();

    if (currentScrollTop - headerHeight <= 0) {
        $('body').removeClass('is-scrolling-down is-scrolling-up');
    } else if (currentScrollTop > lastScrollTop) {
        $('body').removeClass('is-scrolling-up');
        $('body').addClass('is-scrolling-down');
    } else {
        $('body').removeClass('is-scrolling-down');
        $('body').addClass('is-scrolling-up');
    }

    lastScrollTop = currentScrollTop;
}

function lockFloatingHeader() {
    window.floatingHeaderLock = true;

    setTimeout(function () {
        window.floatingHeaderLock = false;
    }, 3000);
}
// --------------------------------------------------------------------
$('.navbar-toggler').on(
    'click',
    function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    }
);