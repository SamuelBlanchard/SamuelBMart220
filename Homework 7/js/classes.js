class knight {
    constructor(path, x, y,h,w) {
      this.path = path;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.imageObjects = [];
      this.getImage();
      this.i = 0;
      this.currentFrameCount = 0;
    
      
    }

 setCurrentFrameCount(currentFrameCount)
 {
    this.currentFrameCount = currentFrameCount;
 }

 getImage()
{
  for(var i = 0; i < this.path.length; i++)
  {
    this.imageObjects[i] = loadImage(this.path[i]);
  }
   
  
}

drawAnimation()
{
  this.incrementIndex();
if(this.direction == "reverse")
{
  translate(this.w,0);
  scale(-1.0,1.0);
  image(this.imageObjects[this.i], -this.x, this.y, this.w, this.h);
}
else
{
  image(this.imageObjects[this.i], this.x, this.y, this.w, this.h);
}
}

incrementIndex()
  {
    if(this.currentFrameCount % 5 == 0)
    this.i += 1;

    if(this.i >= this.path.length){
      this.i = 0;
    }
  }

updatePosition(direction)
{
  this.direction = direction;
  if(direction == 'forward')
{
  this.x += 5;
}
  else if(direction == 'reverse')
  {
    this.x -= 5;
  }
  else if(direction == 'down')
  {
    this.y += 5;
  }
  else if(direction == 'up')
  {
    this.y -= 5;
  }
}

getX()
{
  return this.x;
}

getY()
{
  return this.y
}


 
isRectanglesColliding(rec2){
  var topEdge1 = this.y + this.h
  var rightEdge1 =this.x + this.w; 
  var leftEdge1 =this.x
  var bottomEdge1 = this.y
  var topEdge2 = rec2.getY() + rec2.getH();
  var rightEdge2 = rec2.getX() + rec2.getW(); 
  var leftEdge2 = rec2.getX();
  var bottomEdge2 = rec2.getY();   
  
  if( leftEdge1 < rightEdge2 && rightEdge1 > leftEdge2 && bottomEdge1 < topEdge2 && topEdge1 > bottomEdge2){
      return true; 
 }
 return false;
}

isRectanglesColliding(muff2){
  var topEdge1 = this.y + this.h
  var rightEdge1 =this.x + this.w; 
  var leftEdge1 =this.x
  var bottomEdge1 = this.y
  var topEdge2 = muff2.getY() + muff2.getH();
  var rightEdge2 = muff2.getX() + muff2.getW(); 
  var leftEdge2 = muff2.getX();
  var bottomEdge2 = muff2.getY();   
  
  if( leftEdge1 < rightEdge2 && rightEdge1 > leftEdge2 && bottomEdge1 < topEdge2 && topEdge1 > bottomEdge2){
      return true; 
 }
 return false;
}

}