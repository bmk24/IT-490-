<?php
//load dependencies
require_once('path.inc');
require_once('get_host_info.inc');
require_once('rabbitMQLib.inc');

$client =  new RabbitMQClient('testRabbitMQ.ini', 'testServer');


$uname=$_POST['uname'];
$upassword=$_POST['upassword'];
$req = array("type"=>"Ulogin", "uname"=>$uanme, "upassword"=>$upassword);

$repsonse = $client->send_request($req);
if($repsonse==1){
  echo "You are now logged in";
}

else{echo "Login Fialed\n\n";}

/*
$connection = $channel = $callback_queue = $response = $id;



public function ___construct()
{
  $this->connection = new AMPQStreamConnection(
    'localhost',
    5672,
    'guest',
    'guest'
  );

  $this->channel = $this->connection->channel();
  list($this->callback_queue, ,) = $this->channel->queue_declare(
    "", //QueueName
    false,
    false,
    true,
    false
  );

  $this->channel->basic_consume(
    $this->callback_queue,
    '',
    false,
    true,
    false,
    false,
    array(
      $this,
      'onResponse'
    )
  );
}

public function onResponse($response)
{
  if($response->get('id') == $this->id) {
    $this->response = $response->body;
  }
}







 ?>
*/
