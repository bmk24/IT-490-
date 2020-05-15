var playerStats = {
spriteType: 'wowser',
location: {
    x: 5,
    y:5,
},
speed: 2.0,
jumpHeight: 7,
health: 3,
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
        
   on_floor : false,
    can_jump : true,
    jump_switch: 0,     
        };


        var goomba = {
            spriteType: 'goomba',
            location: {
                x: 150,
                y:5,
            },
            speed: 1.5,
            jumpHeight: 0,
            health: 1,
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
                jump: 0,
                left: 0.2,
                right: 0.2
                },    
                    
               on_floor : false,
                can_jump : false,
                jump_switch: 0,     
                    };