const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ball2


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  
  ball2=new ball1(400,230,20,20)
}

function draw() {
  background(255,255,255);  
  ball2.display()
  drawSprites();
}