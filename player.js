var player = {
  x: 0,
  y: 0,
  h: 0,
  state: "idle1",
  update: function(){
    switch(player.state){
    case "idle1":
    case "idle2":
      switch(lastKey){
      case 65:
      case 37:
        if(blocks[player.x-1]){
          if(blocks[player.x-1][player.y].h<player.h+2&&blocks[player.x-1][player.y].h>player.h-2){
            blocks[player.x][player.y].isBlue = !blocks[player.x][player.y].isBlue
            player.x--;
            console.log(player.x, player.y, player.h);
          }
        }
        break;
        case 68:
        case 39:
        if (blocks[player.x+1]) {
          if(blocks[player.x+1][player.y].h<player.h+2&&blocks[player.x+1][player.y].h>player.h-2){
            blocks[player.x][player.y].isBlue = !blocks[player.x][player.y].isBlue
            player.x++;
            console.log(player.x, player.y, player.h);
          }
        }
        break;
        case 87:
        case 38:
        if(blocks[player.x][player.y-1]){
          if(blocks[player.x][player.y-1].h<player.h+2&&blocks[player.x][player.y-1].h>player.h-2){
            blocks[player.x][player.y].isBlue = !blocks[player.x][player.y].isBlue
            player.y--;
            console.log(player.x, player.y, player.h);
          }
        }
        break;
        case 83:
        case 40:
        if(blocks[player.x][player.y+1]){
          if(blocks[player.x][player.y+1].h<player.h+2&&blocks[player.x][player.y+1].h>player.h-2){
            blocks[player.x][player.y].isBlue = !blocks[player.x][player.y].isBlue
            player.y++;
            console.log(player.x, player.y, player.h);
          }
        }
        break;
        default: console.log("dint go :(");
      }
      break;
    }
    player.h = blocks[player.x][player.y].h
    console.log("player updated");
  },
  animate: function(){
    switch(player.state){
    case "idle1":
      player.state = "idle2";
      break;
    case "idle2":
      player.state = "idle1"
      break;
    }
  },
  draw: function(){
    if(player.state=="idle1"){
      ctx.fillStyle = "black"
      ctx.fillRect(150+39*player.x-18*player.y+9,250+18*player.y-39*player.h+9-84,42,84);
      console.log("idle1")
    }
    if(player.state=="idle2"){
      ctx.fillStyle = "red"
      ctx.fillRect(150+39*player.x-18*player.y+9,250+18*player.y-39*player.h+9-84,42,84);
      console.log("idle2")
    }
  },
}
