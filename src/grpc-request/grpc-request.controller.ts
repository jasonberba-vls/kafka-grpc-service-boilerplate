import { Controller, Next, NotFoundException, Post, Req, Res } from '@nestjs/common';
import { GrpcRequestService } from './grpc-request.service';
import { join } from 'path';

@Controller('grpc-request')
export class GrpcRequestController {
  constructor(private grpcRequestService: GrpcRequestService) {}

  @Post('testMethod')
  async testMethod(@Req() req: Request) {
      //console.log('grpc-request');
      let retValue: any;
      try{
        retValue = await this.grpcRequestService.testMethod(req.body as any);
      }catch (error){
        console.log('grpc-request error', error);
      }
      
      return retValue;
  }

  @Post('testMethodWithKafka')
  async testMethodWithKafka(@Req() req: Request) {
      //console.log('grpc-request');
      let retValue: any;
      try{
        retValue = await this.grpcRequestService.testMethodWithKafka(req.body as any);
      }catch (error){
        console.log('grpc-request error', error);
      }
      
      return retValue;
  }
}