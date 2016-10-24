function pagePreloader() {
  var preloader = $('.spinner-wrapper');
  TweenMax.to(preloader, 0.5, {
    y: '100%',
  });
}

module.exports = pagePreloader;