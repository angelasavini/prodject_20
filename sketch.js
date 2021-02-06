const Engine= matter.Engine;
const World= matter.World;
const Bodies= bodies.World;

var engine, world;

var fairy,fairyImg, star,starImg;
var starnight;

function preload()
{
   //preload the images here
  fairyImg.addAnimation("fairy.png", "fairy1.png", "fairy2.png") ;
  starnight.addImage("starnight.png")
  starImg. addImage("star.png")

  
}

function setup() {
  createCanvas(800, 750);
  engine = Engine.create();
  world = engine.world;

  fairy = createSprite (100,300,400,200)
  fairy. addAnimation(fairyImg)

  star = createSprite (100,100,70,70)
  star.addImage(starImg)
  star.x = Math.random(12,800);
  star.y = 10;
}


function draw() {
  background(starnight);
  Engine.update(engine);

  if (keyDown(RIGHT_ARROW)){
fairy.x=fairy.x+3
  }
  if (keyDown(LEFT_ARROW)){
    fairy.x=fairy.x-3
      }
  
   if (keyDow(DOWN_ARROW)){
    star.isStatic = false ;
    
       }
}

