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

    TweenMax.set(this.$fade, { 
      autoAlpha: 0,
    });

    menuToggle.to(this.$fade, 1, { 
      autoAlpha: 1,
      ease: Power4.easeInOut,
    });

    $('.navbar-toggle, .menu-list-items, .nav-back-button').click(function () {
      menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
    });
    // (this.$menuBar).add(this.$menuListItem).add(this.$navBackButton).click(function () {
    // menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
    // });
  },
};

module.exports = navigationSlideMenu
