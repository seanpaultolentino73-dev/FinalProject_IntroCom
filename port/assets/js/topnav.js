/* Mobile toggle for the top menu */
$(document).ready(function () {
    $('.nav_toggle').on('click', function () {
        $('body').toggleClass('nav_open');
    });
    $('.top_nav a').on('click', function () {
        $('body').removeClass('nav_open');
    });
});
