var map02 = {
    data: [
            [08,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,08],
            [08,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,08],
            [08,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,08],
            [08,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,08],
            [08,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,08],
            [08,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,08],
            [08,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,08],
            [08,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,08],
            [08,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,08],
            [08,01,01,15,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,08],
            [08,01,16,18,17,01,01,01,01,01,01,01,01,01,01,01,01,01,15,01,01,01,01,01,01,01,01,01,01,01,08],
            [08,16,18,19,18,17,01,01,01,01,01,01,21,20,20,20,22,16,18,17,01,01,01,01,01,01,01,01,01,01,08],
            [02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,01,01,01,01,01,01,01,01,01,08],
            [02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,01,01,01,01,01,01,01,01,01,08],
            [02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,01,01,01,01,01,01,01,01,01,08]
        
            ],
        
        /* Default gravity of the map */
        
        gravity: {
           x: 0,
           y: 0.3
        },
        
        /* Velocity limits */
        
        defaultVelocity: {
           x: 1.5,
           y: 16
        },
        
        /* Movement speed when the key is pressed */
        
        playerSpeed: {
           jump: 6.5,
           left: 1.5,
           right: 1.5
        },
        
        goomba: {
           key :{
              left : false,
              right: true
           },
          
       
       obsticle: [
          {id : 1,x1:0,x2:10},
    
          {id : 2,x1:440,x2:500},
         {id : 3,x1:600,x2:660}
    
    
       ],
    
          hazards: 2,
          goomba1:  { x:200, y:100 },
          goomba2: { x:200, y:100 },
          goomba3: { x:200, y:100 },
          playerSpeed: {
             left: 0.1,
             right: 0.1
          },
          defaultVelocity: {
             x: .4,
             y: 16
          },
          gravity: {
             x: 0,
             y: 0.3
          },
          view : true,
          player: {
             x: 5,
             y: 5,
             can_jump : false,
             spriteType: 'goomba',
             jumping: false,
             loc: {x:200 , y:175},
             vel: {x: -0.4 , y:0},
             on_floor : false
                },
          spriteSize: 16,
    
        },
        /* The coordinates at which the player spawns and the spriteType of the player */
        
        player: {
           x: 5,
           y: 5,
           spriteType: 'mario',
           jumping: false
        },
        
        /* scripts refered to by the "script" variable in the tile keys */
        scripts: {
            /* you can just use "this" instead of your engine variable ("game"), but Codepen doesn't like it */
            change_colour: 'game.player.spriteType = mario',
            /* you could load a new map variable here */
            next_level: 'alert("Yay! You won! Reloading map.");game.load_map(mapDefault,map02,playerStats);',
            death: 'console.log("You died!");this.load_map(map);',
            win: 'alert("Win");',
            unlock: 'game.currentLevel.keys[10].isSolid = 0;game.currentLevel.keys[10].colour = "#888";'
         }
  
        };