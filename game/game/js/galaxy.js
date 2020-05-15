
/* Galaxy engine */


var Galaxy = function () {
   // alert(playerStats.currentLevel);
  
context.scale(2, 2);
this.bigProblem   = false;
this.mainLog       = true;
this.viewPortLim = false;
this.delay = 10;
this.delay2 = 15;
this.count = 0;
this.goomba = 0;
this.count2 = 0;
this.frame_set = 1;
this.mystery = 0;
this.coins = 0;
this.view = true;
this.phone = 0;
this.startBack = 0;
this.isPaused = false;
this.gamePause = 0;
this.mysteryBlock = mysteryBlock;
this.goomba2 = 1;

this.koopa2 = 1;

this.coinKey = coin_1;
window.onkeydown = this.keydown.bind(this);
window.onkeyup   = this.keyup.bind(this);
if (playerStats.spriteType == 'Vario' || playerStats.spriteType == 'vario'){
    playerStats.image = marioWalk1_smb1;
    }
    if (playerStats.spriteType == 'Yario' || playerStats.spriteType == 'yario'){
        playerStats.image = warioWalk1_smb1;

    }
    if (playerStats.spriteType == 'Wowser' || playerStats.spriteType == 'wowser'){
        playerStats.image = bowserWalk1_smb1;

    }
    if (playerStats.spriteType == 'Ruigi' || playerStats.spriteType == 'ruigi'){
        playerStats.image = luigiWalk1_smb1;

    }

};
Galaxy.prototype.setup = function (map,currMap){
    this.getPlayer(map,currMap);
    if (playerStats.health < 1) {
        console.log("Low Health");
        playerStats.health = 3;

    }
    playerStats.jump_switch    = 0;



    //playerSpeed.jump
    /*
    location: {
    x: 5,
    y:5,
},
speed: 2.0,
jumpHeight: 7,


plyayerSpeed: {
    jump: 6.5,
    left: 0.2,
    right: 0.2
    },    
  bowser:{
    x: 1,
    y: 13
  },
  mario:{
    x: 1.5,
    y: 16
  },
  wario:{
    x: 2.5,
    y: 15
  },
  luigi:{
    x: 1,
    y: 19
  },      

    
    
    
    
    
    
    */
//send all info backkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
//setStats(username,levelsComplete,currentLevel,currentPoints,maxPoints,spritePack,character,currency,currentLives)
//setPoints(username,points)
//playerStats.currencyCode = jsonResult.currencyCode;
//playerStats.spriteType = jsonResult.characterName;
//playerStats.coin=jsonResult.currentPoints;
//playerStats.username=jsonResult.username;
//playerStats.health=jsonResult.playerLives;
//playerStats.sprite=jsonResult.spritePack;
//playerStats.currentLevel=jsonResult.currentLevel;
//playerStats.levelsComplete=jsonResult.levelsComplete;
//playerStats.maxPoints=jsonResult.maxPoints;
if (currMap.background == "sky"){
    contextBack.fillStyle = "#5D94FB";

}
if (currMap.background == "dark"){
    contextBack.fillStyle = "black";

}
if (currMap.background == "ocean"){
    contextBack.fillStyle = "#5D94FB";

}
this.logger("Level Type: " + currMap.background);
contextBack.fillRect(0, 0, canvasBack.width, canvasBack.height);


 map.key = {
    left:  { active:false, state:false },
    right: { active:false, state:false },
    up:    { active:false, state:false },
 };

};
Galaxy.prototype.errorParse = function (message) {

if (this.bigProblem) alert(message);
if (this.mainLog) console.log(message);
};
Galaxy.prototype.clock = function (map,currMap) {
    var countdownTemp = currMap.time;
    //clearInterval(map.countdownTimer);     

    map.countdownTimer = setInterval(function() {//Start Countdown for pre defined time
        if(!this.isPaused) {
             countdownTemp--;
    currMap.time = countdownTemp; 
            document.getElementById('clock').innerHTML = ('<p>Time:' + countdownTemp +   '   Level:' + currMap.levelName +  '</p>');
            document.getElementById('health').innerHTML = ('<p>Lives:' + playerStats.health +  '</p>');
            document.getElementById('coin').innerHTML = ('<p>Coins:' + playerStats.coin +  '   Currency:' + playerStats.currencyCode + '</p>');
            if (this.gamePause == 1){
                clearInterval(map.countdownTimer);
    
            }
            if (countdownTemp <= 0) {//Once over, Start Recording
                clearInterval(map.countdownTimer);     

                console.log("You have died");
                currMap.time = 150;
                Galaxy.prototype.load_map(map,currMap);//}
    
            }
        
        }
        if (playerStats.invincible == true){
if (playerStats.coolDown == 0){
    playerStats.coolDown = 10;
}else if(playerStats.coolDown == 1){
playerStats.invincible = false;
playerStats.coolDown = 0;
}
else{
    playerStats.coolDown -= 1;
}

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
    case 77:
        audio.play();
        break;
    case 37:
       map.key.left = true;

       playerPos = 'left';
       playerStats.spriteNum == 1
       if (map.key.left.state != map.key.left) map.key.left.active = map.key.left;
       map.key.left.state  = map.key.left;// Always update the physical state.
       break;
    case 38:
       map.key.up = true;
       playerPos = 'up';
       playerStats.spriteNum == 2

       if (map.key.up.state != map.key.up) map.key.up.active = map.key.up;
       map.key.up.state  = map.key.up;
       break;
    case 39:
       map.key.right = true;
       playerPos = 'right';
       //console.log('right');
       playerStats.spriteNum == 3

       if (map.key.right.state != map.key.right) map.key.right.active = map.key.right;
       map.key.right.state  = map.key.right;
       break;

    case 83:
        if(this.gamePause == 0){
            this.gamePause = 1;
            this.isPaused = true;
   

            pauseAudio.play();
            console.log("Game Paused...");
        }
        else{
            this.gamePause = 0;
            this.isPaused = false;
            this.startBack = 1;
            console.log("Game Resuming...");
            
        }
    }
    };
Galaxy.prototype.keyup = function (e) {

//console.log(e.keyCode);
switch (e.keyCode) {
case 37:
   map.key.left = false;
   playerPos = 'none';

   break;
case 38:
   map.key.up = false;
   playerPos = 'none';

   break;
case 39:
   map.key.right = false;
   playerPos = 'none';

   break;
}
};

Galaxy.prototype.load_map = function (map,currMap) {


this.clock(map,currMap);
this.setup(map,currMap);


if (typeof currMap      === 'undefined'
|| typeof currMap.data === 'undefined'
|| typeof currMap.keys === 'undefined') {

   this.errorParse('Bad Map Data at:' + map);

   return false;
}

if (playerStats.sprite == "NA" || playerStats.sprite == "1"){
    playerStats.sprite = "1";
    this.brickBlock = brickBlockV1;
    this.platformBlock = platformBlockV1;
    this.rampBlock = rampBlockV1;

    //currMap.keys[2].img = brickBlockV1;

    /*        {id: 2,isSolid: 1,canAbsorb: 0,img:brickBlock},
        {id: 3,isSolid: 1,canAbsorb: 0,img:platformBlock},
        {id: 4,isSolid: 1,canAbsorb: 0,img:metalBlock},
        {id: 5,isSolid: 1,canAbsorb: 0, script: 'mys',img:mysteryBlock},
        {id: 6,isSolid: 1,canAbsorb: 0,img:rampBlock}, 

    */
   console.log("Sprite Pack 1");


    /*
 {id: 2,isSolid: 1,canAbsorb: 0,img:brickBlockV1},
      {id: 3,isSolid: 1,canAbsorb: 0,img:platformBlock},
      {id: 4,isSolid: 1,canAbsorb: 0,img:metalBlock},
      {id: 5,isSolid: 1,canAbsorb: 0, script: 'mys',img:mysteryBlock},
      {id: 6,isSolid: 1,canAbsorb: 0,img:rampBlock},


    */

}else if (playerStats.sprite == "2"){
    this.brickBlock = brickBlockV2;
    this.platformBlock = platformBlockV2;
    this.rampBlock = rampBlockV2;
   // currMap.keys[2].id.img = brickBlockV2;
console.log("Sprite Pack 2");

}else if (playerStats.sprite == "3"){
    this.brickBlock = brickBlockV3;
    this.platformBlock = platformBlockV3;
    this.rampBlock = rampBlockV3;
  //  currMap.keys[2].id.img = eval(brickBlockV3);
console.log("Sprite Pack 3");

}
//playerStats.sprite=jsonResult.spritePack;

//currMap.background = map.background || '#000000';
currMap.gravity = map.gravity || {x: 0, y: 0.3};
currMap.spriteSize = map.spriteSize || 24;


currMap.width = 0;
currMap.height = 0;

currMap.keys.forEach(function (key) {

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

playerStats.location.x = 5 * 16 || 0;
playerStats.location.y = 5 * 16 || 0;

map.key.left  = false;
map.key.up    = false;
map.key.right = false;

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


var tempTile = tile.id;
contextBack.fillStyle = "#5D94FB";
if (currMap.background == "sky"){
    contextBack.fillStyle = "#5D94FB";

}
if (currMap.background == "dark"){
    contextBack.fillStyle = "black";

}
if (currMap.background == "ocean"){
    contextBack.fillStyle = "#5D94FB";

}
contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
//this.brickBlock = brickBlockV2;
    //this.platformBlock = platformBlockV2;
   // this.rampBlock = rampBlockV2;
switch (tempTile) {
    case 1:
        contextBack.fillRect(x,y,currMap.spriteSize,currMap.spriteSize);   
        break;
    case 2:
        context.drawImage(this.brickBlock,x,y,currMap.spriteSize,currMap.spriteSize);   
        break; 
    case 3:
        context.drawImage(this.platformBlock,x,y,currMap.spriteSize,currMap.spriteSize);   
        break; 
    case 6:
        context.drawImage(this.rampBlock,x,y,currMap.spriteSize,currMap.spriteSize);   
        break; 
    case 9:
        context.drawImage(tile.img,x,y,currMap.spriteSize*1.3,currMap.spriteSize);   
        break; 
    case 10:
        context.drawImage(tile.img,x,y,currMap.spriteSize*1.3,currMap.spriteSize);   
        break; 
    case 11:
        context.drawImage(tile.img,x+4,y,currMap.spriteSize*.80,currMap.spriteSize*1.3);   
        break;  
    case 12:
        context.drawImage(tile.img,x,y,currMap.spriteSize*.80,currMap.spriteSize*1.3);   
        break;  
    case 13:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(tile.img,x,y,(32),(tubeMid.height)) 
            break;  
    default:
        if(tile.id ==5){
            context.drawImage(this.mysteryBlock,x,y+mysteryY,currMap.spriteSize,currMap.spriteSize);   

        }
        else if(tile.id >64 && tile.id < 85){
            context.drawImage(this.mysteryBlock,x,y+mysteryY,currMap.spriteSize,currMap.spriteSize);   

        }
        else if(tile.id ==99){
            context.drawImage(this.coinKey,x,y-2,currMap.spriteSize,currMap.spriteSize);   
        }

        else if(tile.id > 199 && tile.id < 299){
            if (tile.enabled){
            context.drawImage(this.coinKey,x,y-2,currMap.spriteSize,currMap.spriteSize);   
            }
        }
else{
    try {
        if (tile.img){
            context.drawImage(tile.img,x,y,currMap.spriteSize,currMap.spriteSize);   
        }
        if (tile.color){
            contextBack.fillStyle = tile.color;
            contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        }
      }
      catch(err) {
        console.log(err);
        console.log(tile.id,tile.color,tile.img);
      }
     
    }
        break
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
if (playerStats.mushroom.activated == true){

    var tX = playerStats.mushroom.location.x + playerStats.mushroom.velocity.x;
    var tY = playerStats.mushroom.location.y + playerStats.mushroom.velocity.y;
    
   

  if(playerStats.location.x >= (playerStats.mushroom.location.x-2) && playerStats.location.x <= (playerStats.mushroom.location.x+2)){
    if(playerStats.location.y >= (playerStats.mushroom.location.y-3) && playerStats.location.y <= (playerStats.mushroom.location.y+3)){
        console.log("Mushreoom");
        playerStats.mushroom.activated = false; 
playerStats.invincible = true;
    }

  }
}

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


if (tile.jump &&playerStats.jump_switch > 15) {

    playerStats.can_jump = true;
   
  playerStats.jump_switch = 0;
   
} else playerStats.jump_switch++;

playerStats.velocity.x = Math.min(Math.max(playerStats.velocity.x, - playerStats.speed), playerStats.speed);
//playerStats.velocity.x = playerStats.speed;


if (playerStats.spriteType == 'Vario' || playerStats.spriteType == 'vario'){
    playerStats.velocity.y = Math.min(Math.max(playerStats.velocity.y, - playerStats.mario.y), playerStats.mario.y);

}
if (playerStats.spriteType == 'Yario' || playerStats.spriteType == 'yario'){
    playerStats.velocity.y = Math.min(Math.max(playerStats.velocity.y, - playerStats.wario.y), playerStats.wario.y);

}
if (playerStats.spriteType == 'Wowser' || playerStats.spriteType == 'wowser'){
    playerStats.velocity.y = Math.min(Math.max(playerStats.velocity.y, - playerStats.bowser.y), playerStats.bowser.y);

}
if (playerStats.spriteType == 'Ruigi' || playerStats.spriteType == 'ruigi'){
    playerStats.velocity.y = Math.min(Math.max(playerStats.velocity.y, - playerStats.luigi.y), playerStats.luigi.y);

}


//
//playerStats.velocity.y = Math.min(Math.max(playerStats.velocity.y, - playerStats.defaultVelocity.y), playerStats.defaultVelocity.y);
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
      // playerStats.location.y += .1;//DO NoT REMOVE, BREAKS PLAYER SOMEHOW
       playerStats.location.y += .1;//DO NoT REMOVE, BREAKS PLAYER SOMEHOW


   while (this.whatTile(x_near1, Math.ceil(playerStats.location.y / playerStats.spriteSize),map,currMap).isSolid
       || this.whatTile(x_near2, Math.ceil(playerStats.location.y / playerStats.spriteSize),map,currMap).isSolid)
        //playerStats.location.y -= .1;//DO NOT REMOVE, BREAKS PLAYER SOMEHOW
        playerStats.location.y -= .1;//DO NoT REMOVE, BREAKS PLAYER SOMEHOW

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

if (top1.id > 64 && top1.id <86){

    if (currMap.data[t_y_up][x_near1].ability == "mushroom"){
        currMap.data[t_y_up][x_near1].ability = "";

        playerStats.mushroom.activated = true;
        var xNext = (x_near1 * currMap.spriteSize) - currMap.camera.x;
        var yNext = (t_y_up * currMap.spriteSize) - currMap.camera.y;
        playerStats.mushroom.location.x = tX;
        playerStats.mushroom.location.y = tY-25;

    }
    
   

    currMap.data[t_y_up][x_near1].id = 4;currMap.data[t_y_up][x_near1].img = metalBlock;currMap.data[t_y_up][x_near1].script = "";this.coin(map,currMap);


}
if (top2.id > 64 && top2.id <86){

    if (currMap.data[t_y_up][x_near2].ability == "mushroom"){
        currMap.data[t_y_up][x_near2].ability = "";
        playerStats.mushroom.activated = true;
        var xNext = (x_near1 * currMap.spriteSize) - currMap.camera.x;
        var yNext = (t_y_up * currMap.spriteSize) - currMap.camera.y;
        playerStats.mushroom.location.x = tX;
        playerStats.mushroom.location.y = tY-25;

    }



    currMap.data[t_y_up][x_near2].id = 4;currMap.data[t_y_up][x_near2].img = metalBlock;currMap.data[t_y_up][x_near2].script = "";this.coin(map,currMap);;}  
if (right1.id > 199 && right1.id <300){
   
    currMap.data[y_near1][t_x_right].enabled = false;

    currMap.data[y_near1][t_x_right].img = eval(skyBlock);
    currMap.data[y_near1][t_x_right].script="";
console.log(currMap.data[y_near1][t_x_right]);
}   


/*
var tX = playerStats.location.x + playerStats.velocity.x;
var tY = playerStats.location.y + playerStats.velocity.y;
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

*/
};

//implemented modifier and coin value logic  BY:Tim Chube
Galaxy.prototype.coin = function (map,currMap){
    var audio = new Audio('../music/theme_song.mp3');
    var overAudio = new Audio('../music/smb_gameover.wav');
    var pauseAudio = new Audio('../music/smb_pause.wav');
    var clearAudio = new Audio('../music/smb_stage_clear.wav');
    var warnAudio = new Audio('../music/smb_warning.wav');
    coinAudio.play();
    if (playerStats.modifier>0){
    //console.log(playerStats.modifier);
    var rounded;
    rounded=playerStats.coin +1-playerStats.modifier/100;
  
    playerStats.coin=+rounded.toFixed(2);
    if (!isNaN(playerStats.coin)){
    
    //setPoints(playerStats.username,playerStats.coin);  
    }
   }
    else if(playerStats.modifier<0) {
    playerStats.coin+=1+Math.abs(playerStats.modifier);
    
     if (!isNaN(playerStats.coin)){
    
    //setPoints(playerStats.username,playerStats.coin);  
    }
   }
    else if (playerStats.modifier==0){
    //setPoints(playerStats.username,playerStats.coin+1); 
   }

};

Galaxy.prototype.update_player = function (map,currMap) {

if (map.key.left) {

if(playerBlock1 >= playerStats.location.x){
    //console.log("over")
}
   if (playerStats.velocity.x > -playerStats.speed){
       playerStats.velocity.x -= playerStats.playerSpeed.left;
        }
}
   

if (map.key.up) {

   if (playerStats.can_jump && playerStats.velocity.y > -playerStats.speed) {
       //console.log("Disable JUmp");
       playerStats.velocity.y -= playerStats.jumpHeight;
       playerStats.can_jump = false;
   }
}

if (map.key.right) {
  
    if (playerStats.location.x > playerStop){playerStop = playerStats.location.x
}

   if (playerStats.velocity.x < playerStats.speed)
       playerStats.velocity.x += currMap.playerSpeed.left;
}
//this.Goomba();

this.move_player(map,currMap);

};

Galaxy.prototype.draw_player = function (map,currMap) {
    context2.lineWidth   = 1;

    playerLocationX = (playerStats.location.x + playerStats.spriteSize / 2 - currMap.camera.x);
    playerLocationY = (playerStats.location.y + playerStats.spriteSize / 2 - currMap.camera.y)-12;
    playerLastX = playerLocationX;
    playerLastY = playerLocationY;

 
    //context2.strokeRect(playerLocationX,playerLocationY,24,24);
    if (playerStats.spriteType == 'Wowser' || playerStats.spriteType == 'wowser'){
        playerLocationX = (playerStats.location.x + playerStats.spriteSize / 2 - currMap.camera.x)-10;

        playerLocationY = (playerStats.location.y + playerStats.spriteSize / 2 - currMap.camera.y)-40;

        context2.drawImage(playerStats.image,playerLocationX,playerLocationY,48,48);



    }else if (playerStats.spriteType == 'ruigi' || playerStats.spriteType == 'Ruigi'){
        playerLocationX = (playerStats.location.x + playerStats.spriteSize / 2 - currMap.camera.x)-10;

        playerLocationY = (playerStats.location.y + playerStats.spriteSize / 2 - currMap.camera.y)-24   ;

        context2.drawImage(playerStats.image,playerLocationX,playerLocationY,36,36);
    }  
    else{
        context2.drawImage(playerStats.image,playerLocationX,playerLocationY,20,20);

    }

 if (playerStats.mushroom.activated == true){
    playerLocationX3 = (playerStats.mushroom.location.x + playerStats.spriteSize / 2 - currMap.camera.x);
    playerLocationY3 = (playerStats.mushroom.location.y + playerStats.spriteSize / 2 - currMap.camera.y)-10;
    contextBack.drawImage(mushroom,playerLocationX3,playerLocationY3,12,12);
    //context2.strokeRect(playerLocationX3,playerLocationY3,24,24);


 } 

};

Galaxy.prototype.wowser = function (map,currMap) {

    if (map.key.up.active && !playerStats.jumping) {
        map.key.up.active = false;
        playerStats.jumping = true;
        playerStats.spriteNum = 3;
      }
      if (map.key.left.active) {
       playerStats.spriteNum = 2;
      }
      if (map.key.right.active) {
          playerStats.spriteNum = 1;
      }
      if (!map.key.left.active && !map.key.right.active) {
          playerStats.spriteNum = 4;
      }
    
      if (this.count >= this.delay) {// If enough cycles have passed, we change the frame.
          this.count = 0;// Reset the count.
  
        
          /*********************Player Animation *************************/
          var frameTemp; 
         // var charTpye = 
          if ((map.key.left == true) && (map.key.up == false)){frameTemp = 'bowserWalk';}
          else if ((map.key.right == true) && (map.key.up == false)){frameTemp = 'bowserWalk';}
          else if ((map.key.up == true) || ((map.key.up == true) && (map.key.right == true))|| ((map.key.up == true) && (this.left.right == true))){frameTemp = 'bowserWalk';}else {frameTemp = 'bowserWalk_smb1';}
          if(map.key.left == true || map.key.right  == true){
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

    if (map.key.up.active && !playerStats.jumping) {
        map.key.up.active = false;
        playerStats.jumping = true;
        playerStats.spriteNum = 3;
      }
      if (map.key.left.active) {
       playerStats.spriteNum = 2;
      }
      if (map.key.right.active) {
          playerStats.spriteNum = 1;
      }
      if (!map.key.left.active && !map.key.right.active) {
          playerStats.spriteNum = 4;
      }
   
  
     
      if (this.count >= this.delay) {// If enough cycles have passed, we change the frame.
        this.count = 0;// Reset the count.

      
          /*********************Player Animation *************************/
          var frameTemp; 
         // var charTpye = 
          if ((map.key.left == true) && (map.key.up == false)){frameTemp = 'marioWalk';}
          else if ((map.key.right == true) && (map.key.up == false)){frameTemp = 'marioWalk';}
          else if ((map.key.up == true) || ((map.key.up == true) && (map.key.right == true))|| ((map.key.up == true) && (this.left.right == true))){frameTemp = 'marioWalk';}else {frameTemp = 'marioWalk';}
          if(map.key.left == true || map.key.right  == true){
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
  
          }else{frameTemp = 'marioWalk1_smb1'}
          playerStats.image = eval(frameTemp);
          /*********************Player Animation *************************/
          /***************** Mystery Block Animation ********************/
         
          /***************** Mystery Block Animation ********************/    
        }   
        
};
Galaxy.prototype.yario = function (map,currMap) {

    if (map.key.up.active && !playerStats.jumping) {
        map.key.up.active = false;
        playerStats.jumping = true;
        playerStats.spriteNum = 3;
      }
      if (map.key.left.active) {
       playerStats.spriteNum = 2;
      }
      if (map.key.right.active) {
          playerStats.spriteNum = 1;
      }
      if (!map.key.left.active && !map.key.right.active) {
          playerStats.spriteNum = 4;
      }
    
      if (this.count >= this.delay) {// If enough cycles have passed, we change the frame.
          this.count = 0;// Reset the count.
  
        
          /*********************Player Animation *************************/
          var frameTemp; 
         // var charTpye = 
          if ((map.key.left == true) && (map.key.up == false)){frameTemp = 'warioWalk';}
          else if ((map.key.right == true) && (map.key.up == false)){frameTemp = 'warioWalk';}
          else if ((map.key.up == true) || ((map.key.up == true) && (map.key.right == true))|| ((map.key.up == true) && (this.left.right == true))){frameTemp = 'warioWalk';}else {frameTemp = 'warioWalk';}
          if(map.key.left == true || map.key.right  == true){
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

    if (map.key.up.active && !playerStats.jumping) {
        map.key.up.active = false;
        playerStats.jumping = true;
        playerStats.spriteNum = 3;
      }
      if (map.key.left.active) {
       playerStats.spriteNum = 2;
      }
      if (map.key.right.active) {
          playerStats.spriteNum = 1;
      }
      if (!map.key.left.active && !map.key.right.active) {
          playerStats.spriteNum = 4;
      }
    
      if (this.count >= this.delay) {// If enough cycles have passed, we change the frame.
          this.count = 0;// Reset the count.
  
        
          /*********************Player Animation *************************/
          var frameTemp; 
         // var charTpye = 
          if ((map.key.left == true) && (map.key.up == false)){frameTemp = 'luigiWalk';}
          else if ((map.key.right == true) && (map.key.up == false)){frameTemp = 'luigiWalk';}
          else if ((map.key.up == true) || ((map.key.up == true) && (map.key.right == true))|| ((map.key.up == true) && (this.left.right == true))){frameTemp = 'luigiWalk';}else {frameTemp = 'luigiWalk';}
          if(map.key.left == true || map.key.right  == true){
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
   
   
    if (this.count2 >= this.delay2) {
        this.count2 = 0;// Reset the count.
        var mystery;
        
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
          var coins;
        switch(this.coins) {
            case 0:
                coins = 1;
                this.coinKey =  eval(coin_2);
              break;
            case 1:
                coins = 2;
                this.coinKey =  eval(coin_3);
      
              break;
            case 2:
                coins = 0;
                this.coinKey =  eval(coin_1);
      
              break;

          }
          this.coins = coins;
        switch(this.mystery) {
            case 0:
        
                mysteryY = 0;      
              break;
            case 1:
             
                mysteryY = 0;      
      
              break;
              case 2:
                mysteryY = 0;      
      
              break;

          }
          var goo;
          switch(this.goomba) {
              case 0:
                goo = 1;
                this.goomba2 = 1; 
                this.koopa2 = 1; 

                break;
              case 1:
                goo =0;
                this.goomba2 = 2;
                this.koopa2 = 2;      
      
                break;
            }
            this.goomba = goo;

    }

  };

Galaxy.prototype.draw = function (context,map,currMap) {

if(this.startBack == 1){
    this.clock(map,currMap);
    this.startBack = 3;
}
if (this.gamePause == 0){
    this.phone = 0;
    this.draw_map(context,false,map,currMap);

this.viewLimit();

if (playerStats.spriteType == 'Vario' || playerStats.spriteType == 'vario'){this.vario(map,currMap);}
if (playerStats.spriteType == 'Yario' || playerStats.spriteType == 'yario'){this.yario(map,currMap);}
if (playerStats.spriteType == 'Wowser' || playerStats.spriteType == 'wowser'){this.wowser(map,currMap);}
if (playerStats.spriteType == 'Ruigi' || playerStats.spriteType == 'ruigi'){this.ruigi(map,currMap);}
this.update_player(map,currMap);
this.draw_player(map,currMap);
this.update_enemy(currMap.en1,map,currMap);
this.draw_enemy(currMap.en1,map,currMap);
this.loop();



} else{
    clearInterval(map.countdownTimer);

    if (this.phone == 0){

    this.phoneHome(map,currMap);
    this.phone = 1;
    }

}
if (playerStats.admin){
    this.admin(map,currMap);
}
};
Galaxy.prototype.viewLimit = function(){

    this.count = this.count +  1;//Player Frame Count
    this.count2 = this.count2 +  1;//Player Frame Count

 playerBlock = playerStop - 100;//Player Viewport Blocker
  playerBlock1  = playerBlock.toFixed(0);
if (playerStats.location.x <= playerBlock1){playerStats.velocity.x=0;
map.key.left = false;
}

}     
Galaxy.prototype.getPlayer = function(map,currMap){
};
Galaxy.prototype.update = function (map,currMap) {

    };
Galaxy.prototype.draw_enemy = function (goomba,map,currMap) {
    var hitbox = 'blue';
    //var enemyPic;
   // var that = this;
 
var goo1 = this.goomba2;
var goo2 = this.koopa2;
//console.log(goo1,goo2);
    Object.keys(goomba.enemies.goomba.children).forEach(function(key) {
        if (goomba.enemies.goomba.children[key].alive == true){
            var topBox1 = goomba.enemies.goomba.children[key].location.y -16;//-16
            var topBox2 = goomba.enemies.goomba.children[key].location.y; //-22

            //console.log(topBox1,topBox2);
            var playerLocationX1 = (goomba.enemies.goomba.children[key].location.x + goomba.spriteSize / 2 - currMap.camera.x);
            var playerLocationY1 = (goomba.enemies.goomba.children[key].location.y + goomba.spriteSize / 2 - currMap.camera.y)-10;  
            context2.lineWidth   = 1;
            
            //console.log(playerStats.location.y,topBox1,topBox2);
                    if (playerStats.location.x < goomba.enemies.goomba.children[key].location.x + 24 &&
                        playerStats.location.x + 24 > goomba.enemies.goomba.children[key].location.x &&
                        playerStats.location.y < goomba.enemies.goomba.children[key].location.y + 24 &&
                       playerStats.location.y + 24 > goomba.enemies.goomba.children[key].location.y) {
                        //console.log("Basic Hit")
            
                       if(playerStats.location.y <= topBox2 ){
                        if(goomba.enemies.goomba.children[key].name == 1){
            
                            if (goomba.enemies.goomba.children[key].shell == false){
                                goomba.enemies.goomba.children[key].shell = true;
            playerStats.location.x += 5;
                            }
                            else{
                                goomba.enemies.goomba.children[key].shell = false;
                                goomba.enemies.goomba.children[key].alive = false;
                                hitbox = "purple";
                                console.log("Kill");
                                context2.strokeStyle = hitbox;
                                playerStats.coin += 120;
                            }
            
                        }
                        if(goomba.enemies.goomba.children[key].name == 0){
                            goomba.enemies.goomba.children[key].alive = false;
                            hitbox = "purple";
                            console.log("Kill");
                            context2.strokeStyle = hitbox;
                            playerStats.coin += 100;
                        }
                        }else if(playerStats.location.y > topBox1){
                            hitbox = "orange";
                            context2.strokeStyle = hitbox;
                            if (playerStats.invincible == false){
                                if(goomba.enemies.goomba.children[key].name == 0){
                                    goomba.enemies.goomba.children[key].alive = false;
                                    goomba.enemies.goomba.children[key].shell = false;

                                    //hitbox = "purple";
                                    //console.log("Kill");
                                    //context2.strokeStyle = hitbox;
                                    //playerStats.coin += 100;
                                }
                                Galaxy.prototype.death(map,currMap);

                            }
                        }
                    }else{
                        hitbox = "blue";
                        context2.strokeStyle = hitbox;
                    }
switch(goomba.enemies.goomba.children[key].name) {
  case 1:
    if (goomba.enemies.goomba.children[key].alive == true){
    contextBack.fillStyle = "green";
    //console.log(goomba.enemies.goomba.children[key].name);
    if (goomba.enemies.goomba.children[key].shell == true){
        //context.strokeRect(playerLocationX1,playerLocationY1,24,24);
        context.drawImage(koopa_shell,playerLocationX1,playerLocationY1 +2,16,16);
        }else{
            if (goomba.enemies.goomba.children[key].key.left){
                if (goo2 == 1){
                    //context.strokeRect(playerLocationX1,playerLocationY1,24,24);
                    context.drawImage(koopa_1R,playerLocationX1,playerLocationY1,20,20);
                }
                else if (goo2 == 2){
                    //context.strokeRect(playerLocationX1,playerLocationY1,24,24);
            context.drawImage(koopa_2R,playerLocationX1,playerLocationY1,20,20);
                }
                }else{
                    if (goo2 == 1){
                        //context.strokeRect(playerLocationX1,playerLocationY1,24,24);
                        context.drawImage(koopa_1,playerLocationX1,playerLocationY1,20,20);
                    }
                    else if (goo2 == 2){
                        //context.strokeRect(playerLocationX1,playerLocationY1,24,24);
                context.drawImage(koopa_2,playerLocationX1,playerLocationY1,20,20);
                    }
                }
        }
  
    }
    break;
  case 0:
    if (goomba.enemies.goomba.children[key].alive == true){
    contextBack.fillStyle = "blue";

    if (goo1== 1){
        //context.strokeRect(playerLocationX1,playerLocationY1,24,24);
        context.drawImage(goomba_1,playerLocationX1,playerLocationY1,20,20);
    }
    else if (goo1 == 2){
        //context.strokeRect(playerLocationX1,playerLocationY1,24,24);
    context.drawImage(goomba_2,playerLocationX1,playerLocationY1,20,20);
            } 
        }
    break;
    // code block
}  
                }   
            });
 };

Galaxy.prototype.move_enemy = function (goomba,map,currMap) {
    var offset = Math.round((currMap.spriteSize / 2) -1);//Camera Offset

    Object.keys(goomba.enemies.goomba.children).forEach(function(key) {
        if (goomba.enemies.goomba.children[key].alive == true){

     /*   var temp1 = goomba.enemies.goomba.children[key].location.x + 1;
        var temp2 = goomba.enemies.goomba.children[key].location.x - 1;
        var temp3 = goomba.enemies.goomba.children[key].location.y +1;
        var temp4 = goomba.enemies.goomba.children[key].location.y -1;

if((playerStats.location.x > temp2) && (playerStats.location.x < temp1) && (playerStats.location.y < temp3) && (playerStats.location.y > temp4)){
    //Galaxy.prototype.death(map,currMap);
}*/
        var tX = goomba.enemies.goomba.children[key].location.x + goomba.enemies.goomba.children[key].velocity.x ;
        var tY = goomba.enemies.goomba.children[key].location.y + goomba.enemies.goomba.children[key].velocity.y;
        var tile = Galaxy.prototype.whatTile(
            Math.round(goomba.enemies.goomba.children[key].location.x / goomba.enemies.goomba.children[key].spriteSize),
            Math.round(goomba.enemies.goomba.children[key].location.y / goomba.enemies.goomba.children[key].spriteSize),
            map,
            currMap
         );
         if(tile.gravity) {
    
            goomba.enemies.goomba.children[key].velocity.x += currMap.gravity.x;
            goomba.enemies.goomba.children[key].velocity.y += currMap.gravity.y;
            
         } else {
            
            goomba.enemies.goomba.children[key].velocity.x += currMap.gravity.x;
            goomba.enemies.goomba.children[key].velocity.y += currMap.gravity.y;
         }

 
       
         var t_y_up   = Math.floor(tY / goomba.spriteSize);
         var t_y_down = Math.ceil(tY / goomba.spriteSize);
         var y_near1  = Math.round((goomba.enemies.goomba.children[key].location.y - offset) / goomba.spriteSize);
         var y_near2  = Math.round((goomba.enemies.goomba.children[key].location.y + offset) / goomba.spriteSize);
         
         var t_x_left  = Math.floor(tX / goomba.spriteSize);
         var t_x_right = Math.ceil(tX / goomba.spriteSize);
         var x_near1   = Math.round((goomba.enemies.goomba.children[key].location.x - offset) / goomba.spriteSize);
         var x_near2   = Math.round((goomba.enemies.goomba.children[key].location.x + offset) / goomba.spriteSize);
         
         var top1    = Galaxy.prototype.whatTile(x_near1, t_y_up,
            map,
            currMap);
        var top2    = Galaxy.prototype.whatTile(x_near2, t_y_up,
            map,
            currMap);
        var bottom1 = Galaxy.prototype.whatTile(x_near1, t_y_down,
            map,
            currMap);
        var bottom2 = Galaxy.prototype.whatTile(x_near2, t_y_down,
            map,
            currMap);
        var left1   = Galaxy.prototype.whatTile(t_x_left, y_near1,
            map,
            currMap);
        var left2   = Galaxy.prototype.whatTile(t_x_left, y_near2,
            map,
            currMap);
        var right1  = Galaxy.prototype.whatTile(t_x_right, y_near1,
            map,
            currMap);
        var right2  = Galaxy.prototype.whatTile(t_x_right, y_near2,
            map,
            currMap);
         
            goomba.enemies.goomba.children[key].velocity.x = Math.min(Math.max(goomba.enemies.goomba.children[key].velocity.x, - goomba.enemies.goomba.children[key].speed), goomba.enemies.goomba.children[key].speed);
            //playerStats.velocity.x = playerStats.speed;
            
            goomba.enemies.goomba.children[key].velocity.y = Math.min(Math.max(goomba.enemies.goomba.children[key].velocity.y, - goomba.enemies.goomba.children[key].default.y), goomba.enemies.goomba.children[key].default.y);
            //console.log(playerStats.speed);
            goomba.enemies.goomba.children[key].location.x += goomba.enemies.goomba.children[key].velocity.x;
            goomba.enemies.goomba.children[key].location.y += goomba.enemies.goomba.children[key].velocity.y;
            goomba.enemies.goomba.children[key].velocity.x *= .9;
            if (left1.isSolid || left2.isSolid){
          
                    goomba.enemies.goomba.children[key].key.left = false;
                    goomba.enemies.goomba.children[key].key.right = true;
                    goomba.enemies.goomba.children[key].velocity.x = 0;

            }
            if (right1.isSolid || right2.isSolid){
             
                goomba.enemies.goomba.children[key].key.right = false;
                goomba.enemies.goomba.children[key].key.left = true;
                goomba.enemies.goomba.children[key].velocity.x = 0;
            }       
            if (left1.isSolid || left2.isSolid || right1.isSolid || right2.isSolid) {
 
                /* fix overlap */
             
                while (Galaxy.prototype.whatTile(Math.floor(goomba.enemies.goomba.children[key].location.x / goomba.spriteSize), y_near1,map,currMap).isSolid
                    || Galaxy.prototype.whatTile(Math.floor(goomba.enemies.goomba.children[key].location.x / goomba.spriteSize), y_near2,map,currMap).isSolid)
                    goomba.enemies.goomba.children[key].location.x += .1;
             
                while (Galaxy.prototype.whatTile(Math.ceil(goomba.enemies.goomba.children[key].location.x / goomba.spriteSize), y_near1,map,currMap).isSolid
                    || Galaxy.prototype.whatTile(Math.ceil(goomba.enemies.goomba.children[key].location.x / goomba.spriteSize), y_near2,map,currMap).isSolid)
                    goomba.enemies.goomba.children[key].location.x -= .1;
             
                /* tile bounce */
             
                var canAbsorb = 0;
             
                if (left1.isSolid && left1.canAbsorb > canAbsorb) canAbsorb = left1.canAbsorb;
                if (left2.isSolid && left2.canAbsorb > canAbsorb) canAbsorb = left2.canAbsorb;
                if (right1.isSolid && right1.canAbsorb > canAbsorb) canAbsorb = right1.canAbsorb;
                if (right2.isSolid && right2.canAbsorb > canAbsorb) canAbsorb = right2.canAbsorb;
             
                goomba.enemies.goomba.children[key].velocity.x *= -canAbsorb || 0;
                
             }
             
             if (top1.isSolid || top2.isSolid || bottom1.isSolid || bottom2.isSolid) {
             
                /* fix overlap */
                
                while (Galaxy.prototype.whatTile(x_near1, Math.floor(goomba.enemies.goomba.children[key].location.y / goomba.spriteSize),map,currMap).isSolid
                    || Galaxy.prototype.whatTile(x_near2, Math.floor(goomba.enemies.goomba.children[key].location.y / goomba.spriteSize),map,currMap).isSolid)
                    goomba.enemies.goomba.children[key].location.y += .1;
             
                while (Galaxy.prototype.whatTile(x_near1, Math.ceil(goomba.enemies.goomba.children[key].location.y / goomba.spriteSize),map,currMap).isSolid
                    || Galaxy.prototype.whatTile(x_near2, Math.ceil(goomba.enemies.goomba.children[key].location.y / goomba.spriteSize),map,currMap).isSolid)
                    goomba.enemies.goomba.children[key].location.y -= .1;
             
                /* tile bounce */
                
                var canAbsorb = 0;
                
                if (top1.isSolid && top1.canAbsorb > canAbsorb) canAbsorb = top1.canAbsorb;
                if (top2.isSolid && top2.canAbsorb > canAbsorb) canAbsorb = top2.canAbsorb;
                if (bottom1.isSolid && bottom1.canAbsorb > canAbsorb) canAbsorb = bottom1.canAbsorb;
                if (bottom2.isSolid && bottom2.canAbsorb > canAbsorb) canAbsorb = bottom2.canAbsorb;
                
                goomba.enemies.goomba.children[key].velocity.y *= -canAbsorb || 0;
             
                if ((bottom1.isSolid || bottom2.isSolid) && !tile.jump) {
                    
                    goomba.enemies.goomba.children[key].on_floor = true;
                }
                
             }

            }
    });



 };
Galaxy.prototype.update_enemy = function (goomba,map,currMap) {
  Object.keys(goomba.enemies.goomba.children).forEach(function(key) {
    if (goomba.enemies.goomba.children[key].alive == true){
if(goomba.enemies.goomba.children[key].location.x < (playerStats.location.x + 300)){
    if (goomba.enemies.goomba.children[key].key.left) {
    
        if (goomba.enemies.goomba.children[key].velocity.x > -goomba.enemies.goomba.children[key].speed){
            goomba.enemies.goomba.children[key].velocity.x -= goomba.enemies.goomba.children[key].default.left;
             }
     }  
     if (goomba.enemies.goomba.children[key].key.right) {
        if (goomba.enemies.goomba.children[key].velocity.x < goomba.enemies.goomba.children[key].speed)
        goomba.enemies.goomba.children[key].velocity.x += goomba.enemies.goomba.children[key].default.left;
     } 
    }
    }
  });

/*
if (goomba.key.left) {
    
    if (goomba.velocity.x > -goomba.speed){
     goomba.velocity.x -= goomba.playerSpeed.left;
         }
 }  

 if (goomba.key.right) {
    if (goomba.velocity.x < goomba.speed)
    goomba.velocity.x += goomba.playerSpeed.left;
 } 
 */

       
    this.move_enemy(goomba,map,currMap);
    
    };

Galaxy.prototype.death = function (map,currMap){


dieAudio.play();
    console.log("You died!");
    playerStats.health -= 1;
    playerBlock=0;playerBlock1=0;
    playerStop=0;
    playerStats.velocity.x=0;
    playerStats.velocity.y=0;
    clearInterval(map.countdownTimer);     
    this.phoneHome(map,currMap);
    if (playerStats.health < 1) {


        overAudio.play();
        console.log("Low Health");
        playerStats.health = 3;
        window.location.href = "game.php";

    }else{
        this.load_map(map,currMap);
    }
};

Galaxy.prototype.phoneHome = function (map,currMap){
//send all info backkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
//setStats(username,levelsComplete,currentLevel,currentPoints,maxPoints,spritePack,character,currency,currentLives)
//setPoints(username,points)
//playerStats.currencyCode = jsonResult.currencyCode;
//playerStats.spriteType = jsonResult.characterName;
//playerStats.coin=jsonResult.currentPoints;
//playerStats.username=jsonResult.username;
//playerStats.health=jsonResult.playerLives;
//playerStats.sprite=jsonResult.spritePack;
//playerStats.currentLevel=jsonResult.currentLevel;
//playerStats.levelsComplete=jsonResult.levelsComplete;
//playerStats.maxPoints=jsonResult.maxPoints;
  //var integer = parseInt(text, 10);

console.log(playerStats.username,playerStats.levelsComplete,parseInt(currMap.levelName),playerStats.coin,playerStats.maxPoints,playerStats.sprite,playerStats.spriteType,playerStats.currencyCode,parseInt(playerStats.health, 10));
setStats(playerStats.username,playerStats.levelsComplete,parseInt(currMap.levelName),playerStats.coin,playerStats.maxPoints,playerStats.sprite,playerStats.spriteType,playerStats.currencyCode,parseInt(playerStats.health, 10));
 }; 
Galaxy.prototype.admin = function (map,currMap){
   /* document.getElementById('playerLoc').innerHTML = ('<p>Player Location{ X:' + Math.round(playerStats.location.x) +  ' Y:' + Math.round(playerStats.location.y) + '}</p>');

    if (playerStats.hitbox == "purple"){
    document.getElementById('hitBox').innerHTML = ('<p>Nearest Enemy{ X:' + Math.round(playerStats.location.x) +  ' Y:' + Math.round(playerStats.location.y) + '}</p>');
    }*/
};

Galaxy.prototype.nextLevel = function (map,currMap){
    //var warnAudio = new Audio('../music/smb_warning.wav');
console.log("Time to Complete: "+ map.countdownTimer);
alert("hi");
    clearAudio.play();
    playerStats.currentLevel += 1;
    var temp1 =  currMap.levelName + 1;
    this.phoneHome;
    window.location.href = "game"+temp1+".php";

};




