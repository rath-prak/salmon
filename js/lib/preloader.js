const pagePreloader = {
  background: () => {
    const preloader = $('.preload-wrapper');
    TweenMax.to(preloader, 2, {
      autoAlpha: 0,
      ease: Back.easeIn.config(1.7),
    });
  },
  preloader: () => {
    const $letter = $('.st0');
    TweenMax.staggerTo($letter, 0.6, {
      y: -30,
      repeat: -1,
      ease: Power4.easeInOut,
      yoyo: true,
    }, 0.05);
  }
}

export default pagePreloader;
