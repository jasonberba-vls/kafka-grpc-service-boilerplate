import { ReflectionService } from '@grpc/reflection';
import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import 'dotenv/config';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [ 
                'grpc_receive',
             ],
    protoPath: [
                    join(__dirname, './proto/sourcefiles/grpc-receive.proto'),
               ],
    url: 'localhost:' + process.env.GRPC_PORT, //Defaults to port 5000

    // To Enable GRPCurl syntax
    onLoadPackageDefinition: (pkg, server) => { new ReflectionService(pkg).addToServer(server); },
  },  
};
