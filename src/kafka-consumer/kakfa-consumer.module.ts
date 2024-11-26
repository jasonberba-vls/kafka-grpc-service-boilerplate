import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaConsumerController } from './kakfa-consumer.controller';
import 'dotenv/config';

@Module({
  imports: [
  ],
  controllers: [KafkaConsumerController],
})
export class KafkaConsumerModule {}