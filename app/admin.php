<?php
session_start();
$adminUsers=array('testing12');
if (empty($_SESSION["username"]) or !in_array($_SESSION["username"], $adminUsers)){
session_unset();
session_destroy();
header("location: http://ec2-34-229-47-176.compute-1.amazonaws.com/game/login.php");
exit();
}
?>
<!DOCTYPE html>

<html>
<img src="cloud.png" class="cloud"> 
<img src="cloud.png" class="cloud" style="margin-top: 5%; animation-delay: 1s;">
<img src="cloud.png" class="cloud" style="margin-top: 10%; animation-delay: 3s;"> 
<img src="cloud.png" class="cloud" style="margin-top: 15%; animation-delay: 7s;"> 
<head>
<link rel="stylesheet" type="text/css" href="admin.css">
<script src="http://ec2-34-229-47-176.compute-1.amazonaws.com/game/js/rabbit.js"></script> 
</head>
<body>

<div class="balance">
<img src="admin.png" class='brick' style="margin-top: 3%;">
<div class="textBalance" style="margin-left: -17%; margin-top:-35%;"> Input Item ID or Name:</div>
<div class="textBalance" style="margin-left: -17%; margin-top:-25%;"> Input New Item Price:</div>
</div>

<div class="textBalance" style="margin-top:-30%;"></div>
<input id="itemIdentifier" class="textIn" style="margin-left: 41%; margin-top: -42.25%;" type="text">
<input id="number" class="textIn" style="margin-left: 41%; margin-top: -35.75%;" type="number">
<button id="set" class="buttonSet" style="margin-left: 45%; margin-top: -30.25%;">Set Price</button>
</div>
</body>
<script>

function rabbitShop() {
var id
id=document.getElementById('itemIdentifier').value;

var number;
number=document.getElementById('number').value;
setShop(id,number);
}
document.getElementById("set").addEventListener("click",rabbitShop.bind(event));
</script>
</html>
