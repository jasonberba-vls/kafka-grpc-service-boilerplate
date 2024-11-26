import { Controller, Inject } from '@nestjs/common';
import { Client, ClientKafka, ClientProxy, Ctx, KafkaContext, MessagePattern, Payload, Transport } from '@nestjs/microservices';

@Controller()
export class KafkaConsumerController {
  
  @MessagePattern('test_topic_001') // Replace with your Kafka topic
  handleTestTopic001Message(@Payload() message: any, @Ctx() context: KafkaContext) {
    console.log('Received Payload:', message);
    console.log('Received Ctx.getTopic:', context.getTopic());
    console.log('Received Ctx.getMessage:', context.getMessage());

    // Your message handling logic here
    // Call UseCase
  }

  @MessagePattern('test_topic_002') // Replace with your Kafka topic
  handleTestTopic002Message(@Payload() message: any, @Ctx() context: KafkaContext) {
    console.log('Received Payload:', message);
    console.log('Received Ctx.getTopic:', context.getTopic());
    console.log('Received Ctx.getMessage:', context.getMessage());

    // Your message handling logic here
    // Call UseCase
  }
}