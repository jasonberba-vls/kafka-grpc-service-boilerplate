import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { GRPCReceiveServiceClient, TestMethodRequest } from '../proto/generated/grpc-receive';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class GrpcRequestService implements OnModuleInit {
  private grpcReceiveService: GRPCReceiveServiceClient;

  constructor(@Inject('GRPC_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.grpcReceiveService = this.client.getService<GRPCReceiveServiceClient>('GRPCReceiveService');
  }

  testMethod(testMethodRequest: TestMethodRequest) {
    var retValue: any;
    try {
      retValue = this.grpcReceiveService.testMethod(testMethodRequest);
    }
    catch (error){
      console.log('error', error);
    }
    return retValue;
  }

  testMethodWithKafka(testMethodRequest: TestMethodRequest) {
    var retValue: any;
    try {
      retValue = this.grpcReceiveService.testMethodWithKafka(testMethodRequest);
    }
    catch (error){
      console.log('error', error);
    }
    return retValue;
  }
}