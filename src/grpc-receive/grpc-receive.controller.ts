import { Controller } from '@nestjs/common';
import { GRPCReceiveServiceController, GRPCReceiveServiceControllerMethods, TestMethodRequest } from '../proto/generated/grpc-receive';
import GrpcReceiveUseCase from './usecases/grpc-receive.usecase';

@Controller()
@GRPCReceiveServiceControllerMethods()
export class GrpcReceiveController implements GRPCReceiveServiceController {
        constructor(private grpcReceiveUseCase: GrpcReceiveUseCase) {
        }
    
    // GRPCurl command: grpcurl -plaintext -d '{ "numberInput":1, "stringInput":"test", "boolInput":true }' localhost:5001 grpc_receive.GRPCReceiveService/TestMethod
    testMethod(request: TestMethodRequest) {
        return this.grpcReceiveUseCase.testMethod(request);
    }

    // GRPCurl command: grpcurl -plaintext -d '{ "numberInput":1, "stringInput":"test", "boolInput":true }' localhost:5001 grpc_receive.GRPCReceiveService/TestMethodWithKafka
    testMethodWithKafka(request: TestMethodRequest) {
      return this.grpcReceiveUseCase.testMethodWithKafka(request);
  }
}