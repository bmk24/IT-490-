<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
session_start();
require_once('path.inc');
require_once('get_host_info.inc');
require_once('rabbitMQLib.inc');
$client = new RabbitMQClient('testRabbitMQ.ini', 'testServer');
$type=$_GET["type"];
//--------------------Login type
if($type=="Ulogin"){
$type=$_GET['type'];
$uemail=$_GET["uemail"];
$upassword=$_GET["upassword"];
$req = array("type"=>"Ulogin","uemail"=>$uemail,"upassword"=>$upassword);
$response = $client->send_request($req);
if($response==1){
    $_session['username']=$uemail;

    echo 1;
}
else{echo "Login Failed \n\n";}
    session_unset();
    session_destroy();
}
else if($type=="uregistration"){
    $uemail=$_GET['uemail'];
    $upassword=$_GET['upassword'];
    $type=$_GET['type'];
    $char=$_GET['char'];
    $cur=$_GET['cur'];
    $req = array("type"=>$type,"uaddress"=>$uaddress,"uemail"=>$uemail,"upassword"=>$upassword,"char"=>$char,"cur"=>$cur);
    $response = $client->send_request($req);
    if($response==1){
    $_session['username']=$uemail;

     echo 1;
    }
    else{
    session_unset();
    session_destroy();
    echo "registration is Failed \n\n";
    }
}