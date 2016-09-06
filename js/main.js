$(document).ready(function(){



// navigation
  $('.navbar-toggle, nav').click(function() {

  //##########################################################################
    var animData = {
    container: document.getElementById('container'),
    animType: 'svg',
    renderer: 'html',
    loop: false,
    autoplay: true,
    // path: 'https://raw.githubusercontent.com/rath-prak/Sproutmedia-test/master/js/data.json'
    path: 'https://raw.githubusercontent.com/rath-prak/transition-test/master/data/data.json'
    // animationData: animationData
    // path" JSON.parse(animationData)
   };
  var anim = bodymovin.loadAnimation(animData);

  //##########################################################################
  // try something like a toggle functon twich activates the animation everytime menu us clicked.

    $('nav').fadeToggle();
    $('nav').removeClass('main-nav-hide');
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
    lockAnchors: false,
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: false,
    slidesNavigation: true,
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
    normalScrollElements: '#element1, .element2',
    scrollOverflow: true,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    verticalCentered: false,
    anchors: ['home', 'interactive', 'ux', 'prototype', 'photography'],
    setResponsive: true,
    afterLoad: function(anchorLink, index) {
      var loadedSection = $(this);
      if (index == 3 || index == 4) {
        $('.red-logo').removeClass('active-logo');
        $('.white-logo').addClass('active-logo');
        $('.menu-bar').css('background', '#fff');
        $('.watermark-text, .contact-item').css('color', '#fff');
      } else {
        $('.white-logo').removeClass('active-logo');
        $('.red-logo').addClass('active-logo'); 
        $('.menu-bar').css('background', '#E94444');
        $('.watermark-text, .contact-item').css('color', '#E94444');
      }
      if (index == 2) {
            fadeInText();
        }
    }, 
    // onLeave: function(index, nextIndex, direction){
    //         var leavingSection = $(this);

    //         //after leaving section 2
    //         if(index == 2 && direction =='down' || direction == 'up'){
    //             // fadeInTextReset();
    //         }
    //       }


  }); //end of fullpage.js

  /**
  * FADE IN TEXT FOR INTERACTIVE PAGE
  */


    var interactiveHeading = $('#interactive-heading');
    var interactivePara = $('#interactive-para');

  function fadeInText (){
      var interTl = new TimelineMax();

      interTl.from(interactiveHeading, 1, {
        opacity: 0,
        y: '90px',
        ease: Power4.easeOut
      })
      .from(interactivePara, 0.5, {
        opacity: 0,
        y: '90px',
        ease: Power4.easeOut
      });
  }

  // function fadeInTextReset (){
  //   var interTlReset = new TimelineMax();

  //     interTlReset.to(interactiveHeading, 1, {
  //       opacity: 0,
  //       y: '0',
  //     })
  //     .to(interactivePara, 1, {
  //       opacity: 1,
  //       y: '0',
  //     });
  // }


  /**
  * VIVIUS
  */

    var bison2 = function (){
      var bison = new Vivus('bison-logo',{
            type: 'delayed',
            duration: 200,
            animTimingFunction: Vivus.EASE,
          },scaleLogo);

          var bisonLogo = $('#bison-logo');

          function scaleLogo(){
            TweenMax.to(bisonLogo, 2, {
              scale: 0.5
            });
          }
    };

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