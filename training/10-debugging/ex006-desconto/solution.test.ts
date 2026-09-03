import { describe, expect, it } from 'vitest';
import { loadSolution } from '../../test-utils/load-solution.js';
const { calculateDiscountedPrice } = await loadSolution<typeof import('./solution.js')>(import.meta.url);
describe('EX006', () => {
  it('aplica o percentual sobre o preço', () => expect(calculateDiscountedPrice(200, 25)).toBe(150));
  it('mantém o preço sem desconto', () => expect(calculateDiscountedPrice(80, 0)).toBe(80));
});
