#!/bin/bash
sudo apt upgrade
sudo apt-get update
sudo apt-get install openssh-server
sudo apt-get install net-tools
sudo apt install php
sudo apt install php-mbstring
sudo apt install php-bcmath
sudo apt install composer
composer require php-amqplib/php-amqplib
sudo ufw disable
sudo apt-get install mysql-server
sudo systemctl start mysql
sudo systemctl enable mysql
sudo systemctl restart mysql
sudo mysql_secure_installation

# create random password
PASSWDDB="MarioGalaxy1*"

# create user
USR="myuser"

# replace "-" with "_" for database username
MAINDB="marioGalaxy"

# If /root/.my.cnf exists then it won't ask for root password
if [ -f /root/.my.cnf ]; then

    sudo mysql -e "CREATE DATABASE ${MAINDB} /*\!40100 DEFAULT CHARACTER SET utf8 */;"
    sudo mysql -e "CREATE USER ${USR}@localhost IDENTIFIED BY '${PASSWDDB}';"
    sudo mysql -e "CREATE USER ${USR}@'%' IDENTIFIED BY '${PASSWDDB}';"
    sudo mysql -e "GRANT ALL PRIVILEGES ON ${MAINDB}.* TO '${USR}'@'localhost';"
    sudo mysql -e "GRANT ALL PRIVILEGES ON ${MAINDB}.* TO '${USR}'@'%';"
    sudo mysql -e "FLUSH PRIVILEGES;"

# If /root/.my.cnf doesn't exist then it'll ask for root password   
else
    echo "Please enter root user MySQL password!"
    echo "Note: password will be hidden when typing"
    read -sp rootpasswd
    sudo mysql -uroot -p${rootpasswd} -e "CREATE DATABASE ${MAINDB} /*\!40100 DEFAULT CHARACTER SET utf8 */;"
    sudo mysql -uroot -p${rootpasswd} -e "CREATE USER ${USR}@localhost IDENTIFIED BY '${PASSWDDB}';"
    sudo mysql -uroot -p${rootpasswd} -e "CREATE USER ${USR}@'%' IDENTIFIED BY '${PASSWDDB}';"
    sudo mysql -uroot -p${rootpasswd} -e "GRANT ALL PRIVILEGES ON ${MAINDB}.* TO '${USR}'@'localhost';"
    sudo mysql -uroot -p${rootpasswd} -e "GRANT ALL PRIVILEGES ON ${MAINDB}.* TO '${USR}'@'%';"
    sudo mysql -uroot -p${rootpasswd} -e "FLUSH PRIVILEGES;"
fi
