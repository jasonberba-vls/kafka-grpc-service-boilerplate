import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaProducerService } from './kakfa-producer.service';
import { KafkaProducerController } from './kafka-producer.controller';
import 'dotenv/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: process.env.LOG_FILENAME,
            brokers: [process.env.KAFKA_BROKER], // Replace with your Kafka broker addresses
          },
        },
      },
    ]),
  ],
  providers: [KafkaProducerService],
  controllers: [KafkaProducerController],
  exports: [KafkaProducerService],
})
export class KafkaProducerModule {}