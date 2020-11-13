var movingRect, fixedRect
function setup() {
  createCanvas(800,400);
  
 fixedRect = createSprite(400, 200, 50, 50);
 fixedRect.shapeColor = "green"
 movingRect = createSprite(400,0,30,50);
 //movingRect.velocityX = 10;
 movingRect.velocityY = 10;
}

function draw() {
  background(255,255,255);  

 if(istouching(movingRect,fixedRect)) {
   fixedRect.shapeColor = "yellow"
 }
  bounceoff(movingRect,fixedRect)


  drawSprites();
}


