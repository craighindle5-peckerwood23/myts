import { hello } from '../src/index';
test('smoke', () => {
  expect(hello()).toBe('hello');
});
