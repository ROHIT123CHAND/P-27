const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
const Render = Matter.Render;

var rope1
function preload()
{
	
}

function setup() {
  createCanvas(800, 700);
  


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
roof = Bodies.rectangle(450,200,200,20,{isStatic:true})
  
p1=new Pendulum(300,300,40)
p2=new Pendulum(330,300,40)
p3=new Pendulum(390,300,40)
p4=new Pendulum(420,300,40)
p5=new Pendulum(360,300,40)
World.add(world,roof)

rope1=new Rope(p1.body,roof,-80,0)
rope2=new Rope(p2.body,roof,-40,0)
rope3=new Rope(p3.body,roof,40,0)
rope4=new Rope(p4.body,roof,80,0)
rope5=new Rope(p5.body,roof,0,0)

console.log(roof.position)
var render = Render.create({ 
  element: document.body,
   engine: engine, 
   options: { width: 1300, height: 600, wireframes: true } });
Render.run(render);

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  rect(roof.position.x,roof.position.y,200,10)
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed() { 
  if (keyCode === UP_ARROW) 
  { Matter.Body.applyForce(p1.body,p1.body.position,
    {x:-50,y:-45}); } }



