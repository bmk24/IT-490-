# Currency API and Data.py
API connection script that connects to RabbitMQ server and interacts with the game and database vms. 
Provides API data to both the game and the database.
### Prerequisites
sudo apt-get install python3-pip

pip3 install requests

pip3 install pika

### Installing


Download file to accessible directory.


cd to directory where file is.


chmod a+x CurrencyAPI.py
chmod a+x data.py

### Setup rabbitmq vm with proper queues
sudo rabbitmq-server start

This command allowed non web interface access to creating a test user and setting permissions:

rabbitmq-plugins enable rabbitmq_management

Add user:

sudo rabbitmqctl add_user tim test

Set permission:

sudo rabbitmqctl set_permission -p / tim ".*" ".*" ".*"

create queue:

rabbitmqadmin declare queue name=ApiToDatab durable=true

Create second queue:

rabbitmqadmin declare queue name=DataToApi durable=true

## Usage
python3 CurrencyAPI.py
python3 data.py
(requires queues ApiToDatab and DataToApi queues to be declared on ra

# Network Fix
Used for quickly changing the static ips of virtualbox vms.

Used for changing the static ip to a compatible one with the current router by moving two previously made 01-netcfg.yaml files around and applies one.

### Prerequisites
Second yaml file with different config information that works for another router setup.

Ability to create folder in same directory as networkFix.sh bash script called networkFix.

### Installing

Place networkFix.sh file in home directory or any other easily accesible location.

Place second router compatible 01-netcfg.yaml config file in the same directory as networkFix.sh

mkdir networkFix (in directory where networkFix.sh is)

cd /etc/netplan/

ls -l (make note of size of current config file)

nano [path to networkFix.sh]

edit if statement and replace 366 with the size number of the current config file in /etc/netplan/ and save file

*note the second config file must differ from the first in size. Can add in comments to increase the size.

## Usage
sudo bash networkFix.sh

Typing it in again switches the config back.


