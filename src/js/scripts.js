// To fix the navbar after scrolling
$(window).scroll(function() {
    if ($(window).scrollTop() > 100 ){
        $('.navbar-fixed-top').addClass('show');
    } else {
        $('.navbar-fixed-top').removeClass('show');
    }
});
