# Currency API and Data.py
API connection script that connects to RabbitMQ server and interacts with the game and database vms. 
Provides API data to both the game and the database.
### Data,py
data.py simulates database data. I made it to test the api script before the database was made.
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
(requires queues ApiToDatab and DataToApi queues to be declared on rabbitmq vm and the rabbitmq must be running)

