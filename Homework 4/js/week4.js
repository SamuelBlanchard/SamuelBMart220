var x = 100;
var y = 100;
var mX = 200;
var mY = 200;

var cuteKnight;
var idle = [];
var i = 0;
var animeX = 0;
var run = [];

var knightIdle;
var knightMovement;

var knightObject;

var randomMuffin;

var muffinX = 200;
var muffinY = 200;

function preload() {
  cuteKnight = loadImage('assets/Idle (1).png');
  idle[0] = cuteKnight;
  cuteKnight = loadImage('assets/Idle (2).png');
  idle[1] = cuteKnight;
  cuteKnight = loadImage('assets/Idle (3).png');
  idle[2] = cuteKnight;
  cuteKnight = loadImage('assets/Idle (4).png');
  idle[3] = cuteKnight;
  cuteKnight = loadImage('assets/Idle (5).png');
  idle[4] = cuteKnight;
  cuteKnight = loadImage('assets/Idle (6).png');
  idle[5] = cuteKnight;
  cuteKnight = loadImage('assets/Idle (7).png');
  idle[6] = cuteKnight;
  cuteKnight = loadImage('assets/Idle (8).png');
  idle[7] = cuteKnight;
  cuteKnight = loadImage('assets/Idle (9).png');
  idle[8] = cuteKnight;
  cuteKnight = loadImage('assets/Idle (10).png');
  idle[9] = cuteKnight;
  cuteKnight = loadImage('assets/run (1).png');
  run[0] = cuteKnight;
  cuteKnight = loadImage('assets/run (2).png');
  run[1] = cuteKnight;
  cuteKnight = loadImage('assets/run (3).png');
  run[2] = cuteKnight;
  cuteKnight = loadImage('assets/run (4).png');
  run[3] = cuteKnight;
  cuteKnight = loadImage('assets/run (5).png');
  run[4] = cuteKnight;
  cuteKnight = loadImage('assets/run (6).png');
  run[5] = cuteKnight;
  cuteKnight = loadImage('assets/run (7).png');
  run[6] = cuteKnight;
  cuteKnight = loadImage('assets/run (8).png');
  run[7] = cuteKnight;
  cuteKnight = loadImage('assets/run (9).png');
  run[8] = cuteKnight;
  cuteKnight = loadImage('assets/run (10).png');
  run[9] = cuteKnight;
}







function setup() {



  createCanvas(1250, 1000);
  strokeWeight(1);
  knightMovement = new knight();
  knightIdle = new knight();
  knightObject = new knight();
  knightObject.knightName();
  randomMuffin = new muffin(random(10,width),random (1000,length));


setInterval(incrementIdleIndex, 50);


}

function draw() {
  background(0);
  knightMovement.ifKeyIsPressed();
  knightIdle.ifCharacterIdle();

  //names
  fill(0, 255, 0);
  textSize(20);
  text('Samuel.B', 800, 490);
  text('Chocolate Muffin', 100, 20)

  knightObject.knightName();

  square(mX, mY, 25);


  randomMuffin.foodSpawning();




}

function incrementIdleIndex()
  {
    i++;
    if(i >= idle.length)
    {
      i = 0;
    }
  }


function mouseClicked() {
  mX = mouseX;
  mY = mouseY;
}

