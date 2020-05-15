
goomba_smb1.onload,mysteryBlock1.onload,mysteryBlock2.onload,marioU2_smb1.onload,marioU1_smb1.onload,tubeMid.onload,bushMid.onload,bushLeft.onload,bushRight.onload,hillTop.onload,hillLeft.onload,hillRight.onload,hillDimple.onload,hillMid.onload,greyMetal.onload,tubeLeft.onload,hillSmall.onload,hillBig.onload,bushSmall.onload,bushMedium.onload,bushLarge.onload,rampBlock.onload,marioL_smb1.onload,marioL1_smb1.onload,marioL2_smb1.onload,marioR_smb1.onload,marioR1_smb1.onload,marioR2_smb1.onload,tubeRight.onload,mushroom.onload,platformBlock.onload,metalBlock.onload,mysteryBlock.onload,coinBlock.onload,brickBlock.onload,skyBlock,onload = function(e) {
  console.log("Resources Initialization");


    init();
}
goomba_smb1.onload,mysteryBlock1.onload,mysteryBlock2.onload,marioU2_smb1.onload,marioU1_smb1.onload,tubeMid.onload,bushMid.onload,bushLeft.onload,bushRight.onload,hillTop.onload,hillLeft.onload,hillRight.onload,hillDimple.onload,hillMid.onload,greyMetal.onload,tubeLeft.onload,hillSmall.onload,hillBig.onload,bushSmall.onload,bushMedium.onload,bushLarge.onload,rampBlock.onload,marioL_smb1.onload,marioL1_smb1.onload,marioL2_smb1.onload,marioR_smb1.onload,marioR1_smb1.onload,marioR2_smb1.onload,tubeRight.onload,mushroom.onload,platformBlock.onload,metalBlock.onload,mysteryBlock.onload,coinBlock.onload,brickBlock.onerror = function(){
 console.log("Error loading " + this.src); 
}
function init(){
canvas  = document.getElementById("game");
context = canvas.getContext('2d');
canvas2  = document.getElementById("gameMid");
context2 = canvas.getContext('2d');
canvasBack  = document.getElementById("gameMid");
contextBack = canvas.getContext('2d');
canvas.width = 720;
canvas.height = 480;
canvas2.width = 720;
canvas2.height = 480;
canvasBack.width = 720;
canvasBack.height = 480;
console.log("Canvas Initialization");
console.log("Game Engine Initialization");
/* Setup of the engine */



$("#about").click(function(){
console.log("About");
});
$("#menu").click(function(){
  console.log("Menu");

});
$("#sound").click(function(){
  console.log("Sound");

});


window.requestAnimFrame =
window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function(callback) {
console.log("yes");
 
return window.setTimeout(callback, 1000 / 60);
};
console.log("Window Animation Initialization");



context2.drawImage(marioR_smb1,20,20);
game.viewPortConstructor(canvas.width, canvas.height);


//if (startGame == 1){
game.load_map(map,level_0101);//}
//game.clock();

game.viewPortLim = true;



var Loop = function() {


  if (gameStatus == 1){
game.update();
game.draw(context);

window.requestAnimFrame(Loop);
//console.log("te")
  }
};

  Loop();



//playerAnim();


}