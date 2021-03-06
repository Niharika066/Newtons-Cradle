
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1,rope2,rope3,rop4,rope5;
 
function preload()
{
	
}

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);
  
	engine = Engine.create();
  world = engine.world;
  
 roof=new Roof(width/2,height/4,width/7,20);

 bobDiameter=40;

  startBobPositionX=width/2; 
  startBobPositionY=height/4+500; 
  bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
   bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
   bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter); 
   bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
    bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
    
var render=Render.create=({
  element:document.body,
  engine:engine,
  options:{
width:1200,
height:700,
wideframes:false
  }
});

rope1=new rope(bobObject1.body,roof.body,-bobDiameter*2, 0)
 rope2=new rope(bobObject2.body,roof.body,-bobDiameter*1, 0) 
 rope3=new rope(bobObject3.body,roof.body,0, 0) 
 rope4=new rope(bobObject4.body,roof.body,bobDiameter*1, 0)
  rope5=new rope(bobObject5.body,roof.body,bobDiameter*2, 0)

  Engine.run(engine);
  //Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:50,y:0});
   
  }
}

function drawline(consraint){
  bobBodyPosition=constraint.bodyA.position;
  roofBodyPosition=consraint.bodyB.position;

  roofBodyOffset=consraint.pointB;

  roofBodyX=roofBodyPosition.x+roofBodyOffset.x;
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y;
  line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY)
}