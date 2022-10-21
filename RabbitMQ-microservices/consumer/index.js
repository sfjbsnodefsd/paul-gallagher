const express = require("express")
const app = express();
const amqp = require("amqplib")
var channel, connection;
connect();



async function connect() {
    try {
        const amqpServer = "amqp://localhost:5672";
        connection = await amqp.connect(amqpServer);
        channel = await connection.createChannel();
        channel.assertQueue("Rabbit");
        channel.consume("Rabbit", data => {
            console.log (`received the data from the producer: ${Buffer.from(data.content)}`);

        }) 
     } catch (err){
        console.log(err);
     }

};
app.listen(5002, () => {
    console.log("Your rockin it on the 5002")
})