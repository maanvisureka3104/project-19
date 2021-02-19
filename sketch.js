var car , wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1000,400);
   car=createSprite(50,200,50,50);
   car.shapeColor="black";
   wall=createSprite(900,200,60,height/2);
   wall.shapeColor=(80,80,80); 
   speed=random(10,50);
   weight=random(400,900);
   deformation=0.5*weight*speed*speed/22500;
  
}

function draw() {
  background("white");
  car.velocityX=speed;
  if(car.x-wall.x<car.width/2+wall.width/2&&
    wall.x-car.x<car.width/2+wall.width/2 &&
   car.y-wall.y<car.height/2+wall.height/2&&
    wall.y-car.y<car.height/2+wall.height/2
    ){
   if(deformation<120){
    car.shapeColor="green";
   } 
   if(120<deformation<160){
    car.shapeColor="yellow";
   }
   if(deformation>160){
    car.shapeColor="red";
   }
  }
  drawSprites();
}