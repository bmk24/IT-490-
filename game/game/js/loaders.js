

window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
var startGame = 1;
var gameStatus = 1;
var playerStop = 0;
var playerBlock = 0;
var playerBlock1;
var playerLastX = 0;
var playerLastY = 0;
var frame_set;
var xObsticle = [];
var x2Obsticle = [];
var mysteryY = 0;
var playerOBJ;
var tempThing;
var spriteStatus = [];
var  controller, loop, player, render, resize, sprite_sheet;
var goomba_smb1 = new Image();
var canvas,canvas2,context2,canvas2,canvas3,context3,canvasBack,contextBack,canvasOverlay,contextOverlay;
var playerLocationX = 0;var playerLocationY = 0;var playerRefresh = 0;var playerPos = 'none';

   //localStorage.removeItem('USER');
let marioSMB1_still_BIG = new Image();
let marioSMB1_still_BIGsmall = new Image();
let marioSMB1_swim1 = new Image();
let marioSMB1_swim2 = new Image();
let marioSMB1_swim3 = new Image();
let marioSMB1_swim3_BIG = new Image();
let marioSMB1_swim4 = new Image();
let marioSMB1_swim5 = new Image();
let marioSMB1_walk2 = new Image();
let marioSMB1_walk2_BIG = new Image();
let marioSMB1_walkL1 = new Image();
let marioSMB1_walkL1_BIG = new Image();
let marioSMB1_walkL3 = new Image();
let marioSMB1_still = new Image();
let marioSMB1_pole = new Image();
let marioSMB1_pole2 = new Image();
let marioSMB1_fall = new Image();
let marioSMB1_fall_BIG = new Image();
let marioSMB1_jump1 = new Image();
let marioSMB1_duck_BIG = new Image();
let marioSMB1_slide = new Image();
let marioSMB1_slide_BIG = new Image();
let luigiSMB1_1 = new Image();
let luigiSMB1_2 = new Image();
let luigiSMB1_3 = new Image();
let luigiSMB1_4 = new Image();
let luigiSMB1_5 = new Image();
let luigiSMB1_6 = new Image();
let luigiSMB1_7 = new Image();
let luigiSMB1_8 = new Image();
let luigiSMB1_9 = new Image();
let luigiSMB1_10 = new Image();
let luigiSMB1_11 = new Image();
let luigiSMB1_12 = new Image();
let luigiSMB1_13 = new Image();
let luigiSMB1_14 = new Image();
let luigiSMB1_1_BIG = new Image();
let luigiSMB1_2_BIG = new Image();
let luigiSMB1_3_BIG = new Image();
let luigiSMB1_4_BIG = new Image();
let luigiSMB1_5_BIG = new Image();
let luigiSMB1_6_BIG = new Image();
let luigiSMB1_7_BIG = new Image();
let luigiSMB1_8_BIG = new Image();
let luigiSMB1_9_BIG = new Image();
let luigiSMB1_10_BIG = new Image();
let luigiSMB1_11_BIG = new Image();
let luigiSMB1_12_BIG = new Image();
let luigiSMB1_13_BIG = new Image(),
luigiSMB1_14_BIG = new Image();
let luigiSMB1_15_BIG = new Image();
let luigiSMB1_16_BIG = new Image();
let luigiSMB1_17_BIG = new Image();
let luigiSMB1_18_BIG = new Image();
let luigiSMB1_19_BIG = new Image();
let luigiSMB1_20_BIG = new Image();
let luigiSMB1_21_BIG = new Image();
let bowserSMB1_1 = new Image();
let bowserSMB1_2 = new Image();
let bowserSMB1_3 = new Image();
let bowserSMB1_4 = new Image();
let bowserSMB1_5 = new Image();
let bowserSMB1_6 = new Image();
let bowserSMB1_7 = new Image();
let bowserSMB1_8 = new Image();
let bowserSMB1_9 = new Image();
let bowserSMB1_10 = new Image();
let bowserSMB1_11 = new Image();
let bowserSMB1_12 = new Image();
let bowserSMB1_13 = new Image();
let bowserSMB1_14 = new Image();
let bowserSMB1_15 = new Image();
let bowserSMB1_16 = new Image();
let bowserSMB1_17 = new Image();
let bowserSMB1_18 = new Image();
let bowserSMB1_19 = new Image();
let bowserSMB1_20 = new Image();
let bowserSMB1_21 = new Image();
let bowserSMB1_22 = new Image();
let bowserSMB1_23 = new Image();
let warioSMB1_1 = new Image();
let warioSMB1_2 = new Image();
let warioSMB1_3 = new Image();
let warioSMB1_4 = new Image();
let warioSMB1_5 = new Image();
let warioSMB1_6 = new Image();
let warioSMB1_7 = new Image();
let warioSMB1_8 = new Image();
let warioSMB1_9 = new Image();
let warioSMB1_10 = new Image();
let warioSMB1_11 = new Image();
let warioSMB1_12 = new Image();
let warioSMB1_13 = new Image();
let warioSMB1_14 = new Image();
let warioSMB1_15 = new Image();
let warioSMB1_16 = new Image();
let warioSMB1_17 = new Image();
let warioSMB1_18 = new Image();
let warioSMB1_19 = new Image();
let warioSMB1_20 = new Image();
let warioSMB1_21 = new Image();
let warioSMB1_22 = new Image();
let warioSMB1_23 = new Image();
let treePlatform1_smb1 = new Image();
let treePlatform2_smb1 = new Image();
let treePlatform3_smb1 = new Image();
let treePlatformStump_smb1 = new Image();
let castleSpike_smb1 = new Image();
let castleSpike2_smb1 = new Image();
let castleBrick_smb1 = new Image();
let metalBlockTeal_smb1 = new Image();
let flagpole_smb1 = new Image();
let flagpoleTop_smb1 = new Image();
let blackSky_smb1 = new Image();
let tealRamp_smb1 = new Image();
let tealMetal_smb1 = new Image();
let tealBlock_smb1 = new Image();
let tealPlatform_smb1 = new Image();
let seaBlock_smb1 = new Image();
let seaPlatform_smb1 = new Image();
let seaCoral_smb1 = new Image();
let seaWave_smb1 = new Image();
let bridgeTop_smb1 = new Image();
let bridgeBottom_smb1 = new Image();
let largeTreeTop_smb1 = new Image();
let largeTreeMid_smb1 = new Image();
let largeTreeStump_smb1 = new Image();
let smallTreeTop_smb1 = new Image();
let smallTreeBottom_smb1 = new Image();
let grayBlock_smb1 = new Image();
let lava_smb1  = new Image();
let lavaWave_smb1 = new Image();
let castle1_smb1 = new Image();
let castle2_smb1 = new Image();
let castle3_smb1 = new Image();
let castle4_smb1 = new Image();
let castle5_smb1 = new Image();
let castle6_smb1 = new Image();
let castle7_smb1 = new Image();
let castle8_smb1 = new Image();
let castle9_smb1 = new Image();
let castle10_smb1 = new Image();
let castle11_smb1 = new Image();
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
let block3 = new Image();
let coin_1 = new Image();
let coin_2 = new Image();
let coin_3 = new Image();
let goomba_1 = new Image();
let goomba_2 = new Image();
let goomba_3 = new Image();
let marioWalk_smb1 = new Image();
let marioWalk1_smb1 = new Image();
let marioWalk2_smb1 = new Image();
let luigiWalk_smb1 = new Image();
let luigiWalk1_smb1 = new Image();
let luigiWalk2_smb1 = new Image();
let warioWalk_smb1 = new Image();
let warioWalk1_smb1 = new Image();
let warioWalk2_smb1 = new Image();
let bowserWalk_smb1 = new Image();
let bowserWalk1_smb1 = new Image();
let bowserWalk2_smb1 = new Image();

var audio = new Audio('../music/theme_song.mp3');
var overAudio = new Audio('../music/smb_gameover.wav');
var dieAudio = new Audio('../music/smb_mariodie.wav');
var pauseAudio = new Audio('../music/smb_pause.wav');
var clearAudio = new Audio('../music/smb_stage_clear.wav');
var warnAudio = new Audio('../music/smb_warning.wav');
var coinAudio = new Audio('../music/smb_coin.wav');

let brickBlockV1 = new Image();
let brickBlockV2 = new Image();
let brickBlockV3 = new Image();

let platformBlockV1 = new Image();
let platformBlockV2 = new Image();
let platformBlockV3 = new Image();

let rampBlockV1 = new Image();
let rampBlockV2 = new Image();
let rampBlockV3 = new Image();

let tubeBlockV1 = new Image();
let tubeBlockV2 = new Image();
let tubeBlockV3 = new Image();


let fence_smb1 = new Image();
let springTop_smb1 = new Image();
let springBottom_smb1 = new Image();

let koopa_1 = new Image();
let koopa_2 = new Image();
let koopa_1R = new Image();
let koopa_2R = new Image();
let koopa_shell = new Image();

koopa_1.src = '../../images/koopa_1.png';
koopa_2.src = '../../images/koopa_2.png';
koopa_1R.src = '../../images/koopa_1R.png';
koopa_2R.src = '../../images/koopa_2R.png';
koopa_shell.src = '../../images/koopa_shell.png';

brickBlockV1.src = '../../images/smb1/brick_1.png';
brickBlockV2.src = '../../images/smb2/brick_2.png';
brickBlockV3.src = '../../images/smb3/brick_3.png';


platformBlockV1.src = '../../images/smb1/platform_1.png';
platformBlockV2.src = '../../images/smb2/platform_2.png';
platformBlockV3.src = '../../images/smb3/platform_3.png';


rampBlockV1.src = '../../images/smb1/ramp_1.png';
rampBlockV2.src = '../../images/smb2/ramp_2.png';
rampBlockV3.src = '../../images/smb3/ramp_3.png';


tubeBlockV1.src = '../../images/smb1/tube_1.png';
tubeBlockV2.src = '../../images/smb2/tube_2.png';
tubeBlockV3.src = '../../images/smb3/tube_3.png';

fence_smb1.src = '../../images/tile005.png';

springTop_smb1.src = '../../images/springTop_sbm1.png';

springBottom_smb1.src = '../../images/springTop_sbm1.png';


marioWalk_smb1.src = '../../images/smb1/marioWalk.png';marioWalk1_smb1.src = '../../images/smb1/marioWalk1.png';marioWalk2_smb1.src = '../../images/smb1/marioWalk2.png';luigiWalk_smb1.src = '../../images/smb1/luigiWalk.png';
luigiWalk1_smb1.src = '../../images/smb1/luigiWalk1.png';luigiWalk2_smb1.src = '../../images/smb1/luigiWalk2.png';warioWalk_smb1.src = '../../images/smb1/warioWalk.png';warioWalk1_smb1.src = '../../images/smb1/warioWalk1.png';warioWalk2_smb1.src = '../../images/smb1/warioWalk2.png';bowserWalk_smb1.src = '../../images/smb1/bowserWalk.png';bowserWalk1_smb1.src = '../../images/smb1/bowserWalk1.png';bowserWalk2_smb1.src = '../../images/smb1/bowserWalk2.png';
block3.src = '../../images/block3.png';treePlatform1_smb1.src = '../../images/treePlatform1_smb1.png';treePlatform2_smb1.src = '../../images/treePlatform2_smb1.png';treePlatform3_smb1.src = '../../images/treePlatform3_smb1.png';treePlatformStump_smb1.src = '../../images/treePlatformStump_smb1.png';
castleSpike_smb1.src = '../../images/castleSpike_smb1.png';castleSpike2_smb1.src = '../../images/castleSpike2_smb1.png';castleBrick_smb1.src = '../../images/castleBrick_smb1.png';metalBlockTeal_smb1.src = '../../images/metalBlockTeal_smb1.png';
flagpole_smb1.src = '../../images/flagpole_smb1.png';flagpoleTop_smb1.src = '../../images/flagpoleTop_smb1.png';blackSky_smb1.src = '../../images/blackSky_smb1.png';tealRamp_smb1.src = '../../images/tealRamp_smb1.png';tealMetal_smb1.src = '../../images/tealMetal_smb1.png';
tealBlock_smb1.src = '../../images/tealBlock_smb1.png';tealPlatform_smb1.src = '../../images/tealPlatform_smb1.png';seaBlock_smb1.src = '../../images/seaBlock_smb1.png';seaPlatform_smb1.src = '../../images/seaPlatform_smb1.png';seaCoral_smb1.src = '../../images/seaCoral_smb1.png';
seaWave_smb1.src = '../../images/seaWave_smb1.png';bridgeTop_smb1.src = '../../images/bridgeTop_smb1.png';bridgeBottom_smb1.src = '../../images/bridgeBottom_smb1.png';largeTreeTop_smb1.src = '../../images/largeTreeTop_smb1.png';largeTreeMid_smb1.src = '../../images/largeTreeMid_smb1.png';
largeTreeStump_smb1.src = '../../images/largeTreeStump_smb1.png';smallTreeTop_smb1.src = '../../images/smallTreeTop_smb1.png';smallTreeBottom_smb1.src = '../../images/largeTreeStump_smb1.png';grayBlock_smb1.src = '../../images/grayBlock_smb1.png';lava_smb1.src = '../../images/lava_smb1.png';
lavaWave_smb1.src = '../../images/lavaWave_smb1.png';castle1_smb1.src = '../../images/castle1_smb1.png';castle2_smb1.src = '../../images/castleSpike_smb1.png';castle3_smb1.src = '../../images/castle3_smb1.png';castle4_smb1.src = '../../images/castle4_smb1.png';
castle5_smb1.src = '../../images/castle5_smb1.png';castle6_smb1.src = '../../images/castle5_smb1.png';castle7_smb1.src = '../../images/castle5_smb1.png';castle8_smb1.src = '../../images/castle5_smb1.png';castle9_smb1.src = '../../images/castle5_smb1.png';
castle10_smb1.src = '../../images/castle5_smb1.png';castle11_smb1.src = '../../images/castle5_smb1.png';
bushSmall.src = '../../images/bush.gif';bushMedium.src = '../../images/bush2.gif';bushLarge.src = '../../images/bush3.gif';hillSmall.src = '../../images/hillSmall.gif';hillBig.src = '../../images/hillBig.gif';
hillTop.src = '../../images/hillTop.png';hillLeft.src = '../../images/hillLeft.png';hillRight.src = '../../images/hillRight.png';hillDimple.src = '../../images/hillLeftIn.png';hillMid.src = '../../images/hillMid.png'; 
bushMid.src = '../../images/bushMid.png';bushLeft.src = '../../images/bushLeft.png';bushRight.src = '../../images/bushRight.png'; 
brickBlock.src = '../../images/ground.png';skyBlock.src = '../../images/sky.png';tubeRight.src = '../../images/tube2.png';tubeMid.src = '../../images/tubeMid.png';tubeLeft.src = '../../images/tube1.png';
goomba_smb1.src='../../images/goomba.gif'; greyMetal.src = '../../images/greyMetal.png';mushroom.src = '../../images/mushroom.png';platformBlock.src = '../../images/brick.png';metalBlock.src = '../../images/metalBlock.png';mysteryBlock.src = '../../images/mysteryBlock.png';
mysteryBlock1.src = '../../images/mysteryBlock1.png';mysteryBlock2.src = '../../images/mysteryBlock2.png';coinBlock.src = '../../images/coinBlock.png';rampBlock.src = '../../images/rampBlock.png';
coin_1.src = '../../images/coin1.png';coin_2.src = '../../images/coin2.png';coin_3.src = '../../images/coin3.png';
goomba_1.src = '../../images/goomba1.png';goomba_2.src = '../../images/goomba2.png';goomba_3.src = '../../images/goomba3.png';
marioSMB1_still_BIG.src = '../../images/marioSMB1/marioSMB1_still_BIG.png';marioSMB1_still_BIGsmall.src = '../../images/marioSMB1/marioSMB1_still_BIGsmall.png';marioSMB1_swim1.src = '../../images/marioSMB1/marioSMB1_swim1.png';marioSMB1_swim2.src = '../../images/marioSMB1/marioSMB1_swim2.png';marioSMB1_swim3.src = '../../images/marioSMB1/marioSMB1_swim3.png';marioSMB1_swim3_BIG.src = '../../images/marioSMB1/marioSMB1_swim3_BIG.png';marioSMB1_swim4.src = '../../images/marioSMB1/marioSMB1_swim4.png';marioSMB1_swim5.src = '../../images/marioSMB1/marioSMB1_swim5.png';marioSMB1_walk2.src = '../../images/marioSMB1/marioSMB1_walk2.png';marioSMB1_walk2_BIG.src = '../../images/marioSMB1/marioSMB1_walk2_BIG.png';marioSMB1_walkL1.src = '../../images/marioSMB1/marioSMB1_walkL1.png';marioSMB1_walkL1_BIG.src = '../../images/marioSMB1/marioSMB1_walkL1_BIG.png';marioSMB1_walkL3.src = '../../images/marioSMB1/marioSMB1_walkL3.png';marioSMB1_still.src = '../../images/marioSMB1/marioSMB1_still.png';marioSMB1_pole.src = '../../images/marioSMB1/marioSMB1_pole.png';marioSMB1_pole2.src = '../../images/marioSMB1/marioSMB1_pole2.png';marioSMB1_fall.src = '../../images/marioSMB1/marioSMB1_fall.png';marioSMB1_fall_BIG.src = '../../images/marioSMB1/marioSMB1_fall_BIG.png';marioSMB1_jump1.src = '../../images/marioSMB1/marioSMB1_jump1.png';marioSMB1_duck_BIG.src = '../../images/marioSMB1/marioSMB1_duck_BIG.png';marioSMB1_slide.src = '../../images/marioSMB1/marioSMB1_slide.png';marioSMB1_slide_BIG.src = '../../images/marioSMB1/marioSMB1_slide_BIG.png';
luigiSMB1_1.src = '../../images/luigiSMB1/luigiSMB1_1.png';luigiSMB1_2.src = '../../images/luigiSMB1/luigiSMB1_2.png';luigiSMB1_3.src = '../../images/luigiSMB1/luigiSMB1_3.png';luigiSMB1_4.src = '../../images/luigiSMB1/luigiSMB1_4.png';luigiSMB1_5.src = '../../images/luigiSMB1/luigiSMB1_5.png';luigiSMB1_6.src = '../../images/luigiSMB1/luigiSMB1_6.png';luigiSMB1_7.src = '../../images/luigiSMB1/luigiSMB1_7.png';luigiSMB1_8.src = '../../images/luigiSMB1/luigiSMB1_8.png';luigiSMB1_9.src = '../../images/luigiSMB1/luigiSMB1_9.png';luigiSMB1_10.src = '../../images/luigiSMB1/luigiSMB1_10.png';luigiSMB1_11.src = '../../images/luigiSMB1/luigiSMB1_11.png';luigiSMB1_12.src = '../../images/luigiSMB1/luigiSMB1_12.png';luigiSMB1_13.src = '../../images/luigiSMB1/luigiSMB1_13.png';luigiSMB1_14.src = '../../images/luigiSMB1/luigiSMB1_14.png';luigiSMB1_1_BIG.src = '../../images/luigiSMB1/luigiSMB1_1_BIG.png';luigiSMB1_2_BIG.src = '../../images/luigiSMB1/luigiSMB1_2_BIG.png';luigiSMB1_3_BIG.src = '../../images/luigiSMB1/luigiSMB1_3_BIG.png';luigiSMB1_4_BIG.src = '../../images/luigiSMB1/luigiSMB1_4_BIG.png';luigiSMB1_5_BIG.src = '../../images/luigiSMB1/luigiSMB1_5_BIG.png';luigiSMB1_6_BIG.src = '../../images/luigiSMB1/luigiSMB1_6_BIG.png';luigiSMB1_7_BIG.src = '../../images/luigiSMB1/luigiSMB1_7_BIG.png';luigiSMB1_8_BIG.src = '../../images/luigiSMB1/luigiSMB1_8_BIG.png';luigiSMB1_9_BIG.src = '../../images/luigiSMB1/luigiSMB1_9_BIG.png';luigiSMB1_10_BIG.src = '../../images/luigiSMB1/luigiSMB1_10_BIG.png';luigiSMB1_11_BIG.src = '../../images/luigiSMB1/luigiSMB1_11_BIG.png';luigiSMB1_12_BIG.src = '../../images/luigiSMB1/luigiSMB1_12_BIG.png';luigiSMB1_13_BIG.src = '../../images/luigiSMB1/luigiSMB1_13_BIG.png';luigiSMB1_14_BIG.src = '../../images/luigiSMB1/luigiSMB1_14_BIG.png';luigiSMB1_15_BIG.src = '../../images/luigiSMB1/luigiSMB1_15_BIG.png';luigiSMB1_16_BIG.src = '../../images/luigiSMB1/luigiSMB1_16_BIG.png';luigiSMB1_17_BIG.src = '../../images/luigiSMB1/luigiSMB1_17_BIG.png';luigiSMB1_18_BIG.src = '../../images/luigiSMB1/luigiSMB1_18_BIG.png';luigiSMB1_19_BIG.src = '../../images/luigiSMB1/luigiSMB1_19_BIG.png';luigiSMB1_20_BIG.src = '../../images/luigiSMB1/luigiSMB1_20_BIG.png';luigiSMB1_21_BIG.src = '../../images/luigiSMB1/luigiSMB1_21_BIG.png';
bowserSMB1_1.src = '../../images/bowserSMB1/bowserSMB1_1.png';bowserSMB1_2.src = '../../images/bowserSMB1/bowserSMB1_2.png';bowserSMB1_3.src = '../../images/bowserSMB1/bowserSMB1_3.png';bowserSMB1_4.src = '../../images/bowserSMB1/bowserSMB1_4.png';bowserSMB1_5.src = '../../images/bowserSMB1/bowserSMB1_5.png';bowserSMB1_6.src = '../../images/bowserSMB1/bowserSMB1_6.png';bowserSMB1_7.src = '../../images/bowserSMB1/bowserSMB1_7.png';bowserSMB1_8.src = '../../images/bowserSMB1/bowserSMB1_8.png';bowserSMB1_9.src = '../../images/bowserSMB1/bowserSMB1_9.png';bowserSMB1_10.src = '../../images/bowserSMB1/bowserSMB1_10.png';bowserSMB1_11.src = '../../images/bowserSMB1/bowserSMB1_11.png';bowserSMB1_12.src = '../../images/bowserSMB1/bowserSMB1_12.png';bowserSMB1_13.src = '../../images/bowserSMB1/bowserSMB1_13.png';bowserSMB1_14.src = '../../images/bowserSMB1/bowserSMB1_14.png';bowserSMB1_15.src = '../../images/bowserSMB1/bowserSMB1_15.png';bowserSMB1_16.src = '../../images/bowserSMB1/bowserSMB1_16.png';bowserSMB1_17.src = '../../images/bowserSMB1/bowserSMB1_17.png';bowserSMB1_18.src = '../../images/bowserSMB1/bowserSMB1_18.png';bowserSMB1_19.src = '../../images/bowserSMB1/bowserSMB1_19.png';bowserSMB1_20.src = '../../images/bowserSMB1/bowserSMB1_20.png';bowserSMB1_21.src = '../../images/bowserSMB1/bowserSMB1_21.png';bowserSMB1_22.src = '../../images/bowserSMB1/bowserSMB1_22.png';bowserSMB1_23.src = '../../images/bowserSMB1/bowserSMB1_23.png';
warioSMB1_1.src = '../../images/warioSMB1/luigiSMB1_1.png';warioSMB1_2.src = '../../images/warioSMB1/luigiSMB1_2.png';warioSMB1_3.src = '../../images/warioSMB1/luigiSMB1_3.png';warioSMB1_4.src = '../../images/warioSMB1/luigiSMB1_4.png';warioSMB1_5.src = '../../images/warioSMB1/luigiSMB1_5.png';warioSMB1_6.src = '../../images/warioSMB1/luigiSMB1_6.png';warioSMB1_7.src = '../../images/warioSMB1/luigiSMB1_7.png';warioSMB1_8.src = '../../images/warioSMB1/luigiSMB1_8.png';warioSMB1_9.src = '../../images/warioSMB1/luigiSMB1_9.png';warioSMB1_10.src = '../../images/warioSMB1/luigiSMB1_10.png';warioSMB1_11.src = '../../images/warioSMB1/luigiSMB1_11.png'; warioSMB1_12.src = '../../images/warioSMB1/luigiSMB1_12.png';warioSMB1_13.src = '../../images/warioSMB1/luigiSMB1_13.png';warioSMB1_14.src = '../../images/warioSMB1/luigiSMB1_14.png';warioSMB1_15.src = '../../images/warioSMB1/luigiSMB1_15.png';warioSMB1_16.src = '../../images/warioSMB1/luigiSMB1_16.png';warioSMB1_17.src = '../../images/warioSMB1/luigiSMB1_17.png';warioSMB1_18.src = '../../images/warioSMB1/luigiSMB1_18.png';warioSMB1_19.src = '../../images/warioSMB1/luigiSMB1_19.png';warioSMB1_20.src = '../../images/warioSMB1/luigiSMB1_20.png';warioSMB1_21.src = '../../images/warioSMB1/luigiSMB1_21.png';warioSMB1_22.src = '../../images/warioSMB1/luigiSMB1_22.png';warioSMB1_23.src = '../../images/warioSMB1/luigiSMB1_23.png';
/********************************************************   Characters Grahpics Pack 1 *********************************************************************************************/
var map = {
    spriteSize: 16,
    /*
    Keys 
    0 Blank space after scenery 
    1  Sky Block
    2  Ground Block
    3  Platform Block
    4  metal Block
    5  mystery Block
    6  ramp block
    7 Death Fall 
    8 Boundary Block
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
    22 Bsh part
    23 Teal Metal
    24 Teal Platform
    25 Teal Ground
    26 Teal Ramp
    27 Black Sky
    28 IN PROG
    29 IN PGOG
    30 IN PROG
    31 Gray Platform
    32 Red Lava
    33 Red lava Wave
    34 Lava bridge
    35 Lava bridge chain
    36 Sea
    37 Sea Block
    38 Sea Coral Wave
    39
    /*******Big Hill******
    01,01,15,01,01,
    01,16,18,17,01,
    16,18,19,18,17,
    *********************/
    /*******Small Hill******
    01,15,01,
    16,18,17,
    *********************/
    
    /*******Bush*********
    21,20,22
    *******************/
    /*******Tube*********
    10,11,
    12,13,
    *******************/
           /*
        Key vairables:
        id       [required] - an integer that corresponds with a tile in the data array.
        spriteType   [required] - any javascript compatible spriteType variable.
        isSolid    [optional] - whether the tile is solid or not, defaults to false.
        canAbsorb   [optional] - how much velocity is preserved upon hitting the tile, 0.5 is half.
        jump     [optional] - whether the player can jump while over the tile, defaults to false.
        friction [optional] - friction of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
        gravity  [optional] - gravity of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
        fore     [optional] - whether the tile is drawn in front of the player, defaults to false.
        script   [optional] - refers to a script in the scripts section, executed if it is touched.     
        */


        keys: [
           {id: 0, isSolid: 0,color:'#5D94FB'},
           {id: 1, isSolid: 0,color:'#5D94FB'},
           {id: 2,isSolid: 1,canAbsorb: 0,img:brickBlock},
           {id: 3,isSolid: 1,canAbsorb: 0,img:platformBlock},
           {id: 4,isSolid: 1,canAbsorb: 0,img:metalBlock},
           {id: 5,isSolid: 1,canAbsorb: 0, script: 'mys',img:mysteryBlock},
           {id: 6,isSolid: 1,canAbsorb: 0,img:rampBlock},
           {id: 7,isSolid: 0, script: 'death',color:'#5D94FB'},
           {id: 8,isSolid: 1,color:'#5D94FB'},
           {id: 9,isSolid: 1,img:tubeLeft},
           {id: 10,isSolid: 1,img:tubeRight},
           {id: 11,isSolid: 1,img:tubeLeft},
           {id: 12,isSolid: 1,img:tubeRight},
           {id: 13,isSolid: 1,img:tubeMid},
           {id: 14,isSolid: 1,img:greyMetal},
           {id: 15,isSolid: 0,img:hillTop},
           {id: 16,isSolid: 0,img:hillLeft},
           {id: 17,isSolid: 0,img:hillRight},
           {id: 18,isSolid: 0,img:hillDimple},
           {id: 19,isSolid: 0,img:hillMid},
           {id: 20,isSolid: 0,img:bushMid},
           {id: 21,isSolid: 0,img:bushLeft},
           {id: 22,isSolid: 0,img:bushRight},
           {id: 23,isSolid: 1},
           {id: 24,isSolid: 1},
           {id: 25,isSolid: 1},
           {id: 26,isSolid: 1},
           {id: 27,isSolid: 0},
           {id: 28,isSolid: 0},
           {id: 29,isSolid: 0},
           {id: 30,isSolid: 0},
           {id: 31,isSolid: 1},
           {id: 32,isSolid: 0},
           {id: 33,isSolid: 0},
           {id: 34,isSolid: 1},
           {id: 35,isSolid: 0},
           {id: 36,isSolid: 0},
           {id: 37,isSolid: 1},
           {id: 38,isSolid: 1},
           {id: 39,isSolid: 0},
           {id: 60,isSolid: 1,img:block3},
 
 
           {id: 65,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 66,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 67,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 68,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 69,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 70,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 71,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 72,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 73,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 74,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 75,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 76,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 77,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 78,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 79,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 80,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 81,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 82,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 83,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 84,isSolid: 1, img:mysteryBlock},//Mystery Boxes
           {id: 85,isSolid: 1, img:mysteryBlock},//Mystery Boxes
 
 
           {id: 97,isSolid: 0,img:bushRight, script: 'coin'},
           {id: 98,isSolid: 0, script: 'next_level', color: '#5D94FB'},
           {id: 200,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 201,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 202,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 203,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 204,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 205,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 206,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 207,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 208,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 209,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 210,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 211,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 212,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 213,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 214,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 215,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 216,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 217,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 218,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 219,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 220,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 221,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 222,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 223,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 234,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 235,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 236,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 237,isSolid: 0,img:coin_1, script: 'coin'},
           {id: 238,isSolid: 0,img:coin_1, script: 'coin'},

 
        ],
        gravity: {
           x: 0,
           y: 0.3
        },     
        defaultVelocity: {
           x: 10.5,
           y: 16
        },
 
        playerSpeed: {
           jump: 6.5,
           left: 0.2,
           right: 0.2
        },
        
        
 
        };
      
        


  
        

        koopa_1R.onload,koopa_2R.onload,koopa_shell.onload,koopa_1.onload,koopa_2.onload,springTop_smb1.onload,springBottom_smb1.onload,fence_smb1.onload,platformBlockV1.onload,platformBlockV2.onload,platformBlockV3.onload,rampBlockV1.onload,rampBlockV2.onload,rampBlockV3.onload,tubeBlockV1.onload,tubeBlockV2.onload,tubeBlockV3.onload,brickBlockV1.onload,brickBlockV2.onload,brickBlockV3.onload,goomba_1.onload,goomba_2.onload,goomba_3.onload,coin_1.onload,coin_2.onload,coin_3.onload,block3.onload,marioWalk_smb1.onload,marioWalk1_smb1.onload,marioWalk2_smb1.onload,luigiWalk_smb1.onload,luigiWalk1_smb1.onload,luigiWalk2_smb1.onload,warioWalk_smb1.onload,warioWalk1_smb1.onload,warioWalk2_smb1.onload,bowserWalk_smb1.onload,bowserWalk1_smb1.onload,bowserWalk2_smb1.onload,bowserSMB1_1.onload,bowserSMB1_2.onload,bowserSMB1_3.onload,bowserSMB1_4.onload,bowserSMB1_5.onload,bowserSMB1_6.onload,bowserSMB1_7.onload,bowserSMB1_8.onload,bowserSMB1_9.onload,bowserSMB1_10.onload,bowserSMB1_11.onload,bowserSMB1_12.onload,bowserSMB1_13.onload,bowserSMB1_14.onload,bowserSMB1_15.onload,bowserSMB1_16.onload,bowserSMB1_17.onload,bowserSMB1_18.onload,bowserSMB1_19.onload,bowserSMB1_20.onload,bowserSMB1_21.onload,bowserSMB1_22.onload,bowserSMB1_23.onload,luigiSMB1_1.onload,luigiSMB1_2.onload,luigiSMB1_3.onload,luigiSMB1_4.onload,luigiSMB1_5.onload,luigiSMB1_6.onload,luigiSMB1_7.onload,luigiSMB1_8.onload,luigiSMB1_9.onload,luigiSMB1_10.onload,luigiSMB1_11.onload,luigiSMB1_12.onload,luigiSMB1_13.onload,luigiSMB1_14.onload,luigiSMB1_1_BIG.onload,luigiSMB1_2_BIG.onload,luigiSMB1_3_BIG.onload,luigiSMB1_4_BIG.onload,luigiSMB1_5_BIG.onload,luigiSMB1_6_BIG.onload,luigiSMB1_7_BIG.onload,luigiSMB1_8_BIG.onload,luigiSMB1_9_BIG.onload,luigiSMB1_10_BIG.onload,luigiSMB1_11_BIG.onload,luigiSMB1_12_BIG.onload,luigiSMB1_13_BIG.onload,luigiSMB1_14_BIG.onload,luigiSMB1_15_BIG.onload,luigiSMB1_16_BIG.onload,luigiSMB1_17_BIG.onload,luigiSMB1_18_BIG.onload,luigiSMB1_19_BIG.onload,luigiSMB1_20_BIG.onload,luigiSMB1_21_BIG.onload,marioSMB1_still_BIG.onload,marioSMB1_still_BIGsmall.onload,marioSMB1_swim1.onload,marioSMB1_swim2.onload,marioSMB1_swim3.onload,marioSMB1_swim3_BIG.onload,marioSMB1_swim4.onload,marioSMB1_swim5.onload,marioSMB1_walk2.onload,marioSMB1_walk2_BIG.onload,marioSMB1_walkL1.onload,marioSMB1_walkL1_BIG.onload,marioSMB1_walkL3.onload,marioSMB1_still.onload,marioSMB1_pole.onload,marioSMB1_pole2.onload,marioSMB1_fall.onload,marioSMB1_fall_BIG.onload,marioSMB1_jump1.onload,marioSMB1_duck_BIG.onload,marioSMB1_slide.onload,marioSMB1_slide_BIG.onload,tealMetal_smb1.onload,treePlatform1_smb1.onload,treePlatform2_smb1.onload,treePlatform3_smb1.onload,treePlatformStump_smb1.onload,castleSpike2_smb1.onload,castleSpike2_smb1.onload,castleBrick_smb1.onload,metalBlockTeal_smb1.onload,flagpole_smb1.onload,flagpoleTop_smb1.onload,blackSky_smb1.onload,tealRamp_smb1.onload,tealBlock_smb1.onload,tealPlatform_smb1.onload,seaBlock_smb1.onload,seaPlatform_smb1.onload,seaCoral_smb1.onload,seaWave_smb1.onload,bridgeTop_smb1.onload,bridgeBottom_smb1.onload,largeTreeTop_smb1.onload,largeTreeMid_smb1.onload,largeTreeStump_smb1.onload,smallTreeTop_smb1.onload,smallTreeBottom_smb1.onload,grayBlock_smb1.onload,lava_smb1.onload,lavaWave_smb1.onload,castle1_smb1.onload,castle2_smb1.onload,castle3_smb1.onload,castle4_smb1.onload,castle5_smb1.onload,castle6_smb1.onload,castle7_smb1.onload,castle8_smb1.onload,castle9_smb1.onload,castle10_smb1.onload,castle11_smb1.onload,goomba_smb1.onload,mysteryBlock1.onload,mysteryBlock2.onload,tubeMid.onload,bushMid.onload,bushLeft.onload,bushRight.onload,hillTop.onload,hillLeft.onload,hillRight.onload,hillDimple.onload,hillMid.onload,greyMetal.onload,tubeLeft.onload,hillSmall.onload,hillBig.onload,bushSmall.onload,bushMedium.onload,bushLarge.onload,rampBlock.onload,tubeRight.onload,mushroom.onload,platformBlock.onload,metalBlock.onload,mysteryBlock.onload,coinBlock.onload,brickBlock.onload,skyBlock,onload = function(e) {
    console.log("Resources Initialization");
  
  
      init();
  }
  koopa_1R.onerror,koopa_2R.onerror,koopa_shell.onerror,koopa_1.onload,koopa_2.onload,springTop_smb1.onerror,springBottom_smb1.onerror,fence_smb1.onerror,platformBlockV1.onerror,platformBlockV2.onerror,platformBlockV3.onerror,rampBlockV1.onerror,rampBlockV2.onerror,rampBlockV3.onerror,tubeBlockV1.onerror,tubeBlockV2.onerror,tubeBlockV3.onerror,brickBlockV1.onerror,brickBlockV2.onerror,brickBlockV3.onerror,goomba_1.onerror,goomba_2.onerror,goomba_3.onerror,coin_1.onerror,coin_2.onerror,coin_3.onerror,block3.onerror,marioWalk_smb1.onerror,marioWalk1_smb1.onerror,marioWalk2_smb1.onerror,luigiWalk_smb1.onerror,luigiWalk1_smb1.onerror,luigiWalk2_smb1.onerror,warioWalk_smb1.onerror,warioWalk1_smb1.onerror,warioWalk2_smb1.onerror,bowserWalk_smb1.onerror,bowserWalk1_smb1.onerror,bowserWalk2_smb1.onerror,bowserSMB1_1.onerror,bowserSMB1_2.onerror,bowserSMB1_3.onerror,bowserSMB1_4.onerror,bowserSMB1_5.onerror,bowserSMB1_6.onerror,bowserSMB1_7.onerror,bowserSMB1_8.onerror,bowserSMB1_9.onerror,bowserSMB1_10.onerror,bowserSMB1_11.onerror,bowserSMB1_12.onerror,bowserSMB1_13.onerror,bowserSMB1_14.onerror,bowserSMB1_15.onerror,bowserSMB1_16.onerror,bowserSMB1_17.onerror,bowserSMB1_18.onerror,bowserSMB1_19.onerror,bowserSMB1_20.onerror,bowserSMB1_21.onerror,bowserSMB1_22.onerror,bowserSMB1_23.onerror,luigiSMB1_1.onerror,luigiSMB1_2.onerror,luigiSMB1_3.onerror,luigiSMB1_4.onerror,luigiSMB1_5.onerror,luigiSMB1_6.onerror,luigiSMB1_7.onerror,luigiSMB1_8.onerror,luigiSMB1_9.onerror,luigiSMB1_10.onerror,luigiSMB1_11.onerror,luigiSMB1_12.onerror,luigiSMB1_13.onerror,luigiSMB1_14.onerror,luigiSMB1_1_BIG.onerror,luigiSMB1_2_BIG.onerror,luigiSMB1_3_BIG.onerror,luigiSMB1_4_BIG.onerror,luigiSMB1_5_BIG.onerror,luigiSMB1_6_BIG.onerror,luigiSMB1_7_BIG.onerror,luigiSMB1_8_BIG.onerror,luigiSMB1_9_BIG.onerror,luigiSMB1_10_BIG.onerror,luigiSMB1_11_BIG.onerror,luigiSMB1_12_BIG.onerror,luigiSMB1_13_BIG.onerror,luigiSMB1_14_BIG.onerror,luigiSMB1_15_BIG.onerror,luigiSMB1_16_BIG.onerror,luigiSMB1_17_BIG.onerror,luigiSMB1_18_BIG.onerror,luigiSMB1_19_BIG.onerror,luigiSMB1_20_BIG.onerror,luigiSMB1_21_BIG.onerror,marioSMB1_still_BIG.onerror,marioSMB1_still_BIGsmall.onerror,marioSMB1_swim1.onerror,marioSMB1_swim2.onerror,marioSMB1_swim3.onerror,marioSMB1_swim3_BIG.onerror,marioSMB1_swim4.onerror,marioSMB1_swim5.onerror,marioSMB1_walk2.onerror,marioSMB1_walk2_BIG.onerror,marioSMB1_walkL1.onerror,marioSMB1_walkL1_BIG.onerror,marioSMB1_walkL3.onerror,marioSMB1_still.onerror,marioSMB1_pole.onerror,marioSMB1_pole2.onerror,marioSMB1_fall.onerror,marioSMB1_fall_BIG.onerror,marioSMB1_jump1.onerror,marioSMB1_duck_BIG.onerror,marioSMB1_slide.onerror,marioSMB1_slide_BIG.onerror,tealMetal_smb1.onerror,treePlatform1_smb1.onerror,treePlatform2_smb1.onerror,treePlatform3_smb1.onerror,treePlatformStump_smb1.onerror,castleSpike2_smb1.onerror,castleSpike2_smb1.onerror,castleBrick_smb1.onerror,metalBlockTeal_smb1.onerror,flagpole_smb1.onerror,flagpoleTop_smb1.onerror,blackSky_smb1.onerror,tealRamp_smb1.onerror,tealBlock_smb1.onerror,tealPlatform_smb1.onerror,seaBlock_smb1.onerror,seaPlatform_smb1.onerror,seaCoral_smb1.onerror,seaWave_smb1.onerror,bridgeTop_smb1.onerror,bridgeBottom_smb1.onerror,largeTreeTop_smb1.onerror,largeTreeMid_smb1.onerror,largeTreeStump_smb1.onerror,smallTreeTop_smb1.onerror,smallTreeBottom_smb1.onerror,grayBlock_smb1.onerror,lava_smb1.onerror,lavaWave_smb1.onerror,castle1_smb1.onerror,castle2_smb1.onerror,castle3_smb1.onerror,castle4_smb1.onerror,castle5_smb1.onerror,castle6_smb1.onerror,castle7_smb1.onerror,castle8_smb1.onerror,castle9_smb1.onerror,castle10_smb1.onerror,castle11_smb1.onerror,goomba_smb1.onerror,mysteryBlock1.onerror,mysteryBlock2.onerror,tubeMid.onerror,bushMid.onerror,bushLeft.onerror,bushRight.onerror,hillTop.onerror,hillLeft.onerror,hillRight.onerror,hillDimple.onerror,hillMid.onerror,greyMetal.onerror,tubeLeft.onerror,hillSmall.onerror,hillBig.onerror,bushSmall.onerror,bushMedium.onerror,bushLarge.onerror,rampBlock.onerror,tubeRight.onerror,mushroom.onerror,platformBlock.onerror,metalBlock.onerror,mysteryBlock.onerror,coinBlock.onerror,brickBlock.onerror = function(){
    console.log("Error loading " + this.src); 
    //init();
  }

  /*

  switch (tempTile) {

    case 0:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        break;
    case 1:

        contextBack.fillRect(x, y,currMap.spriteSize,currMap.spriteSize);        
        break;
    case 2:
        context.drawImage(brickBlock,x,y,currMap.spriteSize,currMap.spriteSize);   
        break;
    case 3:
        context.drawImage(platformBlock,x,y,currMap.spriteSize,currMap.spriteSize);   
        break;
    case 4:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize); 
        context.drawImage(metalBlock,x,y,currMap.spriteSize,currMap.spriteSize);   
        break;
    case 5:
        yTemp = y + mysteryY;
        contextBack.fillStyle = "#5D94FB";
        //contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(this.mysteryBlock,x,yTemp,currMap.spriteSize,currMap.spriteSize);   
        break;
    case 6:
        context.drawImage(rampBlock,x,y,currMap.spriteSize,currMap.spriteSize);   
        break;
    case 7:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize); 
        break;
    case 8:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);         
        break;
    case 9:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(tubeLeft,x,y,currMap.spriteSize*1.3,currMap.spriteSize);   
        break; 
    case 10:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(tubeRight,x,y,currMap.spriteSize*1.3,currMap.spriteSize);   
        break; 
    case 11:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(tubeLeft,x+4,y,currMap.spriteSize*.80,currMap.spriteSize*1.3);   
        break;  
    case 12:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(tubeRight,x,y,currMap.spriteSize*.80,currMap.spriteSize*1.3);   
        break;  
    case 13:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(tubeMid,x,y,(32),(tubeMid.height)) 
            break;  
    case 14:
            context.drawImage(greyMetal,x,y,currMap.spriteSize,currMap.spriteSize);   
            break; 
    case 15:
            contextBack.fillStyle = "#5D94FB";
            contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
            context.drawImage(hillTop,x,y,currMap.spriteSize,currMap.spriteSize);   
            break;  
    case 16:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
            context.drawImage(hillLeft,x,y,currMap.spriteSize,currMap.spriteSize);   
            break;   
    case 17:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
            context.drawImage(hillRight,x,y,hillRight.width,hillRight.height);   
            break;  
    case 18:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
            context.drawImage(hillDimple,x,y,currMap.spriteSize,currMap.spriteSize);   
            break;  
    case 19:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(hillMid,x,y,currMap.spriteSize,currMap.spriteSize);   
            break; 
    case 20:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(bushMid,x,y,currMap.spriteSize,currMap.spriteSize);   
        break; 
    case 21:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(bushLeft,x,y,currMap.spriteSize,currMap.spriteSize);   
        break; 
    case 22:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(bushRight,x,y,currMap.spriteSize,currMap.spriteSize);   
        break;    
    case 60:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(block3,x,y,currMap.spriteSize,currMap.spriteSize);   
        break; 
    case 97:
        context.fillStyle = "#5D94FB";
        context.fillRect(x, y,currMap.spriteSize,currMap.spriteSize);   
        context.drawImage(bushRight,x,y,currMap.spriteSize,currMap.spriteSize);   
     
        break;  
    case 65:
  
        context.drawImage(tile.img,x,y,currMap.spriteSize,currMap.spriteSize);   
     
        break;   
    case 98:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        break;    
    case 99:
        contextBack.fillStyle = "#5D94FB";
        contextBack.fillRect(x, y,currMap.spriteSize, currMap.spriteSize);
        context.drawImage(this.coinKey,x,y-2,currMap.spriteSize,currMap.spriteSize);   
        break;  
   }
  */