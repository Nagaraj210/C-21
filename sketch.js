var fixedRect, movingRect;
var game1,game2,game3,game4;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  game1 = createSprite(100,100,50,50);
  game2 = createSprite(200,100,50,50);
  game3  = createSprite(300,100,50,50);
  game4 = createSprite(400,100,50,50);
  
  fixedRect.shapeColor = "green";
  game1.shapeColor = "green";
  game2.shapeColor = "green";
  game3.shapeColor = "green";
  game4.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}





function draw() {
  background(0,0,0);  

  

  /*if(touchObject(movingRect,game1))
  {
   movingRect.shapeColor = "blue";
   game1.shapeColor = "blue";
  }
 
  else {
   movingRect.shapeColor = "green";
  game1.shapeColor = "green";
  }*/

  drawSprites();
}

