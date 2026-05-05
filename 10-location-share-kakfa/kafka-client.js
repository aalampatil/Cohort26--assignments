import { Kafka } from "kafkajs";

export const KafkaClient = new Kafka({
  clientId: "aP-client",
  brokers: ["localhost:9092"]
})