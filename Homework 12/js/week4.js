var angle = 0;
var myFont;

let img;
let greencamo;
let purpleTexture;
let bluetexture;
let squareTexture;

let head;
let shapeArray = [];
var boxTranslationX = -100;
var boxTranslationY = -100;

var modelRotation = 0;
var modelRotationSpeed = 0.2;
var modelRotation2 = 0;
var modelRotationSpeed2 = 1;
var modelRotation3 = 0;
var modelRotationSpeed3 = 0.7;
function preload() {
  //load the animation images
  img = loadImage("./assets/camogrey.png");
  greencamo = loadImage("./assets/camogreen.png");
  purpleTexture = loadImage("./assets/purpletexture.png");
  bluetexture = loadImage("./assets/blueTexture.png");
  squareTexture = loadImage("./assets/squareTexture.png");
  head = loadModel('assets/Project Name.obj');
  myFont = loadFont("assets/openSans.ttf");
  //textureMode(NORMAL);
}




function setup() {
  createCanvas(1750, 1000, WEBGL);
  texture(img,greencamo,purpleTexture,bluetexture,squareTexture);
  shapeArray.push(new shapeclass("box", 150, 150, 150, boxTranslationX, boxTranslationY, 0.9, 0.3, 0, greencamo));
  shapeArray.push(new shapeclass("cylinder", 80, 90, 0, -500, 120, 0.2, 0.2, 0.2, bluetexture));
  shapeArray.push(new shapeclass("box", 100, 150, 170, -700, -120, 0.40, 0.10, 0.10, purpleTexture));
  shapeArray.push(new shapeclass("cylinder", 20, 200, 50, 500, 120, 1.0, 0.0, 0.0, img));
  shapeArray.push(new shapeclass("cylinder", 200, 20, 50, 100, 120, 0.0, 1.0, 0.0, squareTexture));
}

function draw() {
  background(200);
  normalMaterial();
  image(greencamo);
  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].draw(frameCount);
  }

  /*textFont(myFont);
  textSize(36);
  translate(-width/2,-height/2,0);
  textSize(32);
  fill(200);
  textSize(32);
  fill(200);
  text('by Sam Blanchard', 1100, 100);
  text('some really cool shapes', 600, 200);
*/

/*
  push();
  translate(700, 700);
  rotateX(angle);
  fill(255, 0, 0);
  texture(img);
  box(50, 100, 150);
  angle += 0.08;
  pop();

  push();
  translate(500, 500);
  rotateY(angle);
  fill(0, 255, 0);
  texture(greencamo);
  cone(50, 100);
  angle += 0.7;
  pop();
*/
  push();
  modelRotation3 += modelRotationSpeed3;
  rotate(modelRotation3);
  translate(-400, -400);
  fill(0, 0, 255);
  texture(bluetexture);
  torus(75, 75);
  angle += 0.9;
  pop();

  push();
  modelRotation2 += modelRotationSpeed2;
  rotate(modelRotation2);
  fill(0, 255, 255);
  translate(-200, -600);
  texture(purpleTexture);
  ellipsoid(40, 50, 40);
  angle += 0.09;
  pop();

  push();
  modelRotation += modelRotationSpeed;
  rotate(modelRotation);
  fill(255, 255, 0);
  translate(-300, -500);
  texture(squareTexture);
  model(head)
  angle += 0.2;
  pop();

  push();
  translate(-200, -200);
  rotateY(angle);
  fill(255, 255, 0);
  texture(greencamo);
  model(head);
  angle += 0.2;
  pop();

  if (mouseIsPressed) {
    boxTranslationX = 0;
    boxTranslationY = 0;
    boxTranslationX = floor(random(600));
    boxTranslationY = floor(random(400));
  }
  console.log(mouseIsPressed);
}
