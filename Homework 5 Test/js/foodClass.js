class muffin {
    constructor(x,y){
      this.x = x;
      this.y = y;
  
    }
  
    foodSpawning(){
    fill(150, 75, 0);
    ellipse(this.x, this.y, 125, 125);
    fill(0);
    circle(this.x-10, this.y-5, 7);
    circle(this.x+33, this.y+10, 7);
    circle(this.x+10, this.y+15, 7);
    circle(this.x-10, this.y-20, 7);
    circle(this.x+23, this.y-23, 7);
  
  
    }
  
  }