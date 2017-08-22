function block(x,y,isBlue,h){
  this.x = x;
  this.y = y;
  this.isBlue = isBlue
  this.h = h
  this.draw = function(){
    if(isBlue){
      ctx.drawImage(bluecube, 150+39*this.x-18*this.y,250+18*this.y-39*this.h)
    }
    else{
      ctx.drawImage(redcube, 150+39*this.x-18*this.y,250+18*this.y-39*this.h)
    }
  }
}

var blocks = []
for (var x = 0; x<7; x++){
  blocks.push([]);
  for (var y = 0; y<7; y++){
    blocks[x].push(new block(x,y,false,0));
  }
}
console.log(blocks)

for (var x = 0; x<7; x++){
  for (var y = 0; y<7; y++){
    blocks[x][y].h = Math.floor(3-x/3-y/3);
  }
}
