import { Controller, Post, Req } from '@nestjs/common';
import { KafkaProducerService } from './kakfa-producer.service';
import { Request } from 'express';
import { Producer } from 'kafkajs';
import { ProducerEvent } from './dto/kafka.dto';

@Controller('kafka-producer')
export class KafkaProducerController {
  constructor(private kafkaProducerService: KafkaProducerService) {}

  @Post('publish')
  async publishEvent(@Req() req: Request) {
    let event : ProducerEvent = req.body;
    return await this.kafkaProducerService.publishEvent(event);
  }
}
 