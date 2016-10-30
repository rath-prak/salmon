// var animatedText = require('./lib/typographyAnimation.js');

var navigationSlideMenu = {
  init: function() {
    this.cacheDom();
    this.render();
  },
  cacheDom: function() {
    this.$menuBar = $(".navbar-toggle");
    this.$menuListItem = $("menu-list-items");
    this.$slideDown = $(".fp-nav-wrapper");
    this.$navBackButton = $(".nav-back-button");
    // this.$menuItem = $(".menu-item");
  },
  render: function () {
    var menuToggle = new TimelineMax({ paused:true, reversed:true });

    TweenMax.set(this.$slideDown, { 
      y: '-100%' 
    });

    menuToggle.to(this.$slideDown, 1, { 
      y: '0%',
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
