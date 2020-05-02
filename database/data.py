#!/usr/bin/env python
import pika, json, sys, mysql.connector
#publishes json to be processed and returned by CurrencyAPI.py
credentials = pika.PlainCredentials('test','test')
connection = pika.BlockingConnection(pika.ConnectionParameters('ec2-3-21-125-32.us-east-2.compute.amazonaws.com',5672,'/',credentials))
channel = connection.channel()
queue = channel.queue_declare(
    queue="ApiToDatab", durable=True,
    exclusive=False, auto_delete=False
)
mydb = mysql.connector.connect(
  host="localhost",
  user="myuser",
  passwd="MarioGalaxy1*",
  database="marioGalaxy"
) 
mycursor = mydb.cursor()
channel.basic_publish(exchange='',routing_key='DataToApi',body=json.dumps({'currency':'JPY'}))
channel.basic_publish(exchange='',routing_key='DataToApi',body=json.dumps({'currency':'EUR'}))
channel.basic_publish(exchange='',routing_key='DataToApi',body=json.dumps({'currency':'RUB'}))
channel.basic_publish(exchange='',routing_key='DataToApi',body=json.dumps({'currency':'GBP'}))
channel.basic_publish(exchange='',routing_key='DataToApi',body=json.dumps({'currency':'ZAR'}))
channel.basic_publish(exchange='',routing_key='DataToApi',body=json.dumps({'currency':'MXN'}))
channel.basic_publish(exchange='',routing_key='DataToApi',body=json.dumps({'currency':'CNY'}))
channel.basic_publish(exchange='',routing_key='DataToApi',body=json.dumps({'currency':'CHF'}))
count=0
def callback(ch, method, properties, body):
        global count, channel, connection, queue, mydb, mycursor
        count+=1
        
        jsonResult=json.loads(body)
        currency=jsonResult['currency']
        difference=jsonResult['difference']
        query="update currency set difference= %s where currencyCode= %s"
        parameters=(difference,currency)
        mycursor.execute(query, parameters)
        mydb.commit()
        if count==8:
         connection.close()
         mydb.close()
         sys.exit()
channel.basic_consume(queue='ApiToDatab',
                      auto_ack=True,
                      on_message_callback=callback)
channel.start_consuming()
