import { describe, expect, it } from 'vitest';
import { loadSolution } from '../../test-utils/load-solution.js';

const { filterActiveUsers } = await loadSolution<typeof import('./solution.js')>(import.meta.url);

describe('EX001', () => {
  it('mantém apenas usuários ativos sem alterar a entrada', () => {
    const users = [{ id: 1, active: true }, { id: 2, active: false }, { id: 3, active: true }];
    expect(filterActiveUsers(users)).toEqual([{ id: 1, active: true }, { id: 3, active: true }]);
    expect(users).toHaveLength(3);
  });
  it('retorna uma lista vazia quando ninguém está ativo', () => expect(filterActiveUsers([{ id: 1, active: false }])).toEqual([]));
});
