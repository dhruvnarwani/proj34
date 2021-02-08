const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var ground, hero, fly;

function preload() {
//preload the images here
   gamingbg = loadImage("images/GamingBackground.png");
   monster1 = loadImage("images/Monster-01.png");
   monster2 = loadImage("images/Monster-02.png");
   superhero1 = loadImage("images/Superhero-01.png");
   superhero2 = loadImage("images/Superhero-02.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(100, 700, 5000, 50);
  hero = new Hero(300, 300, 10);
  fly = new Fly(hero.body, {x : 200, y : 300});

  block1 = new Block(300, 100, 50, 50);
  block2 = new Block(300, 100, 50, 50);
  block3 = new Block(300, 100, 50, 50);
  block4 = new Block(300, 100, 50, 50);
  block5 = new Block(300, 100, 50, 50);
  block6 = new Block(300, 100, 50, 50);
  block7 = new Block(300, 100, 50, 50);
  block8 = new Block(300, 100, 50, 50);
  block9 = new Block(300, 100, 50, 50);

}

function draw() {
  background(gamingbg);

  Engine.update(engine);

 ground.display();
 hero.display();
 fly.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x : mouseX, y : mouseY});
}
