import { KafkaClient } from "./kafka-client";

async function init() {
  const kafkaConsumer = await KafkaClient.consumer({ groupId: `database-processor` })
  await kafkaConsumer.connect()

  await kafkaConsumer.subscribe({ topics: ['location-updates'], fromBeginning: true })

  kafkaConsumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat }) => {
      const data = JSON.parse(message.value.toString())
      console.log("kafka consumer data recieved", { data })
      console.log(`inserting into DB_Location ${data}`)
      heartbeat()
    }
  })
}

init()