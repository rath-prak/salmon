// Animated elements

var animation = {
  pulseButton: function () {
    TweenMax.to('.pulse-button circle:nth-child(1)', 4, {
    attr: {
      r: 25,
      "stroke-width": 1,
      "stroke-opacity": 1,
    },
      opacity: 0,
      repeat: -1,
      delay: 1,
    });

    TweenMax.to('.pulse-button circle:nth-child(2)', 4, {
    attr: {
      r: 25,
      "stroke-width": 1,
      "stroke-opacity": 1
    },
    opacity: 0,
    repeat: -1,
    });

    TweenMax.to('.pulse-button circle:nth-child(3)', 2, {
    attr: {
     r: 2
    },
      repeat: -1,
      yoyo: true,
      ease: Power2.easeOut,
    });
  },
  salmonAnimation: function () {
    var salmonLogo = $('#salmon-fish');

    salmonTl = new TimelineMax({repeat:-1});
    salmonTl.to(salmonLogo, 5, {
      bezier:[{x:10, y:11}, {x:0, y:20}, {x:-10, y:10}, {x:0, y:0}], 
      ease:Linear.easeNone
    });
  },

}


module.exports = animation;