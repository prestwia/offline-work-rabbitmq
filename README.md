## To run simple producer and consumer:

Start RabbitMQ server:

docker run -d --name rabbitmq-server -p "5672:5672" -p "15672:15672" rabbitmq:3-management

Run one or more consumers:

node consumer.js

Run producer:

node producer.js


## To use API: 

Start MongoDB server:

docker run -d --name mongo-server -p "27017:27017" -e "MONGO_INITDB_ROOT_USERNAME=root" -e "MONGO_INITDB_ROOT_PASSWORD=hunter2" mongo:latest