console.log("producer")
import kafka from "node-rdkafka";

const stream = kafka.createWriteStream(
  {
    "metadata.broker.list": "localhost:9092",
  },
  {},
  { topic: "test" }
);

function queueMessage(){
    const success = stream.write(Buffer.from("Hey my name is Pauly"))
    if(success){
      console.log("message published, Great success!!!")
    }else {
      console.log("something went wrong")
    }
}

setInterval(()=>{
        queueMessage()
},3000)