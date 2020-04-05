
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
//starts rabbitmq stuff
require_once __DIR__ . '/vendor/autoload.php';
use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;
use PhpAmqpLib\Wire\AMQPReader;

$callback = function ($msg) {
  global $connection, $channel, $result;
  $result=$msg->body;
  #$channel->basic_cancel('test',false,true);
  $connection->close();
  
  $channel->close();
  
  return false;
};
function getData(){
global $connection,$channel, $callback, $result;



$wait=rand(100,200);

$count=0;
$maxExecution=40;
#hacky code for exclusive queue. I wish i could think of an easier way.
while (True) {
try {
$connection = new AMQPStreamConnection('ec2-3-21-125-32.us-east-2.compute.amazonaws.com', 5672, 'test', 'test');
$channel = $connection->channel();
$channel->queue_declare('AppToData', false, false, true, true);
break;
}
catch (Exception $e){
usleep($wait*1000);
$count++;
$connection->close();
$channel->close();

if ($count>=$maxExecution) {
echo "Error: receive.py is not running on the database vm. Located in: /home/ubuntu command: nohup python3 receive.py &".$e;
$connection->close();
$channel->close();
return "Failed to obtain access to queue. Dead connections are blocking it.[1]";

}
Continue;
}
}

$channel->queue_declare('DataToApp', false, true, false, false);

//calls a specific function getCurrency, getUser
//Should be switch not ifs or truth array
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


$connection->close();
$channel->close();
return "Error Wrong function call";
}


//sends json message
$pass=json_encode($pass);
$msg = new AMQPMessage($pass);
$channel->basic_publish($msg, '', 'AppToDatab');
$done=false;

$timeout=10;
$channel->basic_consume('DataToApp', 'test', false, true, false, false, $callback);
while($channel->is_consuming()) {

try {
$channel->wait(null, false, $timeout);
}
catch(Exception $e){
$channel->queue_purge('AppToDatab');
$connection->close();
$channel->close();
$pass=array("message"=>"Error: receive.py is not running on the database vm. Located in: /home/ubuntu command: nohup python3 receive.py &[2]");
$errors=json_encode($pass);
return $errors;

}


}
return $result;
}
if (empty($_GET["function"])){
echo getData();
exit();
}

?>
