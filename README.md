## To run simple producer and consumer:

Start RabbitMQ server:

docker run -d --name rabbitmq-server -p "5672:5672" -p "15672:15672" rabbitmq:3-management

Run one or more consumers:

node consumer.js

Run producer:

node producer.js

## To use API:

Start MongoDB server:

docker run -d --name mongo-server -p "27017:27017" -e "MONGO_INITDB_ROOT_USERNAME=user" -e "MONGO_INITDB_ROOT_PASSWORD=pass" mongo:latest

Hint:

In this case the following environment variables should be:

- MONGO_USER : user
- MONGO_PASSWORD : pass
- MONGO_DB_NAME : images
- MONGO_ADMIN_DB_NAME : admin

Start RabbitMQ Server:

docker run -d --name rabbitmq-server -p "5672:5672" -p "15672:15672" rabbitmq:3-management

Start API:

npm start
