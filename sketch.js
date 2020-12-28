var fixed;
var moving;

function setup() {
  createCanvas(windowWidth,windowHeight + 120);
  moving = createSprite(200, 550, 50, 50);
  fixed = createSprite(200,100,50,50)

  moving1 = createSprite(550, 200, 50, 50);
  fixed1 = createSprite(100,200,50,50)


  moving.shapeColor = "green";
  fixed.shapeColor = "green";
  moving.debug = true;
  fixed.debug = true;
  moving.velocityY = -10;
  fixed.velocityY = 10;

  moving1.shapeColor = "green";
  fixed1.shapeColor = "green";
  moving1.debug = true;
  fixed1.debug = true;
  moving1.velocityX = -10;
  fixed1.velocityX = 10;
}

function draw() {
  background(0); 
  bounceOff(moving1, fixed1);
  bounceOff(moving, fixed);
  drawSprites();
}


