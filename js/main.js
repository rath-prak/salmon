$(document).ready(function(){



// navigation
  $('.navbar-toggle, nav').click(function(){
    $('.navbar-toggle').toggleClass('navbar-on');
    $('nav').fadeToggle();
    $('nav').removeClass('main-nav-hide');
  });

// initialize fullpage

  $('#fullpage').fullpage({
  //Navigation
    menu: '#myMenu',
    lockAnchors: false,
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: true,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    verticalCentered: false,
    anchors: ['home', 'design', 'ux-ui', 'prototype', 'photography'],

    afterLoad: function(anchorLink, index) {
      if (index == 2 || index == 3) {
        $('.red-logo').removeClass('active-logo');
        $('.white-logo').addClass('active-logo');
        $('.bar-1, .bar-2, .bar-3').css('background', '#fff');
        $('#fp-nav ul li a span, .fp-slidesNav ul li a span').css('background', '#fff');
      } else {
        $('.white-logo').removeClass('active-logo');
        $('.red-logo').addClass('active-logo'); 
        $('.bar-1, .bar-2, .bar-3').css('background', '#E94444');
        $('#fp-nav ul li a span, .fp-slidesNav ul li a span').css('background', '#E94444');  
      }

      bison2();

    },

    // afterLoad function



  });

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



}); // end of document.ready()