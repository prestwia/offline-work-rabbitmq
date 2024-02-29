const amqp = require("amqplib");
const rabbitmqHost = process.env.RABBITMQ_HOST;
const rabbitmqUrl = `amqp://${rabbitmqHost}`;

async function run() {
    try {
        const connection = await amqp.connect(rabbitmqUrl);
        const channel = await connection.createChannel();
        await channel.assertQueue('echo');

        channel.consume("echo", msg => {
            if (msg) {
                console.log(msg.content.toString())
            }
            channel.ack(msg)
        })
    } catch (err) {
        console.error(err);
    }
}

run()
