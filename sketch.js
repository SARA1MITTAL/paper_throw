
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

 
function setup() {

	var canvas = createCanvas (1200,400);
    engine = Engine.create();
	world = engine.world;
	
	dustbin1= new Dustbin (1000,370,150,10);
	dustbin2= new Dustbin (920,330,10,70);
	dustbin3= new Dustbin (1080,330,10,70);
	
	
	ground = new Ground(600,height,1200,20);
	paper = new Paper (200,200,20,20);
   
}
function draw() {
  


	background("cyan");
	Engine.update (engine);

	

	paper.display();
	dustbin1.display();
	dustbin2.display();
    dustbin3.display();
	ground.display();

  
 
}




