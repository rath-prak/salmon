var navigationSlideMenu = {
  init: function() {
    this.cacheDom();
    this.render();
  },
  cacheDom: function() {
    this.$menuBar = $(".navbar-toggle");
    this.$menuListItem = $("menu-list-items");
    this.$fade = $(".fp-nav-wrapper");
    this.$navBackButton = $(".nav-back-button");
    this.$menuItem = $(".menu-item");
  },
  hamburgerMenu: function() {
    // hamburger menu
    var bar = $('.menu-bar');
    var tl = new TimelineMax();
        tl.staggerTo(bar, 2, {
        scaleX: '1.3',
        repeat: -1,
        yoyo: true,
        ease: Linear.easeNone
    }, 0.5);
  },
  render: function () {
    this.hamburgerMenu();
    var menuToggle = new TimelineMax({ paused:true, reversed:true });
    var menuSlideText = new TimelineMax({ paused:true, reversed:true });


    TweenMax.set(this.$menuItem, {
      autoAlpha: 0,
      y: -40,
    });

    menuSlideText.staggerTo(this.$menuItem, 1 , {
      y: 0,
      autoAlpha: 1,
      ease: Back.easeInOut,
    }, 0.05);


    TweenMax.set(this.$fade, {
      y: '-100%',
    });

    menuToggle.to(this.$fade, 1, {
      y: '0%',
      ease: Power4.easeInOut,
    });

    $('.navbar-toggle, .menu-list-items, .nav-back-button').click(function () {
      menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
      setTimeout(function(){
        menuSlideText.reversed() ? menuSlideText.restart() : menuSlideText.reverse();
      }, 250);

    });
  },
};

module.exports = navigationSlideMenu
