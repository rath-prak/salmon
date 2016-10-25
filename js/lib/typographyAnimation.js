// Animated Typography - text fading in and out


	var animatedText = {
		 // animate text 
		fadeInText: function (section) {
			TweenMax.staggerTo(section, 1 , {
	      y: 0,
	      autoAlpha: 1,
	      ease: Back.easeInOut,
	    }, 0.2);
		},
		// reset fading text fucntion to original postion when leave section.
		resetfadeText: function (fadeSection, opacity, yPos, time) {
			TweenMax.set(fadeSection, {
	      alpha: opacity,
	      y: yPos,
	      delay: time,
	    });
		},
	};

module.exports = animatedText
