#!/bin/bash
sudo apt-get update && sudo apt-get -y upgrade
sudo ufw disable
sudo apt-get install python3-pip
pip3 install pika
pip3 install requests
pip3 install mysql-connector
apiMigrate.sh m
