import { describe, expect, it } from 'vitest';
import { loadSolution } from '../../test-utils/load-solution.js';
const { findLargestNumber } = await loadSolution<typeof import('./solution.js')>(import.meta.url);
describe('EX002', () => {
  it('encontra o maior número, inclusive se todos forem negativos', () => {
    expect(findLargestNumber([3, 9, 2, 9, 1])).toBe(9);
    expect(findLargestNumber([-8, -2, -10])).toBe(-2);
  });
  it('aceita uma lista unitária', () => expect(findLargestNumber([42])).toBe(42));
});
