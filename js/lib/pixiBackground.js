const pixiBackground = () => {

  const viewWidth = 630;
  const viewHeight = 410;


  const renderer = PIXI.autoDetectRenderer(viewWidth, viewHeight);
  renderer.view.className = "rendererView";
  // var renderer = PIXI.autoDetectRenderer(800, 600);
  document.body.appendChild(renderer.view);

  const stage = new PIXI.Container();

  var count = 0;

  // build a rope!
  var ropeLength = 918 / 7;

  var points = [];

  for (var i = 0; i < 20; i++)
  {
      points.push(new PIXI.Point(i * ropeLength, 0));
  }

  var strip = new PIXI.mesh.Rope(PIXI.Texture.fromImage('img/underwaterocean2.jpg'), points);

  strip.x = -750;
  strip.y = -200;

  var backgroundContainer = new PIXI.Container();
  backgroundContainer.position.x = 400;
  backgroundContainer.position.y = 300;

  backgroundContainer.scale.set(0.70);
  stage.addChild(backgroundContainer);

 backgroundContainer.addChild(strip);

  // start animating
  requestAnimationFrame(animate);

  function animate () {

      count += 0.01;

      for (var i = 0; i < points.length; i++) {

          points[i].y = Math.sin((i * 0.5) + count) * 30;

          points[i].x = i * ropeLength + Math.cos((i * 0.3) + count) * 5;

      }

      // render the stage
      renderer.render(stage);

      requestAnimationFrame(animate);
  }

}

export default pixiBackground;
