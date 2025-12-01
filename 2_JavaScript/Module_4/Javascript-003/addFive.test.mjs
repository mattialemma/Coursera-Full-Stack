import { test, expect } from 'vitest';
import addFive from './addFive.js';

test('addFive aggiunge 5 al valore', () => {
  const val = 1;
  const result = addFive(val);
  expect(result).toBe(val + 5); // 1 + 5 = 6
});

// Esegui con comando da terminale: pnpm test
