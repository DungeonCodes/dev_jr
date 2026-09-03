import { describe, expect, it, vi } from 'vitest';
import { loadSolution } from '../../test-utils/load-solution.js';
const { getProfileName } = await loadSolution<typeof import('./solution.js')>(import.meta.url);
describe('EX007', () => {
  it('aguarda o perfil e retorna seu nome', async () => {
    const fetchProfile = vi.fn().mockResolvedValue({ name: 'Bia' });
    await expect(getProfileName(fetchProfile)).resolves.toBe('Bia');
    expect(fetchProfile).toHaveBeenCalledOnce();
  });
  it('propaga falha do carregamento', async () => await expect(getProfileName(async () => { throw new Error('offline'); })).rejects.toThrow('offline'));
});
