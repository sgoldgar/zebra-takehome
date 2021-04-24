import { calculateMinutes } from '../src/components/utils/utils';

test('Configures less than minute correctly', () => {
  expect(calculateMinutes(12344)).toBe('less than 1 minute');
});

test('Configures exactly one minute correctly', () => {
  expect(calculateMinutes(60000)).toBe('1 minute');
});

test('Configures more than one minute correctly', () => {
  expect(calculateMinutes(130000)).toBe('2 minutes');
});
