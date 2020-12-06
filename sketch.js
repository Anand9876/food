
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

	groundPosition=width/2;
	groundY=600;
	//Create the Bodies Here.
    ground1=new ground(groundPosition,groundY,800,10);
	paperobject1=new paperobject(100,groundY/2,30,30)
	boxleftside=new sides(400,530,20,100)
	boxrightside=new sides(500,530,20,100)
	boxbase=new sides(450,580,100,20)
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine)
  ground1.display();
  paperobject1.display();
  boxleftside.display();
  boxrightside.display();
  boxbase.display();
  drawSprites();
 
}




