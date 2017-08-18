var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
/*
for (var x = 0; x<10; x++){
  for (var y = 0; y<10; y++){
    if(y%3==0){
      if(x%3==0){
        ctx.drawImage(bluecube,150+18*x-9*y,400+9*y);
      }
      else{
        ctx.drawImage(redcube,150+18*x-9*y,400+9*y);
      }
    }
    if(y%3==1){
      if(x%3==1){
        ctx.drawImage(bluecube,150+18*x-9*y,400+9*y);
      }
      else{
        ctx.drawImage(redcube,150+18*x-9*y,400+9*y);
      }
    }
    if(y%3==2){
      if(x%3==2){
        ctx.drawImage(bluecube,150+18*x-9*y,400+9*y);
      }
      else{
        ctx.drawImage(redcube,150+18*x-9*y,400+9*y);
      }
    }
  }
}
*/
var b1 = new block(0,0,true,0)
var b2 = new block(1,0,false,0)
var b3 = new block(0,-1,true,1)
b1.draw()
b2.draw()
b3.draw()
