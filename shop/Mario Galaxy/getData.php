
<?php
set_time_limit (4); 
#ini_set('display_errors', 1);
#ini_set('display_startup_errors', 1);
#error_reporting(E_ALL);
//starts rabbitmq stuff
require_once __DIR__ . '/vendor/autoload.php';
use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;
$connection = new AMQPStreamConnection('ec2-3-21-125-32.us-east-2.compute.amazonaws.com', 5672, 'test', 'test');
$channel = $connection->channel();
$channel->queue_declare('AppToData', false, true, false, false);
$channel->queue_declare('DataToApp', false, true, false, false);

//calls a specific function getCurrency, getUser
$head=$_GET["head"];
if ($head=="getCurrency") {
 $currency=$_GET['currency'];
 $pass=array("head"=>"getCurrency","currency"=>$currency);
}
else if ($head=="getUser"){
 $username=$_GET['username'];
 $pass=array("head"=>"getUser","username"=>$username);

}
else if ($head=="setCurrency"){
 $currency=$_GET['currency'];
 $username=$_GET['username'];
 $pass=array("head"=>"setCurrency","username"=>$username,"currency"=>$currency);

}
else if ($head=="setQuantity"){
 $username=$_GET['username'];
 $quantity=$_GET['quantity'];
 $itemID=$_GET['itemID'];
 $pass=array("head"=>"setQuantity","username"=>$username,"quantity"=>$quantity,"itemID"=>$itemID);

}
else if ($head=="setPoints"){
 $points=$_GET['points'];
 $username=$_GET['username'];
 $pass=array("head"=>"setPoints","username"=>$username,"points"=>$points);

}
else if ($head=="getPoints"){
 $username=$_GET['username'];
 $pass=array("head"=>"getPoints","username"=>$username);

}
else if ($head=="getShop"){
 $username=$_GET['username'];
 $itemID=$_GET['itemID'];
 $pass=array("head"=>"getShop","username"=>$username,"itemID"=>$itemID);

}
else if ($head=="getCharacter"){
 $character=$_GET['character'];
 $pass=array("head"=>"getCharacter","character"=>$character);

}
else if ($head=="setCharacter"){
 $username=$_GET['username'];
 $character=$_GET['character'];
 $pass=array("head"=>"setCharacter","username"=>$username,"character"=>$character);

}
else if ($head=="setInfo"){
 $username=$_GET['username'];
 $levelsComplete=$_GET['levelsComplete'];
 $currentLevel=$_GET['currentLevel'];
 $currentPoints=$_GET['currentPoints'];
 $maxPoints=$_GET['maxPoints'];
 $spritePack=$_GET['spritePack'];
 $character=$_GET['character'];
 $currency=$_GET['currency'];
 $currentLives=$_GET['currentLives'];
 $pass=array("head"=>"setInfo","username"=>$username,
 "levelsComplete"=>$levelsComplete,
 "currentLevel"=>$currentLevel,
 "maxPoints"=>$maxPoints,
 "currentLives"=>$currentLives,
 "currentPoints"=>$currentPoints,
 "spritePack"=>$spritePack,
 "character"=>$character,
 "currency"=>$currency);

}
else {
echo "Error Wrong function call";
$connection->close();
$channel->close();
exit();
}
//sends json message
$pass=json_encode($pass);
$msg = new AMQPMessage($pass);
$channel->basic_publish($msg, '', 'AppToData');
$done=false;
$callback = function ($msg) {
  echo $msg->body;
 global $done;
 $done=true;
};

$channel->basic_consume('DataToApp', '', false, true, false, false, $callback);
while($channel->is_consuming()) {
$channel->wait();
if ($done) {
$connection->close();
$channel->close();
exit();
}
}

?>
