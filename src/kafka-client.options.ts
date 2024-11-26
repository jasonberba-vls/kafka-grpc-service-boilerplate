import { ClientOptions, Transport } from '@nestjs/microservices';
import 'dotenv/config';

export const kafkaClientOptions: ClientOptions = {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [process.env.KAFKA_BROKER],
      },
      consumer: {
        groupId: process.env.LOG_FILENAME, // Replace with your consumer group ID
      },
    }
};