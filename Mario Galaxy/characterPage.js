
function charPage(context,canvas){
context.clearRect(0,0,canvas.width,canvas.height);



var img = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();
var img5 = new Image();
var img6 = new Image();
var img7 = new Image();
var img8 = new Image();
var img9 = new Image();
var img10 = new Image();
var img11 = new Image();
var img12 = new Image();
var img13 = new Image();
var img14 = new Image();
var img15 = new Image();

img.src = '/img/tile000.png';
img2.src = '/img/tile696.png';
img3.src = '/img/tubeUp.png';
img4.src = '/img/tile016.png';
img5.src = '/img/tile001.png';
img6.src = '/img/tile003.png';
img7.src = '/img/tile024.png';
img8.src = '/img/mario_w_l.png';
img9.src = '/img/mario_w_l2.png';
img10.src = '/img/luigi_w_l.png';
img11.src = '/img/luigi_w_l2.png';
img12.src = '/img/wario_w_l.png';
img13.src = '/img/wario_w_l2.png';
img14.src = '/img/yoshi_w_l.png';
img15.src = '/img/yoshi_w_l2.png';

img.onload,img2.onload,img3.onload,img4.onload,img5.onload,img6.onload,img7.onload,img8.onload,img9.onload,img10.onload,img11.onload,img12.onload,img13.onload,img14.onload,img15.onload = function (e)
{
    for (i = 0; i < 787; i++)   //sky
    {
        for (y = 0; y < 400; y++)  {
        context.drawImage(img2, i, y);
        y += 15;
    }
    i += 15;

    }

    for (i = 0; i < 787; i++) {//brick row 1
        context.drawImage(img, i, 384);
        i += 15;  
  }



  for (i = 150; i < 200; i++) {//brick row 1
    context.drawImage(img, i, 250);
    i += 15;  
}

for (i = 600; i < 650; i++) {//brick row 1
    context.drawImage(img, i, 250);
    i += 15;  
}
for (i = 150; i < 200; i++) {//brick row 1
    context.drawImage(img, i, 150);
    i += 15;  
}
for (i = 600; i < 650; i++) {//brick row 1
    context.drawImage(img, i, 150);
    i += 15;  
}
context.fillText("Choose Character", (canvas.width/2), (canvas.height/2)-150);

context.font = "30px CustomFont2";
context.fillStyle = "#e52521";
context.textAlign = "center";
context.fillText("Mario", 300, (canvas.height/2)+20);
context.fillStyle = "green";
context.fillText("Luigi", 300, (canvas.height/2)-60);
context.fillText("Yoshi", 500, (canvas.height/2)-60);
context.fillStyle = "#fbd000";

context.fillText("Wario", 500, (canvas.height/2)+20);

var marioState = 0;
var luigiState = 0;
var warioState = 0;
var yoshiState = 0;

setInterval(function(){
    context.clearRect(175, 200,50, 30);//Mario 
    context.clearRect(175, 100,50, 30);//Luigi
    context.clearRect(600, 200,50, 30);//Wario 
    context.clearRect(600, 100,50, 30);//Yoshi



    {
        for (i = 175; i < 225; i++)   //Mario sky
        {for (y = 200; y < 230; y++)  {
            context.drawImage(img2, i, y);y += 15;
        }i += 15;}}
        {
            for (i = 175; i < 225; i++)   //Luigi sky
            {for (y = 100; y < 130; y++)  {
                context.drawImage(img2, i, y);y += 15;
            }i += 15;}}
    {
        for (i = 600; i < 650; i++)   //Luigi sky
            {for (y = 100; y < 130; y++)  {
                context.drawImage(img2, i, y);y += 15;
                }i += 15;}}
                {
                    for (i = 600; i < 650; i++)   //Luigi sky
                    {for (y = 200; y < 230; y++)  {
                        context.drawImage(img2, i, y);y += 15;
                    }i += 15;}}
    switch (marioState) {
        case 0:
            context.drawImage(img8, 175, 200,img8.width * 1.8, img8.height * 1.8);
            marioState = 1;
            break;
        case 1:
            context.drawImage(img9, 175, 200,img9.width * 1.8, img9.height * 1.8);
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
        } 
}, 500);


}
}
