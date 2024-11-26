import { Module } from '@nestjs/common';
import { GrpcRequestService } from './grpc-request.service';
import { GrpcRequestController } from './grpc-request.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GRPC_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'grpc_receive',
          protoPath: join(__dirname, '../proto/sourcefiles/grpc-receive.proto'),
          url: 'localhost:5001', //Assign port of Microservice Target
        },
      },
    ]),
  ],
  controllers: [GrpcRequestController],
  providers: [GrpcRequestService],
})
export class GrpcRequestModule {}