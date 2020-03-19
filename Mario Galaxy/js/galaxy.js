
/* Galaxy engine */
var playerStop = 0;
var playerBlock = 0;
var playerBlock1;
var playerLastX = 0;
var playerLastY = 0;
var frame_set;
var game;

var xObsticle = [];
var x2Obsticle = [];







var Galaxy = function () {
    game = this;
   context.scale(2, 2);
//context2.scale(2, 2);
contextBack.fillStyle = "#5D94FB";
contextBack.fillRect(0, 0, canvasBack.width, canvasBack.height);







this.bigProblem   = false;
this.mainLog       = true;
this.spriteSize      = 24;
this.viewPortLim = false;
this.jump_switch    = 0;
this.delay = 15;
this.count = 0;
this.frame_set = 1;
this.mystery = 0;
this.image = marioR2_smb1;
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
this.viewport = {
   x: 200,
   y: 200
};

this.camera = {
   x: 0,
   y: 0
};

this.spriteSheet = {

    frame_sets:[[0, 1], [2, 3], [4, 5]]// standing still, walk right, walk left

  };

this.player = {

   loc: {
       x: 0,
       y: 0
   },
   
   vel: {
       x: 0,
       y: 0
   },
   
 
   can_jump: true
};

window.onkeydown = this.keydown.bind(this);
window.onkeyup   = this.keyup.bind(this);
};

Galaxy.prototype.errorParse = function (message) {

if (this.bigProblem) alert(message);
if (this.mainLog) console.log(message);
};

Galaxy.prototype.logger = function (message) {

if (this.mainLog) console.log(message);
};

Galaxy.prototype.viewPortConstructor = function (x, y) {

this.viewport.x = x;
this.viewport.y = y;
};

Galaxy.prototype.keydown = function (e) {

    var _this = this;
    
    switch (e.keyCode) {
    case 37:
       _this.key.left = true;
       playerPos = 'left';
       this.player.sprite == 1
       if (this.key.left.state != _this.key.left) this.key.left.active = _this.key.left;
       this.key.left.state  = _this.key.left;// Always update the physical state.
       break;
    case 38:
       _this.key.up = true;
       playerPos = 'up';
       this.player.sprite == 2

       if (this.key.up.state != _this.key.up) this.key.up.active = _this.key.up;
       this.key.up.state  = _this.key.up;
       break;
    case 39:
       _this.key.right = true;
       playerPos = 'right';
       this.player.sprite == 3

       if (this.key.right.state != _this.key.right) this.key.right.active = _this.key.right;
       this.key.right.state  = _this.key.right;
       break;
    }
    };
Galaxy.prototype.keyup = function (e) {

var _this = this;
//console.log(e.keyCode);
switch (e.keyCode) {
case 37:
   _this.key.left = false;
   playerPos = 'none';

   break;
case 38:
   _this.key.up = false;
   playerPos = 'none';

   break;
case 39:
   _this.key.right = false;
   playerPos = 'none';

   break;
}
};

Galaxy.prototype.load_map = function (map,currMap) {
game = map;

/**************Enemy Solid Object Finder***************/
for (var y = 0; y < game.goomba.obsticle.length; y++) {
    xObsticle[y] = game.goomba.obsticle[y].x1;
x2Obsticle[y] = game.goomba.obsticle[y].x2;
}
/**************Enemy Solid Object Finder***************/

if (typeof currMap      === 'undefined'
|| typeof currMap.data === 'undefined'
|| typeof map.keys === 'undefined') {

   this.errorParse('Bad Map Data at:' + map);

   return false;
}

this.currentLevel = currMap;

//this.currentLevel.background = map.background || '#000000';
this.currentLevel.gravity = map.gravity || {x: 0, y: 0.3};
this.spriteSize = map.spriteSize || 24;

var _this = this;

this.currentLevel.width = 0;
this.currentLevel.height = 0;

map.keys.forEach(function (key) {

    level_0101.data.forEach(function (row, y) {
       
       _this.currentLevel.height = Math.max(_this.currentLevel.height, y);

       row.forEach(function (tile, x) {
           
           _this.currentLevel.width = Math.max(_this.currentLevel.width, x);

           if (tile == key.id)
               _this.currentLevel.data[y][x] = key;
       });
   });
});

this.currentLevel.widthNext = this.currentLevel.width * this.spriteSize;
this.currentLevel.heightNext = this.currentLevel.height * this.spriteSize;

playerStats.location.x = map.player.x * this.spriteSize || 0;
playerStats.location.y = map.player.y * this.spriteSize || 0;
this.player.spriteType = map.player.spriteType || '#000';

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

Galaxy.prototype.whatTile = function (x, y) {

return (this.currentLevel.data[y] && this.currentLevel.data[y][x]) ? this.currentLevel.data[y][x] : 0;
};

Galaxy.prototype.draw_tile = function (x, y, tile, context,mapY,mapX) {
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
        contextBack.fillRect(x, y,this.spriteSize, this.spriteSize);
        break;
    case 1:
        context.fillRect(x, y,this.spriteSize,this.spriteSize);        
        break;
    case 2:
        context.drawImage(brickBlock,x,y,this.spriteSize,this.spriteSize);   
        break;
    case 3:
        context.drawImage(platformBlock,x,y,this.spriteSize,this.spriteSize);   
        break;
    case 4:
        context.drawImage(metalBlock,x,y,this.spriteSize,this.spriteSize);   
        break;
    case 5:
        //console.log("block 5");
        context.drawImage(this.mysteryBlock,x,y,this.spriteSize,this.spriteSize);   
        break;
    case 6:
        context.drawImage(rampBlock,x,y,this.spriteSize,this.spriteSize);   
        break;
    case 7:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,this.spriteSize, this.spriteSize); 
        break;
    case 8:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,this.spriteSize, this.spriteSize);         
        break;
    case 9:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,this.spriteSize, this.spriteSize);
        context.drawImage(tubeLeft,x,y,this.spriteSize*1.3,this.spriteSize);   
        break; 
    case 10:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,this.spriteSize, this.spriteSize);
        context.drawImage(tubeRight,x,y,this.spriteSize*1.3,this.spriteSize);   
        break; 
    case 11:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,this.spriteSize, this.spriteSize);
        context.drawImage(tubeLeft,x+4,y,this.spriteSize*.80,this.spriteSize*1.3);   
        break;  
    case 12:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,this.spriteSize, this.spriteSize);
        context.drawImage(tubeRight,x,y,this.spriteSize*.80,this.spriteSize*1.3);   
        break;  
    case 13:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,this.spriteSize, this.spriteSize);
        context.drawImage(tubeMid,x,y,(32),(tubeMid.height)) 
            break;  
    case 14:
            context.drawImage(greyMetal,x,y,this.spriteSize,this.spriteSize);   
            break; 
    case 15:
            contextBack.fillStyle = "#5D94FB";
            contextBack.fillRect(x, y,this.spriteSize, this.spriteSize);
            context.drawImage(hillTop,x,y,this.spriteSize,this.spriteSize);   
            break;  
    case 16:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,this.spriteSize, this.spriteSize);
            context.drawImage(hillLeft,x,y,this.spriteSize,this.spriteSize);   
            break;   
    case 17:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,this.spriteSize, this.spriteSize);
            context.drawImage(hillRight,x,y,hillRight.width,hillRight.height);   
            break;  
    case 18:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,this.spriteSize, this.spriteSize);
            context.drawImage(hillDimple,x,y,this.spriteSize,this.spriteSize);   
            break;  
    case 19:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,this.spriteSize, this.spriteSize);
        context.drawImage(hillMid,x,y,this.spriteSize,this.spriteSize);   
            break; 
    case 20:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,this.spriteSize, this.spriteSize);
        context.drawImage(bushMid,x,y,this.spriteSize,this.spriteSize);   
        break; 
    case 21:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,this.spriteSize, this.spriteSize);
        context.drawImage(bushLeft,x,y,this.spriteSize,this.spriteSize);   
        break; 
    case 22:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,this.spriteSize, this.spriteSize);
        context.drawImage(bushRight,x,y,this.spriteSize,this.spriteSize);   
        break;      
   }
};

Galaxy.prototype.draw_map = function (context, fore) {

for (var y = 0; y < this.currentLevel.data.length; y++) {

   for (var x = 0; x < this.currentLevel.data[y].length; x++) {

       if ((!fore && !this.currentLevel.data[y][x].fore) || (fore && this.currentLevel.data[y][x].fore)) {

           var xNext = (x * this.spriteSize) - this.camera.x;
           var yNext = (y * this.spriteSize) - this.camera.y;
           
           if(xNext < -this.spriteSize
           || yNext < -this.spriteSize
           || xNext > this.viewport.x
           || yNext > this.viewport.y 
           ) continue;
           this.draw_tile(
               xNext,
               yNext,
               this.currentLevel.data[y][x],
               context,
               y,
               x
           );
       }
   }
}

if (!fore) this.draw_map(context, true);
};

Galaxy.prototype.move_player = function (that) {
var _this = that;
var tX = playerStats.location.x + playerStats.velocity.x;
var tY = playerStats.location.y + playerStats.velocity.y;

var offset = Math.round((_this.spriteSize / 2) -1);//Camera Offset

var tile = this.whatTile(
   Math.round(playerStats.location.x / playerStats.spriteSize),
   Math.round(playerStats.location.y / playerStats.spriteSize)
);

if(tile.gravity) {
   
   playerStats.velocity.x += tile.gravity.x;
   playerStats.velocity.y += tile.gravity.y;
   
} else {
   
   playerStats.velocity.x += this.currentLevel.gravity.x;
   playerStats.velocity.y += this.currentLevel.gravity.y;
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

var top1    = this.whatTile(x_near1, t_y_up);
var top2    = this.whatTile(x_near2, t_y_up);
var bottom1 = this.whatTile(x_near1, t_y_down);
var bottom2 = this.whatTile(x_near2, t_y_down);
var left1   = this.whatTile(t_x_left, y_near1);
var left2   = this.whatTile(t_x_left, y_near2);
var right1  = this.whatTile(t_x_right, y_near1);
var right2  = this.whatTile(t_x_right, y_near2);


if (tile.jump &&playerStats.jump_switch > 15) {

    playerStats.can_jump = true;
   
  playerStats.jump_switch = 0;
   
} else playerStats.jump_switch++;

playerStats.velocity.x = Math.min(Math.max(playerStats.velocity.x, - playerStats.defaultVelocity.x), playerStats.defaultVelocity.x);
playerStats.velocity.y = Math.min(Math.max(playerStats.velocity.y, - playerStats.defaultVelocity.y), playerStats.defaultVelocity.y);

playerStats.location.x += playerStats.velocity.x;
playerStats.location.y += playerStats.velocity.y;

playerStats.velocity.x *= .9;

if (left1.isSolid || left2.isSolid || right1.isSolid || right2.isSolid) {

   /* fix overlap */

   while (this.whatTile(Math.floor(playerStats.location.x / playerStats.spriteSize), y_near1).isSolid
       || this.whatTile(Math.floor(playerStats.location.x / playerStats.spriteSize), y_near2).isSolid)
       playerStats.location.x += .1;

   while (this.whatTile(Math.ceil(playerStats.location.x / playerStats.spriteSize), y_near1).isSolid
       || this.whatTile(Math.ceil(playerStats.location.x / playerStats.spriteSize), y_near2).isSolid)
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
   
   while (this.whatTile(x_near1, Math.floor(playerStats.location.y / playerStats.spriteSize)).isSolid
       || this.whatTile(x_near2, Math.floor(playerStats.location.y / playerStats.spriteSize)).isSolid)
       playerStats.location.y += .1;

   while (this.whatTile(x_near1, Math.ceil(playerStats.location.y / playerStats.spriteSize)).isSolid
       || this.whatTile(x_near2, Math.ceil(playerStats.location.y / playerStats.spriteSize)).isSolid)
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
if (_this.view){
var c_x = Math.round(playerStats.location.x - this.viewport.x/4);
var c_y = Math.round(playerStats.location.y - this.viewport.y/4);
var x_dif = Math.abs(c_x - this.camera.x);
var y_dif = Math.abs(c_y - this.camera.y);

if(x_dif > 5) {
   
   var mag = Math.round(Math.max(1, x_dif * 0.1));

   if(c_x != this.camera.x) {
       
       this.camera.x += c_x > this.camera.x ? mag : -mag;
       
       if(_this.viewPortLim) {
           
           _this.camera.x = 
               Math.min(
                   _this.currentLevel.widthNext - this.viewport.x + _this.spriteSize,
                   this.camera.x
               );
           
           this.camera.x = 
               Math.max(
                   0,
                   this.camera.x
               );
       }
   }
}

if(y_dif > 5) {
   
   var mag = Math.round(Math.max(1, y_dif * 0.1));
   
   if(c_y != this.camera.y) {
       
       this.camera.y += c_y > this.camera.y ? mag : -mag;
   
       if(this.viewPortLim) {
           
           this.camera.y = 
               Math.min(
                   this.currentLevel.heightNext - this.viewport.y + this.spriteSize,
                   this.camera.y
               );
           
           this.camera.y = 
               Math.max(
                   0,
                   this.camera.y
               );
       }
   }
}

if(this.last_tile != tile.id && tile.script) {

   eval(this.currentLevel.scripts[tile.script]);
}

this.last_tile = tile.id;
}
};

Galaxy.prototype.update_player = function (that) {

if (this.key.left) {

if(playerBlock1 >= playerStats.location.x){console.log("over")}
   if (playerStats.velocity.x > -playerStats.defaultVelocity.x){
       playerStats.velocity.x -= playerStats.playerSpeed.left;
        }
}
   

if (this.key.up) {

   if (playerStats.can_jump && playerStats.velocity.y > -playerStats.defaultVelocity.y) {
       //console.log("Disable JUmp");
       playerStats.velocity.y -= playerStats.jumpHeight;
       playerStats.can_jump = false;
   }
}

if (this.key.right) {
  
    if (playerStats.location.x > playerStop){playerStop = playerStats.location.x
}

   if (playerStats.velocity.x < this.currentLevel.defaultVelocity.x)
       playerStats.velocity.x += this.currentLevel.playerSpeed.left;
}
//this.Goomba();

this.move_player(that);

};

Galaxy.prototype.draw_player = function (that) {
    var _this = that;
//console.log(playerStats.location.x);
    playerLocationX = (playerStats.location.x + _this.spriteSize / 2 - this.camera.x);
    playerLocationY = (playerStats.location.y + _this.spriteSize / 2 - this.camera.y)-6;
    playerLastX = playerLocationX;
    playerLastY = playerLocationY;
    context2.drawImage(_this.image,playerLocationX,playerLocationY)//}

};
Galaxy.prototype.update = function () {

this.viewLimit();
this.update_player(this);
//this.update_player(game.goomba);
this.loop();
this.update_goomba(game.goomba);
   
};
Galaxy.prototype.loop = function(time_stamp) {

    if (this.key.up.active && !this.player.jumping) {
      this.key.up.active = false;
      this.player.jumping = true;
      this.player.sprite = 3;
    }
    if (this.key.left.active) {
     this.player.sprite = 2;
    }
    if (this.key.right.active) {
        this.player.sprite = 1;
    }
    if (!this.key.left.active && !this.key.right.active) {
        this.player.sprite = 4;
    }
    if (this.count >= this.delay) {// If enough cycles have passed, we change the frame.
        this.count = 0;// Reset the count.



        /*********************Player Animation *************************/
        var frameTemp; 
        if ((this.key.left == true) && (this.key.up == false)){frameTemp = 'marioL';}
        else if ((this.key.right == true) && (this.key.up == false)){frameTemp = 'marioR';}
        else if ((this.key.up == true) || ((this.key.up == true) && (this.key.right == true))|| ((this.key.up == true) && (this.left.right == true))){frameTemp = 'marioU';}else {frameTemp = 'marioR';}
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

        }else{frameTemp = frameTemp +'2_smb1'}
        this.image = eval(frameTemp)
        /*********************Player Animation *************************/
        /***************** Mystery Block Animation ********************/
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
        /***************** Mystery Block Animation ********************/       
      }
  };

Galaxy.prototype.draw = function (context) {

this.draw_map(context, false);
this.draw_player(this);
this.draw_goomba(game.goomba);
};
Galaxy.prototype.viewLimit = function(){

    this.count = this.count +  1;//Player Frame Count
 playerBlock = playerStop - 100;//Player Viewport Blocker
  playerBlock1  = playerBlock.toFixed(0);
if (playerStats.location.x <= playerBlock1){playerStats.velocity.x=0;
this.key.left = false;
}

}


Galaxy.prototype.update_goomba = function (goomba) {
 
  
    this.move_goomba(goomba);
    
    };


Galaxy.prototype.move_goomba = function (goomba) {


        var tX = goomba.player.loc.x + goomba.player.vel.x;
        var tY = goomba.player.loc.y + goomba.player.vel.y;
       // console.log(t);
        var offset = Math.round((goomba.spriteSize / 2) -1);//Camera Offset
        

       // console.log(tX);
      /**************Enemy Solid Object Finder***************/
      var goombaX = (goomba.player.loc.x);// + goomba.spriteSize / 2);
//console.log(goombaX);
      var t1 = 0;
for (var y = 0; y < game.goomba.obsticle.length; y++) {
   var tempx1 =  xObsticle[y];
var tempx2 = x2Obsticle[y];

if (goombaX >= tempx1 && goombaX <= tempx2){
t1 = 1;
}



var z1 = (goomba.player.loc.x + goomba.spriteSize / 2 - this.camera.x);
var z2 = (playerStats.location.x + this.spriteSize / 2 - this.camera.x);

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
    this.load_map(map);
}
}
     }
     if (t1 == 1){
            goomba.player.vel.x *= -1; 
}
            goomba.player.loc.x += goomba.player.vel.x;
            goomba.player.loc.y += goomba.player.vel.y;   
        };

Galaxy.prototype.draw_goomba = function (goomba){


    var goombaX = (goomba.player.loc.x + goomba.spriteSize / 2 - this.camera.x);
    var goombaY = (goomba.player.loc.y + goomba.spriteSize / 2 - this.camera.y)-6;    
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

var myVar = setInterval(myTimer, 150);

function myTimer() {

if ((playerPos == 'right')){

   switch(playerRefresh){
       case 0:
           context2.clearRect(0, 0,400, 800);//Yoshi

           context2.drawImage(marioR1_smb1,playerLocationX,playerLocationY);
           break;
       case 1:
           context2.clearRect(0, 0,400, 800);//Yoshi

           context2.drawImage(marioR2_smb1,playerLocationX,playerLocationY);
           break;
   }
}    else    if (playerPos == 'left'){
   switch(playerRefresh){
       case 0:
           context2.clearRect(0, 0,400, 800);//Yoshi

           context2.drawImage(marioL1_smb1,playerLocationX,playerLocationY);
           break;
       case 1:
           context2.clearRect(0, 0,400, 800);//Yoshi

           context2.drawImage(marioL2_smb1,playerLocationX,playerLocationY);   
           break;
   }

}else if (playerPos == 'up'){
   context2.clearRect(0, 0,400, 800);//Yoshi

   context2.drawImage(marioR_smb1,playerLocationX,playerLocationY);

}




}
