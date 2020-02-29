<?php
require_once('path.inc');
require_once('get_host_info.inc');
require_once('rabbitMQLib.inc');
//$connection=new mysqli($hostname, $username, $mypassword, $database);


function udoLogin2($uemail,$upassword)
{
$connection=new mysqli("192.168.1.123", "myuser", "mypass", "test");
$query = "select * from users where email='$uemail' and userpass='$upassword' ";
$result = mysqli_query($connection, $query) or die(mysqli_error($connection));
$count = mysqli_num_rows($result);
if ($count >= 1){
  $errorMsg="user with email id: ".$uemail." has logged in";
  $query = "INSERT INTO `error`(errornumber, errormessage, errortime) VALUES ('101','$errorMsg', NOW());";
  $result = mysqli_query($connection, $query) or die(mysqli_error($connection));
return 1 ;
}else{
  $errorMsg="user with email id: ".$uemail." login failed";
  $query = "INSERT INTO `error`(errornumber, errormessage, errortime) VALUES ('101','$errorMsg', NOW());";
  $result = mysqli_query($connection, $query) or die(mysqli_error($connection));
return 0 ;
}
}
function udoLogin($uemail,$upassword)
{
$connection=new mysqli("192.168.0.15", "myuser", "Marioplayer1*", "elsdb");
$query = "select * from users where username='$uemail' and password='$upassword' ";
$result = mysqli_query($connection, $query) or die(mysqli_error($connection));
$count = mysqli_num_rows($result);
if ($count >= 1){
return 1;
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
    }
  return array("returnCode" => '0', 'message'=>"Server received request and processed");
}
$server = new rabbitMQServer("testRabbitMQ.ini","testServer");
echo "testRabbitMQServer BEGIN".PHP_EOL;
$server->process_requests('requestProcessor');
echo "testRabbitMQServer END".PHP_EOL;
exit();
?>


