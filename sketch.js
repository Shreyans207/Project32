const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon , polygonImage , slingshot;
var ground , platform1 , platform2;
var backgroundImage;
var score = 0;

function preload(){
    getBackgroundImg();
}
function setup(){
    var canvas = createCanvas(2000,810);

    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(1000,800,2000,20);
    platform1 = new Ground(695,700,400,20);
    platform2 = new Ground(1090,500,300,20);

    polygon = new Polygon(200,600,60);
    slingshot = new SlingShot(polygon.body,{x:200,y:600});

    //Platform1
    //3rd layer

    box1 = new Box(530,657,50,60); 
    box2 = new Box(585,657,50,60);
    box3 = new Box(640,657,50,60);
    box4 = new Box(695,657,50,60);
    box5 = new Box(750,657,50,60);
    box6 = new Box(805,657,50,60);
    box7 = new Box(860,657,50,60);
     //2nd layer

    box8 = new Box(555,595,50,60);
    box9 = new Box(610,595,50,60);
    box10 = new Box(665,595,50,60);
    box11 = new Box(720,595,50,60);
    box12 = new Box(775,595,50,60);
    box13 = new Box(830,595,50,60);
    //1st layer

    box14 = new Box(580,530,50,60);
    box15 = new Box(635,530,50,60);
    box16 = new Box(690,530,50,60);
    box17 = new Box(745,530,50,60);
    box18 = new Box(800,530,50,60);

    //Platform2
     //5th layer
     Box1 = new Box(980,457,50,60);
     Box2 = new Box(1035,457,50,60);
     Box3 = new Box(1090,457,50,60);
     Box4 = new Box(1145,457,50,60);
     Box5 = new Box(1200,457,50,60);
     //4th layer
     Box6 = new Box(1005,395,50,60);
     Box7 = new Box(1060,395,50,60);
     Box8 = new Box(1115,395,50,60);
     Box9 = new Box(1170,395,50,60);
     //3rd layer
    
     Box10 = new Box(1030,332,50,60);
     Box11 = new Box(1085,332,50,60);
     Box12 = new Box(1140,332,50,60);

     //2nd layer
     Box13 = new Box(1060,270,50,60);
     Box14 = new Box(1115,270,50,60);

     //1st layer
     Box15 = new Box(1085,210,50,60)

}

function draw(){
    if(backgroundImage)
    background(backgroundImage);
    Engine.update(engine);

    textSize(20);
    fill("black");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,50);

    textSize (30);
    fill("black");
    text("SCORE : "+ score ,1000 , 50);

    ground.display();
    platform1.display();
    platform2.display();

    polygon.display();
    slingshot.display();

    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box13.display();
    box13.score();

    box14.display();
    box14.score();
    box15.display();
    box15.score();
    box16.display();
    box16.score();
    box17.display();
    box17.score();
    box18.display();
    box18.score();

    Box1.display();
    Box1.score();
    Box2.display();
    Box2.score();
    Box3.display();
    Box3.score();
    Box4.display();
    Box4.score();
    Box5.display();
    Box5.score();

    Box6.display();
    Box6.score();
    Box7.display();
    Box7.score();
    Box8.display();
    Box8.score();
    Box9.display();
    Box9.score();

    Box10.display();
    Box10.score();
    Box11.display();
    Box11.score();
    Box12.display();
    Box12.score();

    Box13.display();
    Box13.score();
    Box14.display();
    Box14.score();

    Box15.display();
    Box15.score();
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
 }
 
 function mouseReleased(){
     slingshot.fly();
 }
function keyPressed(){
    if(keyCode === 32){
    slingshot.attach(polygon.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour>=06 && hour<=19){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }
    backgroundImage = loadImage(bg);
}
