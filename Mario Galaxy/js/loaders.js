$('#register').hide();

$('#login').hide();

$("#loginNav").click(function(){
    if ($('#login').hide()){
        $('#login').show();
        gameStatus = 0;
    }else{
        $('#login').hide();
        gameStatus = 1;  
    }
   
});
$("#controls").click(function(){
    if ($('#register').hide()){
        $('#register').show();
        gameStatus = 0;
    }else{
        $('#register').hide();
        gameStatus = 1;  
    }
});
   var startGame = 1;
    window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
    var gameStatus = 1;
   var spriteStatus = [];
       let marioL_smb1 = new Image();
       let marioL1_smb1 = new Image();
       let marioL2_smb1 = new Image();
       let marioR_smb1 = new Image();
       let marioR1_smb1 = new Image();
       let marioR2_smb1 = new Image();
       let marioU1_smb1 = new Image();
       let marioU2_smb1 = new Image();
       let goomba_smb1 = new Image();

       let skyBlock = new Image();
       let brickBlock = new Image();
       let tubeRight = new Image();
       let mushroom = new Image();
       let platformBlock = new Image();
       let metalBlock = new Image();
       let mysteryBlock = new Image();
       let mysteryBlock1 = new Image();
       let mysteryBlock2 = new Image();

       let coinBlock = new Image();
       let rampBlock = new Image();
       let bushSmall = new Image();
       let bushMedium = new Image();
       let bushLarge = new Image();
       let hillSmall = new Image();
       let hillBig = new Image();
       let tubeLeft = new Image();
       let greyMetal = new Image();

       let hillTop = new Image();
       let hillLeft = new Image();
       let hillRight = new Image();
       let hillDimple = new Image();
       let hillMid = new Image();
       let bushMid = new Image();
       let bushLeft = new Image();
       let bushRight = new Image();
       let tubeMid = new Image();

//tile264
       var playerLocationX = 0;
       var playerLocationY = 0;
       var playerRefresh = 0;
       var playerPos = 'none';
       var canvas;
       var canvas2;
       var context2;
       var canvas2;
       var canvas3;
       var context3;
       var canvasBack;
       var contextBack;
       var  controller, loop, player, render, resize, sprite_sheet;

   
       marioL_smb1.src = '/img/marioL_smb1.png';
       marioL1_smb1.src = '/img/marioL1_smb1.png';
       marioL2_smb1.src = '/img/marioL2_smb1.png';
       marioU1_smb1.src = '/img/marioU1_smb1.gif';
       marioU2_smb1.src = '/img/marioU1_smb1.gif';
        goomba_smb1.src='/img/goomba.gif';
       marioR_smb1.src = '/img/marioR_smb1.png';
       marioR1_smb1.src = '/img/marioR1_smb1.png';
       marioR2_smb1.src = '/img/marioR2_smb1.png';
       brickBlock.src = './img/ground.png';
       skyBlock.src = '/img/sky.png';   
       tubeRight.src = '/img/tube2.png';
       tubeMid.src = '/img/tubeMid.png';

       tubeLeft.src = '/img/tube1.png';
       greyMetal.src = '/img/tile135.png';
       mushroom.src = '/img/tile016.png';
       platformBlock.src = '/img/tile001.png';
       metalBlock.src = '/img/tile003.png';
       mysteryBlock.src = '/img/tile024.png';
       mysteryBlock1.src = '/img/tile025.png';
       mysteryBlock2.src = '/img/tile026.png';

       coinBlock.src = '/img/tile057.png';
       rampBlock.src = '/img/tile033.png';
       bushSmall.src = '/img/bush.gif';
       bushMedium.src = '/img/bush2.gif';
       bushLarge.src = '/img/bush3.gif';
       hillSmall.src = '/img/hillSmall.gif';
       hillBig.src = '/img/hillBig.gif';
        hillTop.src = '/img/hillTop.png';
        hillLeft.src = '/img/hillLeft.png';
        hillRight.src = '/img/hillRight.png';
        hillDimple.src = '/img/hillLeftIn.png';
        hillMid.src = '/img/hillMid.png'; 
        bushMid.src = '/img/bushMid.png';
        bushLeft.src = '/img/bushLeft.png';
        bushRight.src = '/img/bushRight.png'; 
   /*
/*
Keys 
0 Blank space after scenery 
1  Sky Block
2  Ground Block
3  Platform Block
4  metal Block
5  mystery Block
6  ramp block
////////////////REASSIGN
7 small bush
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