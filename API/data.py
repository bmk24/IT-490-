#!/usr/bin/env python
import pika, json
#publishes json to be processed and returned by CurrencyAPI.py
credentials = pika.PlainCredentials('tim','test')
connection = pika.BlockingConnection(pika.ConnectionParameters('192.168.1.68',5672,'/',credentials))
channel = connection.channel()
channel.basic_publish(exchange='',routing_key='DataToApi',body=json.dumps({'currency':'JPY','amount':20}))
channel.basic_publish(exchange='',routing_key='DataToApi',body=json.dumps({'currency':'EUR','amount':20}))
channel.basic_publish(exchange='',routing_key='DataToApi',body=json.dumps({'currency':'RUB','amount':20}))
channel.basic_publish(exchange='',routing_key='DataToApi',body=json.dumps({'currency':'GBP','amount':20}))
channel.basic_publish(exchange='',routing_key='DataToApi',body=json.dumps({'currency':'ZAR','amount':20}))
channel.basic_publish(exchange='',routing_key='DataToApi',body=json.dumps({'currency':'MXN','amount':20}))
channel.basic_publish(exchange='',routing_key='DataToApi',body=json.dumps({'currency':'CNY','amount':20}))
channel.basic_publish(exchange='',routing_key='DataToApi',body=json.dumps({'currency':'CHF','amount':20}))

def callback(ch, method, properties, body):
	print("I've received %r" % body)
	jsonResult=json.loads(body)
	print(jsonResult['currency']+' '+str(jsonResult['difference']))


channel.basic_consume(queue='ApiToDatab', 
		      auto_ack=True, 
		      on_message_callback=callback)
channel.start_consuming()
