
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree,mango1,mango2,mango3,mango4,mango5;
var groundObj;
var stoneObj,boy;
var rope,log;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(600,499,400,400);
	groundObj=new Ground(400,700,800,10);
	stoneObj=new Stone(200,500,30,30);
boy=new Boy(200,650,60,80);
	
mango1=new Mango(550,430,30);
mango2=new Mango(670,400,30);
mango3=new Mango(590,450,30);
mango4=new Mango(650,430,30);
mango5=new Mango(600,400,30);

//log=new Ground(230,180,80,PI/2);
rope=new Rope(stoneObj.body,{x:200,y:640});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(211,211,211);

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
}
function detectCollision(){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);

  }
}
function keypressed(){
if(keyCode==32){
  Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
  launcherObject.attach(stone.body);
}

}
