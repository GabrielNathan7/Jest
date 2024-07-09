/* eslint-disable no-undef */
import { Product } from './product';

const createSut = (name: string, price: number): Product => new Product(name, price);

describe('Testing Product', () => {
  afterEach(() => jest.clearAllMocks());
  it('should have properties name and price', () => {
    // System under rest
    const sut = createSut('Camiseta', 49.9);
    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut).toHaveProperty('price', 49.9);
    expect(sut.price).toBeCloseTo(49.9);
  });
});
