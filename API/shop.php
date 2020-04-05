<!DOCTYPE html>
<html>
<script>
var balances;
function purchase(quantity,username,balances,itemID,price){
let xhr = new XMLHttpRequest();
var modifier; 
var currency;
var jsonResult;
var head;
quantity=Number(quantity);
price=Number(price);

xhr.open("GET", "http://ec2-34-229-47-176.compute-1.amazonaws.com/testApi/shopCheck.php?username="+ username +"&itemID="+itemID+"&balance="+balances+"&price="+price+"&quantity="+quantity, false);

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
      
      
      document.getElementById("input"+itemID).onclick = function() {purchase(document.getElementById("quantity"+itemID).value,username,balances,itemID,jsonResult.itemPrice)};
      }
      else {
      
      
       document.getElementById("item"+itemID).innerHTML += "<br><input type=\"button\" id=\"input"+itemID+"\" value=\"Purchase\">";
       
      document.getElementById("input"+itemID).onclick = function() {purchase(1,username,balances,itemID,jsonResult.itemPrice)};
       
       
       
      
      }
      
      
}

};
xhr.send();
}
function getUser(username,itemID){
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
      document.getElementById("balance").innerHTML = "Username: "+jsonResult.username+"<br>"+"Balance: $"+jsonResult.currentPoints;
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

</div>

<?php
$itemIDS=array(1,2);
foreach ($itemIDS as $element){
$shopElement="
<div class=\"item\" id=\"item".$element."\">

</div>
<script>
getUser(\"user1\",".$element.");
getShop(\"user1\",".$element.");

</script>
";
echo $shopElement;
}

?>
</body>
</html>
