import { test, expect } from 'vitest';
import multTwo from './multTwo.js';

test('multTwo moltiplica 2 al valore', () => {
  const val = 9;
  const result = multTwo(val);
  expect(result).toBe(val * 2); // 9 * 2 = 18
});
