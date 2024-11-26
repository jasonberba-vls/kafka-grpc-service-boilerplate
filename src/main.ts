import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import rTracer from 'cls-rtracer';
import helmet from 'helmet';
import compression from 'compression';
import { AppExceptionFilter } from './common/filters/app-exception.filter';
import { CustomLoggerService } from './common/logger/custom-logger.service';
import { HttpStatus, Logger, RequestMethod } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { optionsMiddleware } from './common/middlewares/options.middleware';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { grpcClientOptions } from './grpc-client.options';
import { kafkaClientOptions } from './kafka-client.options';
/* Custom overrides start */

declare module 'express-serve-static-core' {
  interface Request {
    merchantId: string;
    secretKey: string;
    controllerPath: string;
  }
}

// This is used let JSON know how to serialize a bigint.
// https://github.com/GoogleChromeLabs/jsbi/issues/30#issuecomment-1017073129
BigInt.prototype['toJSON'] = function () {
  return this.toString();
};
/* Custom overrides end */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(optionsMiddleware);
  app.setGlobalPrefix('api', {
    exclude: [{ path: 'health', method: RequestMethod.GET }],
  });

  app.use(helmet());
  app.use(compression());
  app.use(
    rTracer.expressMiddleware({
      useHeader: true,
      headerName: 'x-request-id',
    }),
  );

  app.useGlobalFilters(new AppExceptionFilter());

  //Initialize Kafka Microservice
  app.connectMicroservice<MicroserviceOptions>(kafkaClientOptions);

  //Initialize GRPC Microservice
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);

  //Initiate Microservices
  await app.startAllMicroservices();

  //Uncomment to test ProducerService and GRPCRequest via HTTP Post Request
  await app.listen(process.env.PORT, () => {
    app.useLogger(app.get(CustomLoggerService));
    Logger.log(`Running on http://localhost:${process.env.PORT}`);
  });
}
bootstrap();
