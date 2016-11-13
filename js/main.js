// var $ = require('jquery');
var navigationSlideMenu = require('./lib/navigation.js');
var pagePreloader = require('./lib/preloader.js');
var animation = require('./lib/animation.js');
var animatedText = require('./lib/typographyAnimation.js');
var pixiBackground = require('./lib/background.js');

$(document).ready(function(){

  // var scrollDown = $("#scroll-down.btn");

// Prototype scroll down
    // scrollDown.on( "click", function(){
    //     // $('html, body').animate({
    //     //     scrollTop: $("#process").offset().top
    //     // }, 2000);
    //     console.log('hi')
    // });

    $( "#scroll-down-btn" ).on( "click", function() {
         $('html, body').animate({
            scrollTop: $("#process").offset().top
        }, 500);
});
  
// PRE-LAODER
  $(window).load(function(){
    // pagePreloader()
    setTimeout(pagePreloader, 800);
  });


// NAVIGATION
navigationSlideMenu.init();



// Secondary nav-menu hides when scroll

  var previousScroll = 0;

  $(window).scroll(function () {
    var $currentScroll = $(this).scrollTop();
    var $logoAndHamburger = $('.logo, .navbar-toggle');
    var $secondaryNav = $('.secondary-nav');

    if ($currentScroll > previousScroll){
      TweenMax.to($secondaryNav, 0.2, {
      y: '-80',
      ease: Linear.easeNone
      })



    TweenMax.to($secondaryNav, 0.2, {
      css: {background: "#1e2832"},
      ease: Linear.easeNone
      })
    }
    else {
      function slideBack (divElement, yPos) {
          TweenMax.to(divElement, 0.2, {
          y: yPos,
          ease: Linear.easeNone
          });
        }
      slideBack($logoAndHamburger, 30);
      slideBack($secondaryNav, 0);
      }
      previousScroll = $currentScroll;
  });


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
    // navigationTooltips: ['HOME', 'ABOUT', 'PROTOTYPE', 'USER INTERFACE', 'DESIGN', 'RESUME'],
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
    anchors: ['home', 'about-me', 'prototype', 'user-interface', 'photography', 'contact'],
    setResponsive: true,
    afterLoad: function(anchorLink, index) {
      var loadedSection = $(this);
 
      if (index == 2) {
        animatedText.fadeInText($fadeTextAbout);
      }

      if (index === 3) {
        $('.red-logo').removeClass('active-logo');
        $('.white-logo').addClass('active-logo');
        // $('.menu-bar').css('background', '#fff');
        // $('.watermark-text, .contact-item').css('color', '#fff');
        $('.menu-bar').css('background', '#fff');
        $('.watermark-text, .contact-item, .title-caption').css('color', '#fff');
        $('.social-main li').css('border-color', 'rgba(255,255, 255, 0.25)');
        animatedText.fadeInText($fadeTextPrototype);

      } else {
        $('.white-logo').removeClass('active-logo');
        $('.red-logo').addClass('active-logo'); 
        $('.menu-bar').css('background', '#E94444');
        $('.watermark-text, .contact-item, .title-caption').css('color', '#E94444');
        $('.social-main li').css('border-color', 'rgba(233,68, 68, 0.15)');

      }

      if (index === 4 ) {
        animatedText.fadeInText($fadeTextUi);
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
    } 
  }); //end of fullpage.js

  var $fadeTextPrototype = $('.fadetext-prototype');
  var $fadeTextUi = $('.fadetext-ui');
  var $fadeTextAbout = $('.fadetext-about');
  var $menuItem = $('.menu-item');

  // set initial state of text
  var setState = function () {
      TweenMax.set([$fadeTextPrototype, $fadeTextUi, $fadeTextAbout], {
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

























