/* eslint-disable no-unused-vars */
export abstract class Discount {
  protected _discount = 0;

  calculate(price: number): number {
    return price - price * this._discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly _discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected readonly _discount = 0.1;
}

export class NoDiscount extends Discount {}
