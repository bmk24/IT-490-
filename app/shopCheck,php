<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
session_start();
if (!isset($_SESSION["username"]) or empty($_SESSION["username"])){
echo 0;
exit();
}
$_GET["function"]=1;
include '/var/www/html/testApi/getData.php';

$username=$_GET["username"];
$itemID=$_GET["itemID"];


$quantity=$_GET["quantity"];
function updateShop($username,$itemID,$quantity){

$_GET["head"]="getUser";
$_GET["function"]=1;
$_GET["username"]=$username;
$arrayUser=json_decode(getData());
$balance=$arrayUser->currentPoints;


$_GET["head"]="getShop";
$_GET["itemID"]=$itemID;



$arrayShop=json_decode(getData());

$price=$arrayShop->itemPrice;
$quantityUser=$arrayShop->quantity;

$singleQuantityItems=array(2);
if ($quantityUser>=1 and in_array($itemID,$singleQuantityItems)){
return 0;
}

$cost=$price*$quantity;
if ($cost<=$balance and $cost>0){

$_GET["head"]="setQuantity";
$_GET["quantity"]=$quantity+$quantityUser;
getData();

$_GET["head"]="setPoints";
$_GET["points"]=$balance-$cost;
getData();

if ($itemID==1){
$_GET["head"]="getUser";
$_GET["function"]=1;
$_GET["username"]=$username;
$arrayUser2=json_decode(getData());
$_GET["head"]="setInfo";
$username=$arrayUser2->username;
$currentLevel=$arrayUser2->currentLevel;
$levelsComplete=$arrayUser2->levelsComplete;
$currentPoints=$arrayUser2->currentPoints;
$maxPoints=$arrayUser2->maxPoints;
//$playerLives=$quantity;
$currentLives=$arrayUser2->playerLives+$quantity;
$spritePack=$arrayUser2->spritePack;
$character=$arrayUser2->characterName;
$currencyCode=$arrayUser2->currencyCode;
$_GET['username']=$username;
$_GET['levelsComplete']=$levelsComplete;
$_GET['currentLevel']=$currentLevel;
$_GET['currentPoints']=$currentPoints;
$_GET['maxPoints']=$maxPoints;
$_GET['spritePack']=$spritePack;
$_GET['character']=$character;
$_GET['currency']=$currencyCode;
$_GET['currentLives']=$currentLives;
getData();
}

return 1;
}
else {
return 0;
}
}
echo updateShop($username,$itemID,$quantity);
?>
