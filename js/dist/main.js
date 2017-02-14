(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// Animated elements

var animation = {
  pulseButton: function pulseButton() {
    TweenMax.to('.pulse-button circle:nth-child(1)', 4, {
      attr: {
        r: 25,
        "stroke-width": 1,
        "stroke-opacity": 1
      },
      opacity: 0,
      repeat: -1,
      delay: 1
    });

    TweenMax.to('.pulse-button circle:nth-child(2)', 4, {
      attr: {
        r: 25,
        "stroke-width": 1,
        "stroke-opacity": 1
      },
      opacity: 0,
      repeat: -1
    });

    TweenMax.to('.pulse-button circle:nth-child(3)', 2, {
      attr: {
        r: 2
      },
      repeat: -1,
      yoyo: true,
      ease: Power2.easeOut
    });
  }

};

module.exports = animation;

},{}],2:[function(require,module,exports){
"use strict";

var navigationSlideMenu = {
  init: function init() {
    this.cacheDom();
    this.render();
  },
  cacheDom: function cacheDom() {
    this.$menuBar = $(".navbar-toggle");
    this.$menuListItem = $("menu-list-items");
    this.$fade = $(".fp-nav-wrapper");
    this.$navBackButton = $(".nav-back-button");
    this.$menuItem = $(".menu-item");
  },
  hamburgerMenu: function hamburgerMenu() {
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
  render: function render() {
    this.hamburgerMenu();
    var menuToggle = new TimelineMax({ paused: true, reversed: true });
    var menuSlideText = new TimelineMax({ paused: true, reversed: true });

    TweenMax.set(this.$menuItem, {
      autoAlpha: 0,
      y: -40
    });

    menuSlideText.staggerTo(this.$menuItem, 1, {
      y: 0,
      autoAlpha: 1,
      ease: Back.easeInOut
    }, 0.05);

    TweenMax.set(this.$fade, {
      y: '-100%'
    });

    menuToggle.to(this.$fade, 1, {
      y: '0%',
      ease: Power4.easeInOut
    });

    $('.navbar-toggle, .menu-list-items, .nav-back-button').click(function () {
      menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
      setTimeout(function () {
        menuSlideText.reversed() ? menuSlideText.restart() : menuSlideText.reverse();
      }, 250);
    });
  }
};

module.exports = navigationSlideMenu;

},{}],3:[function(require,module,exports){
"use strict";

var pixiBackground = function pixiBackground() {

    var viewWidth = 630;
    var viewHeight = 410;

    var renderer = PIXI.autoDetectRenderer(viewWidth, viewHeight);
    renderer.view.className = "rendererView";
    // var renderer = PIXI.autoDetectRenderer(800, 600);
    document.body.appendChild(renderer.view);

    // create the root of the scene graph
    var stage = new PIXI.Container();

    var count = 0;

    // build a rope!
    var ropeLength = 918 / 7;

    var points = [];

    for (var i = 0; i < 20; i++) {
        points.push(new PIXI.Point(i * ropeLength, 0));
    }

    var strip = new PIXI.mesh.Rope(PIXI.Texture.fromImage('img/underwaterocean.png'), points);

    strip.x = -750;
    strip.y = -200;

    var backgroundContainer = new PIXI.Container();
    backgroundContainer.position.x = 400;
    backgroundContainer.position.y = 300;

    backgroundContainer.scale.set(0.70);
    stage.addChild(backgroundContainer);

    backgroundContainer.addChild(strip);

    // start animating
    requestAnimationFrame(animate);

    function animate() {

        count += 0.01;

        for (var i = 0; i < points.length; i++) {

            points[i].y = Math.sin(i * 0.5 + count) * 30;

            points[i].x = i * ropeLength + Math.cos(i * 0.3 + count) * 5;
        }

        // render the stage
        renderer.render(stage);

        requestAnimationFrame(animate);
    }
};

module.exports = pixiBackground;

},{}],4:[function(require,module,exports){
'use strict';

// full page transition

function pagePreloader() {
  var preloader = $('.preload-wrapper');
  TweenMax.to(preloader, 2, {
    autoAlpha: 0,
    ease: Back.easeIn.config(1.7)
  });
}

module.exports = pagePreloader;

},{}],5:[function(require,module,exports){
'use strict';

// scroll back to top

var scrollToTop = function scrollToTop() {
  var $topOfPage = $('.top-of-page');
  var $backTopBtn = $('.backtop-btn');

  $backTopBtn.on("click", function () {
    $('html, body').animate({
      scrollTop: $topOfPage.offset().top
    }, 500);
  });
};

module.exports = scrollToTop;

},{}],6:[function(require,module,exports){
"use strict";

// Animated Typography - text fading in and out


var animatedText = {
	// animate text 
	fadeInText: function fadeInText(section) {
		TweenMax.staggerTo(section, 1, {
			y: 0,
			autoAlpha: 1,
			ease: Back.easeInOut
		}, 0.2);
	},
	// reset fading text fucntion to original postion when leave section.
	resetfadeText: function resetfadeText(fadeSection, opacity, yPos, time) {
		TweenMax.set(fadeSection, {
			alpha: opacity,
			y: yPos,
			delay: time
		});
	}

};

module.exports = animatedText;

},{}],7:[function(require,module,exports){
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var navigationSlideMenu = require('./lib/navigation.js');
var pagePreloader = require('./lib/preloader.js');
var animation = require('./lib/animation.js');
var animatedText = require('./lib/typographyAnimation.js');
var pixiBackground = require('./lib/pixiBackground.js');
var scrollToTop = require('./lib/scrollToTop.js');

$(document).ready(function () {
  var _this = this,
      _$$fullpage;

  $(".toggle").on("click", function () {
    $(".chatbot-list-items").toggleClass("active");
  });

  // SCROLL BACK TO TOP OF PAGE
  scrollToTop();

  // PRE-LAODER
  $(window).load(function () {
    setTimeout(pagePreloader, 500);
  });

  var $letter = $('.st0');

  TweenMax.staggerTo($letter, 0.6, {
    y: -30,
    repeat: -1,
    ease: Power4.easeInOut,
    yoyo: true
  }, 0.05);

  // HIDE NAV MENU ON SCROLLING
  var NavNide = function NavNide() {
    var previousScroll = 0;

    $(window).scroll(function () {
      var $currentScroll = $(this).scrollTop();
      var $logoAndHamburger = $('.logo, .navbar-toggle');
      var $secondaryNav = $('.secondary-nav');

      if ($currentScroll > previousScroll) {
        TweenMax.to($secondaryNav, 0.2, {
          y: '-100',
          ease: Linear.easeNone
        });

        TweenMax.to($secondaryNav, 0.2, {
          css: { background: "#072231" },
          ease: Linear.easeNone
        });
      } else {
        var slideBack = function slideBack(divElement, yPos) {
          TweenMax.to(divElement, 0.2, {
            y: yPos,
            ease: Linear.easeNone
          });
        };

        slideBack($logoAndHamburger, 30);
        slideBack($secondaryNav, 0);
      }
      previousScroll = $currentScroll;
    });
  };
  NavNide();

  // NAVIGATION
  navigationSlideMenu.init();

  /**
  * FULL PAGE PLUGIN
  */

  // initialize fullpage

  $('#fullpage').fullpage((_$$fullpage = {
    //Navigation
    menu: '#myMenu',
    lockAnchors: false,
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: true,
    css3: true,
    fadingEffect: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: false,
    continuousVertical: false,
    verticalCentered: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: true,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5
  }, _defineProperty(_$$fullpage, 'verticalCentered', false), _defineProperty(_$$fullpage, 'anchors', ['home', 'about-me', 'prototype', 'chatbot', 'user-interface', 'design']), _defineProperty(_$$fullpage, 'setResponsive', true), _defineProperty(_$$fullpage, 'afterLoad', function afterLoad(anchorLink, index) {
    var loadedSection = $(this);

    if (index == 2) {
      animatedText.fadeInText($fadeTextAbout);
    }

    if (index === 3) {
      animatedText.fadeInText($fadeTextPrototype);
    }

    if (index === 4) {
      animatedText.fadeInText($fadeTextChatbot);
    }

    if (index === 5) {
      animatedText.fadeInText($fadeTextUi);
    }

    if (index === 6) {
      animatedText.fadeInText($fadeTextDesign);
    }

    if (index === 3 || index === 4 || index === 5 || index === 6) {
      $('.red-logo').removeClass('active-logo');
      $('.white-logo').addClass('active-logo');
      $('.menu-bar').css({
        'background': '#FEFEE6',
        'transition': 'background 1.5s'
      });
      $('.watermark-text, .contact-item, .title-caption').css({
        'color': '#FEFEE6',
        'transition': 'color 1.5s'
      });
      $('.social-main li').css({
        'border-color': 'rgba(255,255, 255, 0.25)',
        'transition': 'border-color 1.5s'
      });
      $('.pulse-button').css({
        'stroke': "#FEFEE6",
        'transition': 'color 1.5s'
      });
    } else {
      $('.white-logo').removeClass('active-logo');
      $('.red-logo').addClass('active-logo');
      $('.menu-bar').css('background', '#E94444');
      $('.watermark-text, .contact-item, .title-caption').css('color', '#E94444');
      $('.social-main li').css('border-color', 'rgba(233,68, 68, 0.15)');
      $('.pulse-button').css('stroke', "#E94444");
    }
  }), _defineProperty(_$$fullpage, 'onLeave', function onLeave(index, nextIndex, direction) {
    var leavingSection = $(_this);

    if (index === 2 && direction === 'up' || index === 3 && direction === 'down') {
      animatedText.resetfadeText($fadeTextAbout, 0, 20, 1);
    }

    if (index === 3 && direction === 'up' || index === 3 && direction === 'down') {
      animatedText.resetfadeText($fadeTextPrototype, 0, 20, 1);
    }

    if (index === 4 && direction === 'up' || index === 4 && direction === 'down') {
      animatedText.resetfadeText($fadeTextChatbot, 0, 20, 1);
    }

    if (index === 5 && direction === 'up' || index === 5 && direction === 'down') {
      animatedText.resetfadeText($fadeTextUi, 0, 20, 1);
    }

    if (index === 6 && direction === 'up') {
      animatedText.resetfadeText($fadeTextDesign, 0, 20, 1);
    }
  }), _$$fullpage)); //end of fullpage.js

  var $fadeTextPrototype = $('.fadetext-prototype');
  var $fadeTextChatbot = $('.fadetext-chatbot');
  var $fadeTextUi = $('.fadetext-ui');
  var $fadeTextAbout = $('.fadetext-about');
  var $fadeTextDesign = $('.fadetext-design');
  var $menuItem = $('.menu-item');

  // set initial state of text
  var setState = function setState() {
    TweenMax.set([$fadeTextPrototype, $fadeTextChatbot, $fadeTextUi, $fadeTextAbout, $fadeTextDesign], {
      alpha: 0,
      y: 30
    });
  };
  setState();

  /**
  * PULSE ANIMATION
  */
  animation.pulseButton();

  /**
  * PIXI JS / FISH
  */
  pixiBackground();

  /**
  * chatbot responsive nav menu
  */
}); // end of document.ready()

},{"./lib/animation.js":1,"./lib/navigation.js":2,"./lib/pixiBackground.js":3,"./lib/preloader.js":4,"./lib/scrollToTop.js":5,"./lib/typographyAnimation.js":6}]},{},[7]);
