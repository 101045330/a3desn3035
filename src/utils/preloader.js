$(window).on('load', function () {
    setTimeout(function() {
        $('.preloader').fadeOut('slow', function() {
            $('body').css('overflow', 'auto'); /* Re-enable scrolling */
        });
    }, 750); // Show preloader for 1 second
});