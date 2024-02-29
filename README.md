##To run simple producer and consumer:

Start RabbitMQ server:
docker run -d --name rabbitmq-server -p "5672:5672" -p "15672:15672" rabbitmq:3-management

Run one or more consumers:
node consumer.js

Run producer:
node producer.js
