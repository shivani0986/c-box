var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload()
{
    // load sound here
    music = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(850,600);
  //create blocks
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(730,580,200,30);
    block4.shapeColor = "green";
  //created ball
    ball = createSprite(425,100,40,40);
    ball.shapeColor = rgb(255,255,255);
}

function draw() 
{
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    //ball.y = World.mouseY
    //ball.x = World.mouseX 

    stroke("black");
    fill("white");
    textSize(30);
    text("Press Left, Right, Up, Down Arrow Key To Move The Ball",8,150);
    textSize(40);
    
      
  
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
      ball.shapeColor = "blue";
        music.play();
        stroke("blue");
        fill("blue");
        textSize(50);
        text("ENJOY",225,250);
        textSize(100);
        
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        stroke("orange");
        fill("orange");
        textSize(50);
        text("FUN",225,250);
        textSize(100);
        music.play();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3))    {
        ball.shapeColor = "yellow"
        stroke("yellow");
        fill("yellow");
        textSize(50);
        text("JOY",225,250);
        textSize(100);
        music.play();
    }

   if(block4.isTouching(ball) && ball.bounceOff(block4)) {
       ball.shapeColor = "green";
       stroke("green");
       fill("green");
       textSize(50);
       text("SMILE",225,250);
       textSize(100);
       music.play();
   }

   if (keyDown(UP_ARROW)) {
    ball.velocityX =0;
    ball.velocityY =-4;
}

    if (keyDown(DOWN_ARROW)) {
  ball.velocityX =0;
  ball.velocityY =4;
}

  if (keyDown(LEFT_ARROW)) {
  ball.velocityX =-4;
  ball.velocityY =0;
}

  if (keyDown(RIGHT_ARROW)) {
  ball.velocityX =4;
  ball.velocityY =0;
}

    drawSprites();
}
