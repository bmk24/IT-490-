<?php
require_once('path.inc');
require_once('get_host_info.inc');
require_once('rabbitMQLib.inc');
$client = new RabbitMQClient('testRabbitMQ.ini', 'testServer');
$type=$_GET["type"];
//--------------------Login type
if($type=="ulogin"){
$type=$_GET['type'];
$uemail=$_GET["uemail"];
$upassword=$_GET["upassword"];
$req = array("type"=>"Ulogin","uemail"=>$uemail,"upassword"=>$upassword);
$response = $client->send_request($req);
if($response==1){ 
    echo 1; 
}
else{echo "Login Failed \n\n";}
}
else if($type=="uregistration"){
    $uemail=$_GET['uemail'];
    $upassword=$_GET['upassword'];
    $type=$_GET['type'];
    $req = array("type"=>$type,"uaddress"=>$uaddress,"uemail"=>$uemail,"upassword"=>$upassword);
    $response = $client->send_request($req);
    if($response==1){
     echo 1;
    }
    else{
    echo "registration is Failed \n\n";
    }    
}

?>