const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var pendulum1;
var sling1

var pendulum2;
var sling2

var pendulum3;
var sling3

var pendulum4;
var sling4

var pendulum5;
var sling5


function setup(){
    var canvas = createCanvas(windowWidth/2,windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;
    
    pendulum1= new Pendulum(200,700,20,20)
sling1= new Sling(pendulum1.body,{x:200, y:400})

pendulum2= new Pendulum(250,700,20,20)
sling2= new Sling(pendulum2.body,{x:250, y:400})

pendulum3= new Pendulum(300,700,20,20)
sling3= new Sling(pendulum3.body,{x:300, y:400})

pendulum4= new Pendulum(350,700,20,20)
sling4= new Sling(pendulum4.body,{x:350, y:400})

pendulum5= new Pendulum(400,700,20,20)
sling5= new Sling(pendulum5.body,{x:400, y:400})



//let canvasmouse= Mouse.create(canvas.elt)
//canvasmouse.pixelRatio=pixeldensity()

//let options={

//mouse: canvasmouse

//}
//mConstraint= MouseConstraint.create(engine,options)
//World.add(world,mConstraint)


  // slingshot = new SlingShot(bird.body,{x:200, y:100});
}

function draw(){
    background("blue")
   
    pendulum1.display();
    sling1.display();

    pendulum2.display();
    sling2.display();
    
    pendulum3.display();
    sling3.display();
    
    pendulum4.display();
    sling4.display();
    
    pendulum5.display();
    sling5.display();
    
    
Engine.update(engine);

   
}

function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body, {x: mouseX , y: mouseY});
}


