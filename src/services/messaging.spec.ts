/* eslint-disable no-undef */
import { Messaging } from './messaging';

const createSut = () => new Messaging();

describe('Testing Persistency', () => {
  afterEach(() => jest.clearAllMocks());
  it('should return undefined', () => {
    // System under rest
    const sut = createSut();
    expect(sut.sendMessage('Teste')).toBeUndefined();
  });

  it('should call console.log() once', () => {
    // System under rest
    const sut = createSut();
    // Parâmetros do spyOIn: Objeto console e método 'log'
    const consoleSpy = jest.spyOn(console, 'log');

    sut.sendMessage('Teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log() with the message: "Message sent: ", msg', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');

    sut.sendMessage('Teste');
    expect(consoleSpy).toHaveBeenCalledWith('Message sent: ', 'Teste');
  });
});
