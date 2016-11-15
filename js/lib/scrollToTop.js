    
var scrollToTop = function () {
  var $topOfPage = $('.top-of-page');
  var $backTopBtn = $('.backtop-btn');

  $backTopBtn.on( "click", function() {
     $('html, body').animate({
        scrollTop: $topOfPage.offset().top
    }, 500);
  });
}

module.exports = scrollToTop