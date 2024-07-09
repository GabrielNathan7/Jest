/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef, new-cap */
import { CartItem } from './interfaces/cart-item';
import { IShoppingCart } from './interfaces/shopping-cart-protocol';
import { IMessaging } from '../services/interfaces/messaging-protocol';
import { IPersistency } from '../services/interfaces/persistency-protocol';
import { ICustomerOrder } from './interfaces/customer-protocol';
import { Order } from './order';

class ShoppingCartMock implements IShoppingCart {
  get items(): Readonly<CartItem[]> {
    return [];
  }
  addItem(item: CartItem): void {}
  removeItem(index: number): void {}
  total(): number {
    return 1;
  }
  totalWithDiscount(): number {
    return 2;
  }
  isEmpty(): boolean {
    return true;
  }
  clearCart(): void {}
}

class MessagingMock implements IMessaging {
  sendMessage(): void {}
}

class PersistencyMock implements IPersistency {
  saveOrder(): void {}
}

class CustomerMock implements ICustomerOrder {
  getIDN(): string {
    return '';
  }
  getName() { return ''; }
}

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessagingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();
  const sut = new Order(shoppingCartMock, messagingMock, persistencyMock, customerMock);

  return { sut, shoppingCartMock, messagingMock, persistencyMock };
};

describe('Testing Order', () => {
  afterEach(() => jest.clearAllMocks());
  it('should not checkout if cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(true);
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('opened');
  });

  it('should not checkout if cart is not empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(false);
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('closed');
  });

  it('should send an e-mail to the customer', () => {
    const { sut, messagingMock, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(false);
    const messagingMockSpy = jest.spyOn(messagingMock, 'sendMessage');
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(messagingMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should save order', () => {
    const { sut, messagingMock, shoppingCartMock, persistencyMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(false);
    const messagingMockSpy = jest.spyOn(messagingMock, 'sendMessage');
    const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder');
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(messagingMockSpy).toHaveBeenCalledTimes(1);
    expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should clear cart', () => {
    const { sut, messagingMock, shoppingCartMock, persistencyMock } = createSut();
    const shoppingCartIsEmptyMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(false);
    const messagingMockSpy = jest.spyOn(messagingMock, 'sendMessage');
    const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder');
    const shoppingCartClearMockSpy = jest
      .spyOn(shoppingCartMock, 'clearCart');
    sut.checkout();
    expect(shoppingCartIsEmptyMockSpy).toHaveBeenCalledTimes(1);
    expect(messagingMockSpy).toHaveBeenCalledTimes(1);
    expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
    expect(shoppingCartClearMockSpy).toHaveBeenCalledTimes(1);
  });
});
