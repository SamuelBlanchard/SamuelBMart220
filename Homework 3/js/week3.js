var timerValue = 10;
var startButton;

var x = 100;
var y = 100;
var mX = 200;
var mY = 200;

var starsetband;
var starX = 20;
var starY = 40;

var dbdcover;
var dbdX = 250;
var dbdY = 250;

var cosmic;
var cosmicX = 0;
var cosmicY = 0;

let myFont;
function preload() {
  starsetband = loadImage('images/starsetband.png');
  dbdcover = loadImage('images/dbdcover.png');
  cosmic = loadImage('images/cosmic.png');
  myFont = loadFont('fonts/LemonJellyPersonalUse-dEqR.ttf');
}




function setup() {

  setInterval(timeIt, 1000);

  createCanvas(1000, 500);
  strokeWeight(1);
  //variables
  var diameter = 15;
  var circleX = 100;
  var circleY = 100;

  textAlign(CENTER);

  //color of circles
  fill(255, 192, 203);

  //random appearing shapes
  for (var i = 0; i < 5; i++) {
    circle(circleX, circleY, diameter);
    circleX += random(200);
    circleY += random(200);
  }

}

function draw() {
  background(0);
  image(starsetband, starX, starY);
  image(dbdcover, dbdX, dbdY);
  image(cosmic, cosmicX, cosmicY);
  cosmicX++;
  //muffin
  fill(150, 75, 0);
  ellipse(250, 225, 125, 80);
  fill(199, 116, 45);
  quad(200, 250, 300, 250, 290, 300, 210, 300);
  fill(101, 67, 33)
  circle(220, 220, 7)
  circle(250, 240, 7)
  circle(270, 230, 7)
  circle(260, 210, 7)
  circle(240, 200, 7)
  fill(101, 67, 33)
  line(210, 250, 220, 300)
  line(222, 250, 230, 300)
  line(235, 250, 240, 300)
  line(250, 250, 250, 300)
  line(265, 250, 260, 300)
  line(278, 250, 270, 300)
  line(290, 250, 280, 300)
  //names
  fill(0, 255, 0);
  textSize(20);
  textFont(myFont);
  text('Samuel.B', 950, 490);
  text('Chocolate Muffin', 100, 20)

  square(x, y, 25);
  //eventKeyboardMouseHandling
  if (keyIsPressed) {
    if (key == 'a') {
      x -= 5;
    }
    else if (key == 'd') {
      x += 5
    }
    else if (key == 'w') {
      y -= 5
    }
    else if (key == 's') {
      y += 5
    }
  }
  square(mX, mY, 25);

  textFont('Georgia');
  if (timerValue >= 10) {
    text("0:" + timerValue, width / 2, height / 2);
  }
  if (timerValue < 10) {
    text('0:0' + timerValue, width / 2, height / 2);
  }
  if (timerValue == 0) {
    text('Time is Up!', width / 2, height / 2 + 15);
  }


}

function mouseClicked() {
  mX = mouseX;
  mY = mouseY;
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}