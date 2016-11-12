var pixiBackground = function () {

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

  var strip = new PIXI.mesh.Rope(PIXI.Texture.fromImage('../img/pixi/underwaterocean.png'), points);

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

}

module.exports = pixiBackground
