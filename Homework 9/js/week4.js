var score = 0;
var health = 100;

var angle = 0;

var MuffinsFood = [];
var c = 0;
var m = 0;
var i = 0;
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

var spikey;

var rectangle4;
var isColliding1 = false;
//var isColliding2 = false;

var brickImage;
var barricade;
var rock;
var medkit;
var rectangleArray = [];

function preload() {
  //load the animation images
  idlePaths = loadStrings("./assets/idle.txt");
  runPaths = loadStrings("./assets/run.txt");
}




function setup() {
  createCanvas(1750, 1000, WEBGL);
  //load classes
  myAnimation = new knight(0, 200, 150, 150, 'static');
  myAnimation.loadAnimation('idle', idlePaths, 'static');
  myAnimation.loadAnimation('run', runPaths, 'static');
  rectangle4 = new Sprite(500, 300, 150, 100, 'kinematic');
  spikey = new Sprite(300, 600, [
    [100, 40],
    [-100, 40],
    [0, -80]
  ], 'kinematic');

  //rectangle4 = createSprite(500, 100, 100, 150, 'static');
  //imovable objects
  brickImage = createSprite(random(1300), random(1000), 250, 250, 'static');
  brickImage.scale = .5;
  brickImage.addImage(loadImage('./assets/brick.png'));
  rock = createSprite(random(1300), random(1000), 250, 250, 'static');
  rock.scale = .5;
  rock.addImage(loadImage('./assets/rock.png'));
  barricade = createSprite(random(1300), random(1000), 250, 250, 'static');
  barricade.scale = .5;
  barricade.addImage(loadImage('./assets/stop.png'));
  //brickImage.diameter = 150;
}

function draw() {
  background(0);
  translate(-width/2,-height/2,0);

  //translate(-width/2,-height/2,0);
  //rectangle4.draw();
  clear();
  //keybindings
  if (kb.pressing('d')) {
    myAnimation.updatePosition('forward');
    myAnimation.drawAnimation('run');

    if (myAnimation.isColliding(brickImage, rock, barricade, rectangle4, spikey)) {
      myAnimation.drawAnimation('idle');
      myAnimation.updatePosition('idle');

    }
  }

  else if (kb.pressing('a')) {
    myAnimation.updatePosition('reverse');
    myAnimation.drawAnimation('run');
  }
  else if (kb.pressing('s')) {
    myAnimation.updatePosition('downward');
    myAnimation.drawAnimation('run');

  }
  else if (kb.pressing('w')) {
    myAnimation.updatePosition('upward');
    myAnimation.drawAnimation('run');

  }
  else {
    myAnimation.drawAnimation('idle');
  }
  //show hitboxes
  brickImage.debug = mouseIsPressed;
  rock.debug = mouseIsPressed;
  barricade.debug = mouseIsPressed;
  //make the good object dissapear and reappear
  if (myAnimation.isColliding(rectangle4)) {
    score = score + 5;
    rectangle4.update = () => {
      rectangle4.moveTowards(1200, 800);
    };

  }
  if (score > 10) {
    rectangle4.update = () => {
      rectangle4.moveTowards(200, 800);
    };
  }
  //health drops when hitting the spikes
  if (myAnimation.isColliding(spikey)) {
    health = health - 50;
    spikey.update = () => {
      spikey.moveTowards(1000, 600);
    };
  }
  textSize(32);
  fill(0);
  text(score, 600, 150);
  text('Health', 1100, 100);
  text(health, 1200, 100);

  if (health == 50) {
    fill(255, 0, 0);
    text('Health', 1100, 100);
  }
  if (score >= 10) {
    alert("You Won!");
    clear();
    //clear(setup);
  }
  if (health <= 0) {
    alert("You Died...So sad");
    clear();
  }

  push();
  translate(700, 700);
  rotateX(angle);
  fill(255,0 ,0);
  box(50, 100, 150);
  angle += 0.08;
  pop();

  push();
  translate(500, 500);
  rotateY(angle);
  fill(0, 255 ,0);
  cone(50, 100);
  angle += 0.7;
  pop();

  push();
  translate(1100, 600);
  rotateY(angle);
  rotateX(angle);
  fill(0, 0 , 255);
  torus(75, 150);
  angle += 0.9;
  pop();

  push();
  translate(1000, 300);
  rotateX(angle);
  fill(0, 255 , 255);
  ellipsoid(40, 50, 40);
  angle += 0.07;
  pop();

  push();
  translate(300, 500);
  rotateY(angle);
  rotateX(angle);
  fill(255, 255 , 0);
  cylinder(40, 50);
  angle += 0.2;
  pop();

}
