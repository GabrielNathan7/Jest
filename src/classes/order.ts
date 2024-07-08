import { OrderStatus } from './interfaces/order-status';
import { ICustomerOrder } from './interfaces/customer-protocol';
import { IShoppingCart } from './interfaces/shopping-cart-protocol';
import { IMessaging } from '../services/interfaces/messaging-protocol';
import { IPersistency } from '../services/interfaces/persistency-protocol';

// A classe Order é de alto nível, pois ela depende de outras classes, como por exemplo a classe ShoppingCart (de baixo nível
// por não depender de ninguém) que foi adicionada na classe Order através de injeção de dependência
export class Order {
  private _orderStatus: OrderStatus = 'opened';
  private readonly _cart: IShoppingCart;
  private readonly _messaging: IMessaging;
  private readonly _persistency: IPersistency;
  private readonly _customer: ICustomerOrder;

  // Injeção de dependência
  constructor(cart: IShoppingCart, messaging: IMessaging, persistency: IPersistency, customer: ICustomerOrder) {
    this._cart = cart;
    this._messaging = messaging;
    this._persistency = persistency;
    this._customer = customer;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this._cart.isEmpty()) {
      console.log('Your cart is empty!');
    }

    this._orderStatus = 'closed';
    this._messaging.sendMessage(`Your order of ${this._cart.totalWithDiscount()} dolars has been received`);
    this._persistency.saveOrder();
    this._cart.clearCart();
    console.log('Client: ', this._customer.getName(), this._customer.getIDN());
  }
}
