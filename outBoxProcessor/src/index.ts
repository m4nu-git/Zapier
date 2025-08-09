import { PrismaClient } from "@prisma/client";
import { Kafka } from "kafkajs";

const TOPIC_NAME = "zap_events";

const client = new PrismaClient();

const client = new PrismaClient();

async function main() {
  const pendingRows = await client.zapRunOutbox.findMany({
    where: {},
    take: 10,
  });

  pendingRows.forEach((r) => {});
}

main();
