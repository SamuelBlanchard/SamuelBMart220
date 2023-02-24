var x = 100;
var y = 100;
var mX = 200;
var mY = 200;

var knightObjects = [];
var cuteKnight;
var idleAnime = [];
var i = 0;
var animeX = 0;
var run = [];
var result;
var getIdleImage;
var knightIdle;
var knightMovement;

var knightObject;

var randomMuffin;

var muffinX = 200;
var muffinY = 200;

function preload() {
result = loadStrings('./assets/idle.txt');
}





function setup() {



  createCanvas(1250, 1000);
  for(var i = 0; i< result.length; i++)
  {
    knightObjects.push(new knight ('./assets/idle.txt', result[i], 100, 0));
    idleAnime[i] = knightObjects[i].getImage();
  }
  strokeWeight(1);
  knightMovement = new knight();

  randomMuffin = new muffin(random(10,width),random (1000,length));


setInterval(incrementIdleIndex, 50);


}

function draw() {
  background(0);
  image(idleAnime[i], knightObjects[i].getX(), knightObjects[i].getY());
  knightMovement.ifKeyIsPressed();
  

  //names
  fill(0, 255, 0);
  textSize(20);
  text('Samuel.B', 800, 490);
  text('Chocolate Muffin', 100, 20)

 

  square(mX, mY, 25);


  randomMuffin.foodSpawning();




}

function incrementIdleIndex()
  {
    i += 1;

    if(i >= knightObjects.length){
      i = 0;
    }
  }


function mouseClicked() {
  mX = mouseX;
  mY = mouseY;
}

