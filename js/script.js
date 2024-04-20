$(document).ready(function () {
    $('.hamburger').click(function () {
        $('.header').toggleClass('open-menu');
    });

    $(window).resize(function () {
        $('.open-menu').removeClass('open-menu');
    });
});