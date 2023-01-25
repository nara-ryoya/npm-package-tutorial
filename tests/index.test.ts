import { hello } from '../src';

describe('hello', () => {
  it('should say hello', () => {
    const log = jest.spyOn(console, 'log').mockReturnValue();
    hello();
    expect(log).toHaveBeenCalledWith('hello');
  });
});
