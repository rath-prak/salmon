// scroll back to top
const scrollToTop = () => {
  let $topOfPage = $('.top-of-page');
  let $backTopBtn = $('.backtop-btn');

  $backTopBtn.on( "click", () => {
     $('html, body').animate({
        scrollTop: $topOfPage.offset().top
    }, 500);
  });
}

export default scrollToTop
