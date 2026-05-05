import path from "node:path"
import { createServer } from "node:http"
import express from "express"
import { Server, Socket } from "socket.io"
import { KafkaClient } from "./kafka-client.js"


async function createApp() {
  const port = 8000
  const app = express()
  const server = createServer(app)
  const io = new Server()
  io.attach(server)

  const kafkaProducer = await KafkaClient.producer()
  await kafkaProducer.connect()
  const kafkaConsumer = await KafkaClient.consumer({ groupId: `socket-server-${port}` })
  await kafkaConsumer.connect()

  await kafkaConsumer.subscribe({ topics: ['location-updates'], fromBeginning: true })

  kafkaConsumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat }) => {
      const data = JSON.parse(message.value.toString())
      console.log("kafka consumer data recieved", { data })
      io.emit("server:location:updates", {
        id: data.id,
        latitude: data.latitude,
        longitude: data.longitude
      })
      heartbeat()
    }
  })

  app.use(express.urlencoded())
  app.use(express.static(path.resolve("./public")))



  app.get("/health", (req, res) => {
    return res.send("mai mast tu bata")
  })

  io.on("connection", (socket) => {
    console.log(`Socket:${socket.id}-connected`)
    socket.on("client:location:update", (locationData) => {
      // console.log(locationData)
      const { latitude, longitude } = locationData
      kafkaProducer.send({
        topic: "location-updates", messages: [{
          key: socket.id,
          value: JSON.stringify({ id: socket.id, latitude, longitude })
        }]
      })
    })
  })

  server.listen(port, () => {
    console.log(`server is listening on http://localhost:8000`)
  })
}

createApp()