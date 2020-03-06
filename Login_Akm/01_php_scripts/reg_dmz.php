<?php
require_once('path.inc');
require_once('get_host_info.inc');
require_once('rabbitMQLib.inc');
$client = new RabbitMQClient('reg_dmz.ini', 'testServer');
$type=$_GET["type"];
$type3="reg1";
//----------------------------------------------------
if($type=="sort"){
  $uemail=$_GET["uemail"];
  //$email="azi3@njit.edu";
  $req = array("type"=>"sort","email"=>$uemail);
  $response = $client->send_request($req);
  //convert std class to array
  $array = json_decode(json_encode($response), True);
  echo json_encode($array);
  //echo json_encode($array);
  //print_r($array);  
}
else if($type=="cregistration"){
    $location=$_GET['address'];
    $storename=$_GET['storename'];
    $email=$_GET['email'];
    $category=$_GET['category'];
    $lat=$_GET['lat'];
    $longit=$_GET['longit'];
    $pass=$_GET['password'];
    $type=$_GET['type'];
    $req = array("type"=>$type,"location"=>$location,"storename"=>$storename,"email"=>$email,"category"=>$category,"lat"=>$lat,"longit"=>$longit,"password"=>$pass);
    $response = $client->send_request($req);
    //convert std class to array
    //print_r($response);
    if($response==1){
     echo "Your registration is succesfull \n\n";
    }
    else{
    echo "registration is Failed \n\n";
    }    
}
else if($type=="Uregistration"){
    $uaddress=$_GET['uaddress'];
    $uemail=$_GET['uemail'];
    $upassword=$_GET['upassword'];
    $type=$_GET['type'];
    $req = array("type"=>$type,"uaddress"=>$uaddress,"uemail"=>$uemail,"upassword"=>$upassword);
    $response = $client->send_request($req);
    //convert std class to array
    //print_r($response);
    if($response==1){
     echo "Your registration is succesfull \n\n";
    }
    else{
    echo "registration is Failed \n\n";
    }    
}
?>