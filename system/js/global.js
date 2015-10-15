$(document).ready(function () {

    'use strict';

    // Desktop Detection - Applies '.hover' class to document if non-touch browser

    if (!('ontouchstart' in document.documentElement)) {
        document.documentElement.className += 'hover';
    }

    /******************** Navigation & General Layout ********************/

    if ($(window).width() > 1024) {
        // Fix Heade
        $(window).scroll(function () {
            if ($(window).scrollTop() > 0 && $(window).height() > 800) {
                $('#container, #nav').addClass('scroll');
            }
            else {
                $('#container, #nav').removeClass('scroll');
            }
        });
    }
});