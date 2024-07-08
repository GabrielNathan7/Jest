import { IMessaging } from './interfaces/messaging-protocol';

export class Messaging implements IMessaging {
  sendMessage(msg: string): void {
    console.log('Message sent: ', msg);
  }
}
