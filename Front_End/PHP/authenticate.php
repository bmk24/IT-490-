<?php
//dependency libraries
require_once __DIR__ . '/vendor/autoload.php';
use PhpAmqpLib\Connection\AMPQStreamConnection;
use PhpAmqpLib\Connection\AMPQMessage;



//decode json


$request = json_decode($msg);
$username = $request['username'];
$password = $request['password'];

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
