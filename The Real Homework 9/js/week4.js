var score = 0;
var health = 100;

var Hitpoints = 500;
//var grassHitpoints = 100;
//var rockHitpoints = 100;
//var barricadeHitpoints = 100;
//var stonehitpoints = 100;


var idlePaths = [];
var myAnimation;
var runPaths = [];
var attackPaths = [];

var spikey;
var rectangle4;
var brickImage;
var barricade;
var rock;
var stone;
var grass;

const particles = [];

function preload() {
  //load the animation images
  idlePaths = loadStrings("./assets/idle.txt");
  runPaths = loadStrings("./assets/run.txt");
  attackPaths = loadStrings("./assets/attack.txt");

}




function setup() {
  createCanvas(1750, 1000);
  //load classes
  myAnimation = new knight(0, 200, 150, 150, 'static');
  myAnimation.loadAnimation('idle', idlePaths, 'static');
  myAnimation.loadAnimation('run', runPaths, 'static');
  myAnimation.loadAnimation('attack', attackPaths, 'static');

 /* rectangle4 = new Sprite(500, 300, 150, 100, 'kinematic');
  spikey = new Sprite(300, 600, [
    [100, 40],
    [-100, 40],
    [0, -80]
  ], 'kinematic');
*/
  //imovable objects
  brickImage = createSprite(1100,400, 250, 250, 'static');
  brickImage.addImage(loadImage('./assets/brick.png'));
  brickImage.scale = .5;

  rock = createSprite(500, 400, 250, 250, 'static');
  rock.addImage(loadImage('./assets/rock.png'));
  rock.scale = .5;

  barricade = createSprite(700, 400, 250, 250, 'static');
  barricade.addImage(loadImage('./assets/stop.png'));
  barricade.scale = .5;

  stone = createSprite(300,400, 250, 250, 'static');
  stone.addImage(loadImage('./assets/stone.png'));
  stone.scale = .5;

  grass = createSprite(900,400, 250, 250, 'static');
  grass.addImage(loadImage('./assets/grass.png'));
  grass.scale = .5;
}

function draw() {
  background(0);
  
  

  //keybindings
  if (kb.pressing('d')) {
    myAnimation.updatePosition('forward');
    myAnimation.drawAnimation('run');
    if (brickImage,rock,barricade,stone,grass != null) {
      if (myAnimation.isColliding(brickImage,rock,barricade,stone,grass)) {
          myAnimation.drawAnimation('idle');
          myAnimation.updatePosition('idle');

      
  }
}
   /* if (myAnimation.isColliding(brickImage, rock, barricade, rectangle4, spikey)) {
      myAnimation.drawAnimation('idle');
      myAnimation.updatePosition('idle');

    }
    */
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
  else if (kb.pressing('x')) {
    myAnimation.drawAnimation('attack');
    if (brickImage != null) {
      if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, brickImage.position.x, brickImage.position.y) < 200) {
          createParticles(brickImage.position.x, brickImage.position.y);
          Hitpoints -= 1;
          if(Hitpoints <= 0)
          {
              brickImage.remove();
              brickImage = null;
          }    
      
      }

  }
  if (rock != null) {
    if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, rock.position.x, rock.position.y) < 200) {
        createParticles(rock.position.x, rock.position.y);
        Hitpoints -= 1;
        if(Hitpoints <= 300)
        {
            rock.remove();
            rock = null;
        }    
    
    }

}
if (barricade != null) {
  if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, barricade.position.x, barricade.position.y) < 200) {
      createParticles(barricade.position.x, barricade.position.y);
      Hitpoints -= 1;
      if(Hitpoints <= 200)
      {
          barricade.remove();
          barricade = null;
      }    
  
  }

}
if (stone != null) {
  if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, stone.position.x, stone.position.y) < 200) {
      createParticles(stone.position.x, stone.position.y);
      Hitpoints -= 1;
      if(Hitpoints <= 400)
      {
          stone.remove();
          stone = null;
      }    
  
  }

}
if (grass != null) {
  if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, grass.position.x, grass.position.y) < 200) {
      createParticles(grass.position.x, grass.position.y);
      Hitpoints -= 1;
      if(Hitpoints <= 100)
      {
          grass.remove();
          grass = null;
      }    
  
  }

}
  }
  else {
    myAnimation.drawAnimation('idle');
  }
 
  //make the good object dissapear and reappear
 /* if (myAnimation.isColliding(rectangle4)) {
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
  fill(255);
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
*/
if(Hitpoints == 0){
  alert("You Won!")
  
}


}

function createParticles(x,y){
  for (let i = 0; i < 5; i++) {
    let p = new Particle(x,y);
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}