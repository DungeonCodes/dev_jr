import { describe, expect, it } from 'vitest';
import { loadAnswer } from '../../test-utils/load-solution.js';
const response = await loadAnswer(import.meta.url, 'response.md');
describe('EX008', () => {
  it('contém todas as seções da análise', () => {
    for (const heading of ['O que o código tenta fazer', 'Riscos e falhas', 'Hipóteses assumidas', 'Como testar', 'Alterações recomendadas']) {
      expect(response).toContain(`# ${heading}`);
    }
  });
});
