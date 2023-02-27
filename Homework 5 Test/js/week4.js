var i = 0;
var j = 0;

var randomMuffin;
var randomMuffins = [];
var c = 0;

var counter = 0;
var muffinX = 200;
var muffinY = 200;

var idlePaths = [];
var myAnimation;
var animations = [];

var runPaths = [];
var runAnimation = [];

var myRunAnimation;

function preload() {


  idlePaths = loadStrings("./assets/idle.txt");
  runPaths = loadStrings("./assets/run.txt");


}




function setup() {
  createCanvas(1250, 1000);

    myAnimation = new knight(idlePaths, 100, 250, 100, 150);
    myRunAnimation = new knight(runPaths, 100, 250, 100, 150);
    


  

for(var c = 0; c < 5; c++)
{
  randomMuffin = new muffin(random(10, width), random(1000, length));
  randomMuffins[c] = randomMuffin;
}
  
  //setInterval(incrementRunIndex, 50);



}

function draw() {
  background(0);

  if(keyIsPressed)
  {
     if(key == 'd')
     {
        myRunAnimation.setCurrentFrameCount(frameCount);
        myRunAnimation.drawAnimation();
        myRunAnimation.updatePosition('forward');
        myAnimation.updatePosition('forward');
      }
      else if(key == 'a')
      {
        myRunAnimation.setCurrentFrameCount(frameCount);
        myRunAnimation.drawAnimation();
        myRunAnimation.updatePosition('reverse');
        myAnimation.updatePosition('reverse');
      }
      else
      {
        myAnimation.updatePosition('idle');
        myAnimation.setCurrentFrameCount(frameCount);
        myAnimation.drawAnimation();
      }
  }
else
{
  myAnimation.setCurrentFrameCount(frameCount);
  myAnimation.drawAnimation();
}
  

  

  randomMuffins[c].foodSpawning();

}






/*function incrementIdleIndex()
  {
    i += 1;

    if(i >= idlePaths.length){
      i = 0;
    }
  }*/

 /* function incrementRunIndex()
  {
    j += 1;

    if(j >= runAnimation.length){
      j = 0;
    }
  } */