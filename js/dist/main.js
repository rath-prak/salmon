(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = animation;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var chatbotSlideMenu = function chatbotSlideMenu() {
  $(".toggle").on("click", function () {
    $(".chatbot-list-items").toggleClass("active");
  });
};

exports.default = chatbotSlideMenu;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var navHide = function navHide() {
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

exports.default = navHide;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = navigationSlideMenu;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var pixiBackground = function pixiBackground() {

    var viewWidth = 630;
    var viewHeight = 410;

    var renderer = PIXI.autoDetectRenderer(viewWidth, viewHeight);
    renderer.view.className = "rendererView";
    // var renderer = PIXI.autoDetectRenderer(800, 600);
    document.body.appendChild(renderer.view);

    var stage = new PIXI.Container();

    var count = 0;

    // build a rope!
    var ropeLength = 918 / 7;

    var points = [];

    for (var i = 0; i < 20; i++) {
        points.push(new PIXI.Point(i * ropeLength, 0));
    }

    var strip = new PIXI.mesh.Rope(PIXI.Texture.fromImage('img/underwaterocean2.jpg'), points);

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

exports.default = pixiBackground;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pagePreloader = {
  background: function background() {
    var preloader = $('.preload-wrapper');
    TweenMax.to(preloader, 2, {
      autoAlpha: 0,
      ease: Back.easeIn.config(1.7)
    });
  },
  preloader: function preloader() {
    var $letter = $('.st0');
    TweenMax.staggerTo($letter, 0.6, {
      y: -30,
      repeat: -1,
      ease: Power4.easeInOut,
      yoyo: true
    }, 0.05);
  }
};

exports.default = pagePreloader;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = scrollToTop;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
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

exports.default = animatedText;

},{}],9:[function(require,module,exports){

'use strict';

var _animation = require('./lib/animation.js');

var _animation2 = _interopRequireDefault(_animation);

var _typographyAnimation = require('./lib/typographyAnimation.js');

var _typographyAnimation2 = _interopRequireDefault(_typographyAnimation);

var _chatbotSlideMenu = require('./lib/chatbotSlideMenu.js');

var _chatbotSlideMenu2 = _interopRequireDefault(_chatbotSlideMenu);

var _navHide = require('./lib/navHide.js');

var _navHide2 = _interopRequireDefault(_navHide);

var _navigation = require('./lib/navigation.js');

var _navigation2 = _interopRequireDefault(_navigation);

var _preloader = require('./lib/preloader.js');

var _preloader2 = _interopRequireDefault(_preloader);

var _pixiBackground = require('./lib/pixiBackground.js');

var _pixiBackground2 = _interopRequireDefault(_pixiBackground);

var _scrollToTop = require('./lib/scrollToTop.js');

var _scrollToTop2 = _interopRequireDefault(_scrollToTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _this = this,
      _$$fullpage;

  // Chatbot slidedown menu
  (0, _chatbotSlideMenu2.default)();

  // SCROLL BACK TO TOP OF PAGE
  (0, _scrollToTop2.default)();

  // PRE-LAODER
  $(window).load(function () {
    setTimeout(_preloader2.default.background, 500);
    _preloader2.default.preloader();
  });

  // HIDE NAV MENU ON SCROLLING
  (0, _navHide2.default)();

  // NAVIGATION
  _navigation2.default.init();

  // FULL PAGE PLUGIN - initialize fullpage

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
      _typographyAnimation2.default.fadeInText($fadeTextAbout);
    }

    if (index === 3) {
      _typographyAnimation2.default.fadeInText($fadeTextPrototype);
    }

    if (index === 4) {
      _typographyAnimation2.default.fadeInText($fadeTextChatbot);
    }

    if (index === 5) {
      _typographyAnimation2.default.fadeInText($fadeTextUi);
    }

    if (index === 6) {
      _typographyAnimation2.default.fadeInText($fadeTextDesign);
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
      _typographyAnimation2.default.resetfadeText($fadeTextAbout, 0, 20, 1);
    }

    if (index === 3 && direction === 'up' || index === 3 && direction === 'down') {
      _typographyAnimation2.default.resetfadeText($fadeTextPrototype, 0, 20, 1);
    }

    if (index === 4 && direction === 'up' || index === 4 && direction === 'down') {
      _typographyAnimation2.default.resetfadeText($fadeTextChatbot, 0, 20, 1);
    }

    if (index === 5 && direction === 'up' || index === 5 && direction === 'down') {
      _typographyAnimation2.default.resetfadeText($fadeTextUi, 0, 20, 1);
    }

    if (index === 6 && direction === 'up') {
      _typographyAnimation2.default.resetfadeText($fadeTextDesign, 0, 20, 1);
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
  _animation2.default.pulseButton();

  /**
  * PIXI JS / FISH
  */
  (0, _pixiBackground2.default)();
}); // end of document.ready()

},{"./lib/animation.js":1,"./lib/chatbotSlideMenu.js":2,"./lib/navHide.js":3,"./lib/navigation.js":4,"./lib/pixiBackground.js":5,"./lib/preloader.js":6,"./lib/scrollToTop.js":7,"./lib/typographyAnimation.js":8}]},{},[9]);
