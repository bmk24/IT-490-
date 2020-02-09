

       



function mainScreen(canvas,context,brickBlock,skyBlock,tubeUp,mushroom,platformBlock,metalBlock,mysteryBlock,coinBlock){
var homeScreenState = 0;

                for (i = 0; i < 787; i++) {//brick row 1
                    context.drawImage(brickBlock, i, 384);
                    i += 15;  
              }
              for (i = 0; i < 787; i++) {//brick row 2
                                context.drawImage(brickBlock, i, 368);
                    i += 15;
              }
    
              for (i = 0; i < 787; i++)   //sky
              {
                  for (y = 0; y < 368; y++)  {
                  context.drawImage(skyBlock, i, y);
                  y += 15;
              }
              i += 15;
      
              }
              context.drawImage(tubeUp, 640, 336);//tube
              context.drawImage(mushroom, 500, 352);//mushroom
              context.drawImage(platformBlock, 368, 304);//platform
              context.drawImage(platformBlock, 400, 304);//platform
              context.drawImage(platformBlock, 432, 304);//platform
              context.drawImage(metalBlock, 384, 304);//metalBlock
              context.drawImage(metalBlock, 320, 304);//metalBlock
              context.drawImage(mysteryBlock, 400, 240);//mystery
              context.drawImage(mysteryBlock, 416, 304);//mystery
              context.font = "50px CustomFont2";
              context.fillStyle = "black";
              context.textAlign = "center";
              context.fillText("Mario Galaxy", canvas.width/2, (canvas.height)-340);
              context.font = "25px CustomFont2";
              context.fillText("Login", (canvas.width/2)+5, (canvas.height/2)-70);
              context.fillText("About", (canvas.width/2)+5, (canvas.height/2)+10);
              context.drawImage(coinBlock,(canvas.width/2)-60, (canvas.height/2)-85);//mystery  

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
 
              
             context.clearRect((canvas.width/2)-60, (canvas.height/2)-15, 30, 30);

         for (i = (canvas.width/2)-70; i < (canvas.width/2)-30; i++)
             {for (y = 170; y < 250; y++)  {context.drawImage(skyBlock, i, y);y += 15;}i += 15;}
             context.drawImage(coinBlock,(canvas.width/2)-60, (canvas.height/2)-85);//mystery

        homeScreenState = 0;
        
}
    }


    function loginEnter(){
       
        if(homeScreenState == 0){
            homeScreenState == 3;

            console.log("Login");
            //document.getElementById('id01').style.display='block';
            charPage(context,canvas); //Character Selection Page
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
             context.clearRect((canvas.width/2)-60, (canvas.height/2)-90, 30, 30);
             for (i = (canvas.width/2)-70; i < (canvas.width/2)-30; i++){
                for (y = 80; y < 150; y++)  {
                    context.drawImage(skyBlock, i, y);y += 15;
                }
                i += 15;
            }
            context.drawImage(coinBlock,(canvas.width/2)-60, (canvas.height/2)-15);//mystery
        
                      homeScreenState = 1;
        }
    }

            }

function getAway(){}