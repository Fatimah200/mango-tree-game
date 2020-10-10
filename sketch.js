
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;

var tree,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var groundObj,launcherObject;
var stoneObj,boy,world;
var launchingForce=100;

function preload()
{
boy=loadImage("images/boy.jpg")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stoneObj=new stone(235,420,30);

mango1=new mango(1100,100,30);
mango2=new mango(1170,130,30);
mango3=new mango(1010,140,30);
mango4=new mango(1000,70,30);
mango5=new mango(1100,70,30);
mango6=new mango(1000,230,30);
mango7=new mango(900,230,40);
mango8=new mango(1140,150,40);
mango9=new mango(1100,230,40);
mango10=new mango(1200,200,40);
mango11=new mango(1120,50,40);
mango12=new mango(900,160,40);

tree=new Tree(1050,580);
groundObj=new Ground(width/2,600,width,20);
launcherObject=new launcher(stoneObj.body,{x:235,y:420});

var render=Render.create({
  element:document.body,
  engine:engine,
  options:{
    width:1300,
    heught:600,
    wireFrames:false
  }
});


	Engine.run(engine);
  Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(211,211,211);
  frameRate(2);
  Engine.update(engine);
  textSize(25);
  text("Press Space to get a secound Chance to play!!",50,50);
  image(boy,200,340,200,300);


  tree.display();
  groundObj.display();
  stoneObj.display();
  boy.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  //log.display();
  rope.display();

  mouseDragged();
  mouseReleased();
  detectCollision();
  
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
 
  drawSprites();
 
}
//since we have to allow our bird to be dragged once our mouse does it we initialized this
function mouseDragged(){
  //gave bird body mousey and x properties when dragged
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}
//the bird should let go once we let go of it
//we add fly in the sling shot class
function mouseReleased(){
  slingShot.fly();
  distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keypressed(){
if(keyCode==32){
  Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
  launcherObject.attach(stone.body);
}
}

function detectollision(lstone,lmango){
  /*var collision=Matter.Sat.collides(lstone,lmango);
  if(collision.collided){
    console.log("collided");
    Matter.Body.setStatic(lmango,false);
  }*/

  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
console.log(distance);
console.log(lmango.r+lstone.r);
if(distance<=lmango.r+lstone.r){
  console.log(distance);
  Matter.body.setStatic(lmango.body,false);
}


}
