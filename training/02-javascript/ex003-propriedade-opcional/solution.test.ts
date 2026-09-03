import { describe, expect, it } from 'vitest';
import { loadSolution } from '../../test-utils/load-solution.js';
const { getDisplayName } = await loadSolution<typeof import('./solution.js')>(import.meta.url);
describe('EX003', () => {
  it('retorna o nome do perfil', () => expect(getDisplayName({ profile: { displayName: 'Ana' } })).toBe('Ana'));
  it('usa o valor padrão em propriedades ausentes', () => {
    expect(getDisplayName({})).toBe('Usuário sem nome');
    expect(getDisplayName({ profile: {} })).toBe('Usuário sem nome');
  });
});
