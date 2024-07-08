import { IPersistency } from './interfaces/persistency-protocol';

export class Persistency implements IPersistency {
  saveOrder(): void {
    console.log('Order saved');
  }
}
