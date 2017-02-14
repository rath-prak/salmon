/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var navigationSlideMenu = __webpack_require__(2);
var pagePreloader = __webpack_require__(4);
var animation = __webpack_require__(1);
var animatedText = __webpack_require__(6);
var pixiBackground = __webpack_require__(3);
var scrollToTop = __webpack_require__(5);

$(document).ready(function () {
  var _$$fullpage;

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
    var leavingSection = $(this);

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

    if (index === 5 && direction === 'up') {
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
  * RED SALMON ANIMATION
  */
  animation.salmonAnimation();

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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
  },
  salmonAnimation: function salmonAnimation() {
    var salmonLogo = $('#salmon-fish');

    salmonTl = new TimelineMax({ repeat: -1 });
    salmonTl.to(salmonLogo, 5, {
      bezier: [{ x: 10, y: 11 }, { x: 0, y: 20 }, { x: -10, y: 10 }, { x: 0, y: 0 }],
      ease: Linear.easeNone
    });
  }

};

module.exports = animation;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// full page transition

function pagePreloader() {
  var preloader = $('.preload-wrapper');
  TweenMax.to(preloader, 2, {
    autoAlpha: 0,
    ease: Back.easeIn.config(1.7)
  });
}

module.exports = pagePreloader;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);