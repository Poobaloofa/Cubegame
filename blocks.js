function block(x,y,isBlue,h){
  this.x = x;
  this.y = y;
  this.isBlue = isBlue
  this.h = h
  this.draw = function(){
    if(isBlue){
      ctx.drawImage(bluecube, 200+18*this.x-9*this.y,350+9*this.y-18*this.h)
    }
    else{
      ctx.drawImage(redcube, 200+18*this.x-9*this.y,350+9*this.y-18*this.h)
    }
  }
}
