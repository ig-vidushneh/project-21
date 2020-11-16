var bullet, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
thickness=random(22,83);

 bullet=createSprite(50, 200, 50, 50);

 bullet.velocityX=speed;

 bullet.shapeColor=color(255);


  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor="blue"
}

function draw() {
  background(0);
  
  if (wall.x - bullet.x <  (bullet.width+wall.width)/2) 
  {
   bullet.velocityX=0;
    var deformation=0.5 * weight * speed* speed/thickness* thickness* thickness;
    if (deformation>10) 
    {
     wall.shapeColor="red"
    }
console.log(deformation)
    

    if (deformation<10) 
    {
     wall.shapeColor="green"
    }
  }
  drawSprites();
}