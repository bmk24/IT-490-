









  Galaxy.prototype.keydown = function (e) {

    var _this = this;
    
    switch (e.keyCode) {
    case 37:
       _this.key.left = true;
       playerPos = 'left';
       if (this.key.left.state != key_state) this.key.left.active = key_state;
       this.key.left.state  = _this.key.left;// Always update the physical state.
       break;
    case 38:
       _this.key.up = true;
       playerPos = 'up';
       if (this.key.up.state != key_state) this.key.up.active = key_state;
       this.key.up.state  = _this.key.up;
       break;
    case 39:
       _this.key.right = true;
       playerPos = 'right';
       if (this.key.right.state != key_state) this.key.right.active = key_state;
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

 

  Galaxy.prototype.loop = function(time_stamp) {

    if (this.key.up.active && !this.player.jumping) {

      this.key.up.active = false;
      this.player.jumping = true;
      //this.player.vel.y -= 2.5;

    }

    if (this.key.left.active) {

      /* To change the animation, all you have to do is call animation.change. */
     this.change(this.spriteSheet.frame_sets[2], 15);
     // this.player.vel.x -= 0.05;

    }

    if (this.key.right.active) {

        this.change(this.spriteSheet.frame_sets[1], 15);
     // player.this.player.vel.x += 0.05;

    }

    /* If you're just standing still, change the animation to standing still. */
    if (!this.key.left.active && !this.key.right.active) {

        this.change(this.spriteSheet.frame_sets[0], 20);

    }

    //this.player.vel.y += 0.25;

    //player.x += player.this.player.vel.x;
    //player.y += player.this.player.vel.y;
    //player.this.player.vel.x *= 0.9;
    //player.this.player.vel.y *= 0.9;

  /*  if (this.player.loc.y + this.spriteSize > context3.canvas.this.spriteSize - 2) {

      this.player.jumping = false;
      player.y = context3.canvas.this.spriteSize - 2 - player.this.spriteSize;
      player.this.player.vel.y = 0;

    }*/






  }

  

 

      ////////////////////
    //// INITIALIZE ////
  ///////////////

  this.spriteSheet.image.src = "animation.png";// Start loading the image.

