// might want to wrap this in a document.ready function.

(function () {
  var salmonLogo = $('#salmon-fish');

  salmonTl = new TimelineMax({repeat:-1});
  salmonTl.to(salmonLogo, 5, {
    bezier:[{x:10, y:11}, {x:0, y:20}, {x:-10, y:10}, {x:0, y:0}],
    ease:Linear.easeNone
  });
})()
