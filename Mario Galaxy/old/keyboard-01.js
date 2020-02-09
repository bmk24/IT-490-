
import {playerLeft,playerDown,playerRight,playerUp} from './playerMove-01.js';

export function keyboardIn() {
    document.addEventListener('keydown', function(event) {
        console.log(event.keyCode);
        if(event.keyCode == 37) {
            playerLeft();
        }
        else if(event.keyCode == 38) {
            playerUp();
        }
        else if(event.keyCode == 39) {
            playerRight();

        }
        else if(event.keyCode == 40) {
            playerDown();

        }
        else if(event.keyCode == 32) {
            //pauseGame();

        }
        else if(event.keyCode == 27) {
            //27 escape

        }
    });
}



