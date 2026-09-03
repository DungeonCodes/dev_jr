import { describe, expect, it } from 'vitest';
import { loadSolution } from '../../test-utils/load-solution.js';
const { getHttpStatusCategory } = await loadSolution<typeof import('./solution.js')>(import.meta.url);
describe('EX004', () => {
  it('classifica famílias HTTP', () => {
    expect(getHttpStatusCategory(200)).toBe('success');
    expect(getHttpStatusCategory(404)).toBe('client_error');
    expect(getHttpStatusCategory(500)).toBe('server_error');
  });
  it('não trata 3xx ou valores fora das famílias como sucesso', () => expect(getHttpStatusCategory(302)).toBe('other'));
});
