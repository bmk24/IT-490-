


function charPage(canvas,context,canvas2,context2){
context2.clearRect(0,0,canvas.width,canvas.height);

context.font = "50px CustomFont2";
context.textAlign = "center";

context.fillText("Choose Character", (canvas.width/2), (canvas.height/2)-150);
context.font = "30px CustomFont2";
context.fillStyle = "#e52521";
context.textAlign = "center";
context.fillText("Mario", 300, (canvas.height/2)+20);
context.fillStyle = "green";
context.fillText("Luigi", 300, (canvas.height/2)-60);
context.fillText("Bowser", 500, (canvas.height/2)-60);
context.fillStyle = "#fbd000";
context.fillText("Wario", 500, (canvas.height/2)+20);

entityLoader(brickBlock,150,150,4);
entityLoader(brickBlock,600,150,4);
entityLoader(brickBlock,600,250,4);
entityLoader(brickBlock,150,250,4);

}



var marioState = 0;
var luigiState = 0;
var warioState = 0;
var yoshiState = 0;

setInterval(function(){
    //context.clearRect(175, 200,50, 30);//Mario 
    //context.clearRect(175, 100,50, 30);//Luigi
    //context.clearRect(600, 200,50, 30);//Wario 
    //context.clearRect(600, 100,50, 30);//Yoshi

    entityLoader(canvas,context,brickBlock,175,200,5);
    //entityLoader(brickBlock,200,200,2);
    //entityLoader(brickBlock,200,200,2);
    //entityLoader(brickBlock,200,200,2);


   /* {
        for (i = 175; i < 225; i++)   //Mario 
        {for (y = 200; y < 230; y++)  {
            context.drawImage(brickBlock, i, y);y += 15;
        }i += 15;}}
        {
            for (i = 175; i < 225; i++)   //Luigi
            {for (y = 100; y < 130; y++)  {
                context.drawImage(brickBlock, i, y);y += 15;
            }i += 15;}}
    {
        for (i = 600; i < 650; i++)   //Luigi 
            {for (y = 100; y < 130; y++)  {
                context.drawImage(brickBlock, i, y);y += 15;
                }i += 15;}}
                {
                    for (i = 600; i < 650; i++)   //Luigi sky
                    {for (y = 200; y < 230; y++)  {
                        context.drawImage(brickBlock, i, y);y += 15;
                    }i += 15;}}*/
    /*switch (marioState) {
        case 0:
            context.drawImage(marioL1_smb1, 175, 200,img8.width * 1.8, img8.height * 1.8);
            marioState = 1;
            break;
        case 1:
            context.drawImage(marioL2_smb1, 175, 200,img9.width * 1.8, img9.height * 1.8);
            marioState = 0;
            break;
    } 

 

        switch (luigiState) {
            case 0:
                context.drawImage(img10, 175, 100,img8.width * 1.8, img8.height * 1.8);
                luigiState = 1;
                break;
            case 1:
                context.drawImage(img11, 175, 100,img9.width * 1.8, img9.height * 1.8);
                luigiState = 0;
                break;
        } 
        switch (warioState) {
            case 0:
                context.drawImage(img12, 600, 200,img8.width * 1.8, img8.height * 1.8);
                warioState = 1;
                break;
            case 1:
                context.drawImage(img13, 600, 200,img9.width * 1.8, img9.height * 1.8);
                warioState = 0;
                break;
        } 
        switch (yoshiState) {
            case 0:
                context.drawImage(img14, 600, 100,img8.width * 1.8, img8.height * 1.8);
                yoshiState = 1;
                break;
            case 1:
                context.drawImage(img15, 600, 100,img9.width * 1.8, img9.height * 1.8);
                yoshiState = 0;
                break;
        } */
}, 500);


