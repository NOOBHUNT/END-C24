
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)
	hammer = new Hammer(510,260,300, PI/2);
	stone  = new Stone(700,320,70,70);
	rubber = new Rubber(200,150,30);


	//Create the Bodies Here.

	
}


function draw() {

Engine.update(engine)
 
	
	rectMode(CENTER);

  background(0);
  

  ground.display();
  hammer.display();
  stone.display();
rubber.display();

  drawSprites();
 
}



