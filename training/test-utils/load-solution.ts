import { readFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, relative, resolve } from 'node:path';

function targetPath(testUrl: string, fileName: string): string {
  const testPath = fileURLToPath(testUrl);
  const repositoryRoot = resolve(dirname(testPath), '..', '..', '..');
  const trainingPath = relative(repositoryRoot, dirname(testPath));
  const sourceRoot = process.env.SOLUTION_ROOT ?? 'training';
  return resolve(repositoryRoot, trainingPath.replace(/^training/, sourceRoot), fileName);
}

export async function loadSolution<T>(testUrl: string): Promise<T> {
  return import(pathToFileURL(targetPath(testUrl, 'solution.ts')).href) as Promise<T>;
}

export async function loadAnswer(testUrl: string, fileName: string): Promise<string> {
  return readFile(targetPath(testUrl, fileName), 'utf8');
}
