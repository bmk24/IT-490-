#!/usr/bin/env python
import pika, simplejson as json, mysql.connector, sys
from decimal import *
#publishes json to be processed and returned by CurrencyAPI.py
credentials = pika.PlainCredentials('test','test')
connection = pika.BlockingConnection(pika.ConnectionParameters('ec2-3-21-125-32.us-east-2.compute.amazonaws.com',5672,'/',credentials))
channel = connection.channel()
 
queue = channel.queue_declare(
    queue="AppToDatab", durable=True,
    exclusive=False, auto_delete=False
)
def connect():
 mydb = mysql.connector.connect(
 host="localhost",
 user="myuser",
 passwd="MarioGalaxy1*",
 database="marioGalaxy"
 )
 return mydb
def quit(db):
 db.close()
def getCurrency(jsonresult):
 mydb=connect()
 mycursor = mydb.cursor()
 query="select difference from currency where currencyCode=%s"

 mycursor.execute(query,(jsonresult,))
 result=mycursor.fetchone()
 channel.basic_publish(exchange='',routing_key='DataToApp',body=json.dumps({'currency':jsonresult,'difference':Decimal(result[0])},use_decimal=True))
 quit(mydb)
def getPoints(jsonresult):
 mydb=connect()

 mycursor = mydb.cursor()
 query="select currentPoints from userInfo where username=%s"

 mycursor.execute(query,(jsonresult,))
 result=mycursor.fetchone()
 channel.basic_publish(exchange='',routing_key='DataToApp',body=json.dumps({'username':jsonresult,'points':Decimal(result[0])},use_decimal=True))
 quit(mydb)
def getShop(username,itemID):
 mydb=connect()

 mycursor = mydb.cursor()
 query="select * from shop where itemNum=%s"
 mycursor.execute(query,(itemID,))
 result=mycursor.fetchone()
 message={'username':username,'itemID':result[0],
 'itemName':result[1],
 'itemPrice':Decimal(result[2])}
 query="select * from purchaseHistory where itemID=%s and username=%s"
 mycursor.execute(query,(itemID,username))
 result2=mycursor.fetchone()
 message["quantity"]=result2[2]
 deliver=json.dumps(message,use_decimal=True)
 channel.basic_publish(exchange='',routing_key='DataToApp',body=deliver)
 quit(mydb)
def getCharacter(jsonresult):
 mydb=connect()
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
 quit(mydb)
 
def setShop(itemID,itemPrice):
 mydb=connect()

 mycursor = mydb.cursor()
 query="Update shop Set itemPrice=%s where itemNum=%s"

 mycursor.execute(query,(itemPrice,itemID))
 mydb.commit()
 channel.basic_publish(exchange='',routing_key='DataToApp',body=json.dumps({'message':'success'}))
 quit(mydb)
 
def getUser(usernames):
 mydb=connect()
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
 quit(mydb)
def setCurrency(currency,username):
 mydb=connect()
 mycursor = mydb.cursor()
 query="Update userInfo Set currencyCode=%s where username=%s"
 mycursor.execute(query,(currency,username))
 mydb.commit()
 channel.basic_publish(exchange='',routing_key='DataToApp',body=json.dumps({'message':'success'}))
 quit(mydb)
def setCharacter(character,username):
 mydb=connect()
 mycursor = mydb.cursor()
 query="Update userInfo Set characterName=%s where username=%s"
 mycursor.execute(query,(character,username))
 mydb.commit()
 channel.basic_publish(exchange='',routing_key='DataToApp',body=json.dumps({'message':'success'}))
 quit(mydb)
def setQuantity(itemID,quantity,username):
 mydb=connect()
 mycursor = mydb.cursor()
 query="Update purchaseHistory Set quantity=%s where username=%s and itemID=%s"
 mycursor.execute(query,(quantity,username, itemID))
 mydb.commit()
 channel.basic_publish(exchange='',routing_key='DataToApp',body=json.dumps({'message':'success'}))
 quit(mydb)
def setPoints(points,username):
 mydb=connect()
 mycursor = mydb.cursor()
 query="Update userInfo Set currentPoints=%s where username=%s"
 mycursor.execute(query,(points,username))
 mydb.commit()
 channel.basic_publish(exchange='',routing_key='DataToApp',body=json.dumps({'message':'success'}))
 quit(mydb)
def setInfo(username,levelsComplete,currentLevel,currentPoints,maxPoints,currentLives,spritePack,characterName,currencyCode):
 mydb=connect()
 mycursor = mydb.cursor()
 query="Update userInfo Set levelsComplete=%s, currentLevel=%s, currentPoints=%s, maxPoints=%s, playerLives=%s, spritePack=%s, characterName=%s, currencyCode=%s where username=%s"
 mycursor.execute(query,(levelsComplete,currentLevel, currentPoints, maxPoints, currentLives, spritePack, characterName, currencyCode, username))
 mydb.commit()
 channel.basic_publish(exchange='',routing_key='DataToApp',body=json.dumps({'message':'success'}))
 quit(mydb)
def callback(ch, method, properties, body):
 global connection
 jsonResult=json.loads(body)
 head=jsonResult["head"]
 try:
  if head=="getCurrency":
	  currency=jsonResult['currency']
	  getCurrency(currency)
  elif head=="getUser":
	  username=jsonResult['username']
	  getUser(username)
	  
  elif head=="getShop":
	  username=jsonResult['username']
	  itemID=jsonResult['itemID']
	  getShop(username,itemID)
	  
  elif head=="setCurrency":
	  username=jsonResult['username']
	  currency=jsonResult['currency']
	  setCurrency(currency, username)
	  
  elif head=="setPoints":
	  points=jsonResult['points']
	  username=jsonResult['username']
	  setPoints(points, username)
	  
  elif head=="setQuantity":
	  quantity=jsonResult['quantity']
	  username=jsonResult['username']
	  itemID=jsonResult['itemID']
	  setQuantity(itemID,quantity, username)
	  
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
  elif head=="setShop":
   itemID=jsonResult['itemID']
   itemPrice=jsonResult['itemPrice']
   setShop(itemID, itemPrice)
     
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
 except Exception as e:
     channel.basic_publish(exchange='',routing_key='DataToApp',body=json.dumps({'message': str(e)}))

channel.basic_consume(queue='AppToDatab',
                      auto_ack=True,
                      on_message_callback=callback)
channel.start_consuming()
