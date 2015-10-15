/** global jQuery,doc */

var doc = doc || $(document);

(function ($) {
    "use strict";

    // When the connection is made, hide the loading screen
    doc.on('onFCConnectionMade', function () {
        var formEl, loader;

        loader = $('.loader-container');

        // Hide the loader
        loader.animate({
            opacity: 0
        }, 250, function () {
            setTimeout(function () {
                loader.remove();
            }, 1000);
        });
    });

    doc.on('onLoadingPageStart', function () {
        $('#loading-bar-top').find('.bar').show().animate({
            width: '85%'
        }, 1200);
    });

    doc.on('onLoadingPageEnd', function () {
        $('#loading-bar-top').find('.bar').animate({
            width: '100%'
        }, 100, function () {
            $('#loading-bar-top').find('.bar').hide().css('width', 0);
        });
    });
}(jQuery));
