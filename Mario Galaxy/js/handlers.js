Galaxy.prototype.load_map = function () {
    gameDefault = mapDefault;
    playerOBJ = playerStats;
    /**************Enemy Solid Object Finder***************/
    /*if(enemies){
    for (var y = 0; y <enemies.obsticle.length; y++) {
        enemy_obsticles[y] =enemies.obsticle[y].x1;
    enemy_obsticles2[y] =enemies.obsticle[y].x2;
    }}*/
    /**************Enemy Solid Object Finder***************/
    if (typeof currMap      === 'undefined'){
        this.errorParse('Bad Map at:' + currMap);
    
        return false;
    }
    if(typeof currMap.data === 'undefined'){
        this.errorParse('Bad Map Data at:' + currMap);
    
        return false;
    }
    if (typeof currMap.keys === 'undefined') {
    
       this.errorParse('Bad Map Keys at:' + currMap);
    
       return false;
    }
    
    //currMap = map;
    
    currMap.background =  '#000000';
    currMap.gravity =  {x: 0, y: 0.3};
    playerOBJ.spriteSize = 16;
    
    //xvar currMap = currMap;
    
    currMap.width = 0;
    currMap.height = 0;
    
    
    //this.currentLevel = map;
    
    var _this = currMap;
    
    var cwidth = 16;
    var cheight = 16;
    
    currMap.keys.forEach(function (key) {
    
        currMap.data.forEach(function (row, y) {
           
            currMap.height = Math.max(cheight, y);
    
           row.forEach(function (tile, x) {
               
            currMap.width = Math.max(cwidth, x);
    
               if (tile == key.id)
                   _this.currentLevel.data[y][x] = key;
           });
       });
    });
    
    currMap.widthNext = currMap.width * playerOBJ.spriteSize;
    currMap.heightNext = currMap.height * playerOBJ.spriteSize;
    
    playerOBJ.loc.x = playerOBJ.loc.x * playerOBJ.spriteSize || 0;
    playerOBJ.loc.y = playerOBJ.loc.y * playerOBJ.spriteSize || 0;
    //playerOBJ.spriteType = currMap.player.spriteType || '#000';
    
    currMap.key.left  = false;
    currMap.key.up    = false;
    currMap.key.right = false;
    
    currMap.camera = {
       x: 0,
       y: 0
    };
    
    playerOBJ.vel = {
       x: 0,
       y: 0
    };
    
    this.logger('Successfully loaded map data.');
    
    return true;
    };