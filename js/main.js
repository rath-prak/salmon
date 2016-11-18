// var $ = require('jquery');
var navigationSlideMenu = require('./lib/navigation.js');
var pagePreloader = require('./lib/preloader.js');
var animation = require('./lib/animation.js');
var animatedText = require('./lib/typographyAnimation.js');
var pixiBackground = require('./lib/background.js');
var scrollToTop = require('./lib/scrollToTop.js');

$(document).ready(function(){

  // var scrollDown = $("#scroll-down.btn");

// Prototype scroll down
    // scrollDown.on( "click", function(){
    //     // $('html, body').animate({
    //     //     scrollTop: $("#process").offset().top
    //     // }, 2000);
    //     console.log('hi')
    // });

// SCROLL BACK TO TOP OF PAGE
  scrollToTop();    
  
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
    anchors: ['home', 'about-me', 'prototype', 'user-interface', 'design', 'contact'],
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

  for (var i = 0; i < 20; i++)
  {
      points.push(new PIXI.Point(i * ropeLength, 0));
  }

  var strip = new PIXI.mesh.Rope(PIXI.Texture.fromImage('../img/underwaterocean.png'), points);

  strip.x = -750;
  strip.y = -200;

  var snakeContainer = new PIXI.Container();
  snakeContainer.position.x = 400;
  snakeContainer.position.y = 300;

  snakeContainer.scale.set(0.70);
  stage.addChild(snakeContainer);

  snakeContainer.addChild(strip);

  // start animating
  requestAnimationFrame(animate);

  function animate() {

      count += 0.01;

      // make the snake
      for (var i = 0; i < points.length; i++) {

          points[i].y = Math.sin((i * 0.5) + count) * 30;

          points[i].x = i * ropeLength + Math.cos((i * 0.3) + count) * 5;

      }

      // render the stage
      renderer.render(stage);

      requestAnimationFrame(animate);
  }


  

}); // end of document.ready()

























