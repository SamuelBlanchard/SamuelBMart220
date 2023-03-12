class muffin {
    constructor(x,y,h,w){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
  
    }
  
   
  
    getX()
    {
      return this.x;
    }
    getY()
    {
      return this.y;
    }
    getW()
    {
      return this.w;
    }
    getH()
    {
      return this.h;
    }

    foodSpawning(){
      fill(150, 75, 0);
      rect(this.x, this.y, this.w, this.h);
     // fill(0);
      //circle(this.x-10, this.y-5, 7);
    //  circle(this.x+33, this.y+10, 7);
     // circle(this.x+10, this.y+15, 7);
     // circle(this.x-10, this.y-20, 7);
     // circle(this.x+23, this.y-23, 7);
      }

  }