const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var block1,block2,block3,block4,block5;
var polygonimg;
var stand1;
var polygon;


function preload() {
  polygon_img = loadImage("polygon.png")
}

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
    
  ground1 = new ground(350,300,200,20);

  block1 = new box(300,235,30,40);
  block2 = new box(360,235,30,40);
  block3 = new box(390,235,30,40);
  block4 = new box(420,235,30,40);
  block5 = new box(450,235,30,40);
  block6 = new box(390,155,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingshot = new launch(this.ball,{x:100,y:200});
  stand1 = new ground(100,250,200,15);

  Engine.run(engine);

}
function draw(){
  background("pink");
  Engine.update(engine);
  //strokeWeight(4);
  ground1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block6.display();
      
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingshot.display();

}
function keyPressed(){
  if (keyCode === 32){
    slingshot.attach(this.ball);
  }
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly();
}





