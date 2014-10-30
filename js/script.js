$(document).ready(function() {
    // initiate object
    var webapp = new WEBAPP();

    // just to get my site out quick use masonry
    // going to rewrite this myself.

    // Also need to ditch masonry for iphone and write a scollable content viewer.
    $('#workPreview').masonry({
        itemSelector : '.workItem',
        isResizable: true,
        isFitWidth: true,
        isAnimated: true,
        columnWidth : 185
    });

});

// this stops the font-size,margin,padding animating on load sometimes.
window.onload = function(){
    $('body').addClass("animateall");
};