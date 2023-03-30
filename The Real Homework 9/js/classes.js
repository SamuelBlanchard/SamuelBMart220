class knight {
    constructor(x, y,h,w) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.currentAnimation;
      this.createAnimation();
      this.direction = "";      
    }

    getX()
    {
      return this.x;
    }
    
    getY()
    {
      return this.y
    }
    
 setCurrentFrameCount(currentFrameCount)
 {
    this.currentFrameCount = currentFrameCount;
 }

createAnimation()
{
  this.currentAnimation = createSprite(this.x, this.y);
}
getCurrentAnimation()
{
    return this.currentAnimation;
}
 loadAnimation(animationType, path)
{
  this.currentAnimation.addAnimation(animationType, path[0], path[path.length-1]);
  this.currentAnimation.width = 300;
  this.currentAnimation.height = 150;

}


drawAnimation(animationType)
{
this.currentAnimation.frameDelay = 5;
this.currentAnimation.scale = .5;
this.currentAnimation.changeAnimation(animationType);

if (animationType == 'run' && this.direction == 'forward') {
  this.currentAnimation.direction = 0;
  this.currentAnimation.mirror.x = false;
  this.currentAnimation.speed = 5;

}
else if (animationType == 'run' && this.direction == 'downward') {
  this.currentAnimation.mirror.x = false;
  this.currentAnimation.direction = 90;
  this.currentAnimation.speed = 5;

}
else if (animationType == 'run' && this.direction == 'upward') {
  this.currentAnimation.mirror.x = false;
  this.currentAnimation.direction = 270;
  this.currentAnimation.speed = 5;

}
else if (animationType == 'run' && this.direction == 'reverse') {

  this.currentAnimation.mirror.x = true;
  this.currentAnimation.direction = 180;
  this.currentAnimation.speed = 5;

}
else {
  this.currentAnimation.velocity.x = 0;
  this.currentAnimation.velocity.y = 0;

}
}

incrementIndex()
  {
    if(this.currentFrameCount % 5 == 0)
        {
            this.i++;
        }
       
        if (this.i >= this.path.length) {
            this.i = 1;
        }
  }

updatePosition(direction)
{
  this.direction = direction;

  }

isColliding(myImage){
  return this.currentAnimation.collide(myImage);
}



}