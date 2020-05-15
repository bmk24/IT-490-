
function mainScreen(){
var homeScreenState = 0;

              entityLoader(brickBlock, 0, 384,50);
              entityLoader(brickBlock, 0, 368,50);
              entityLoader(tubeUp, 640, 336,1);
              entityLoader(mushroom, 500, 352,1);
              entityLoader(platformBlock, 368, 304,1);
              entityLoader(platformBlock, 400, 304,1);
              entityLoader(platformBlock, 432, 304,1);
              entityLoader(metalBlock, 384, 304,1);
              entityLoader(metalBlock, 320, 304,1);
              entityLoader(mysteryBlock, 400, 240,1);
              entityLoader(mysteryBlock, 416, 304,1);
              context2.font = "50px CustomFont2";
              context2.fillStyle = "black";
              context2.textAlign = "center";
              context2.fillText("Mario Galaxy", canvas.width/2, (canvas.height)-340);
              context2.font = "25px CustomFont2";
              context2.fillText("Login", (canvas.width/2)+5, (canvas.height/2)-70);
              context2.fillText("About", (canvas.width/2)+5, (canvas.height/2)+10);
              entityLoader(coinBlock,(canvas.width/2)-60, (canvas.height/2)-85,1);//mystery  
     
              $(document).click(function(){
                $(document).on('keydown', function(e) { e.preventDefault(); 
                    if (e.keyCode == 38) {
                        loginScreenUp();
                        }
                 
                        if (e.keyCode == 40) {
            
                        loginScreenDown();
                            }
        
                            if (e.keyCode == 13) {
                                loginEnter();
                                    }
                });
              });

                        
function loginScreenUp(){
    if (homeScreenState == 1){
             context2.clearRect((canvas.width/2)-60, (canvas.height/2)-15, 30, 30);   //MOVE TO MID LAYE
             context2.drawImage(coinBlock,(canvas.width/2)-60, (canvas.height/2)-85);//mystery
        homeScreenState = 0;
}
    }


    function loginEnter(){
       
        if(homeScreenState == 0){
            homeScreenState == 3;
            context2.clearRect(0,0,800,400);
            console.log("Login");
            //document.getElementById('id01').style.display='block';
            charPage(canvas,context,canvas2,context2); //Character Selection Page
            $(document).off('keydown');
        }
        if(homeScreenState == 1){
            console.log("About Us");
            //modal.open();
            homeScreenState == 0;
        }
        return;
    }


    function loginScreenDown(){
        if (homeScreenState == 0){
            //document.getElementById("theme").play();
             context2.clearRect((canvas.width/2)-60, (canvas.height/2)-90, 30, 30);
            context2.drawImage(coinBlock,(canvas.width/2)-60, (canvas.height/2)-15);//mystery
                      homeScreenState = 1;
        }
    }

            }

function getAway(){}