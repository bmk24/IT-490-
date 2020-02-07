
export default function loadSpritesheet() {

let sprites = new Image();
sprites.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';
sprites.onload = function() {
    //console.log(sprites);

  return sprites
};}
/*

//let canvas = document.querySelector('canvas');
//let ctx = canvas.getContext('2d');
function init() {
  // future animation code goes here
  ctx.drawImage(img, 0, 0, 16, 18, 0, 0, 16, 18);

}

*/