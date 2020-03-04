<?php
require_once('path.inc');
require_once('get_host_info.inc');
require_once('rabbitMQLib.inc');
//$connection=new mysqli($hostname, $username, $mypassword, $database);

function udoLogin($uemail,$upassword)
{
$connection=new mysqli("192.168.0.15", "myuser", "Marioplayer1*", "elsdb");
$query = "select * from users where username='$uemail' and password='$upassword' ";
$result = mysqli_query($connection, $query) or die(mysqli_error($connection));
$count = mysqli_num_rows($result);
if ($count >= 1){
  $query = "INSERT INTO `logging`(errorCode, description,vmhost,time) VALUES ('No error','autheticated','Rabbitmq-AKM', NOW());";
  $result = mysqli_query($connection, $query) or die(mysqli_error($connection));  
  return 1;
}
else{
  $time='time';
  $query = "INSERT INTO `logging`(errorCode, description,vmhost,time) VALUES ('errorcode','authetication failed','Rabbitmq-AKM', NOW());";
  $result = mysqli_query($connection, $query) or die(mysqli_error($connection)); 
}
}
//registers users
function udoRegister($email,$password)
{ 
$hashed_pass=password_hash($password, PASSWORD_DEFAULT);
$connection=new mysqli("192.168.0.15", "myuser", "Marioplayer1*", "elsdb");
$query = "INSERT INTO users(username,password,hash ) VALUES ('$email','$password','$hashed_pass' )";
$result = mysqli_query($connection, $query) or die(mysqli_error($connection));
if ($result){  
  $query = "INSERT INTO `logging`(errorCode, description,vmhost,time) VALUES ('No error','User registered','Rabbitmq-AKM', NOW());";
  $result = mysqli_query($connection, $query) or die(mysqli_error($connection));   
  return 1 ; }
else { 
  return 0 ;
}
}

function requestProcessor($request)
{
  echo "received request".PHP_EOL;
  var_dump($request);
  if(!isset($request['type']))
  {
    return "ERROR: unsupported message type";
  }
  switch ($request['type'])
  {
    case "Ulogin":
      return udoLogin($request['uemail'],$request['upassword']);
    case "uregistration":
      return udoRegister($request['uemail'],$request['upassword']);
    }
  return array("returnCode" => '0', 'message'=>"Server received request and processed");
}
$server = new rabbitMQServer("testRabbitMQ.ini","testServer");
echo "testRabbitMQServer BEGIN".PHP_EOL;
$server->process_requests('requestProcessor');
echo "testRabbitMQServer END".PHP_EOL;
exit();
?>


