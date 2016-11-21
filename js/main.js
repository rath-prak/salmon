// var $ = require('jquery');
var navigationSlideMenu = require('./lib/navigation.js');
var pagePreloader = require('./lib/preloader.js');
var animation = require('./lib/animation.js');
var animatedText = require('./lib/typographyAnimation.js');
var pixiBackground = require('./lib/pixiBackground.js');
var scrollToTop = require('./lib/scrollToTop.js');

$(document).ready(function(){

// SCROLL BACK TO TOP OF PAGE
  scrollToTop();    
  
// PRE-LAODER
  $(window).load(function(){
    // pagePreloader()
    setTimeout(pagePreloader, 800);
  });


// NAVIGATION
navigationSlideMenu.init();


/**
* FULL PAGE PLUGIN
*/

// initialize fullpage

  $('#fullpage').fullpage({
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
    normalScrollElementTouchThreshold: 5,
    verticalCentered: false,
    anchors: ['home', 'about-me', 'prototype', 'user-interface', 'design'],
    setResponsive: true,
    afterLoad: function(anchorLink, index) {
      var loadedSection = $(this);
 
      if (index == 2) {
        animatedText.fadeInText($fadeTextAbout);
      }

      if (index === 3) {
        animatedText.fadeInText($fadeTextPrototype);
      }

      if (index === 4) {
          animatedText.fadeInText($fadeTextUi);

      }

      if (index === 5) {
          animatedText.fadeInText($fadeTextDesign);

      }

      if (index === 3 || index === 4 || index === 5) {
        $('.red-logo').removeClass('active-logo');
        $('.white-logo').addClass('active-logo');
        $('.menu-bar').css({
          'background': '#FEFEE6',
          'transition': 'background 1.5s',
        });
        $('.watermark-text, .contact-item, .title-caption').css({
          'color': '#FEFEE6',
          'transition': 'color 1.5s'
        });
        $('.social-main li').css({
          'border-color': 'rgba(255,255, 255, 0.25)',
          'transition': 'border-color 1.5s',
        });
        $('.pulse-button').css({
          'stroke': "#FEFEE6",
          'transition': 'color 1.5s',
        });

      } else {
        $('.white-logo').removeClass('active-logo');
        $('.red-logo').addClass('active-logo'); 
        $('.menu-bar').css('background', '#E94444');
        $('.watermark-text, .contact-item, .title-caption').css('color', '#E94444');
        $('.social-main li').css('border-color', 'rgba(233,68, 68, 0.15)');
        $('.pulse-button').css('stroke', "#E94444");

      }

    },
    onLeave: function(index, nextIndex, direction){
      var leavingSection = $(this);

      if(index === 2 && direction === 'up' || index === 3 && direction === 'down'){
        animatedText.resetfadeText($fadeTextAbout, 0, 20, 1);
      }

      if(index === 3 && direction === 'up' || index === 3 && direction === 'down'){
        animatedText.resetfadeText($fadeTextPrototype, 0, 20, 1);
      }

      if(index === 4 && direction === 'up' || index === 4 && direction === 'down'){
        animatedText.resetfadeText($fadeTextUi, 0, 20, 1);
      }

      if(index === 4 && direction === 'up'){
        animatedText.resetfadeText($fadeTextDesign, 0, 20, 1);
      }
    } 
  }); //end of fullpage.js

  var $fadeTextPrototype = $('.fadetext-prototype');
  var $fadeTextUi = $('.fadetext-ui');
  var $fadeTextAbout = $('.fadetext-about');
  var $fadeTextDesign = $('.fadetext-design')
  var $menuItem = $('.menu-item');

  // set initial state of text
  var setState = function () {
      TweenMax.set([$fadeTextPrototype, $fadeTextUi, $fadeTextAbout, $fadeTextDesign], {
        alpha: 0,
        y: 30,
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


  

}); // end of document.ready()

























