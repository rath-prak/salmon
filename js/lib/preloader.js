// full page transition

function pagePreloader() {
  var preloader = $('.preload-wrapper');
  TweenMax.to(preloader, 2, {
    autoAlpha: 0,
    ease: Back.easeIn.config(1.7),
  });
}

module.exports = pagePreloader;