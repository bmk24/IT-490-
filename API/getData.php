
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
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
