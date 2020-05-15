
<!DOCTYPE html>
<html>
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Mario Galaxy</title>
      <link rel="icon" type="image/png" href="../images/coin1.png">
      <link rel="stylesheet" href="../css/main-01.css">
      <script type="text/javascript" src="js/jquery.js"></script>
      <link href="../fontawesome/css/all.css" rel="stylesheet">
      <!--load all styles -->
      <link rel="stylesheet" type="text/css" href="../vendor/bootstrap/css/bootstrap.min.css">
 
   </head>
   <body id="body">
      <div id="overlayControls">
      <p id="gameTitle">Mario Galaxy</p>
      <div id="nav">
      <div id="loginNav" class="navTile" style="display: inline-block; text-align: center;"  onclick="location.href='http://ec2-34-229-47-176.compute-1.amazonaws.com/testApi/shop.php';">Shop</i></div>
         <div id="regNav" class="navTile" style="display: inline-block; text-align: center;"  onclick="location.href='http://ec2-34-229-47-176.compute-1.amazonaws.com/testApi/logout.php';">logout</i></div>
     
         <div id="sound" class="navTile" style="display: inline-block; text-align: center;"><i class="fas fa-volume-up fa-2x"></i></div>
      </div>
      </div>
      <div id="regBlur"></div>
   
      <div id="gameCenter">
 
         <div id="healthSystem">
            
            
         </div>
         <div id="gameOverlay" height="480" width="720">
            <span id="clock"></span>
            <span id="health"></span>
            <span id="coin"></span>

         </div>
         <canvas id="gameMid" height="480" width="720"></canvas>
         <canvas id="game" height="480" width="720"></canvas>
         <canvas id="gameBackground" height="480" width="720"></canvas>
      </div>
      <div id="adminZone">
         <span id="playerLoc"></span>
         <span id="hitBox"></span>


      </div>
      <audio controls id="theme">
         <source src="music/theme_song.mp3" muted="muted" autoplay="true" type="audio/mpeg">
      </audio>
      <script type="text/javascript" src="js/loaders.js"></script>

      <script type="text/javascript" src="levels/01-01.js"></script>
      <script type="text/javascript" src="js/player.js"></script>
      <script type="text/javascript" src="js/rabbit.js"></script>

      <script type="text/javascript" src="js/galaxy.js"></script>
      <script type="text/javascript" src="spriteloaders/spriteLoader8.js"></script>
   </body>
</html>