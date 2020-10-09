var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var score = 0;
var particle;
var turn = 0;
var gameState = "play";
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 
function mousePressed() {
  if (gameState !== "end") {
    turn++;
    particle = new Particle(mouseX,30,10,10);
  }
}

function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var j = 0; j < plinkos.length; j++) {
     
     plinkos[j].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }


  

   text("SCORE : "+score, 30, 40);
   textSize(30)
   text("500", 15, 600);
   text("500", 95, 600);
   text("500", 175, 600);
   text("500", 255, 600);
   text("100", 335, 600);
   text("100", 415, 600);
   text("100", 495, 600);
   text("200", 575, 600);
   text("200", 655, 600);
   text("200", 735, 600);

   console.log(turn);

   if (particle != null) {
    particle.display();
    if (particle.body.position.y > 760) {
      if (particle.body.position.x < 320) {
        score = score + 500
        particle = null;

        if (turn >= 5) {
          gameState = "end";
        }

      }
    
      else if (particle.body.position.x > 320 && particle.body.position.x < 560) {
      score = score + 100;
      console.log("hello");
      particle = null;

      if (turn >= 5) {
        gameState = "end";
      }
      }

      else if (particle.body.position.x > 560 && particle.body.position.x < 800) {
        score = score + 200
        particle = null;

        if (turn >= 5) {
          gameState = "end";
        }
      }
    }
  }
}


