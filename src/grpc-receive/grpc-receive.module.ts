import { Module } from '@nestjs/common';
import GrpcReceiveUseCase from './usecases/grpc-receive.usecase';
import { GrpcReceiveController } from './grpc-receive.controller';
import { KafkaProducerModule } from 'src/kafka-producer/kakfa-producer.module';

@Module({
  imports: [KafkaProducerModule],
  providers: [GrpcReceiveUseCase],
  controllers: [GrpcReceiveController]
})
export class GrpcReceiveModule {}
