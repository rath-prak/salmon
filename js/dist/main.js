!function e(t,n,o){function a(i,s){if(!n[i]){if(!t[i]){var l="function"==typeof require&&require;if(!s&&l)return l(i,!0);if(r)return r(i,!0);throw new Error("Cannot find module '"+i+"'")}var c=n[i]={exports:{}};t[i][0].call(c.exports,function(e){var n=t[i][1][e];return a(n?n:e)},c,c.exports,e,t,n,o)}return n[i].exports}for(var r="function"==typeof require&&require,i=0;i<o.length;i++)a(o[i]);return a}({1:[function(e,t,n){var o=e("./lib/navigation.js"),a=e("./lib/preloader.js"),r=e("./lib/animation.js"),i=e("./lib/typographyAnimation.js");$(document).ready(function(){function e(){f+=.01;for(var t=0;t<h.length;t++)h[t].y=30*Math.sin(.5*t+f),h[t].x=t*d+5*Math.cos(.3*t+f);p.render(m),requestAnimationFrame(e)}$("#scroll-down-btn").on("click",function(){$("html, body").animate({scrollTop:$("#process").offset().top},500)}),$(window).load(function(){setTimeout(a,800)}),o.init();var t=0;$(window).scroll(function(){function e(e,t){TweenMax.to(e,.2,{y:t,ease:Linear.easeNone})}var n=$(this).scrollTop(),o=$(".logo, .navbar-toggle"),a=$(".secondary-nav");n>t?(TweenMax.to(a,.2,{y:"-80",ease:Linear.easeNone}),TweenMax.to(a,.2,{css:{background:"#273340"},ease:Linear.easeNone})):(e(o,30),e(a,0)),t=n}),$("#fullpage").fullpage({menu:"#myMenu",lockAnchors:!1,navigation:!0,navigationPosition:"right",showActiveTooltip:!0,css3:!0,fadingEffect:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,scrollBar:!1,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!1,continuousVertical:!1,verticalCentered:!1,normalScrollElements:"#element1, .element2",scrollOverflow:!0,scrollOverflowOptions:null,touchSensitivity:15,normalScrollElementTouchThreshold:5,verticalCentered:!1,anchors:["home","about-me","prototype","user-interface","photography","resume"],setResponsive:!0,afterLoad:function(e,t){$(this);3===t?($(".red-logo").removeClass("active-logo"),$(".white-logo").addClass("active-logo"),$(".menu-bar").css("background","#0176e8"),$(".watermark-text, .contact-item").css("color","#0176e8"),i.fadeInText(n)):($(".white-logo").removeClass("active-logo"),$(".red-logo").addClass("active-logo"),$(".menu-bar").css("background","#E94444"),$(".watermark-text, .contact-item").css("color","#E94444")),4===t&&i.fadeInText(s)},onLeave:function(e,t,o){$(this);(3===e&&"up"===o||3===e&&"down"===o)&&i.resetfadeText(n,0,20,1),(4===e&&"up"===o||4===e&&"down"===o)&&i.resetfadeText(s,0,20,1)}});var n=$(".fadetext-prototype"),s=$(".fadetext-ui"),l=($(".menu-item"),function(){TweenMax.set([n,s],{alpha:0,y:30})});l(),r.salmonAnimation(),r.pulseButton();var c=630,u=410,p=PIXI.autoDetectRenderer(c,u);p.view.className="rendererView",document.body.appendChild(p.view);for(var m=new PIXI.Container,f=0,d=918/7,h=[],v=0;v<20;v++)h.push(new PIXI.Point(v*d,0));var g=new PIXI.mesh.Rope(PIXI.Texture.fromImage("../img/pixi/underwaterocean.png"),h);g.x=-750,g.y=-200;var w=new PIXI.Container;w.position.x=400,w.position.y=300,w.scale.set(.7),m.addChild(w),w.addChild(g),requestAnimationFrame(e)})},{"./lib/animation.js":2,"./lib/navigation.js":3,"./lib/preloader.js":4,"./lib/typographyAnimation.js":5}],2:[function(e,t,n){var o={pulseButton:function(){TweenMax.to(".pulse-button circle:nth-child(1)",4,{attr:{r:25,"stroke-width":1,"stroke-opacity":1},opacity:0,repeat:-1,delay:1}),TweenMax.to(".pulse-button circle:nth-child(2)",4,{attr:{r:25,"stroke-width":1,"stroke-opacity":1},opacity:0,repeat:-1}),TweenMax.to(".pulse-button circle:nth-child(3)",2,{attr:{r:2},repeat:-1,yoyo:!0,ease:Power2.easeOut})},salmonAnimation:function(){var e=$("#salmon-fish"),t=$("#salmon-fin");salmonTl=new TimelineMax({repeat:-1}),salmonTl.to(e,5,{bezier:[{x:10,y:11},{x:0,y:20},{x:-10,y:10},{x:0,y:0}],ease:Linear.easeNone}),TweenMax.staggerTo(t,1,{rotationY:-30,repeat:-1,yoyo:!0})}};t.exports=o},{}],3:[function(e,t,n){var o={init:function(){this.cacheDom(),this.render()},cacheDom:function(){this.$menuBar=$(".navbar-toggle"),this.$menuListItem=$("menu-list-items"),this.$fade=$(".fp-nav-wrapper"),this.$navBackButton=$(".nav-back-button"),this.$menuItem=$(".menu-item")},hamburgerMenu:function(){var e=$(".menu-bar"),t=new TimelineMax;t.staggerTo(e,2,{scaleX:"1.3",repeat:-1,yoyo:!0,ease:Linear.easeNone},.5)},render:function(){this.hamburgerMenu();var e=new TimelineMax({paused:!0,reversed:!0});TweenMax.set(this.$fade,{autoAlpha:0}),e.to(this.$fade,1,{autoAlpha:1,ease:Power4.easeInOut}),$(".navbar-toggle, .menu-list-items, .nav-back-button").click(function(){e.reversed()?e.restart():e.reverse()})}};t.exports=o},{}],4:[function(e,t,n){function o(){var e=$(".spinner-wrapper");TweenMax.to(e,.5,{y:"100%"})}t.exports=o},{}],5:[function(e,t,n){var o={fadeInText:function(e){TweenMax.staggerTo(e,1,{y:0,autoAlpha:1,ease:Back.easeInOut},.2)},resetfadeText:function(e,t,n,o){TweenMax.set(e,{alpha:t,y:n,delay:o})}};t.exports=o},{}]},{},[1]);