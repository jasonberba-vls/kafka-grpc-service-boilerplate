import { Injectable, Logger } from '@nestjs/common';
import { TestMethodResponse, TestMethodRequest } from '../../proto/generated/grpc-receive';
import { KafkaProducerService } from '../../kafka-producer/kakfa-producer.service';
import { ProducerEvent } from '../../kafka-producer/dto/kafka.dto';

@Injectable()
export default class GrpcReceiveUseCase {
constructor(
    private kafkaProducerService: KafkaProducerService
) {}

async testMethod(testMethodRequest: TestMethodRequest): Promise<TestMethodResponse> {
    let retValue: TestMethodResponse = {
      numberResponse : 69,
      stringResponse : "Test Response",
      boolResponse : true,
      optionalResponse : "Optional Response"
    }

    //console.log('retValue', retValue);
    return retValue;
  }

async testMethodWithKafka(testMethodRequest: TestMethodRequest): Promise<TestMethodResponse> {
    let retValue: TestMethodResponse = {
      numberResponse : 69,
      stringResponse : "Test Response",
      boolResponse : true,
      optionalResponse : "Optional Response"
    }

    //Kafka Publish START
    let message : any = {
        key: 'test_key_00001', // Optional key
        value: JSON.stringify({
            'name': 'test_name',
            'amount': 2001,
            'currencyCode': 'SSC',
        })
    }
    let eventParam : ProducerEvent = {
        topic: 'test_topic_002',
        messages: [message]
    }
    await this.kafkaProducerService.publishEvent(eventParam);
    //Kafka Publish END

    //console.log('retValue', retValue);
    return retValue;
  }
}