import { describe, expect, it } from 'vitest';
import { loadAnswer } from '../../test-utils/load-solution.js';
const query = await loadAnswer(import.meta.url, 'query.sql');
const normalized = query.replace(/--[^\n]*/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
describe('EX005', () => {
  it('seleciona somente id e name de users', () => expect(normalized).toMatch(/^select\s+id\s*,\s*name\s+from\s+users\b/));
  it('filtra registros ativos', () => expect(normalized).toMatch(/\bwhere\s+active\s*=\s*true\b/));
});
