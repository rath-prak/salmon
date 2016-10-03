
$(document).ready(function(){

  //Preloader

  $(window).load(function(){
    function hidePreloader() {
      var preloader = $('.spinner-wrapper');
      TweenMax.to(preloader, 0.5, {
        y: '100%',
      });
    }
    setTimeout(hidePreloader, 1300);
    // setTimeout(goMan, 2000);
    // setTimeout(hideAnimation, 2500);

    // function hideAnimation () {
    //   var transitionContainer = $('#transition-container');
    //   transitionContainer.fadeOut(2000);
    // }

  });

  // var goMan = function (){
  //     var svgContainer = document.getElementById('transition-container');
  //     var animItem = bodymovin.loadAnimation({
  //     wrapper: svgContainer,
  //     animType: 'svg',
  //     loop: false,
  //     path: '../data/spinbar-data.json'
  //     });
  //     bodymovin.setDirection(-1);
  //   };


  //NAVIGATION

var menuBar = $(".navbar-toggle"); 
var menuToggle = new TimelineMax({paused:true, reversed:true});
var slideDown = $(".fp-nav-wrapper");

TweenMax.set(slideDown, {
      y: '-100%'
  });

menuToggle  
  // .to(menuBar, 0.5, {
  // x:'-30',
  // ease: Back.easeOut
  // ease: Back.easeIn.config(2.2)
  // })
  .to(slideDown, 1, {
  y: '0%',
  ease: Power4.easeInOut
  });

$('.navbar-toggle, .menu-list-items').click(function () {
  menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
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
    responsiveWidth: 900,
    lockAnchors: false,
    navigation: false,
    navigationPosition: 'right',
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',
    css3: true,
    fadingEffect: 'slides',
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
    anchors: ['home', 'about-me', 'user-interface', 'interaction', 'photography'],
    // setResponsive: true,
    afterLoad: function(anchorLink, index) {
      var loadedSection = $(this);

      if (index == 2) {
        rayfinnAnimate();
      }

      if (index === 3) {
        $('.red-logo').removeClass('active-logo');
        $('.white-logo').addClass('active-logo');
        $('.menu-bar').css('background', '#fff');
        $('.watermark-text, .contact-item').css('color', '#fff');
        fadeInText(fadeTextUi);

      } else {
        $('.white-logo').removeClass('active-logo');
        $('.red-logo').addClass('active-logo'); 
        $('.menu-bar').css('background', '#E94444');
        $('.watermark-text, .contact-item').css('color', '#E94444');
      }

      if (index === 4 ) {
        fadeInText(fadeTextInteraction);
      }

    },
    onLeave: function(index, nextIndex, direction){
      var leavingSection = $(this);

      if(index === 3 && direction === 'up' || index === 3 && direction === 'down'){
        resetfadeText(fadeTextUi, 0, 20, 1);
      }

      if(index === 4 && direction === 'up' || index === 4 && direction === 'down'){
        resetfadeText(fadeTextInteraction, 0, 20, 1);
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
  var fadeTextUi = $('.fadetext-ui');
  var fadeTextInteraction = $('.fadetext-interaction');

  //set initial state of text
  TweenMax.set([fadeTextUi, fadeTextInteraction], {
      alpha: 0,
      y: 30
  });

  function fadeInText (section){
      TweenMax.staggerTo(section, 1 , {
        y: 0,
        autoAlpha: 1,
        ease: Back.easeInOut
      }, 0.2);
  }

  //reset fading text fucntion to original postion when leave section.
  function resetfadeText (fadeSection, opacity, yPos, time){
      TweenMax.set(fadeSection, {
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