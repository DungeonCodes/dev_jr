import { existsSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const [mode, value] = process.argv.slice(2);
const root = process.cwd();
const registry = JSON.parse(readFileSync(resolve(root, 'training/exercises.json'), 'utf8'));
let exercises = registry.exercises;
let sourceRoot = 'training';

if (mode === '--references') {
  sourceRoot = 'references';
} else if (mode === '--exercise') {
  exercises = exercises.filter((exercise) => exercise.id === value);
} else if (mode === '--category') {
  exercises = exercises.filter((exercise) => exercise.category === value);
} else {
  console.error('Uso: --references | --exercise <id> | --category <categoria>');
  process.exit(1);
}

if (exercises.length === 0) {
  console.error(`Nenhum exercício encontrado para: ${value ?? mode}`);
  process.exit(1);
}

const testFiles = exercises.map((exercise) => resolve(root, exercise.testFile));
const vitest = resolve(root, 'node_modules/vitest/vitest.mjs');
if (!existsSync(vitest)) {
  console.error('Dependências ausentes. Execute: npm install');
  process.exit(1);
}

const result = spawnSync(process.execPath, [vitest, 'run', ...testFiles], {
  cwd: root,
  env: { ...process.env, SOLUTION_ROOT: sourceRoot },
  stdio: 'inherit',
});
process.exit(result.status ?? 1);
