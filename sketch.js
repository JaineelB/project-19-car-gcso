var car , wall ,speed ,weight;
function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 30, 30);
  car.shapeColor = "white";
  wall = createSprite(1500,200,60,height/2);
  speed = random(55,90);
  weight = random(400,1500);
  car.velocity.x = speed ;
  
  deformation = 0.5*weight*speed*speed/22500;  
  
}

function draw() {
  background("black");
 car.collide(wall)
   
  
  if (deformation<100)  {
    car.shapeColor = color(0,255,0);
  }
  if (deformation>100){
    car.shapeColor =color(230,230,0);
  }
  if(deformation>180){
    car.shapeColor =color(255,0,0);
  }
  drawSprites();
}