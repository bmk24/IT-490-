#!/usr/bin/env python
import requests, json, pika, datetime, sys, mysql.connector
times=datetime.datetime.now().strftime('%Y-%m-%d %I:%M %p')
#error reporting
def error(code,message,time):
 
 try:
  connect=mysql.connector.connect(user='myuser',password='PASSWORD',host='3.21.114.39',database='marioGalaxy')
 except:
  exit()
 query1="Select * FROM logging"
 
 query="INSERT INTO logging VALUES (%s, %s, %s, %s)"
 cursor=connect.cursor(buffered=True)
 cursor.execute(query1)
 records=cursor.fetchall()
 cursor.execute(query, (code,"Ubuntu-API", message, time))
 connect.commit()
 cursor.close()
 connect.close()
#attempts to connect to rabbitmqvm
try:
#initiates rabbitMQ connection
 credentials = pika.PlainCredentials('test', 'test')
 connection = pika.BlockingConnection(pika.ConnectionParameters('ec2-3-21-125-32.us-east-2.compute.amazonaws.com',5672,'/',credentials))
 channel=connection.channel()
except:
 
 error("504","API VM can't connect to rabbitmq VM.",times)
 sys.exit()
#gets current currency values from api

def currencyGet(fromCurrency, toCurrency, amount):
    url = "https://currency-converter5.p.rapidapi.com/currency/convert"

    querystring = {"format": "json", "to": toCurrency, "from": fromCurrency, "amount": amount}

    headers = {
        'x-rapidapi-host': "currency-converter5.p.rapidapi.com",
        'x-rapidapi-key': "337a8f51c0msh6b1ec7345117496p180156jsne0c864b922e0"
    }
   
    try:
     response = requests.request("GET", url, headers=headers, params=querystring, timeout=3)
    except:
     errors=True
     times=datetime.datetime.now().strftime('%Y-%m-%d %I:%M %p')
     error('404',"Can't connect to API server from API script.",times)
     return "error"
    if error or response.status_code==404:
       
       times=datetime.datetime.now().strftime('%Y-%m-%d %I:%M %p')
       error('404',"Can't connect to API server from API script.",times)
       return "error"
    return response
#gets historical currency values from api
def historicalGet(fromCurrency, toCurrency, amount, time):
    url = "https://currency-converter5.p.rapidapi.com/currency/historical/" + time

    querystring = {"format": "json", "to": toCurrency, "from": fromCurrency, "amount": amount}

    headers = {
        'x-rapidapi-host': "currency-converter5.p.rapidapi.com",
        'x-rapidapi-key': "337a8f51c0msh6b1ec7345117496p180156jsne0c864b922e0"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)
    if response.status_code==404:
     times=datetime.datetime.now().strftime('%Y-%m-%d %I:%M %p')
     error('404',"Can't connect to API server from API script.",times)
     return "error"
    return response
#Function that is acitivted when api data is requested
def callback(ch, method, properties, body):
    
    #creates python readable message data
    
    body=json.loads(body)
    
    fromCurrency=body['currency']
    amount=1
    toCurrency='USD'
    #gets current currency values
    
    toload=currencyGet(fromCurrency,toCurrency,amount)
    if toload=="error":
     return
    currentResponse=json.loads(toload.text)


    #converts returned datatime to datetime object
    time=datetime.datetime.strptime(currentResponse['updated_date'],"%Y-%m-%d")
    
    #length of time in seconds to look at in the past
    timePeriod=2592000
    monthAgo=datetime.datetime(time.year,time.month,time.day,time.hour,time.second).timestamp()-timePeriod
    monthAgo=datetime.date.fromtimestamp(monthAgo)
    #gets historical currency values
    if historicalGet(fromCurrency,toCurrency,amount,str(monthAgo.year)+'-'+str(monthAgo.month)+'-'+str(monthAgo.day))=="error":
     return

    historicalResponse=json.loads(historicalGet(fromCurrency,toCurrency,amount,str(monthAgo.year)+'-'+str(monthAgo.month)+'-'+str(monthAgo.day)).text)

    
    #Finds difference between old and new currency values
    difference=float(currentResponse['rates'][toCurrency]['rate'])-float(historicalResponse['rates'][toCurrency]['rate'])
    #finds percent difference
    percent=difference/float(currentResponse['rates'][toCurrency]['rate'])
    response={"currency":fromCurrency,"difference":percent*1000}
    #adds % difference to queue for database after rounding the value to the nearest
    #divisible by 5 number
    
    roundedDifference=int(round(response['difference']))
    start=roundedDifference-roundedDifference % 5
    stop=start+5
    if roundedDifference-start<=3:
      response["difference"]=start
    else:
      response["difference"]=stop
    #upper and lower bound variables
    maxval=75
    minval=-75
    #sets upper and lower limit on currency value
    if response["difference"]>maxval:
       response["difference"]=maxval
    elif response["difference"]<minval:
       response["difference"]=minval
    channel.basic_publish(exchange='', routing_key='ApiToDatab', body=json.dumps(response))


#defines what should be done when queue has a new message (start callback function)
channel.queue_declare(queue='DataToApi', durable=True)
channel.basic_consume(queue='DataToApi',
                     auto_ack=True,
                     on_message_callback=callback)

channel.queue_declare(queue='ApiToDatab', durable=True)
#starts loop checking the queue for any new messages
channel.start_consuming()
