// var $ = require('jquery');
var navigationSlideMenu = require('./lib/navigation.js');
var pagePreloader = require('./lib/preloader.js');
var animation = require('./lib/animation.js');
var animatedText = require('./lib/typographyAnimation.js');

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
      css: {background: "#273340"},
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
    anchors: ['home', 'about-me', 'prototype', 'user-interface', 'photography', 'resume'],
    setResponsive: true,
    afterLoad: function(anchorLink, index) {
      var loadedSection = $(this);
 
      if (index == 2) {

      }

      if (index === 3) {
        $('.red-logo').removeClass('active-logo');
        $('.white-logo').addClass('active-logo');
        // $('.menu-bar').css('background', '#fff');
        // $('.watermark-text, .contact-item').css('color', '#fff');
        $('.menu-bar').css('background', '#0176e8');
        $('.watermark-text, .contact-item').css('color', '#0176e8');
        animatedText.fadeInText($fadeTextPrototype);

      } else {
        $('.white-logo').removeClass('active-logo');
        $('.red-logo').addClass('active-logo'); 
        $('.menu-bar').css('background', '#E94444');
        $('.watermark-text, .contact-item').css('color', '#E94444');

      }

      if (index === 4 ) {
        animatedText.fadeInText($fadeTextUi);
      }

    },
    onLeave: function(index, nextIndex, direction){
      var leavingSection = $(this);

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
  var $menuItem = $('.menu-item');
  // set initial state of text
  var setState = function () {
      TweenMax.set([$fadeTextPrototype, $fadeTextUi], {
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

  // Create a pixi renderer
  var renderer = PIXI.autoDetectRenderer(viewWidth, viewHeight);
  renderer.view.className = "rendererView";
  
  // add render view to DOM
  document.body.appendChild(renderer.view);

  // create an new instance of a pixi stage
  var stage = new PIXI.Stage(0xFFFFFF);

  // create a background texture
  var pondFloorTexture = PIXI.Texture.fromImage("img/pixi/pondFloor.jpg");
  // create a new background sprite
  var pondFloorSprite = new PIXI.Sprite(pondFloorTexture);
  stage.addChild(pondFloorSprite);

  // create an array to store a refference to the fish in the pond
  var fishArray = [];
   
  var totalFish = 20;

  for (var i = 0; i < totalFish; i++) 
  {
    // generate a fish id betwen 0 and 3 using the modulo operator
    var fishId = i % 4;
    fishId += 1;

    // genrate an image name based on the fish id
    var imagePath = "img/pixi/fish"+fishId+".png";
    // create a new Texture that uses the image name that we just generated as its source
    var fishTexture = PIXI.Texture.fromImage(imagePath);
    // create asprite that uses our new sprite texture
    var fish =  new PIXI.Sprite(fishTexture);

    // set the anchor point so the the fish texture is centerd on the sprite
    fish.anchor.x = fish.anchor.y = 0.5;

    // set a random scale for the fish - no point them all being the same size!
    fish.scale.x = fish.scale.y = 0.8 + Math.random() * 0.3;
    
    // finally let's set the fish to be a random position..
    fish.position.x = Math.random() * viewWidth;
    fish.position.y = Math.random() * viewHeight;
  
    // time to add the fish to the pond container!
    stage.addChild(fish);

    // create some extra properties that will control movment

    // create a random direction in radians. This is a number between 0 and PI*2 which is the equivalent of 0 - 360 degrees
    fish.direction = Math.random() * Math.PI * 2;

    // this number will be used to modify the direction of the fish over time
    fish.turningSpeed = Math.random() - 0.8;

    // create a random speed for the fish between 0 - 2
    fish.speed = 2 + Math.random() * 2; 

    // finally we push the fish into the fishArray so it it can be easily accessed later
    fishArray.push(fish);

  }

  // create a bounding box box for the little fish 
  var fishBoundsPadding = 100;
  var fishBounds = new PIXI.Rectangle(-fishBoundsPadding,
                    -fishBoundsPadding, 
                    viewWidth + fishBoundsPadding * 2, 
                    viewHeight + fishBoundsPadding * 2);

  
  // create a new wave texture to add over the fish
  var waveTexture = PIXI.Texture.fromImage("img/pixi/waves.png");
  var wavesTilingSprite = new PIXI.TilingSprite(waveTexture, viewWidth, viewHeight);
  wavesTilingSprite.alpha = 0.2;
  stage.addChild(wavesTilingSprite);
  
  // create a displacment map (the texture must be a power of two for the filter)
  var waveDisplacementTexture = PIXI.Texture.fromImage("img/pixi/displacementMap.jpg");
  var displacementFilter = new PIXI.DisplacementFilter(waveDisplacementTexture);
  
  // apply the filters to the stage
  stage.filters = [displacementFilter];
  
  // configure the displacement filter..
  displacementFilter.scale.x = 25;
  displacementFilter.scale.y = 25;

  var tick = 0;
  requestAnimationFrame(animate);

  function animate() 
  {
    // iterate through the fish and update the positiond
    for (var i = 0; i < fishArray.length; i++) 
    {
      var fish = fishArray[i];
      fish.direction += fish.turningSpeed * 0.01;
      fish.position.x += Math.sin(fish.direction) * fish.speed;
      fish.position.y += Math.cos(fish.direction) * fish.speed;
      fish.rotation = -fish.direction - Math.PI/2;

      // wrap the fish by testing there bounds..
      if(fish.position.x < fishBounds.x)fish.position.x += fishBounds.width;
      else if(fish.position.x > fishBounds.x + fishBounds.width)fish.position.x -= fishBounds.width
      
      if(fish.position.y < fishBounds.y)fish.position.y += fishBounds.height;
      else if(fish.position.y > fishBounds.y + fishBounds.height)fish.position.y -= fishBounds.height
    }
    
    // increment the ticker
    tick += 0.1;
    
    // scroll the wave sprite
    wavesTilingSprite.tilePosition.x = wavesTilingSprite.tilePosition.y = tick * -10
    
    // update the displacment filter by moving the offset of the filter
    displacementFilter.offset.x = displacementFilter.offset.y = tick * 10
    
    // time to render the state!
      renderer.render(stage);
      
      // request another animation frame..
      requestAnimationFrame( animate );
  }


  

}); // end of document.ready()

























