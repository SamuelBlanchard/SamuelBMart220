class knight {
    constructor(name) {
      this.name = name;

  
    }


 ifKeyIsPressed() {
    if (keyIsPressed){
      
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
        if (knightMovement){
          image(run[i], x, y, 50, 50);
          i += 1;
          if (i >= run.length) {
            i = 0;
          }
      }  
}
 }
 ifCharacterIdle(){
  image(idle[i], x, y, 50, 50);
  i += 1;
  if (i >= idle.length) {
    i = 0;
  }
 }
 knightName(){
  fill(255);
  text(this.name = "I'm dean the knight!", 100, 200);
 }
}

class muffin {
  constructor(chocolateChips,wrapper){
    this.chocolateChips = chocolateChips
    this.wrapper = wrapper
  }

  foodSpawning(){
    for (var i = 0; i < 5; i++) {
      muffinF(muffinX,muffinY);
      muffinX += random(200);
      muffinY += random(200);
  }
}
}