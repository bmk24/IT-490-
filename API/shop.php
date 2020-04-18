<?php
session_start();
if (empty($_SESSION["username"])){
session_unset();
session_destroy();
header("location: http://ec2-34-229-47-176.compute-1.amazonaws.com/game/login.html");
exit();
}
?>
<!DOCTYPE html>
<html>


<img src="cloud.png" class="cloud"> 
<img src="cloud.png" class="cloud" style="margin-top: 5%; animation-delay: 1s;">
<img src="cloud.png" class="cloud" style="margin-top: 10%; animation-delay: 3s;"> 
<img src="cloud.png" class="cloud" style="margin-top: 15%; animation-delay: 7s;"> 
<script>
var balances;
function purchase(quantity,username,itemID){
let xhr = new XMLHttpRequest();
var modifier; 
var currency;
var jsonResult;
var head;
quantity=Number(quantity);


xhr.open("GET", "http://ec2-34-229-47-176.compute-1.amazonaws.com/testApi/shopCheck.php?username="+ username +"&itemID="+itemID+"&quantity="+quantity, false);

xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200){
      //sent back in form 
      
      if (xhr.responseText==1){
      location.reload(); 
      }
      else {
      console.log(xhr.responseText);
      alert("You can't afford that item!");
      }
}
};
xhr.send();
}

//sets username and gets associated user data
function getShop(username,itemID){
let xhr = new XMLHttpRequest();
var modifier; 
var currency;
var jsonResult;
var head;

head="getShop";

xhr.open("GET", "http://ec2-34-229-47-176.compute-1.amazonaws.com/testApi/getData.php?username="+ username +"&head="+head+"&itemID="+itemID, false);
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200){
      //sent back in form 
      console.log(xhr.responseText);
      jsonResult=JSON.parse(xhr.responseText);
      console.log(jsonResult);
      
      document.getElementById("item"+itemID).innerHTML += "Item Name: "+jsonResult.itemName+"<br>";
      
      document.getElementById("item"+itemID).innerHTML += "Current Inventory: "+jsonResult.quantity+"<br>";
      
      document.getElementById("item"+itemID).innerHTML += "Cost: $"+jsonResult.itemPrice+"<br>";
      
      if (itemID==1) {
      document.getElementById("item"+itemID).innerHTML += "<label for=\"quantitites\">Amount: </label><input type=\"number\" pattern=\"^[0–9]$\" id=\"quantity"+itemID+"\" name=\"quantities\" value=\"\"><input type=\"button\" id=\"input"+itemID+"\" value=\"Purchase\">";
      
      
      document.getElementById("input"+itemID).onclick = function() {purchase(document.getElementById("quantity"+itemID).value,username,itemID)};
      }
      else {
      
      
       document.getElementById("item"+itemID).innerHTML += "<br><input type=\"button\" id=\"input"+itemID+"\" value=\"Purchase\">";
       
      document.getElementById("input"+itemID).onclick = function() {purchase(1,username,itemID)};
       
       
       
      
      }
      
      
}

};
xhr.send();
}
function getUser(username){
let xhr = new XMLHttpRequest();
var modifier; 
var currency;
var jsonResult;
var head;
//sets username and gets associated user data

head="getUser";
xhr.open("GET", "http://ec2-34-229-47-176.compute-1.amazonaws.com/testApi/getData.php?username="+ username +"&head="+head, true);



xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200){
      //sent back in form 
      console.log(xhr.responseText);
      jsonResult=JSON.parse(xhr.responseText);
      console.log(jsonResult);
      document.getElementById("centerText").innerHTML += "Username: "+jsonResult.username+"<br>"+"Balance: $"+jsonResult.currentPoints;
      balances=jsonResult.currentPoints;
      
}
};

xhr.onerror = function() {
  alert("Request failed");
};
xhr.send();
}

</script>
<head>
<link rel="stylesheet" type="text/css" href="shop.css">
</head>
<body>
<div class="balance" id="balance">

<img src="mysteryFixFinal2.png" class="brick" style="margin-top: 3%;">
<div class="center" id="centerText"></div>
</div>
<script>

</script>
<?php
session_start();
$itemIDS=array(1,2);
echo "<script>getUser('".$_SESSION["username"]."');</script>";
foreach ($itemIDS as $element){
$shopElement="
<div class=\"item\" id=\"item".$element."\">

</div>
<script>

getShop('".$_SESSION['username']."',".$element.");

</script>
";
echo $shopElement;
}

?>
</body>
</html>
