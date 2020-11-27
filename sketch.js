var a,b;
var c,d;


function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  a.shapeColor = 'red';
  b = createSprite(400, 200, 50, 50);
  b.shapeColor = 'green';
  c = createSprite(200, 200, 50, 50);
  d = createSprite(300, 200, 50, 50);
}

function draw() {
 background('black');

 a.x = World.mouseX;
 a.y = World.mouseY;

 console.log(a.x-b.x);

 if(isTouching(a,b)){
 b.shapeColor = 'yellow';
 }
 else{
   b.shapeColor = 'peacock blue'
  }


 bounceOff(c,d);

d.velocityX = 1
  
  drawSprites();
}
