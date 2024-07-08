import { CartItem } from './interfaces/cart-item';
import { Discount } from './interfaces/discount';
import { IShoppingCart } from './interfaces/shopping-cart-protocol';

export class ShoppingCart implements IShoppingCart {
  private readonly _items: CartItem[] = [];
  private readonly _discount: Discount;

  constructor(discount: Discount) {
    this._discount = discount;
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items.reduce((total, next) => total + next.price, 0).toFixed(2);
  }

  totalWithDiscount(): number {
    return this._discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clearCart(): void {
    console.log('Cleaned shopping cart');
    this._items.length = 0;
  }
}
