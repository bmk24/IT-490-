#!/bin/bash
sudo apt-get update && sudo apt-get -y upgrade
sudo ufw disable
sudo apt-get install apache2 php composer rsyslogd php-bcmath php-mbstring composer require php-amqplib/php-amqplib -y
