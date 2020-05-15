
   var startGame = 1;

    window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
    var gameStatus = 1;
   var spriteStatus = [];
   //localStorage.removeItem('USER');

   let marioWalk_smb1 = new Image();marioWalk_smb1.src = '../images/smb1/marioWalk.png';
   let marioWalk1_smb1 = new Image();marioWalk1_smb1.src = '../images/smb1/marioWalk1.png';
   let marioWalk2_smb1 = new Image();marioWalk2_smb1.src = '../images/smb1/marioWalk2.png';
   let luigiWalk_smb1 = new Image();luigiWalk_smb1.src = '../images/smb1/luigiWalk.png';
   let luigiWalk1_smb1 = new Image();luigiWalk1_smb1.src = '../images/smb1/luigiWalk1.png';
   let luigiWalk2_smb1 = new Image();luigiWalk2_smb1.src = '../images/smb1/luigiWalk2.png';
   let warioWalk_smb1 = new Image();warioWalk_smb1.src = '../images/smb1/warioWalk.png';
   let warioWalk1_smb1 = new Image();warioWalk1_smb1.src = '../images/smb1/warioWalk1.png';
   let warioWalk2_smb1 = new Image();warioWalk2_smb1.src = '../images/smb1/warioWalk2.png';
   let bowserWalk_smb1 = new Image();bowserWalk_smb1.src = '../images/smb1/bowserWalk.png';
   let bowserWalk1_smb1 = new Image();bowserWalk1_smb1.src = '../images/smb1/bowserWalk1.png';
   let bowserWalk2_smb1 = new Image();bowserWalk2_smb1.src = '../images/smb1/bowserWalk2.png';


       let treePlatform1_smb1 = new Image();let treePlatform2_smb1 = new Image();let treePlatform3_smb1 = new Image();let treePlatformStump_smb1 = new Image();let castleSpike_smb1 = new Image();let castleSpike2_smb1 = new Image();let castleBrick_smb1 = new Image();
       let metalBlockTeal_smb1 = new Image();let flagpole_smb1 = new Image();let flagpoleTop_smb1 = new Image();let blackSky_smb1 = new Image();let tealRamp_smb1 = new Image();let tealMetal_smb1 = new Image();let tealBlock_smb1 = new Image();let tealPlatform_smb1 = new Image();
       let seaBlock_smb1 = new Image();let seaPlatform_smb1 = new Image();let seaCoral_smb1 = new Image();let seaWave_smb1 = new Image();let bridgeTop_smb1 = new Image();let bridgeBottom_smb1 = new Image();let largeTreeTop_smb1 = new Image();let largeTreeMid_smb1 = new Image();
       let largTreeStump_smb1 = new Image();let smallTreeTop_smb1 = new Image();let smallTreeBottom_smb1 = new Image();let grayBlock_smb1 = new Image();let lava_smb1  = new Image();let lavaWave_smb1 = new Image();let castle1_smb1 = new Image();let castle2_smb1 = new Image();
       let castle3_smb1 = new Image();let castle4_smb1 = new Image();let castle5_smb1 = new Image();let castle6_smb1 = new Image();let castle7_smb1 = new Image();let castle8_smb1 = new Image();let castle9_smb1 = new Image();let castle10_smb1 = new Image();let castle11_smb1 = new Image();



       var goomba_smb1 = new Image();
       var canvas;
       var canvas2;
       var context2;
       var canvas2;
       var canvas3;
       var context3;
       var canvasBack;
       var contextBack;
       var canvasOverlay;
       var contextOverlay;
       let skyBlock = new Image();let brickBlock = new Image();let tubeRight = new Image();let mushroom = new Image();let platformBlock = new Image();let metalBlock = new Image();let mysteryBlock = new Image();let mysteryBlock1 = new Image();let mysteryBlock2 = new Image();let coinBlock = new Image();
       let rampBlock = new Image();let bushSmall = new Image();let bushMedium = new Image();let bushLarge = new Image();let hillSmall = new Image();let hillBig = new Image();let tubeLeft = new Image();let greyMetal = new Image();let hillTop = new Image();
       let hillLeft = new Image();let hillRight = new Image();let hillDimple = new Image();let hillMid = new Image();let bushMid = new Image();let bushLeft = new Image();let bushRight = new Image();let tubeMid = new Image();








//tile264

       var playerLocationX = 0;
       var playerLocationY = 0;
       var playerRefresh = 0;
       var playerPos = 'none';
      
       var  controller, loop, player, render, resize, sprite_sheet;


        treePlatform1_smb1.src = '../images/treePlatform1_smb1.png';treePlatform2_smb1.src = '../images/treePlatform2_smb1.png';treePlatform3_smb1.src = '../images/treePlatform3_smb1.png';treePlatformStump_smb1.src = '../images/treePlatformStump_smb1.png';
        castleSpike_smb1.src = '../images/castleSpike_smb1.png';castleSpike2_smb1.src = '../images/castleSpike2_smb1.png';castleBrick_smb1.src = '../images/castleBrick_smb1.png';metalBlockTeal_smb1.src = '../images/metalBlockTeal_smb1.png';
        flagpole_smb1.src = '../images/flagpole_smb1.png';flagpoleTop_smb1.src = '../images/flagpoleTop_smb1.png';blackSky_smb1.src = '../images/blackSky_smb1.png';tealRamp_smb1.src = '../images/tealRamp_smb1.png';tealMetal_smb1.src = '../images/tealMetal_smb1.png';
        tealBlock_smb1.src = '../images/tealBlock_smb1.png';tealPlatform_smb1.src = '../images/tealPlatform_smb1.png';seaBlock_smb1.src = '../images/seaBlock_smb1.png';seaPlatform_smb1.src = '../images/seaPlatform_smb1.png';seaCoral_smb1.src = '../images/seaCoral_smb1.png';
        seaWave_smb1.src = '../images/seaWave_smb1.png';bridgeTop_smb1.src = '../images/bridgeTop_smb1.png';bridgeBottom_smb1.src = '../images/bridgeBottom_smb1.png';largeTreeTop_smb1.src = '../images/largeTreeTop_smb1.png';largeTreeMid_smb1.src = '../images/largeTreeMid_smb1.png';
        largTreeStump_smb1.src = '../images/largTreeStump_smb1.png';smallTreeTop_smb1.src = '../images/smallTreeTop_smb1.png';smallTreeBottom_smb1.src = '../images/largTreeStump_smb1.png';grayBlock_smb1.src = '../images/grayBlock_smb1.png';lava_smb1.src = '../images/lava_smb1.png';
        lavaWave_smb1.src = '../images/lavaWave_smb1.png';castle1_smb1.src = '../images/castle1_smb1.png';castle2_smb1.src = '../images/castleSpike_smb1.png';castle3_smb1.src = '../images/castle3_smb1.png';castle4_smb1.src = '../images/castle4_smb1.png';
        castle5_smb1.src = '../images/castle5_smb1.png';castle6_smb1.src = '../images/castle5_smb1.png';castle7_smb1.src = '../images/castle5_smb1.png';castle8_smb1.src = '../images/castle5_smb1.png';castle9_smb1.src = '../images/castle5_smb1.png';
        castle10_smb1.src = '../images/castle5_smb1.png';castle11_smb1.src = '../images/castle5_smb1.png';
        bushSmall.src = '../images/bush.gif';bushMedium.src = '../images/bush2.gif';bushLarge.src = '../images/bush3.gif';hillSmall.src = '../images/hillSmall.gif';hillBig.src = '../images/hillBig.gif';
        hillTop.src = '../images/hillTop.png';hillLeft.src = '../images/hillLeft.png';hillRight.src = '../images/hillRight.png';hillDimple.src = '../images/hillLeftIn.png';hillMid.src = '../images/hillMid.png'; 
        bushMid.src = '../images/bushMid.png';bushLeft.src = '../images/bushLeft.png';bushRight.src = '../images/bushRight.png'; 
        brickBlock.src = '../images/ground.png';skyBlock.src = '../images/sky.png';tubeRight.src = '../images/tube2.png';tubeMid.src = '../images/tubeMid.png';tubeLeft.src = '../images/tube1.png';
        goomba_smb1.src='../images/goomba.gif'; greyMetal.src = '../images/greyMetal.png';mushroom.src = '../images/mushroom.png';platformBlock.src = '../images/brick.png';metalBlock.src = '../images/metalBlock.png';mysteryBlock.src = '../images/mysteryBlock.png';
        mysteryBlock1.src = '../images/mysteryBlock1.png';mysteryBlock2.src = '../images/mysteryBlock2.png';coinBlock.src = '../images/coinBlock.png';rampBlock.src = '../images/rampBlock.png';


    


/********************************************************   Characters Grahpics Pack 1 *********************************************************************************************/
let marioSMB1_still_BIG = new Image();let marioSMB1_still_BIGsmall = new Image();let marioSMB1_swim1 = new Image();let marioSMB1_swim2 = new Image();let marioSMB1_swim3 = new Image();let marioSMB1_swim3_BIG = new Image();let marioSMB1_swim4 = new Image();let marioSMB1_swim5 = new Image();let marioSMB1_walk2 = new Image();let marioSMB1_walk2_BIG = new Image();let marioSMB1_walkL1 = new Image();let marioSMB1_walkL1_BIG = new Image();let marioSMB1_walkL3 = new Image();let marioSMB1_still = new Image();let marioSMB1_pole = new Image();let marioSMB1_pole2 = new Image();let marioSMB1_fall = new Image();let marioSMB1_fall_BIG = new Image();let marioSMB1_jump1 = new Image();let marioSMB1_duck_BIG = new Image();let marioSMB1_slide = new Image();let marioSMB1_slide_BIG = new Image();
marioSMB1_still_BIG.src = '../images/marioSMB1/marioSMB1_still_BIG.png';marioSMB1_still_BIGsmall.src = '../images/marioSMB1/marioSMB1_still_BIGsmall.png';marioSMB1_swim1.src = '../images/marioSMB1/marioSMB1_swim1.png';marioSMB1_swim2.src = '../images/marioSMB1/marioSMB1_swim2.png';marioSMB1_swim3.src = '../images/marioSMB1/marioSMB1_swim3.png';marioSMB1_swim3_BIG.src = '../images/marioSMB1/marioSMB1_swim3_BIG.png';marioSMB1_swim4.src = '../images/marioSMB1/marioSMB1_swim4.png';marioSMB1_swim5.src = '../images/marioSMB1/marioSMB1_swim5.png';marioSMB1_walk2.src = '../images/marioSMB1/marioSMB1_walk2.png';marioSMB1_walk2_BIG.src = '../images/marioSMB1/marioSMB1_walk2_BIG.png';marioSMB1_walkL1.src = '../images/marioSMB1/marioSMB1_walkL1.png';marioSMB1_walkL1_BIG.src = '../images/marioSMB1/marioSMB1_walkL1_BIG.png';marioSMB1_walkL3.src = '../images/marioSMB1/marioSMB1_walkL3.png';marioSMB1_still.src = '../images/marioSMB1/marioSMB1_still.png';marioSMB1_pole.src = '../images/marioSMB1/marioSMB1_pole.png';marioSMB1_pole2.src = '../images/marioSMB1/marioSMB1_pole2.png';marioSMB1_fall.src = '../images/marioSMB1/marioSMB1_fall.png';marioSMB1_fall_BIG.src = '../images/marioSMB1/marioSMB1_fall_BIG.png';marioSMB1_jump1.src = '../images/marioSMB1/marioSMB1_jump1.png';marioSMB1_duck_BIG.src = '../images/marioSMB1/marioSMB1_duck_BIG.png';marioSMB1_slide.src = '../images/marioSMB1/marioSMB1_slide.png';marioSMB1_slide_BIG.src = '../images/marioSMB1/marioSMB1_slide_BIG.png';
      

let luigiSMB1_1 = new Image();let luigiSMB1_2 = new Image();let luigiSMB1_3 = new Image();let luigiSMB1_4 = new Image();let luigiSMB1_5 = new Image();let luigiSMB1_6 = new Image();let luigiSMB1_7 = new Image();let luigiSMB1_8 = new Image();let luigiSMB1_9 = new Image();let luigiSMB1_10 = new Image();let luigiSMB1_11 = new Image();let luigiSMB1_12 = new Image();let luigiSMB1_13 = new Image();let luigiSMB1_14 = new Image();let luigiSMB1_1_BIG = new Image();let luigiSMB1_2_BIG = new Image();let luigiSMB1_3_BIG = new Image();let luigiSMB1_4_BIG = new Image();let luigiSMB1_5_BIG = new Image();let luigiSMB1_6_BIG = new Image();let luigiSMB1_7_BIG = new Image();let luigiSMB1_8_BIG = new Image();let luigiSMB1_9_BIG = new Image();let luigiSMB1_10_BIG = new Image();let luigiSMB1_11_BIG = new Image();let luigiSMB1_12_BIG = new Image();let luigiSMB1_13_BIG = new Image();let luigiSMB1_14_BIG = new Image();let luigiSMB1_15_BIG = new Image();let luigiSMB1_16_BIG = new Image();let luigiSMB1_17_BIG = new Image();let luigiSMB1_18_BIG = new Image();let luigiSMB1_19_BIG = new Image();let luigiSMB1_20_BIG = new Image();let luigiSMB1_21_BIG = new Image();
luigiSMB1_1.src = '../images/luigiSMB1/luigiSMB1_1.png';luigiSMB1_2.src = '../images/luigiSMB1/luigiSMB1_2.png';luigiSMB1_3.src = '../images/luigiSMB1/luigiSMB1_3.png';luigiSMB1_4.src = '../images/luigiSMB1/luigiSMB1_4.png';luigiSMB1_5.src = '../images/luigiSMB1/luigiSMB1_5.png';luigiSMB1_6.src = '../images/luigiSMB1/luigiSMB1_6.png';luigiSMB1_7.src = '../images/luigiSMB1/luigiSMB1_7.png';luigiSMB1_8.src = '../images/luigiSMB1/luigiSMB1_8.png';luigiSMB1_9.src = '../images/luigiSMB1/luigiSMB1_9.png';luigiSMB1_10.src = '../images/luigiSMB1/luigiSMB1_10.png';luigiSMB1_11.src = '../images/luigiSMB1/luigiSMB1_11.png';luigiSMB1_12.src = '../images/luigiSMB1/luigiSMB1_12.png';luigiSMB1_13.src = '../images/luigiSMB1/luigiSMB1_13.png';luigiSMB1_14.src = '../images/luigiSMB1/luigiSMB1_14.png';luigiSMB1_1_BIG.src = '../images/luigiSMB1/luigiSMB1_1_BIG.png';luigiSMB1_2_BIG.src = '../images/luigiSMB1/luigiSMB1_2_BIG.png';luigiSMB1_3_BIG.src = '../images/luigiSMB1/luigiSMB1_3_BIG.png';luigiSMB1_4_BIG.src = '../images/luigiSMB1/luigiSMB1_4_BIG.png';luigiSMB1_5_BIG.src = '../images/luigiSMB1/luigiSMB1_5_BIG.png';luigiSMB1_6_BIG.src = '../images/luigiSMB1/luigiSMB1_6_BIG.png';luigiSMB1_7_BIG.src = '../images/luigiSMB1/luigiSMB1_7_BIG.png';luigiSMB1_8_BIG.src = '../images/luigiSMB1/luigiSMB1_8_BIG.png';luigiSMB1_9_BIG.src = '../images/luigiSMB1/luigiSMB1_9_BIG.png';luigiSMB1_10_BIG.src = '../images/luigiSMB1/luigiSMB1_10_BIG.png';luigiSMB1_11_BIG.src = '../images/luigiSMB1/luigiSMB1_11_BIG.png';luigiSMB1_12_BIG.src = '../images/luigiSMB1/luigiSMB1_12_BIG.png';luigiSMB1_13_BIG.src = '../images/luigiSMB1/luigiSMB1_13_BIG.png';luigiSMB1_14_BIG.src = '../images/luigiSMB1/luigiSMB1_14_BIG.png';luigiSMB1_15_BIG.src = '../images/luigiSMB1/luigiSMB1_15_BIG.png';luigiSMB1_16_BIG.src = '../images/luigiSMB1/luigiSMB1_16_BIG.png';luigiSMB1_17_BIG.src = '../images/luigiSMB1/luigiSMB1_17_BIG.png';luigiSMB1_18_BIG.src = '../images/luigiSMB1/luigiSMB1_18_BIG.png';luigiSMB1_19_BIG.src = '../images/luigiSMB1/luigiSMB1_19_BIG.png';luigiSMB1_20_BIG.src = '../images/luigiSMB1/luigiSMB1_20_BIG.png';luigiSMB1_21_BIG.src = '../images/luigiSMB1/luigiSMB1_21_BIG.png';

let bowserSMB1_1 = new Image();let bowserSMB1_2 = new Image();let bowserSMB1_3 = new Image();let bowserSMB1_4 = new Image();let bowserSMB1_5 = new Image();let bowserSMB1_6 = new Image();let bowserSMB1_7 = new Image();let bowserSMB1_8 = new Image();let bowserSMB1_9 = new Image();let bowserSMB1_10 = new Image();let bowserSMB1_11 = new Image();let bowserSMB1_12 = new Image();let bowserSMB1_13 = new Image();let bowserSMB1_14 = new Image();let bowserSMB1_15 = new Image();let bowserSMB1_16 = new Image();let bowserSMB1_17 = new Image();let bowserSMB1_18 = new Image();let bowserSMB1_19 = new Image();let bowserSMB1_20 = new Image();let bowserSMB1_21 = new Image();let bowserSMB1_22 = new Image();let bowserSMB1_23 = new Image();
bowserSMB1_1.src = '../images/bowserSMB1/bowserSMB1_1.png';bowserSMB1_2.src = '../images/bowserSMB1/bowserSMB1_2.png';bowserSMB1_3.src = '../images/bowserSMB1/bowserSMB1_3.png';bowserSMB1_4.src = '../images/bowserSMB1/bowserSMB1_4.png';bowserSMB1_5.src = '../images/bowserSMB1/bowserSMB1_5.png';bowserSMB1_6.src = '../images/bowserSMB1/bowserSMB1_6.png';bowserSMB1_7.src = '../images/bowserSMB1/bowserSMB1_7.png';bowserSMB1_8.src = '../images/bowserSMB1/bowserSMB1_8.png';bowserSMB1_9.src = '../images/bowserSMB1/bowserSMB1_9.png';bowserSMB1_10.src = '../images/bowserSMB1/bowserSMB1_10.png';bowserSMB1_11.src = '../images/bowserSMB1/bowserSMB1_11.png';bowserSMB1_12.src = '../images/bowserSMB1/bowserSMB1_12.png';bowserSMB1_13.src = '../images/bowserSMB1/bowserSMB1_13.png';bowserSMB1_14.src = '../images/bowserSMB1/bowserSMB1_14.png';bowserSMB1_15.src = '../images/bowserSMB1/bowserSMB1_15.png';bowserSMB1_16.src = '../images/bowserSMB1/bowserSMB1_16.png';bowserSMB1_17.src = '../images/bowserSMB1/bowserSMB1_17.png';bowserSMB1_18.src = '../images/bowserSMB1/bowserSMB1_18.png';bowserSMB1_19.src = '../images/bowserSMB1/bowserSMB1_19.png';bowserSMB1_20.src = '../images/bowserSMB1/bowserSMB1_20.png';bowserSMB1_21.src = '../images/bowserSMB1/bowserSMB1_21.png';bowserSMB1_22.src = '../images/bowserSMB1/bowserSMB1_22.png';bowserSMB1_23.src = '../images/bowserSMB1/bowserSMB1_23.png';

let warioSMB1_1 = new Image();let warioSMB1_2 = new Image();let warioSMB1_3 = new Image();let warioSMB1_4 = new Image();let warioSMB1_5 = new Image();let warioSMB1_6 = new Image();let warioSMB1_7 = new Image();let warioSMB1_8 = new Image();let warioSMB1_9 = new Image();let warioSMB1_10 = new Image();let warioSMB1_11 = new Image();let warioSMB1_12 = new Image();let warioSMB1_13 = new Image();let warioSMB1_14 = new Image();let warioSMB1_15 = new Image();let warioSMB1_16 = new Image();let warioSMB1_17 = new Image();let warioSMB1_18 = new Image();let warioSMB1_19 = new Image();let warioSMB1_20 = new Image();let warioSMB1_21 = new Image();let warioSMB1_22 = new Image();let warioSMB1_23 = new Image();
warioSMB1_1.src = '../images/warioSMB1/luigiSMB1_1.png';warioSMB1_2.src = '../images/warioSMB1/luigiSMB1_2.png';warioSMB1_3.src = '../images/warioSMB1/luigiSMB1_3.png';warioSMB1_4.src = '../images/warioSMB1/luigiSMB1_4.png';warioSMB1_5.src = '../images/warioSMB1/luigiSMB1_5.png';warioSMB1_6.src = '../images/warioSMB1/luigiSMB1_6.png';warioSMB1_7.src = '../images/warioSMB1/luigiSMB1_7.png';warioSMB1_8.src = '../images/warioSMB1/luigiSMB1_8.png';warioSMB1_9.src = '../images/warioSMB1/luigiSMB1_9.png';warioSMB1_10.src = '../images/warioSMB1/luigiSMB1_10.png';warioSMB1_11.src = '../images/warioSMB1/luigiSMB1_11.png'; warioSMB1_12.src = '../images/warioSMB1/luigiSMB1_12.png';warioSMB1_13.src = '../images/warioSMB1/luigiSMB1_13.png';warioSMB1_14.src = '../images/warioSMB1/luigiSMB1_14.png';warioSMB1_15.src = '../images/warioSMB1/luigiSMB1_15.png';warioSMB1_16.src = '../images/warioSMB1/luigiSMB1_16.png';warioSMB1_17.src = '../images/warioSMB1/luigiSMB1_17.png';warioSMB1_18.src = '../images/warioSMB1/luigiSMB1_18.png';warioSMB1_19.src = '../images/warioSMB1/luigiSMB1_19.png';warioSMB1_20.src = '../images/warioSMB1/luigiSMB1_20.png';warioSMB1_21.src = '../images/warioSMB1/luigiSMB1_21.png';warioSMB1_22.src = '../images/warioSMB1/luigiSMB1_22.png';warioSMB1_23.src = '../images/warioSMB1/luigiSMB1_23.png';
/********************************************************   Characters Grahpics Pack 1 *********************************************************************************************/






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