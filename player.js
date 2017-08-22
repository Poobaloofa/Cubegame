var player = {
  x: 0,
  y: 0,
  h: 0,
  update: function(){
    switch(lastKey){
      case 65:
      case 37:
        if(blocks[player.x-1]){
          player.x--;
          console.log(player.x, player.y);
        }
        break;
      case 68:
      case 39:
        if(blocks[player.x+1]){
          player.x++;
          console.log(player.x, player.y);
        }
        break;
      case 87:
      case 38:
        if(blocks[player.x][player.y-1]){
          player.y--;
          console.log(player.x, player.y);
        }
        break;
      case 83:
      case 40:
        if(blocks[player.x][player.y+1]){
          player.y++;
          console.log(player.x, player.y);
        }
        break;
      default: console.log("dint go :(");
    }
    player.h = blocks[player.x][player.y].h
    console.log("player updated");
  },
  draw: function(){
    ctx.fillRect(150+39*player.x-18*player.y+9,250+18*player.y-39*player.h+9-84,42,84);
    console.log("player drawn");
  },
}
