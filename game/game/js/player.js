var speedX;
var speedY;


var playerStats = {
  invincible: false,
  coolDown: 0,
  mushroom : {
    activated: false,
    location: {
      x: 5,
      y:5,
  },
consumed: false,
speed: .5,
jumpHeight: 0,
spriteSize: 12,
jumping: false,
gravity: {
           x: 0,
           y: 0.3
        },
velocity:{
    x: 1,
           y: 0
},
 defaultVelocity: {
           x: 0.5,
           y: 16
        },     
playerSpeed: {
    jump: 0,
    left: 0.0,
    right: 0.2
    },    
     
   on_floor : false,
    can_jump : false,
    jump_switch: 0,  
  },
  hitbox: 'blue',
  admin:true,
spriteType: 'wowser',
location: {
    x: 5,
    y:5,
},
speed: 2.0,
jumpHeight: 7,
health: 0,
coin: 0,
spriteSize: 16,
jumping: false,
gravity: {
           x: 0,
           y: 0.3
        },
velocity:{
    x: 0,
           y: 0
},
spriteNum: 1,
 defaultVelocity: {
           x: 1.5,
           y: 16
        },     
playerSpeed: {
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
   on_floor : false,
    can_jump : true,
    jump_switch: 0,  
    currentLevel: 1   
        };