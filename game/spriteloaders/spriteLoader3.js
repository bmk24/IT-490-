

function init(){
  const currUser = localStorage.getItem('USER');
var res = currUser.toLowerCase();
getUser(res);
characterStats(playerStats.spriteType);/*
if (playerStats.currentLevel != level_0103.levelName){
  if(playerStats.currentLevel == 1){
    window.location.href = "http://ec2-34-229-47-176.compute-1.amazonaws.com/game/game.php";

  }else{
  window.location.href = "http://ec2-34-229-47-176.compute-1.amazonaws.com/game/game" + playerStats.currentLevel + ".php";
  }
}*/
setStats(level_0103)
//uh oh race condition!!! I would put a callback here, but I am too lazy
getModifer(playerStats.currencyCode);
console.log(playerStats.characterName);
canvas  = document.getElementById("game");context = canvas.getContext('2d');
canvas2  = document.getElementById("gameMid");context2 = canvas.getContext('2d');
canvasBack  = document.getElementById("gameMid");contextBack = canvas.getContext('2d');
canvasOverlay  = document.getElementById("gameOverlay");contextOverlay = canvas.getContext('2d');
canvas.width = 1080;canvas.height = 720;canvas2.width = 1080;canvas2.height = 720;canvasBack.width = 1080;canvasBack.height = 720;canvasOverlay.width = 1080;canvasOverlay.height = 720;
console.log("Canvas Initialization");
console.log("Game Engine Initialization");
/* Setup of the engine */
var game = new Galaxy(map);
/* Setup of the engine */


window.requestAnimFrame =
window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function(callback) { 
return window.setTimeout(callback, 1000 / 60);
};
console.log("Window Animation Initialization");
//context2.drawImage(marioWalk1_smb1,20,20);
game.viewPortConstructor(canvas.width, canvas.height,map,level_0103);
game.load_map(map,level_0103);
game.viewPortLim = true;

var Loop = function() {
game.update(map,level_0103);
game.draw(context,map,level_0103);
window.requestAnimFrame(Loop);

};
  Loop();
}




  $( "#loginNav" ).click(function() {
    window.location.href = "http://ec2-34-229-47-176.compute-1.amazonaws.com/testApi/shop.php";  });