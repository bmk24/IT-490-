

window.onload = function ()
{   

    var canvas  = document.getElementById("game");
    var context = canvas.getContext('2d');

    var brickBlock = new Image();
    var skyBlock = new Image();
    var tubeUp = new Image();
    var mushroom = new Image();
    var platformBlock = new Image();
    var metalBlock = new Image();
    var mysteryBlock = new Image();
    var coinBlock = new Image();


    var marioLeft1 = new Image();
    var marioLeft2 = new Image();
    var luigiLeft1 = new Image();
    var luigiLeft2 = new Image();
    var warioLeft1 = new Image();
    var warioLeft2 = new Image();
    var yoshiLeft1 = new Image();
    var yoshiLeft2 = new Image();


    brickBlock.src = '/img/tile000.png';
    skyBlock.src = '/img/tile696.png';
    tubeUp.src = '/img/tubeUp.png';
    mushroom.src = '/img/tile016.png';
    platformBlock.src = '/img/tile001.png';
    metalBlock.src = '/img/tile003.png';
    mysteryBlock.src = '/img/tile024.png';
    coinBlock.src = '/img/tile057.png';
    marioLeft1.src = '/img/mario_w_l.png';
    marioLeft2.src = '/img/mario_w_l2.png';
    luigiLeft1.src = '/img/luigi_w_l.png';
    luigiLeft2.src = '/img/luigi_w_l2.png';
    warioLeft1.src = '/img/wario_w_l.png';
    warioLeft2.src = '/img/wario_w_l2.png';
    yoshiLeft1.src = '/img/yoshi_w_l.png';
    yoshiLeft2.src = '/img/yoshi_w_l2.png';

    brickBlock.onload,skyBlock.onload,tubeUp.onload,mushroom.onload,platformBlock.onload,metalBlock.onload,mysteryBlock.onload,coinBlock.onload,marioLeft1.onload,marioLeft2.onload,luigiLeft1.onload,luigiLeft2.onload,warioLeft1.onload,warioLeft2.onload,yoshiLeft1.onload,yoshiLeft2.onload = function (e)
    {
   mainScreen(canvas,context,brickBlock,skyBlock,tubeUp,mushroom,platformBlock,metalBlock,mysteryBlock,coinBlock);
} 
}

