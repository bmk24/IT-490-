Galaxy.prototype.update_goomba = function (goomba) {
 
    
    if (goomba.key.left) {
    
       if (goomba.player.vel.x > -goomba.defaultVelocity.x){
           goomba.player.vel.x -= goomba.playerSpeed.left;
            }
    }
       
    
  
    
    if (goomba.key.right) {
      
       if (goomba.player.vel.x < goomba.defaultVelocity.x)
           goomba.player.vel.x += goomba.playerSpeed.left;
    }
    
    this.move_goomba(goomba);
    
    };


Galaxy.prototype.move_goomba = function (goomba) {
        var tX = goomba.player.loc.x + goomba.player.vel.x;
        var tY = goomba.player.loc.y + goomba.player.vel.y;
        
        var offset = Math.round((goomba.spriteSize / 2) -1);//Camera Offset
        
        var tile = this.whatTile(
           Math.round(goomba.player.loc.x / goomba.spriteSize),
           Math.round(goomba.player.loc.y / goomba.spriteSize)
        );
        
        if(tile.gravity) {
           
           goomba.player.vel.x += tile.gravity.x;
           goomba.player.vel.y += tile.gravity.y;
           
        } else {
           
           goomba.player.vel.x += this.currentLevel.gravity.x;
           goomba.player.vel.y += this.currentLevel.gravity.y;
        }
        
        if (tile.friction) {
        
           goomba.player.vel.x *= tile.friction.x;
           goomba.player.vel.y *= tile.friction.y;
        }
        
        var t_y_up   = Math.floor(tY / goomba.spriteSize);
        var t_y_down = Math.ceil(tY / goomba.spriteSize);
        var y_near1  = Math.round((goomba.player.loc.y - offset) / goomba.spriteSize);
        var y_near2  = Math.round((goomba.player.loc.y + offset) / goomba.spriteSize);
        
        var t_x_left  = Math.floor(tX / goomba.spriteSize);
        var t_x_right = Math.ceil(tX / goomba.spriteSize);
        var x_near1   = Math.round((goomba.player.loc.x - offset) / goomba.spriteSize);
        var x_near2   = Math.round((goomba.player.loc.x + offset) / goomba.spriteSize);
        
        var top1    = this.whatTile(x_near1, t_y_up);
        var top2    = this.whatTile(x_near2, t_y_up);
        var bottom1 = this.whatTile(x_near1, t_y_down);
        var bottom2 = this.whatTile(x_near2, t_y_down);
        var left1   = this.whatTile(t_x_left, y_near1);
        var left2   = this.whatTile(t_x_left, y_near2);
        var right1  = this.whatTile(t_x_right, y_near1);
        var right2  = this.whatTile(t_x_right, y_near2);
        
      
        
        goomba.player.vel.x = Math.min(Math.max(goomba.player.vel.x, - goomba.defaultVelocity.x), goomba.defaultVelocity.x);
        goomba.player.vel.y = Math.min(Math.max(goomba.player.vel.y, - goomba.defaultVelocity.y), goomba.defaultVelocity.y);
        
        goomba.player.loc.x += goomba.player.vel.x;
        goomba.player.loc.y += goomba.player.vel.y;
        
        goomba.player.vel.x *= .9;
        
        if (left1.isSolid || left2.isSolid || right1.isSolid || right2.isSolid) {
        
           /* fix overlap */
        
           while (this.whatTile(Math.floor(goomba.player.loc.x / goomba.spriteSize), y_near1).isSolid
               || this.whatTile(Math.floor(goomba.player.loc.x / goomba.spriteSize), y_near2).isSolid)
               goomba.player.loc.x += .1;
        
           while (this.whatTile(Math.ceil(goomba.player.loc.x / goomba.spriteSize), y_near1).isSolid
               || this.whatTile(Math.ceil(goomba.player.loc.x / goomba.spriteSize), y_near2).isSolid)
               goomba.player.loc.x -= .1;
        
           /* tile bounce */
        
           var canAbsorb = 0;
        
           if (left1.isSolid && left1.canAbsorb > canAbsorb) canAbsorb = left1.canAbsorb;
           if (left2.isSolid && left2.canAbsorb > canAbsorb) canAbsorb = left2.canAbsorb;
           if (right1.isSolid && right1.canAbsorb > canAbsorb) canAbsorb = right1.canAbsorb;
           if (right2.isSolid && right2.canAbsorb > canAbsorb) canAbsorb = right2.canAbsorb;
        
           goomba.player.vel.x *= -canAbsorb || 0;
           
        }
        
        if (top1.isSolid || top2.isSolid || bottom1.isSolid || bottom2.isSolid) {
        
           /* fix overlap */
           
           while (this.whatTile(x_near1, Math.floor(goomba.player.loc.y / goomba.spriteSize)).isSolid
               || this.whatTile(x_near2, Math.floor(goomba.player.loc.y / goomba.spriteSize)).isSolid)
               goomba.player.loc.y += .1;
        
           while (this.whatTile(x_near1, Math.ceil(goomba.player.loc.y / goomba.spriteSize)).isSolid
               || this.whatTile(x_near2, Math.ceil(goomba.player.loc.y / goomba.spriteSize)).isSolid)
               goomba.player.loc.y -= .1;
        
           /* tile bounce */
           
           var canAbsorb = 0;
           
           if (top1.isSolid && top1.canAbsorb > canAbsorb) canAbsorb = top1.canAbsorb;
           if (top2.isSolid && top2.canAbsorb > canAbsorb) canAbsorb = top2.canAbsorb;
           if (bottom1.isSolid && bottom1.canAbsorb > canAbsorb) canAbsorb = bottom1.canAbsorb;
           if (bottom2.isSolid && bottom2.canAbsorb > canAbsorb) canAbsorb = bottom2.canAbsorb;
           
           goomba.player.vel.y *= -canAbsorb || 0;
        
           if ((bottom1.isSolid || bottom2.isSolid) && !tile.jump) {
               
               goomba.player.on_floor = true;
               goomba.player.can_jump = true;
           }
           
        }
             
        };

        Galaxy.prototype.whatTile = function (x, y) {



            var xNext = (x * this.spriteSize) - this.camera.x;
            var yNext = (y * this.spriteSize) - this.camera.y;           

            return (this.currentLevel.data[y] && this.currentLevel.data[y][x]) ? this.currentLevel.data[y][x] : 0;
            };
        //Goomba at @x190



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


         for (var y = 0; y < game.goomba.obsticle.length; y++) {
             console.log(y)
         }