var playerStats = {
spriteType: 'mario',
location: {
    x: 5,
    y:5,
},
speed: .5,
jumpHeight: 7,
health: 100,
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
 defaultVelocity: {
           x: 1.5,
           y: 16
        },     
playerSpeed: {
    jump: 6.5,
    left: 0.2,
    right: 0.2
    },    
        
   on_floor : false,
    can_jump : true,
    jump_switch: 0,     
        };