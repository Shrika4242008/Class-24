const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,380,1200,20)
    box1 = new Box(800,350,50,50)
    box2 = new Box(1000,350,50,50)
    box3 = new Box(800,270,50,50)
    box4 = new Box(1000,270,50,50)
    box5 = new Box(900,220,50,50)
    pig1 = new Pig(900,350)
    pig2 = new Pig(900,290)
    log1 = new Log(900,330,300,PI/2)
    log2 = new Log(900,250,300,PI/2)
    log3 = new Log(902,215,100,PI/7)
    log4 = new Log(970,215,100,-PI/7)
    bird1 = new Bird(50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}