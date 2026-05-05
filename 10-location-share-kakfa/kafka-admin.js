import { KafkaClient } from "./kafka-client.js";

async function setup() {
  const admin = KafkaClient.admin();

  try {
    console.log("Kafka Admin connecting...");
    await admin.connect();
    console.log("Kafka Admin connected... Success");

    await admin.createTopics({
      topics: [
        {
          topic: "location-updates",
          numPartitions: 2,
          replicationFactor: 1,
        },
      ],
      waitForLeaders: true,
    });

    console.log("Topic created successfully");
  } catch (error) {
    console.error("Kafka admin error:", error);
  } finally {
    await admin.disconnect();
  }
}

setup();