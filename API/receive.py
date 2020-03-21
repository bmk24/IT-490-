#!/usr/bin/env python
import pika, simplejson as json, mysql.connector, sys
from decimal import *
#publishes json to be processed and returned by CurrencyAPI.py
credentials = pika.PlainCredentials('test','test')
connection = pika.BlockingConnection(pika.ConnectionParameters('ec2-3-21-125-32.us-east-2.compute.amazonaws.com',5672,'/',credentials))
channel = connection.channel()
queue = channel.queue_declare(
    queue="AppToData", durable=True,
    exclusive=False, auto_delete=False
)

mydb = mysql.connector.connect(
  host="localhost",
  user="myuser",
  passwd="MarioGalaxy1*",
  database="marioGalaxy"
)

def getCurrency(jsonresult):
 global mydb

 mycursor = mydb.cursor()
 query="select difference from currency where currencyCode=%s"

 mycursor.execute(query,(jsonresult,))
 result=mycursor.fetchone()
 
 channel.basic_publish(exchange='',routing_key='DataToApp',body=json.dumps({'currency':jsonresult,'difference':Decimal(result[0])},use_decimal=True))
def getUser(usernames):
 global mydb
 mycursor = mydb.cursor()
 query="select * from userInfo where username=%s"
 mycursor.execute(query,(usernames,))
 rows=mycursor.fetchall()
 for row in rows:
  levelscomplete=row[1]
  currentlevel=row[2]
  currentpoints=row[3]
  maxpoints=row[4]
  spritepack=row[5]
  charactername=row[6]
  currencycode=row[7]
  
 channel.basic_publish(exchange='',routing_key='DataToApp',body=json.dumps({'username':usernames,
 'currentLevel':currentlevel,
 'currentPoints':Decimal(currentpoints),
 'maxPoints':Decimal(maxpoints),
 'spritePack':spritepack,
 'characterName':charactername,
 'currencyCode':currencycode},use_decimal=True))
 
def callback(ch, method, properties, body):
 global connection
 jsonResult=json.loads(body)

 head=jsonResult["head"]

 if head=="getCurrency":
  currency=jsonResult['currency']
  getCurrency(currency)
 elif head=="getUser":
  username=jsonResult['username']
  getUser(username)
channel.basic_consume(queue='AppToData',
                      auto_ack=True,
                      on_message_callback=callback)
channel.start_consuming()
