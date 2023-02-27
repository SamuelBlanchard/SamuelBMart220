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
  this.x += 1;
}
  else if(direction == 'reverse')
  {
    this.x -= 1;
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

 }























