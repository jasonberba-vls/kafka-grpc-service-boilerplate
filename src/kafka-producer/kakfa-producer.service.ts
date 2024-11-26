import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { catchError, map } from 'rxjs/operators';
import { from, Observable, throwError } from 'rxjs';
import { ProducerEvent } from './dto/kafka.dto';

@Injectable()
export class KafkaProducerService {
  constructor(@Inject('KAFKA_SERVICE') private client: ClientProxy) {}

  async publishEvent(event: ProducerEvent):  Promise<any> {
    console.error('publishing event:', event);

    let returnValue = await from(this.client.emit(event.topic, event.messages)).pipe(
      map(() => {
        console.log('Event published SUCCESS!');
        return true;
      }),
      catchError(err => {
        console.error('Event published ERROR:', err);
        return [false]; // Return an observable with false
      }),
    ).toPromise();
    return returnValue;
  }
}
