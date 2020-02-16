#!/usr/bin/env python
import requests, json, pika, datetime

'''
credentials = pika.PlainCredentials('test', 'test')
connection = pika.BlockingConnection(pika.ConnectionParameters('192.168.1.248',5672,'/',credentials))
channel.basic_publish(exchange='', routing_key='APItoDatabase', body=jsonNew)

'''

'''
def callback(ch, method, properties, body):
    print(" [x] Received %r" % body)
    currencyGet()

channel.basic_consume(queue='APItoDatabase',
                      auto_ack=True,
                      on_message_callback=callback)


#Function that requests data from the api returns json response

'''
amount='10'
fromCurrency='JPY'
#gets current currency values
def currencyGet(fromCurrency,toCurrency, amount):
    url="https://currency-converter5.p.rapidapi.com/currency/convert"

    querystring = {"format":"json","to":toCurrency,"from":fromCurrency,"amount":amount}

    headers = {
    'x-rapidapi-host': "currency-converter5.p.rapidapi.com",
    'x-rapidapi-key': "337a8f51c0msh6b1ec7345117496p180156jsne0c864b922e0"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)
    return response
    

#gets historical currency values
def historicalGet(fromCurrency,toCurrency, amount,time ):
    url = "https://currency-converter5.p.rapidapi.com/currency/historical/"+time
 
    querystring = {"format":"json","to":toCurrency,"from":fromCurrency,"amount":amount}

    headers = {
    'x-rapidapi-host': "currency-converter5.p.rapidapi.com",
    'x-rapidapi-key': "337a8f51c0msh6b1ec7345117496p180156jsne0c864b922e0"
    }
    
    response = requests.request("GET", url, headers=headers, params=querystring)
    return response

#creates python readable data
currentResponse=json.loads((currencyGet('USD', fromCurrency,amount).text))

#converts returned datatime to datetime object
time=datetime.datetime.strptime(currentResponse['updated_date'],"%Y-%M-%d")

#length of time to be compared to
timePeriod=2592000

#converts datetime object to POISX and subtracts from the end date and finds difference
monthAgo=datetime.datetime(time.year,time.month,time.day,time.hour,time.second).timestamp()-timePeriod


#converts result of subtraction into datetime object
monthAgo=datetime.date.fromtimestamp(monthAgo)


#creates python readable data
historicalResponse=json.loads(historicalGet('USD',fromCurrency,'10',str(monthAgo.year)+'-'+str(monthAgo.month)+'-'+str(monthAgo.day)).text)

#prints difference
difference=float(currentResponse['rates'][fromCurrency]['rate'])-float(historicalResponse['rates'][fromCurrency]['rate'])
print(str(difference))
print(str(difference/float(currentResponse['rates'][fromCurrency]['rate'])))

