/* eslint-disable no-undef */
import { Persistency } from './persistency';

describe('Testing Persistency', () => {
  afterEach(() => jest.clearAllMocks());
  it('should return undefined', () => {
    // System under rest
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log() once', () => {
    // System under rest
    const sut = new Persistency();
    // Parâmetros do spyOIn: Objeto console e método 'log'
    const consoleSpy = jest.spyOn(console, 'log');

    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log() with the message: Order saved', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');

    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Order saved');
  });
});
