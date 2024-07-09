/* eslint-disable no-undef, new-cap */
import { Discount, FiftyPercentDiscount, TenPercentDiscount, NoDiscount } from './discount';

const createSut = (className: new () => Discount): Discount => new className();

describe('Testing Discount', () => {
  afterEach(() => jest.clearAllMocks());
  it('should have no discount', () => {
    // System under rest
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBe(10.99);
  });
  it('should apply 50% discount on price', () => {
    // System under rest
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150.50)).toBe(75.25);
  });
  it('should apply 10% discount on price', () => {
    // System under rest
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBe(9);
  });
});
