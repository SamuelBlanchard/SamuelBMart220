var score = 0;

var MuffinsFood = [];
var c = 0;
var m = 0;

var muff1;
var muff2;

var counter = 0;
var muffinX = 200;
var muffinY = 200;

var idlePaths = [];
var myAnimation;
var animations = [];

var runPaths = [];
var runAnimation = [];

var myRunAnimation;

var isColliding = false;
var isColliding2 = false;

var backgroundSound;
var eatingGoodFood;
var eatingBadFood;

function preload() {


  idlePaths = loadStrings("./assets/idle.txt");
  runPaths = loadStrings("./assets/run.txt");
  backgroundSound = loadSound('./sounds/aroundWorld.mp3');
  eatingGoodFood = loadSound('./sounds/eatingGoodFood.mp3');
  eatingBadFood = loadSound('./sounds/eatingBadFood.mp3');
}




function setup() {
  createCanvas(1250, 1000);
  backgroundSound.loop();
  myAnimation = new knight(idlePaths, 100, 250, 100, 150);
  myRunAnimation = new knight(runPaths, 100, 250, 100, 150);
  //muff1 = new muffin(random(10, width), random(100, length), 150, 150);
  muff1 = new muffin(400, 340, 100, 200);
 // muff2 = new muffin(random(10, width), random(500, length), 150, 150);
    muff2 = new muffin(400, 100, 150, 150);
}

function draw() {
  background(178, 190, 181);
//muff1Move();
//muff2Move();
 // backgroundSound.loop();

  // MuffinsFood[c].foodSpawning();
  // var r1 = new muffin (100, 210, 30, 20);
  // var r2 = new muffin (100, 100, 20, 30);
   //'r1.foodSpawning();
  // r2.foodSpawning();

  textSize(32);
  text(score, 600, 50);
  text(isColliding, 700, 100);
  muff1.foodSpawning();
  muff2.foodSpawning();
  text(isColliding2, 500, 100);


if(muff1 && isColliding == true){
  score = score + 10;
  muff1 = new muffin(random(10, width), random(100, length), 100, 200);
  eatingGoodFood.play();
}

if(muff2 && isColliding2 == true){
  score = score - 1;
  muff2 = new muffin(random(10, width), random(100, length), 100, 200);
eatingBadFood.play();
}

  if (keyIsPressed) {
    if (key == 'd') {
      myRunAnimation.setCurrentFrameCount(frameCount);
      myRunAnimation.drawAnimation();
      isColliding = myRunAnimation.isRectanglesColliding(muff1);
      isColliding2 = myRunAnimation.isRectanglesColliding(muff2);
      myRunAnimation.updatePosition('forward');
      myAnimation.updatePosition('forward');
    }
    else if (key == 's') {
      myRunAnimation.setCurrentFrameCount(frameCount);
      myRunAnimation.drawAnimation();
      isColliding = myRunAnimation.isRectanglesColliding(muff1);
      isColliding2 = myRunAnimation.isRectanglesColliding(muff2);
      myRunAnimation.updatePosition('down');
      myAnimation.updatePosition('down');
    }
    else if (key == 'w') {
      myRunAnimation.setCurrentFrameCount(frameCount);
      myRunAnimation.drawAnimation();
      isColliding = myRunAnimation.isRectanglesColliding(muff1);
      isColliding2 = myRunAnimation.isRectanglesColliding(muff2);
      myRunAnimation.updatePosition('up');
      myAnimation.updatePosition('up');
    }
    else if (key == 'a') {
      myRunAnimation.setCurrentFrameCount(frameCount);
      myRunAnimation.drawAnimation();
      isColliding = myRunAnimation.isRectanglesColliding(muff1);
      isColliding2 = myRunAnimation.isRectanglesColliding(muff2);
      myRunAnimation.updatePosition('reverse');
      myAnimation.updatePosition('reverse');
    }
    else {
      myAnimation.updatePosition('idle');
      myAnimation.setCurrentFrameCount(frameCount);
      myAnimation.drawAnimation();
    }
  }
  else {
    myAnimation.setCurrentFrameCount(frameCount);
    myAnimation.drawAnimation();
  }


//text(isRectanglesColliding(muff1, muff2), 100, 100);
}

/*function isRectanglesColliding(rec1, rec2){
  var topEdge1 = rec1.getY() + rec1.getH();
  var rightEdge1 = rec1.getX() + rec1.getW(); 
  var leftEdge1 = rec1.getX();
  var bottomEdge1 = rec1.getY();
  var topEdge2 = rec2.getY() + rec2.getH();
  var rightEdge2 = rec2.getX() + rec2.getW(); 
  var leftEdge2 = rec2.getX();
  var bottomEdge2 = rec2.getY();   
  
  if( leftEdge1 < rightEdge2 && rightEdge1 > leftEdge2 && bottomEdge1 < topEdge2 && topEdge1 > bottomEdge2){
      return true; 
 }
 return false;
}
*/










