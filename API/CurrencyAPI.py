#!/usr/bin/env python
import requests, json, pika
'''
#credentials = pika.PlainCredentials('test', 'test')
#connection = pika.BlockingConnection(pika.ConnectionParameters('192.168.1.248',5672,'/',credentials))
#
def callback(ch, method, properties, body):
    print(" [x] Received %r" % body)
    currencyGet()
channel.basic_consume(queue='APItoDatabase',
                      auto_ack=True,
                      on_message_callback=callback)
#Function that requests data from the api returns json response
'''
def currencyGet(fromCurrency, amount):
    url="https://currency-converter5.p.rapidapi.com/currency/convert"

    querystring = {"format":"json","to":"USD","from":fromCurrency,"amount":amount}

    headers = {
    'x-rapidapi-host': "currency-converter5.p.rapidapi.com",
    'x-rapidapi-key': "337a8f51c0msh6b1ec7345117496p180156jsne0c864b922e0"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)
    return response
jsonResponse=json.loads((currencyGet('AUD', '100').text))
print(jsonResponse['rates']['USD']['rate_for_amount'])

#channel.basic_publish(exchange='', routing_key='APItoDatabase', body=jsonNew)
