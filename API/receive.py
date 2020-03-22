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
def getPoints(jsonresult):
 global mydb

 mycursor = mydb.cursor()
 query="select currentPoints from userInfo where username=%s"

 mycursor.execute(query,(jsonresult,))
 result=mycursor.fetchone()
 channel.basic_publish(exchange='',routing_key='DataToApp',body=json.dumps({'username':jsonresult,'points':Decimal(result[0])},use_decimal=True))

def getCharacter(jsonresult):
 global mydb
 mycursor = mydb.cursor()
 query="select * from characters where name=%s"

 mycursor.execute(query,(jsonresult,))
 result=mycursor.fetchall()
 result=result[0]
 channel.basic_publish(exchange='',routing_key='DataToApp',body=json.dumps({'name':jsonresult,'health':Decimal(result[1]),
 'speed':Decimal(result[2]),
 'jumpHeight':Decimal(result[3]),
 'ability':result[4],
 'special':result[5],
 },use_decimal=True))

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
  playerLives=row[5]
  spritepack=row[6]
  charactername=row[7]
  currencycode=row[8]
  
 channel.basic_publish(exchange='',routing_key='DataToApp',body=json.dumps({'username':usernames,
 'currentLevel':int(currentlevel),
 'levelsComplete':int(levelscomplete),
 'currentPoints':Decimal(currentpoints),
 'maxPoints':Decimal(maxpoints),
 'playerLives':int(playerLives),
 'spritePack':spritepack,
 'characterName':charactername,
 'currencyCode':currencycode},use_decimal=True))
def setCurrency(currency,username):
 global mydb
 mycursor = mydb.cursor()
 query="Update userInfo Set currencyCode=%s where username=%s"
 mycursor.execute(query,(currency,username))
 mydb.commit()
 #channel.basic_publish(exchange='',routing_key='DataToApp',body=json.dumps({'username':usernames
 
def setCharacter(character,username):
 global mydb
 mycursor = mydb.cursor()
 query="Update userInfo Set characterName=%s where username=%s"
 mycursor.execute(query,(character,username))
 mydb.commit()
 #channel.basic_publish(exchange='',routing_key='DataToApp',body=json.dumps({'username':usernames
 
def setPoints(points,username):
 global mydb
 mycursor = mydb.cursor()
 query="Update userInfo Set currentPoints=%s where username=%s"
 mycursor.execute(query,(points,username))
 mydb.commit()
def setInfo(username,levelsComplete,currentLevel,currentPoints,maxPoints,currentLives,spritePack,characterName,currencyCode):
 global mydb
 mycursor = mydb.cursor()
 query="Update userInfo Set levelsComplete=%s, currentLevel=%s, currentPoints=%s, maxPoints=%s, playerLives=%s, spritePack=%s, characterName=%s, currencyCode=%s where username=%s"
 mycursor.execute(query,(levelsComplete,currentLevel, currentPoints, maxPoints, currentPoints, spritePack, characterName, currencyCode, username))
 mydb.commit()
 #channel.basic_publish(exchange='',routing_key='DataToApp',body=json.dumps({'username':usernames
 
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
 elif head=="setCurrency":
  username=jsonResult['username']
  currency=jsonResult['currency']
  setCurrency(currency, username)
 elif head=="setPoints":
  points=jsonResult['points']
  username=jsonResult['username']
  setPoints(points, username)
 elif head=="getPoints":
  points=jsonResult['username']
  getPoints(points)
 elif head=="getCharacter":
  character=jsonResult['character']
  getCharacter(character)
 elif head=="setCharacter":
  character=jsonResult['character']
  username=jsonResult['username']
  setCharacter(character, username)
 elif head=="setInfo":
  username=jsonResult['username']
  levelsComplete=jsonResult['levelsComplete']
  currentLevel=jsonResult['currentLevel']
  currentPoints=jsonResult['currentPoints']
  maxPoints=jsonResult['maxPoints']
  currentLives=jsonResult['currentLives']
  spritePack=jsonResult['spritePack']
  character=jsonResult['character']
  currencyCode=jsonResult['currency']
  setInfo(username,levelsComplete,currentLevel,currentPoints,maxPoints,currentLives,spritePack,character,currencyCode)

channel.basic_consume(queue='AppToData',
                      auto_ack=True,
                      on_message_callback=callback)
channel.start_consuming()
