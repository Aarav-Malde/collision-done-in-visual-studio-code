var fixRect, moveRect;

function setup() {
  createCanvas(800,400);
  fixRect=createSprite(400, 200, 100, 50);
  moveRect=createSprite(200,200,50,100);
  fixRect.shapeColor="red";
  moveRect.shapeColor="blue";

  fixRect.debug=true;
  moveRect.debug=true;
}

function draw() {
  background("yellow");  
       
  moveRect.x=World.mouseX;
  moveRect.y=World.mouseY;

  if(moveRect.x-fixRect.x<moveRect.width/2+fixRect.width/2 &&
     fixRect.x-moveRect.x<moveRect.width/2+fixRect.width/2 &&
     fixRect.y-moveRect.y<moveRect.height/2+fixRect.height/2 &&
     moveRect.y-fixRect.y<moveRect.height/2+fixRect.height/2){
    moveRect.shapeColor="green";
    fixRect.shapeColor="black";
  }
  else{
    moveRect.shapeColor="blue";
    fixRect.shapeColor="red"
  }





  drawSprites();
}


































































































