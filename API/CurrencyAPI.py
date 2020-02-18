
#!/usr/bin/env python
import requests, json, pika, datetime

#initiates rabbitMQ connection
credentials = pika.PlainCredentials('tim', 'test')
connection = pika.BlockingConnection(pika.ConnectionParameters('192.168.1.76',5672,'/',credentials))
channel=connection.channel()

#gets current currency values from api
def currencyGet(fromCurrency, toCurrency, amount):
    url = "https://currency-converter5.p.rapidapi.com/currency/convert"

    querystring = {"format": "json", "to": toCurrency, "from": fromCurrency, "amount": amount}

    headers = {
        'x-rapidapi-host': "currency-converter5.p.rapidapi.com",
        'x-rapidapi-key': "337a8f51c0msh6b1ec7345117496p180156jsne0c864b922e0"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)
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
    return response
#Function that is acitivted when api data is requested
def callback(ch, method, properties, body):

    #creates python readable message data
    body=json.loads(body)
    fromCurrency=body['currency']
    amount=body['amount']
    toCurrency='USD'
	
	#gets current currency values
    currentResponse=json.loads((currencyGet(fromCurrency,toCurrency,amount).text))
	
	#converts returned datatime to datetime object
    time=datetime.datetime.strptime(currentResponse['updated_date'],"%Y-%m-%d")
	
	#length of time in seconds to look at in the past
    timePeriod=2592000
    monthAgo=datetime.datetime(time.year,time.month,time.day,time.hour,time.second).timestamp()-timePeriod
    monthAgo=datetime.date.fromtimestamp(monthAgo)
	
	#gets historical currency values
    historicalResponse=json.loads(historicalGet(fromCurrency,toCurrency,amount,str(monthAgo.year)+'-'+str(monthAgo.month)+'-'+str(monthAgo.day)).text)
	#Finds difference between old and new currency values
    difference=float(currentResponse['rates'][toCurrency]['rate'])-float(historicalResponse['rates'][toCurrency]['rate'])
	#finds percent difference
    percent=difference/float(currentResponse['rates'][toCurrency]['rate'])
    response={"currency":fromCurrency,"difference":percent*10000}
	
	#adds % difference to queue for database
    channel.basic_publish(exchange='', routing_key='ApiToDatab', body=json.dumps(response))


#defines what should be done when queue has a new message (start callback function)
channel.basic_consume(queue='DataToApi',
                     auto_ack=True,
                     on_message_callback=callback)

#starts loop checking the queue for any new messages
channel.start_consuming()
