$(document).ready(function(){



  var goMan = function (){
      var svgContainer = document.getElementById('transition-container');
      var animItem = bodymovin.loadAnimation({
      wrapper: svgContainer,
      animType: 'svg',
      loop: false,
      path: '../data/spinbar-data.json'
      });
      // bodymovin.setDirection(-1);
    };

  var goMan2 = function (){
      $('nav').delay(100).fadeToggle(); 
  };

  $('.navbar-toggle, nav').click(function() {
      // goMan();
      goMan2();
  });

// hamburger menu
    var bar = $('.menu-bar');
    var tl = new TimelineMax();
        tl.staggerTo(bar, 2, {
        scaleX: '1.3',
        repeat: -1,
        yoyo: true,
        ease: Linear.easeNone
    }, 0.5); 



// initialize fullpage

  $('#fullpage').fullpage({
  //Navigation
    menu: '#myMenu',
    slideSelector: '.horizontal',
    scrollHorizontally: true,
    // responsiveSlides: true,
    // slidesToSections: true,
    responsiveWidth: 900,
    lockAnchors: false,
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',
    css3: true,
    fadingEffect: 'slides',
    scrollingSpeed: 700,
    autoScrolling: false,
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
    anchors: ['home', 'about-me', 'ux', 'prototype', 'photography'],
    setResponsive: true,
    afterLoad: function(anchorLink, index) {
      var loadedSection = $(this);
      if (index == 3 || index == 4) {
        $('.red-logo').removeClass('active-logo');
        $('.white-logo').addClass('active-logo');
        $('.menu-bar').css('background', '#fff');
        $('.watermark-text, .contact-item').css('color', '#fff');
        uxFadeIn();

      } else {
        $('.white-logo').removeClass('active-logo');
        $('.red-logo').addClass('active-logo'); 
        $('.menu-bar').css('background', '#E94444');
        $('.watermark-text, .contact-item').css('color', '#E94444');
      }
      if (index == 2) {
            rayfinnAnimate();
        }
    },
    onLeave: function(index, nextIndex, direction){
      var leavingSection = $(this);

      //after leaving section 2
      if(index == 3 && direction =='up'){
           uxFadeOutSlide (0, 20, 1);
      }
  },
    onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
    var leavingSlide = $(this);

      //leaving the first slide of the 2nd Section to the right
      if(index === 3 && slideIndex === 0 && direction === 'right'){
         
      }
    } 



  }); //end of fullpage.js


  /**
  * VIVIUS/Rayfinn logo
  */
    function rayfinnAnimate (){
      var rayfinn = new Vivus('rayfinn-logo',{
        type: 'delayed',
        duration: 200,
        animTimingFunction: Vivus.EASE,
        });
    }




  /**
  * FADE IN TEXT FOR UX/PROTOTYPE PAGE
  */
  var prototypeTitle = $('.ux-prototype');

  TweenMax.set(prototypeTitle, {
    alpha: 0,
    y: 30
  });

  function uxFadeIn (){
      var uxProto = $('.ux-prototype');
      TweenMax.staggerTo(uxProto, 1 , {
      y: 0,
      autoAlpha: 1,
      ease: Back.easeInOut
      }, 0.2);
  }

// function uxFadeOutSlide (){
//     TweenMax.set(prototypeTitle, {
//       alpha: 0,
//       y: 20,
//       delay: 1
//     });
//   }

function uxFadeOutSlide (opacity, yPos, time){
    TweenMax.set(prototypeTitle, {
      alpha: opacity,
      y: yPos,
      delay: time
    });
  }


  /**
  * RED SALMON ANIMATION
  */
  var salmonLogo = $('#salmon-fish');
  var finn = $('#salmon-fin');

  salmonTl = new TimelineMax({repeat:-1});
  salmonTl.to(salmonLogo, 5, {
    bezier:[{x:10, y:11}, {x:0, y:20}, {x:-10, y:10}, {x:0, y:0}], 
    ease:Linear.easeNone
  });

    TweenMax.staggerTo(finn, 1, {
        rotationY: -30, 
        repeat: -1, 
        yoyo: true
    });

  /**
  * PULSE ANIMATION
  */

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

  /**
  * UX NEXT SLIDE BUTTON
  */

  $('.ux-next-slide01-button').click(function() {
    $.fn.fullpage.moveSlideRight();
  });



}); // end of document.ready()