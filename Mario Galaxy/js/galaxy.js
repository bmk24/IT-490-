
/* Galaxy engine */
var playerStop = 0;
var playerBlock = 0;
var playerBlock1;
var playerLastX = 0;
var playerLastY = 0;
var frame_set;
var game;
var Galaxy = function () {
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

Galaxy.prototype.load_map = function (map) {
game = map;
if (typeof map      === 'undefined'
|| typeof map.data === 'undefined'
|| typeof map.keys === 'undefined') {

   this.errorParse('Bad Map Data at:' + map);

   return false;
}

this.currentLevel = map;

//this.currentLevel.background = map.background || '#000000';
this.currentLevel.gravity = map.gravity || {x: 0, y: 0.3};
this.spriteSize = map.spriteSize || 24;

var _this = this;

this.currentLevel.width = 0;
this.currentLevel.height = 0;

map.keys.forEach(function (key) {

   map.data.forEach(function (row, y) {
       
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

this.player.loc.x = map.player.x * this.spriteSize || 0;
this.player.loc.y = map.player.y * this.spriteSize || 0;
this.player.spriteType = map.player.spriteType || '#000';

this.key.left  = false;
this.key.up    = false;
this.key.right = false;

this.camera = {
   x: 0,
   y: 0
};

this.player.vel = {
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
var tX = _this.player.loc.x + _this.player.vel.x;
var tY = _this.player.loc.y + _this.player.vel.y;

var offset = Math.round((_this.spriteSize / 2) -1);//Camera Offset

var tile = this.whatTile(
   Math.round(_this.player.loc.x / _this.spriteSize),
   Math.round(_this.player.loc.y / _this.spriteSize)
);

if(tile.gravity) {
   
   _this.player.vel.x += tile.gravity.x;
   _this.player.vel.y += tile.gravity.y;
   
} else {
   
   _this.player.vel.x += this.currentLevel.gravity.x;
   _this.player.vel.y += this.currentLevel.gravity.y;
}

if (tile.friction) {

   _this.player.vel.x *= tile.friction.x;
   _this.player.vel.y *= tile.friction.y;
}

var t_y_up   = Math.floor(tY / _this.spriteSize);
var t_y_down = Math.ceil(tY / _this.spriteSize);
var y_near1  = Math.round((_this.player.loc.y - offset) / _this.spriteSize);
var y_near2  = Math.round((_this.player.loc.y + offset) / _this.spriteSize);

var t_x_left  = Math.floor(tX / _this.spriteSize);
var t_x_right = Math.ceil(tX / _this.spriteSize);
var x_near1   = Math.round((_this.player.loc.x - offset) / _this.spriteSize);
var x_near2   = Math.round((_this.player.loc.x + offset) / _this.spriteSize);

var top1    = this.whatTile(x_near1, t_y_up);
var top2    = this.whatTile(x_near2, t_y_up);
var bottom1 = this.whatTile(x_near1, t_y_down);
var bottom2 = this.whatTile(x_near2, t_y_down);
var left1   = this.whatTile(t_x_left, y_near1);
var left2   = this.whatTile(t_x_left, y_near2);
var right1  = this.whatTile(t_x_right, y_near1);
var right2  = this.whatTile(t_x_right, y_near2);


if (tile.jump && _this.jump_switch > 15) {

   _this.player.can_jump = true;
   
   _this.jump_switch = 0;
   
} else _this.jump_switch++;

_this.player.vel.x = Math.min(Math.max(_this.player.vel.x, - this.currentLevel.defaultVelocity.x), this.currentLevel.defaultVelocity.x);
_this.player.vel.y = Math.min(Math.max(_this.player.vel.y, - this.currentLevel.defaultVelocity.y), this.currentLevel.defaultVelocity.y);

_this.player.loc.x += _this.player.vel.x;
_this.player.loc.y += _this.player.vel.y;

_this.player.vel.x *= .9;

if (left1.isSolid || left2.isSolid || right1.isSolid || right2.isSolid) {

   /* fix overlap */

   while (this.whatTile(Math.floor(_this.player.loc.x / _this.spriteSize), y_near1).isSolid
       || this.whatTile(Math.floor(_this.player.loc.x / _this.spriteSize), y_near2).isSolid)
       this.player.loc.x += .1;

   while (this.whatTile(Math.ceil(_this.player.loc.x / _this.spriteSize), y_near1).isSolid
       || this.whatTile(Math.ceil(_this.player.loc.x / _this.spriteSize), y_near2).isSolid)
       _this.player.loc.x -= .1;

   /* tile bounce */

   var canAbsorb = 0;

   if (left1.isSolid && left1.canAbsorb > canAbsorb) canAbsorb = left1.canAbsorb;
   if (left2.isSolid && left2.canAbsorb > canAbsorb) canAbsorb = left2.canAbsorb;
   if (right1.isSolid && right1.canAbsorb > canAbsorb) canAbsorb = right1.canAbsorb;
   if (right2.isSolid && right2.canAbsorb > canAbsorb) canAbsorb = right2.canAbsorb;

   _this.player.vel.x *= -canAbsorb || 0;
   
}

if (top1.isSolid || top2.isSolid || bottom1.isSolid || bottom2.isSolid) {

   /* fix overlap */
   
   while (this.whatTile(x_near1, Math.floor(this.player.loc.y / this.spriteSize)).isSolid
       || this.whatTile(x_near2, Math.floor(this.player.loc.y / this.spriteSize)).isSolid)
       this.player.loc.y += .1;

   while (this.whatTile(x_near1, Math.ceil(this.player.loc.y / this.spriteSize)).isSolid
       || this.whatTile(x_near2, Math.ceil(this.player.loc.y / this.spriteSize)).isSolid)
       this.player.loc.y -= .1;

   /* tile bounce */
   
   var canAbsorb = 0;
   
   if (top1.isSolid && top1.canAbsorb > canAbsorb) canAbsorb = top1.canAbsorb;
   if (top2.isSolid && top2.canAbsorb > canAbsorb) canAbsorb = top2.canAbsorb;
   if (bottom1.isSolid && bottom1.canAbsorb > canAbsorb) canAbsorb = bottom1.canAbsorb;
   if (bottom2.isSolid && bottom2.canAbsorb > canAbsorb) canAbsorb = bottom2.canAbsorb;
   
   this.player.vel.y *= -canAbsorb || 0;

   if ((bottom1.isSolid || bottom2.isSolid) && !tile.jump) {
       
       this.player.on_floor = true;
       this.player.can_jump = true;
   }
   
}

// adjust camera
if (_this.view){
var c_x = Math.round(_this.player.loc.x - this.viewport.x/4);
var c_y = Math.round(_this.player.loc.y - this.viewport.y/4);
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
if (that.player.spriteType == 'goomba'){}
else{
if (this.key.left) {

if(playerBlock1 >= this.player.loc.x){console.log("over")}
   if (this.player.vel.x > -this.currentLevel.defaultVelocity.x){
       this.player.vel.x -= this.currentLevel.playerSpeed.left;
        }
}
   

if (this.key.up) {

   if (this.player.can_jump && this.player.vel.y > -this.currentLevel.defaultVelocity.y) {
       //console.log("Disable JUmp");
       this.player.vel.y -= this.currentLevel.playerSpeed.jump;
       this.player.can_jump = false;
   }
}

if (this.key.right) {
  
    if (this.player.loc.x > playerStop){playerStop = this.player.loc.x
}

   if (this.player.vel.x < this.currentLevel.defaultVelocity.x)
       this.player.vel.x += this.currentLevel.playerSpeed.left;
}
//this.Goomba();

this.move_player(that);
}
};

Galaxy.prototype.draw_player = function (that) {
    var _this = that;
//console.log(this.camera.x);
    playerLocationX = (_this.player.loc.x + _this.spriteSize / 2 - this.camera.x);
    playerLocationY = (_this.player.loc.y + _this.spriteSize / 2 - this.camera.y)-6;
    playerLastX = playerLocationX;
    playerLastY = playerLocationY;
    context2.drawImage(_this.image,playerLocationX,playerLocationY)//}
console.log("Camera X Location: "+ this.camera.x +" Player X Location: " + playerLocationX);
if(game.goomba.goomba1){
    
    var tX = game.goomba.player.loc.x;
    var tY = game.goomba.player.loc.y;
    //console.log(tX,tY);
    console.log(tX);

    if ((tX >= (this.player.loc.x - 100)) && (tX <= (this.player.loc.x + 200))){
        game.goomba.player.loc.x = tX ;//+ _this.spriteSize / 2 - this.camera.x;
        game.goomba.player.loc.y = tY ;
        context.drawImage(goomba_smb1,game.goomba.player.loc.x,tY,16,16);//}
        
    }else{//console.log("kill gumba")
    ;
}
}
//
};
Galaxy.prototype.update = function () {

this.viewLimit();
this.update_player(this);
//this.update_player(game.goomba);
this.loop();
this.Goomba(game.goomba)
   
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
Galaxy.prototype.Goomba = function(that){
    var _this = that;
//_this.player.vel.x = Math.min(Math.max(_this.player.vel.x, - _this.defaultVelocity.x), _this.defaultVelocity.x);
//_this.player.vel.x *= .9;
var tX = _this.player.loc.x - _this.player.vel.x;
var tY = _this.player.loc.y;
//_this.player.loc.y += _this.player.vel.y;
_this.player.loc.x = tX;
_this.player.loc.y = tY;
var t_y_up   = Math.floor(tY / _this.spriteSize);
var t_y_down = Math.ceil(tY / _this.spriteSize);
var y_near1  = Math.round((_this.player.loc.y) / _this.spriteSize);
var y_near2  = Math.round((_this.player.loc.y) / _this.spriteSize);

var t_x_left  = Math.floor(tX / _this.spriteSize);
var t_x_right = Math.ceil(tX / _this.spriteSize);
var x_near1   = Math.round((_this.player.loc.x) / _this.spriteSize);
var x_near2   = Math.round((_this.player.loc.x) / _this.spriteSize);

//var top1    = this.whatTile(x_near1, t_y_up);
//var top2    = this.whatTile(x_near2, t_y_up);
//var bottom1 = this.whatTile(x_near1, t_y_down);
//var bottom2 = this.whatTile(x_near2, t_y_down);
var left1   = this.whatTile(t_x_left, y_near1);
//var left2   = this.whatTile(t_x_left, y_near2);
var right1  = this.whatTile(t_x_right, y_near1);
var right2  = this.whatTile(t_x_right, y_near2);


if (left1.isSolid) {
_this.key.left = false;
_this.key.right = true;
_this.player.vel.x = -.9;

}
if (right1.isSolid || right2.isSolid) {
_this.key.right = false;
_this.key.left = true;
_this.player.vel.x =  .9;

}


};
Galaxy.prototype.draw = function (context) {

this.draw_map(context, false);
this.draw_player(this);
};
Galaxy.prototype.viewLimit = function(){

    this.count = this.count +  1;//Player Frame Count
 playerBlock = playerStop - 100;//Player Viewport Blocker
  playerBlock1  = playerBlock.toFixed(0);
if (this.player.loc.x <= playerBlock1){this.player.vel.x=0;
this.key.left = false;
}

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
