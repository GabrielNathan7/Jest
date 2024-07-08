/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/interfaces/discount';
import { IndividualCustomer } from './classes/customer';
import { IMessaging } from './services/interfaces/messaging-protocol';

const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer('Gabriel', 'Fernandes', '129.007.496-89');

class MessagingMock implements IMessaging {
  sendMessage(): void {
    console.log('Message sent by mock');
  }
}
const messagingMock = new MessagingMock();

const order = new Order(shoppingCart, messagingMock, persistency, individualCustomer);
shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lapis', 1.49));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
