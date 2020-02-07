




// close modal
//modal.close();
            

var homeScreenState = 0;
window.onload = function ()
{   
// instanciate new modal
var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});

// set content
modal.setContent('<h1>About</h1><div id="credits">Mario Galaxy - NJIT IT490 Game<br> designed by:<br>Tim Chuba<br>Ryan Winston<br>Brandon Koenig<br>Eric Meyer<br>Akm Islam<br><p>How to Play:</p><p>Arrow Keys - Navigation and Player Control</p><p>Enter Key  - Select Option</p><p>Escape Key - Main Menu</p><h3>Press Escape to Exit</h3></div>');
// open modal

// close modal
//modal.close();
    var canvas  = document.getElementById("game");
    var context = canvas.getContext('2d');

    var img = new Image();
    var img2 = new Image();
    var img3 = new Image();
    var img4 = new Image();
    var img5 = new Image();
    var img6 = new Image();
    var img7 = new Image();

    img.src = '/img/tile000.png';
    img2.src = '/img/tile696.png';
    img3.src = '/img/tubeUp.png';
    img4.src = '/img/tile016.png';
    img5.src = '/img/tile001.png';
    img6.src = '/img/tile003.png';
    img7.src = '/img/tile024.png';

    img.onload,img2.onload,img3.onload,img4.onload,img5.onload,img6.onload,img7.onload = function (e)
    {

                for (i = 0; i < 787; i++) {//brick row 1
                    context.drawImage(img, i, 384);
                    i += 15;  
              }
              for (i = 0; i < 787; i++) {//brick row 2
                                context.drawImage(img, i, 368);
                    i += 15;
              }
    
              for (i = 0; i < 787; i++)   //sky
              {
                  for (y = 0; y < 368; y++)  {
                  context.drawImage(img2, i, y);
                  y += 15;
              }
              i += 15;
      
              }
              context.drawImage(img3, 640, 336);//tube
              context.drawImage(img4, 500, 352);//mushroom
              context.drawImage(img5, 368, 304);//platform
              context.drawImage(img5, 400, 304);//platform
              context.drawImage(img5, 432, 304);//platform
              context.drawImage(img6, 384, 304);//metalBlock
              context.drawImage(img6, 320, 304);//metalBlock
              context.drawImage(img7, 400, 240);//mystery
              context.drawImage(img7, 416, 304);//mystery
              context.font = "30px CustomFont";
              context.fillStyle = "red";
              context.textAlign = "center";
              context.fillText("Login", canvas.width/2, (canvas.height/2)-70);
              context.fillStyle = "#43b047";
              context.fillText("About", canvas.width/2, (canvas.height/2)+10);
              context.beginPath();
              context.arc((canvas.width/2)-70, (canvas.height/2)-85, 10, 0, 2 * Math.PI);
              context.fillStyle = 'red';
              context.strokeStyle = 'red';
              context.fill();
              context.stroke();    
}

document.onkeydown = function(e) {
    e.preventDefault();

            if (e.keyCode == 38) {
            loginScreenUp();
            }
     
            if (e.keyCode == 40) {

            loginScreenDown();
                }

                if (e.keyCode == 13) {

                    loginEnter();
                        }
            }



function loginScreenDown(){
    if (homeScreenState == 0){
        document.getElementById("theme").play();
         context.clearRect((canvas.width/2)-85, (canvas.height/2)-100, 30, 30);
         for (i = (canvas.width/2)-85; i < (canvas.width/2)-65; i++){
            for (y = 80; y < 150; y++)  {
                context.drawImage(img2, i, y);y += 15;
            }
            i += 15;
        }
                  context.beginPath();
                  context.arc((canvas.width/2)-70, (canvas.height/2), 10, 0, 2 * Math.PI);
                  context.fillStyle = 'red';
                  context.strokeStyle = 'red';
                  context.fill();
                  context.stroke();
                  homeScreenState = 1;
    }
}
function loginScreenUp(){
    if (homeScreenState == 1){
 
          context.arc((canvas.width/2)-70, (canvas.height/2)-85, 10, 0, 2 * Math.PI);
              context.fillStyle = 'red';
              context.strokeStyle = 'red';
              context.fill();
             // context.stroke();
             context.clearRect((canvas.width/2)-85, (canvas.height/2)-15, 30, 30);

             for (i = (canvas.width/2)-85; i < (canvas.width/2)-65; i++){for (y = 170; y < 250; y++)  {context.drawImage(img2, i, y);y += 15;}i += 15;}
        homeScreenState = 0;
        
}
    }
    
    function loginEnter(){
        if(homeScreenState == 0){
            console.log("Login");
            //document.getElementById('id01').style.display='block';
            charPage(context,canvas); //Character Selection Page

        }
        if(homeScreenState == 1){
            console.log("About Us");
            modal.open();
        }

    }
   
}

