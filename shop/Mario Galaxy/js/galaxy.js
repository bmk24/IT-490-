
/* Galaxy engine */
var playerStop = 0;
var playerBlock = 0;
var playerBlock1;
var playerLastX = 0;
var playerLastY = 0;
var frame_set;
var xObsticle = [];
var x2Obsticle = [];
var mysteryY = 0;
var playerOBJ;
var tempThing;




var Galaxy = function () {
   context.scale(2, 2);
//context2.scale(2, 2);
contextBack.fillStyle = "#5D94FB";
contextBack.fillRect(0, 0, canvasBack.width, canvasBack.height);
this.bigProblem   = false;
this.mainLog       = true;
this.viewPortLim = false;
playerStats.jump_switch    = 0;
this.delay = 15;
this.delay2 = 5;
this.count = 0;
this.count2 = 0;
this.frame_set = 1;
this.mystery = 0;
this.view = true;
this.key = {
    left:  { active:false, state:false },
    right: { active:false, state:false },
    up:    { active:false, state:false },
 };
this.key.left.active = false;
this.key.left.state = false;
this.key.right.active = false;
this.key.right.state = false;
this.key.up.active = false;
this.key.up.state = false;
this.mysteryBlock = mysteryBlock;
window.onkeydown = this.keydown.bind(this);
window.onkeyup   = this.keyup.bind(this);


};
Galaxy.prototype.setup = function (map,currMap){


 playerStats.image = marioWalk1_smb1;



 

 
    



};
Galaxy.prototype.errorParse = function (message) {

if (this.bigProblem) alert(message);
if (this.mainLog) console.log(message);
};
Galaxy.prototype.clock = function (map,currMap) {

    var countdownTemp = currMap.time;
 
    currMap.countdownTimer = setInterval(function() {//Start Countdown for pre defined time
        countdownTemp--;
        //console.log(countdownTemp);
currMap.time = countdownTemp; 
        document.getElementById('clock').innerHTML = ('<p>Time:' + countdownTemp +  '</p>');
        document.getElementById('health').innerHTML = ('<p>Lives:' + playerStats.health +  '</p>');
        document.getElementById('coin').innerHTML = ('<p>Coins:' + playerStats.coin +  '</p>');
        if (currMap.gamePause == 1){
            clearInterval(currMap.countdownTimer);

        }
        if (countdownTemp <= 0) {//Once over, Start Recording
            console.log("You have died");
            this.load_map(map,currMap);//}
            clearInterval(currMap.countdownTimer);     

        }

    }, 1000);
    if (countdownTemp <= 0) {   
    }
    };

Galaxy.prototype.logger = function (message) {

if (this.mainLog) console.log(message);
};

Galaxy.prototype.viewPortConstructor = function (x, y,map,currMap) {

currMap.viewport.x = x;
currMap.viewport.y = y;
};

Galaxy.prototype.keydown = function (e) {

    
    switch (e.keyCode) {
    case 37:
       this.key.left = true;

       playerPos = 'left';
       playerStats.spriteNum == 1
       if (this.key.left.state != this.key.left) this.key.left.active = this.key.left;
       this.key.left.state  = this.key.left;// Always update the physical state.
       break;
    case 38:
       this.key.up = true;
       playerPos = 'up';
       playerStats.spriteNum == 2

       if (this.key.up.state != this.key.up) this.key.up.active = this.key.up;
       this.key.up.state  = this.key.up;
       break;
    case 39:
       this.key.right = true;
       playerPos = 'right';
       //console.log('right');
       playerStats.spriteNum == 3

       if (this.key.right.state != this.key.right) this.key.right.active = this.key.right;
       this.key.right.state  = this.key.right;
       break;

    case 83:
        if(currMap.gamePause == 0){
            currMap.gamePause = 1;
            console.log("Game Paused...");
        }
        else{
            currMap.gamePause = 0;
            console.log("Game Resuming...");
        }
    }
    };
Galaxy.prototype.keyup = function (e) {

//console.log(e.keyCode);
switch (e.keyCode) {
case 37:
   this.key.left = false;
   playerPos = 'none';

   break;
case 38:
   this.key.up = false;
   playerPos = 'none';

   break;
case 39:
   this.key.right = false;
   playerPos = 'none';

   break;
}
};

Galaxy.prototype.load_map = function (map,currMap) {
this.clock(map,currMap);
this.setup(map,currMap);


/**************Enemy Solid Object Finder***************/
for (var y = 0; y < currMap.goomba.obsticle.length; y++) {
    xObsticle[y] = currMap.goomba.obsticle[y].x1;
x2Obsticle[y] = currMap.goomba.obsticle[y].x2;
}
/**************Enemy Solid Object Finder***************/

if (typeof currMap      === 'undefined'
|| typeof currMap.data === 'undefined'
|| typeof map.keys === 'undefined') {

   this.errorParse('Bad Map Data at:' + map);

   return false;
}


//currMap.background = map.background || '#000000';
currMap.gravity = map.gravity || {x: 0, y: 0.3};
currMap.spriteSize = map.spriteSize || 24;


currMap.width = 0;
currMap.height = 0;

map.keys.forEach(function (key) {

    currMap.data.forEach(function (row, y) {
       
       currMap.height = Math.max(currMap.height, y);

       row.forEach(function (tile, x) {
           
           currMap.width = Math.max(currMap.width, x);

           if (tile == key.id)
               currMap.data[y][x] = key;
       });
   });
});

currMap.widthNext = currMap.width * currMap.spriteSize;
currMap.heightNext = currMap.height * currMap.spriteSize;

playerStats.location.x = map.player.x * currMap.spriteSize || 0;
playerStats.location.y = map.player.y * currMap.spriteSize || 0;

this.key.left  = false;
this.key.up    = false;
this.key.right = false;

this.camera = {
   x: 0,
   y: 0
};

playerStats.velocity = {
   x: 0,
   y: 0
};

this.logger('Successfully loaded map data.');

return true;
};

Galaxy.prototype.whatTile = function (x, y,map,currMap) {

return (currMap.data[y] && currMap.data[y][x]) ? currMap.data[y][x] : 0;
};

Galaxy.prototype.draw_tile = function (x, y, tile,map,currMap) {
/*
Keys 
0 Blank space after scenery 
1  Sky Block
2  Ground Block
3  Platform Block
4  metal Block
5  mystery Block
6  ramp block
7 Death Block
////////////////REASSIGN

8 medium bush
//////////////REASSIGN
9 tube Left   (Larger)
10 tube Right (Larger)
11 tube Left
12 tubeRight
13 tubeMid
14 grey metal block 135
15 Big Hill Top
16 Big Hill Left
17 Big Hill Right
18 Big Hill Dimple
19 Big Hill Mid
20 Bush Center
21 Left Bush
21 Right Bush
/*******Big Hill******
01,01,15,01,01,
01,16,18,17,01,
16,18,19,18,17,
*********************/
/*******Bush*********
21,20,22
*******************/
/*******Tube*********
10,11,
12,13,
*******************/
var tempTile = tile.id;
contextBack.fillStyle = "#5D94FB";

switch (tempTile) {

    case 0:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        break;
    case 1:
        context.fillStyle = "#5D94FB";
        context.fillRect(x, y,currMap.spriteSize,currMap.spriteSize);        
        break;
    case 2:
        context.drawImage(brickBlock,x,y,currMap.spriteSize,currMap.spriteSize);   
        break;
    case 3:
        context.drawImage(platformBlock,x,y,currMap.spriteSize,currMap.spriteSize);   
        break;
    case 4:
        context.drawImage(metalBlock,x,y,currMap.spriteSize,currMap.spriteSize);   
        break;
    case 5:
        yTemp = y + mysteryY;
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(this.mysteryBlock,x,yTemp,currMap.spriteSize,currMap.spriteSize);   
        break;
    case 6:
        context.drawImage(rampBlock,x,y,currMap.spriteSize,currMap.spriteSize);   
        break;
    case 7:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize); 
        break;
    case 8:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);         
        break;
    case 9:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(tubeLeft,x,y,currMap.spriteSize*1.3,currMap.spriteSize);   
        break; 
    case 10:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(tubeRight,x,y,currMap.spriteSize*1.3,currMap.spriteSize);   
        break; 
    case 11:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(tubeLeft,x+4,y,currMap.spriteSize*.80,currMap.spriteSize*1.3);   
        break;  
    case 12:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(tubeRight,x,y,currMap.spriteSize*.80,currMap.spriteSize*1.3);   
        break;  
    case 13:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(tubeMid,x,y,(32),(tubeMid.height)) 
            break;  
    case 14:
            context.drawImage(greyMetal,x,y,currMap.spriteSize,currMap.spriteSize);   
            break; 
    case 15:
            contextBack.fillStyle = "#5D94FB";
            contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
            context.drawImage(hillTop,x,y,currMap.spriteSize,currMap.spriteSize);   
            break;  
    case 16:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
            context.drawImage(hillLeft,x,y,currMap.spriteSize,currMap.spriteSize);   
            break;   
    case 17:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
            context.drawImage(hillRight,x,y,hillRight.width,hillRight.height);   
            break;  
    case 18:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
            context.drawImage(hillDimple,x,y,currMap.spriteSize,currMap.spriteSize);   
            break;  
    case 19:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(hillMid,x,y,currMap.spriteSize,currMap.spriteSize);   
            break; 
    case 20:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(bushMid,x,y,currMap.spriteSize,currMap.spriteSize);   
        break; 
    case 21:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(bushLeft,x,y,currMap.spriteSize,currMap.spriteSize);   
        break; 
    case 22:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(bushRight,x,y,currMap.spriteSize,currMap.spriteSize);   
        break;    
    case 98:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        break;    
    case 99:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(coinBlock,x,y,currMap.spriteSize,currMap.spriteSize);   
        break;  
   }
};

Galaxy.prototype.draw_map = function (context, fore,map,currMap) {

for (var y = 0; y < currMap.data.length; y++) {

   for (var x = 0; x < currMap.data[y].length; x++) {

       if ((!fore && !currMap.data[y][x].fore) || (fore && currMap.data[y][x].fore)) {

           var xNext = (x * currMap.spriteSize) - currMap.camera.x;
           var yNext = (y * currMap.spriteSize) - currMap.camera.y;
           
           if(xNext < -currMap.spriteSize
           || yNext < -currMap.spriteSize
           || xNext > currMap.viewport.x
           || yNext > currMap.viewport.y 
           ) continue;
           this.draw_tile(
               xNext,
               yNext,
               currMap.data[y][x],
               map,
               currMap
           );
       }
   }
}

if (!fore) this.draw_map(context, true,map,currMap);
};

Galaxy.prototype.move_player = function (map,currMap) {
   // console.log(playerStats.velocity.x,playerStats.velocity.y);

var tX = playerStats.location.x + playerStats.velocity.x;
var tY = playerStats.location.y + playerStats.velocity.y;

var offset = Math.round((currMap.spriteSize / 2) -1);//Camera Offset

var tile = this.whatTile(
   Math.round(playerStats.location.x / playerStats.spriteSize),
   Math.round(playerStats.location.y / playerStats.spriteSize),
   map,
   currMap
);

if(tile.gravity) {
   
   playerStats.velocity.x += tile.gravity.x;
   playerStats.velocity.y += tile.gravity.y;
   
} else {
   
   playerStats.velocity.x += currMap.gravity.x;
   playerStats.velocity.y += currMap.gravity.y;
}

if (tile.friction) {

   playerStats.velocity.x *= tile.friction.x;
   playerStats.velocity.y *= tile.friction.y;
}

var t_y_up   = Math.floor(tY / playerStats.spriteSize);
var t_y_down = Math.ceil(tY / playerStats.spriteSize);
var y_near1  = Math.round((playerStats.location.y - offset) / playerStats.spriteSize);
var y_near2  = Math.round((playerStats.location.y + offset) / playerStats.spriteSize);

var t_x_left  = Math.floor(tX / playerStats.spriteSize);
var t_x_right = Math.ceil(tX / playerStats.spriteSize);
var x_near1   = Math.round((playerStats.location.x - offset) / playerStats.spriteSize);
var x_near2   = Math.round((playerStats.location.x + offset) / playerStats.spriteSize);

var top1    = this.whatTile(x_near1, t_y_up,
    map,
    currMap);
var top2    = this.whatTile(x_near2, t_y_up,
    map,
    currMap);
var bottom1 = this.whatTile(x_near1, t_y_down,
    map,
    currMap);
var bottom2 = this.whatTile(x_near2, t_y_down,
    map,
    currMap);
var left1   = this.whatTile(t_x_left, y_near1,
    map,
    currMap);
var left2   = this.whatTile(t_x_left, y_near2,
    map,
    currMap);
var right1  = this.whatTile(t_x_right, y_near1,
    map,
    currMap);
var right2  = this.whatTile(t_x_right, y_near2,
    map,
    currMap);
if (top1.id ==5 || top2.id ==5 ){
    //currMap.data.x[x_near2]  = 1
    //currMap.data[x_near2][t_y_up] = 04;
    //currMap.data[x_near1][t_y_up] = 04;
    if (top1.id ==5){
        currMap.data[t_y_up][x_near1] = 04;
        var xNext = (x_near1 * currMap.spriteSize) - currMap.camera.x;
        var yNext = (t_y_up * currMap.spriteSize) - currMap.camera.y;
        context.drawImage(metalBlock,xNext, yNext, playerStats.spriteSize, playerStats.spriteSize);
        //context.drawImage(metalBlock,hillMid,x,y,currMap.spriteSize,currMap.spriteSize);   

    }
    else{
        currMap.data[t_y_up][x_near2] = 04;
        var xNext = (x_near2 * currMap.spriteSize) - currMap.camera.x;
        var yNext = (t_y_up * currMap.spriteSize) - currMap.camera.y;
        context.drawImage(metalBlock,xNext, yNext, playerStats.spriteSize, playerStats.spriteSize);
    //context.drawImage(xNext,x_near2,t_y_up,currMap.spriteSize,currMap.spriteSize);   

    }
    this.draw_map(context, false,map,currMap);
    context.fillStyle = "blue";
    //contextBack.fillStyle = "#5D94FB";

    //contextBack.fillRect(x_near2, t_y_up,currMap.spriteSize, currMap.spriteSize);
    console.log("Mystery",playerStats.location.y,t_y_up);
   
    //this.draw_tile(x_near2, t_y_up, 4,context);
    //this.draw_tile(x_near2, t_y_up, 4,context);
    //context.fillRect((x_near2)-2, t_y_up,currMap.spriteSize*2,currMap.spriteSize*2); 
    //context.fillRect(x_near1, t_y_up,currMap.spriteSize,currMap.spriteSize);  
    //this.load_map
}     

if (tile.jump &&playerStats.jump_switch > 15) {

    playerStats.can_jump = true;
   
  playerStats.jump_switch = 0;
   
} else playerStats.jump_switch++;

playerStats.velocity.x = Math.min(Math.max(playerStats.velocity.x, - playerStats.speed), playerStats.speed);
//playerStats.velocity.x = playerStats.speed;

playerStats.velocity.y = Math.min(Math.max(playerStats.velocity.y, - playerStats.defaultVelocity.y), playerStats.defaultVelocity.y);
//console.log(playerStats.speed);
playerStats.location.x += playerStats.velocity.x;
playerStats.location.y += playerStats.velocity.y;

playerStats.velocity.x *= .9;

if (left1.isSolid || left2.isSolid || right1.isSolid || right2.isSolid) {

   /* fix overlap */

   while (this.whatTile(Math.floor(playerStats.location.x / playerStats.spriteSize), y_near1,map,currMap).isSolid
       || this.whatTile(Math.floor(playerStats.location.x / playerStats.spriteSize), y_near2,map,currMap).isSolid)
       playerStats.location.x += .1;

   while (this.whatTile(Math.ceil(playerStats.location.x / playerStats.spriteSize), y_near1,map,currMap).isSolid
       || this.whatTile(Math.ceil(playerStats.location.x / playerStats.spriteSize), y_near2,map,currMap).isSolid)
       playerStats.location.x -= .1;

   /* tile bounce */

   var canAbsorb = 0;

   if (left1.isSolid && left1.canAbsorb > canAbsorb) canAbsorb = left1.canAbsorb;
   if (left2.isSolid && left2.canAbsorb > canAbsorb) canAbsorb = left2.canAbsorb;
   if (right1.isSolid && right1.canAbsorb > canAbsorb) canAbsorb = right1.canAbsorb;
   if (right2.isSolid && right2.canAbsorb > canAbsorb) canAbsorb = right2.canAbsorb;

   playerStats.velocity.x *= -canAbsorb || 0;
   
}

if (top1.isSolid || top2.isSolid || bottom1.isSolid || bottom2.isSolid) {

   /* fix overlap */
   
   while (this.whatTile(x_near1, Math.floor(playerStats.location.y / playerStats.spriteSize),map,currMap).isSolid
       || this.whatTile(x_near2, Math.floor(playerStats.location.y / playerStats.spriteSize),map,currMap).isSolid)
       playerStats.location.y += .1;

   while (this.whatTile(x_near1, Math.ceil(playerStats.location.y / playerStats.spriteSize),map,currMap).isSolid
       || this.whatTile(x_near2, Math.ceil(playerStats.location.y / playerStats.spriteSize),map,currMap).isSolid)
       playerStats.location.y -= .1;

   /* tile bounce */
   
   var canAbsorb = 0;
   
   if (top1.isSolid && top1.canAbsorb > canAbsorb) canAbsorb = top1.canAbsorb;
   if (top2.isSolid && top2.canAbsorb > canAbsorb) canAbsorb = top2.canAbsorb;
   if (bottom1.isSolid && bottom1.canAbsorb > canAbsorb) canAbsorb = bottom1.canAbsorb;
   if (bottom2.isSolid && bottom2.canAbsorb > canAbsorb) canAbsorb = bottom2.canAbsorb;
   
   playerStats.velocity.y *= -canAbsorb || 0;

   if ((bottom1.isSolid || bottom2.isSolid) && !tile.jump) {
       
    playerStats.on_floor = true;
       playerStats.can_jump = true;
   }
   
}

// adjust camera
if (this.view){
var c_x = Math.round(playerStats.location.x - currMap.viewport.x/4);
var c_y = Math.round(playerStats.location.y - currMap.viewport.y/4);
var x_dif = Math.abs(c_x - currMap.camera.x);
var y_dif = Math.abs(c_y - currMap.camera.y);

if(x_dif > 5) {
   
   var mag = Math.round(Math.max(1, x_dif * 0.1));

   if(c_x != currMap.camera.x) {
       
       currMap.camera.x += c_x > currMap.camera.x ? mag : -mag;
       
       if(this.viewPortLim) {
           
           currMap.camera.x = 
               Math.min(
                   currMap.widthNext - currMap.viewport.x + currMap.spriteSize,
                   currMap.camera.x
               );
           
           currMap.camera.x = 
               Math.max(
                   0,
                   currMap.camera.x
               );
       }
   }
}

if(y_dif > 5) {
   
   var mag = Math.round(Math.max(1, y_dif * 0.1));
   
   if(c_y != currMap.camera.y) {
       
       currMap.camera.y += c_y > currMap.camera.y ? mag : -mag;
   
       if(this.viewPortLim) {
           
           currMap.camera.y = 
               Math.min(
                   currMap.heightNext - currMap.viewport.y + currMap.spriteSize,
                   currMap.camera.y
               );
           
           currMap.camera.y = 
               Math.max(
                   0,
                   currMap.camera.y
               );
       }
   }
}

if(currMap.last_tile != tile.id && tile.script) {

   eval(currMap.scripts[tile.script]);
}

currMap.last_tile = tile.id;
}
};
Galaxy.prototype.coin = function(map,currMap){
    console.log("coin");
    playerStats.coin += 1;
};
Galaxy.prototype.update_player = function (map,currMap) {

if (this.key.left) {

if(playerBlock1 >= playerStats.location.x){console.log("over")}
   if (playerStats.velocity.x > -playerStats.speed){
       playerStats.velocity.x -= playerStats.playerSpeed.left;
        }
}
   

if (this.key.up) {

   if (playerStats.can_jump && playerStats.velocity.y > -playerStats.speed) {
       //console.log("Disable JUmp");
       playerStats.velocity.y -= playerStats.jumpHeight;
       playerStats.can_jump = false;
   }
}

if (this.key.right) {
  
    if (playerStats.location.x > playerStop){playerStop = playerStats.location.x
}

   if (playerStats.velocity.x < playerStats.speed)
       playerStats.velocity.x += currMap.playerSpeed.left;
}
//this.Goomba();

this.move_player(map,currMap);

};

Galaxy.prototype.draw_player = function (map,currMap) {
   playerLocationX = (playerStats.location.x + playerStats.spriteSize / 2 - currMap.camera.x);
   playerLocationY = (playerStats.location.y + playerStats.spriteSize / 2 - currMap.camera.y)-26;
   playerLastX = playerLocationX;
   playerLastY = playerLocationY;
   context2.drawImage(playerStats.image,playerLocationX,playerLocationY,36,36)   ;
};
Galaxy.prototype.update = function (map,currMap) {
if (currMap.gamePause == 0){
this.viewLimit();
this.update_player(map,currMap);
if (playerStats.spriteType == 'Vario' || playerStats.spriteType == 'vario'){this.vario(map,currMap);}
if (playerStats.spriteType == 'Yario' || playerStats.spriteType == 'yario'){this.yario(map,currMap);}
if (playerStats.spriteType == 'Wowser' || playerStats.spriteType == 'wowser'){this.wowser(map,currMap);}
if (playerStats.spriteType == 'Ruigi' || playerStats.spriteType == 'ruigi'){this.ruigi(map,currMap);}
this.loop();
this.update_goomba(currMap.goomba,map,currMap);
}  
};
Galaxy.prototype.wowser = function (map,currMap) {

    if (this.key.up.active && !playerStats.jumping) {
        this.key.up.active = false;
        playerStats.jumping = true;
        playerStats.spriteNum = 3;
      }
      if (this.key.left.active) {
       playerStats.spriteNum = 2;
      }
      if (this.key.right.active) {
          playerStats.spriteNum = 1;
      }
      if (!this.key.left.active && !this.key.right.active) {
          playerStats.spriteNum = 4;
      }
    
      if (this.count >= this.delay) {// If enough cycles have passed, we change the frame.
          this.count = 0;// Reset the count.
  
        
          /*********************Player Animation *************************/
          var frameTemp; 
         // var charTpye = 
          if ((this.key.left == true) && (this.key.up == false)){frameTemp = 'bowserWalk';}
          else if ((this.key.right == true) && (this.key.up == false)){frameTemp = 'bowserWalk';}
          else if ((this.key.up == true) || ((this.key.up == true) && (this.key.right == true))|| ((this.key.up == true) && (this.left.right == true))){frameTemp = 'bowserWalk';}else {frameTemp = 'bowserWalk_smb1';}
          if(this.key.left == true || this.key.right  == true){
              //console.log(this.frame_set);
          switch(this.frame_set) {
              case 1:
                frame_set = 2;
                frameTemp = frameTemp + '1_smb1';
                break;
              case 2:
                frame_set = 1;
                frameTemp = frameTemp + '2_smb1';
                break;
  
            }
            this.frame_set = frame_set;
  
          }else{frameTemp = 'bowserWalk_smb1'}
          playerStats.image = eval(frameTemp);
   
        }
};
Galaxy.prototype.vario = function (map,currMap) {
    //console.log("Mario");

    if (this.key.up.active && !playerStats.jumping) {
        this.key.up.active = false;
        playerStats.jumping = true;
        playerStats.spriteNum = 3;
      }
      if (this.key.left.active) {
       playerStats.spriteNum = 2;
      }
      if (this.key.right.active) {
          playerStats.spriteNum = 1;
      }
      if (!this.key.left.active && !this.key.right.active) {
          playerStats.spriteNum = 4;
      }
   
  
  
          /*********************Player Animation *************************/
          var frameTemp; 
         // var charTpye = 
          if ((this.key.left == true) && (this.key.up == false)){frameTemp = 'marioWalk';}
          else if ((this.key.right == true) && (this.key.up == false)){frameTemp = 'marioWalk';}
          else if ((this.key.up == true) || ((this.key.up == true) && (this.key.right == true))|| ((this.key.up == true) && (this.left.right == true))){frameTemp = 'marioWalk';}else {frameTemp = 'marioWalk';}
          if(this.key.left == true || this.key.right  == true){
              //console.log(this.frame_set);
          switch(this.frame_set) {
              case 1:
                frame_set = 2;
                frameTemp = frameTemp + '1_smb1';
                break;
              case 2:
                frame_set = 1;
                frameTemp = frameTemp + '2_smb1';
                break;
  
            }
            this.frame_set = frame_set;
  
          }else{frameTemp = frameTemp +'_smb1'}
          playerStats.image = eval(frameTemp);
          /*********************Player Animation *************************/
          /***************** Mystery Block Animation ********************/
         
          /***************** Mystery Block Animation ********************/       
        
};
Galaxy.prototype.yario = function (map,currMap) {

    if (this.key.up.active && !playerStats.jumping) {
        this.key.up.active = false;
        playerStats.jumping = true;
        playerStats.spriteNum = 3;
      }
      if (this.key.left.active) {
       playerStats.spriteNum = 2;
      }
      if (this.key.right.active) {
          playerStats.spriteNum = 1;
      }
      if (!this.key.left.active && !this.key.right.active) {
          playerStats.spriteNum = 4;
      }
    
      if (this.count >= this.delay) {// If enough cycles have passed, we change the frame.
          this.count = 0;// Reset the count.
  
        
          /*********************Player Animation *************************/
          var frameTemp; 
         // var charTpye = 
          if ((this.key.left == true) && (this.key.up == false)){frameTemp = 'warioWalk';}
          else if ((this.key.right == true) && (this.key.up == false)){frameTemp = 'warioWalk';}
          else if ((this.key.up == true) || ((this.key.up == true) && (this.key.right == true))|| ((this.key.up == true) && (this.left.right == true))){frameTemp = 'warioWalk';}else {frameTemp = 'warioWalk';}
          if(this.key.left == true || this.key.right  == true){
              //console.log(this.frame_set);
          switch(this.frame_set) {
              case 1:
                frame_set = 2;
                frameTemp = frameTemp + '1_smb1';
                break;
              case 2:
                frame_set = 1;
                frameTemp = frameTemp + '2_smb1';
                break;
  
            }
            this.frame_set = frame_set;
  
          }else{frameTemp = 'warioWalk_smb1'}
          playerStats.image = eval(frameTemp);
   
        }

};
Galaxy.prototype.ruigi = function (map,currMap) {

    if (this.key.up.active && !playerStats.jumping) {
        this.key.up.active = false;
        playerStats.jumping = true;
        playerStats.spriteNum = 3;
      }
      if (this.key.left.active) {
       playerStats.spriteNum = 2;
      }
      if (this.key.right.active) {
          playerStats.spriteNum = 1;
      }
      if (!this.key.left.active && !this.key.right.active) {
          playerStats.spriteNum = 4;
      }
    
      if (this.count >= this.delay) {// If enough cycles have passed, we change the frame.
          this.count = 0;// Reset the count.
  
        
          /*********************Player Animation *************************/
          var frameTemp; 
         // var charTpye = 
          if ((this.key.left == true) && (this.key.up == false)){frameTemp = 'luigiWalk';}
          else if ((this.key.right == true) && (this.key.up == false)){frameTemp = 'luigiWalk';}
          else if ((this.key.up == true) || ((this.key.up == true) && (this.key.right == true))|| ((this.key.up == true) && (this.left.right == true))){frameTemp = 'luigiWalk';}else {frameTemp = 'luigiWalk';}
          if(this.key.left == true || this.key.right  == true){
              //console.log(this.frame_set);
          switch(this.frame_set) {
              case 1:
                frame_set = 2;
                frameTemp = frameTemp + "1_smb1";
                break;
              case 2:
                frame_set = 1;
                frameTemp = frameTemp + '2_smb1';
                break;
  
            }
            this.frame_set = frame_set;
  
          }else{frameTemp = 'luigiWalk_smb1'}
          playerStats.image = eval(frameTemp);
   
        }

};

Galaxy.prototype.loop = function(time_stamp) {

   
    if (this.count >= this.delay2) {
        this.count2 = 0;// Reset the count.
        var mystery;
        switch(this.mystery) {
            case 0:
        
                mysteryY = 0;      
              break;
            case 1:
             
                mysteryY = -5;      
      
              break;
              case 2:
                mysteryY = 0;      
      
              break;

          }
    }
    if (this.count >= this.delay) {// If enough cycles have passed, we change the frame.
        //console.log("mystery");
        this.count = 0;// Reset the count.

        var mystery;
        switch(this.mystery) {
            case 0:
                mystery = 1;
                this.mysteryBlock =  eval(mysteryBlock);
              break;
            case 1:
                mystery = 2;
                this.mysteryBlock =  eval(mysteryBlock1);
      
              break;
              case 2:
                mystery = 0;
                this.mysteryBlock =  eval(mysteryBlock2);
      
              break;

          }
          this.mystery = mystery;

         
      }
  };

Galaxy.prototype.draw = function (context,map,currMap) {

this.draw_map(context,false,map,currMap);
this.draw_player(map,currMap);
this.draw_goomba(currMap.goomba,map,currMap);
};
Galaxy.prototype.viewLimit = function(){

    this.count = this.count +  1;//Player Frame Count
    this.count2 = this.count2 +  1;//Player Frame Count

 playerBlock = playerStop - 100;//Player Viewport Blocker
  playerBlock1  = playerBlock.toFixed(0);
if (playerStats.location.x <= playerBlock1){playerStats.velocity.x=0;
this.key.left = false;
}

}


Galaxy.prototype.update_goomba = function (goomba,map,currMap) {
 
  
    this.move_goomba(goomba,map,currMap);
    
    };


Galaxy.prototype.move_goomba = function (goomba,map,currMap) {


        var tX = goomba.player.loc.x + goomba.player.vel.x;
        var tY = goomba.player.loc.y + goomba.player.vel.y;
       // console.log(t);
        var offset = Math.round((goomba.spriteSize / 2) -1);//Camera Offset
        

       // console.log(tX);
      /**************Enemy Solid Object Finder***************/
      var goombaX = (goomba.player.loc.x);// + goomba.spriteSize / 2);
//console.log(goombaX);
      var t1 = 0;
for (var y = 0; y < currMap.goomba.obsticle.length; y++) {
   var tempx1 =  xObsticle[y];
var tempx2 = x2Obsticle[y];

if (goombaX >= tempx1 && goombaX <= tempx2){
t1 = 1;
}



var z1 = (goomba.player.loc.x + goomba.spriteSize / 2 - currMap.camera.x);
var z2 = (playerStats.location.x + currMap.spriteSize / 2 - currMap.camera.x);

var q1 = playerStats.location.y;
var q2 = goomba.player.loc.y;


if (z1 >= (z2-10) && z1 <= (z2+10)){
    if((q2 >= (q1 -5)) && (q2 <= (q1+5))){
        //console.log("in");
    
    //console.log("Goomba Kill you");
    //console.log(playerStats.location.y,goomba.player.loc.y);
    playerStop = 0;
    playerBlock = 0;
    playerBlock1 = 0;
    playerLastX = 0;
    playerLastY = 0;
    playerStats.location.x = 0;
    playerStats.health -= 1;
    console.log("you died");
    this.load_map(map,currMap);
}
}
     }
     if (t1 == 1){
            goomba.player.vel.x *= -1; 
}
            goomba.player.loc.x += goomba.player.vel.x;
            goomba.player.loc.y += goomba.player.vel.y;   
        };

Galaxy.prototype.draw_goomba = function (goomba,map,currMap){


    var goombaX = (goomba.player.loc.x + goomba.spriteSize / 2 - currMap.camera.x);
    var goombaY = (goomba.player.loc.y + goomba.spriteSize / 2 - currMap.camera.y)-6;    
    var r1 = goombaX - 350;
    var r2 = goombaX + 350;



    if (r1 <= playerLastX && r2 > playerLastX){
        context2.drawImage(goomba_smb1,goombaX,goombaY,goomba.spriteSize,goomba.spriteSize);

    }
}
     


  
function logon(e){
    
console.log('Logging On');
	var uemail=document.getElementById("uemail").value;
	var upassword=document.getElementById("upassword").value;
	event.preventDefault()
	console.log(e.value,uemail,upassword)
	var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
				console.log(this.responseText)
				if(this.response==1){
				window.location.href = "logged_in.html";
				}
				else{
					alert("Login failed! Try again");
				}
				//alert(this.responseText);
            }
        }
		//xmlhttp.open("GET", "../01_php_scripts/RabbitMQClientSample.php?type=Ulogin"+"&email="+uemail+"&password="+upassword, true);
		xmlhttp.open("GET", "../RabbitMQClientSample.php?type=Ulogin"+"&uemail="+uemail+"&upassword="+upassword, true);
        xmlhttp.send();
	
}    
 
function register(e){
    
    console.log('Registering');

	var uemail=document.getElementById("uemail").value;
	var upassword=document.getElementById("upassword").value;
	event.preventDefault()
	console.log(e.value,uemail,upassword)
	var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
				console.log(this.responseText)
				if(this.response==1){
				window.location.href = "logged_in.html";
				}
				else{
					alert("Login failed! Try again");
				}
				//alert(this.responseText);
            }
        }
		//xmlhttp.open("GET", "../01_php_scripts/RabbitMQClientSample.php?type=Ulogin"+"&email="+uemail+"&password="+upassword, true);
		xmlhttp.open("GET", "../RabbitMQClientSample.php?type=Ulogin"+"&uemail="+uemail+"&upassword="+upassword, true);
        xmlhttp.send();
	
} 



function playerAnim(){

setInterval(function(){

    context2.drawImage(marioR_smb1,20,20);


if(playerRefresh == 1){playerRefresh = 0;}else{playerRefresh = 1;}
if (playerPos == 'none'){
context2.clearRect(0, 0,400, 800);//Yoshi

context2.drawImage(marioR_smb1,20,20);

}
   
   }, 1000/60);
}


