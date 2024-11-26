import { ProducerRecord, Message } from 'kafkajs';

export class ProducerEvent implements ProducerRecord {
    topic: string
    messages: EventMessage[]
}

export class EventMessage implements Message {
    key: Buffer | string | null
    value: Buffer | string | null
    headers?: any
}
