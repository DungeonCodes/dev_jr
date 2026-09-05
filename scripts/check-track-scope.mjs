import { existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';

const args = process.argv.slice(2);
const index = args.indexOf('--track');
const trackId = args[index + 1];
const allowGovernance = args.includes('--allow-governance');
if (!trackId) { console.error('Uso: node scripts/check-track-scope.mjs --track <track_id> [--allow-governance]'); process.exit(1); }
const root = process.cwd();
const tracked = execFileSync('git', ['ls-files', 'tracks'], { cwd: root, encoding: 'utf8' }).split(/\r?\n/);
const untracked = execFileSync('git', ['ls-files', '--others', '--exclude-standard', 'tracks'], { cwd: root, encoding: 'utf8' }).split(/\r?\n/);
const paths = [...tracked, ...untracked].filter((path) => path.endsWith('/TRACK.json'));
const contractPath = paths.find((path) => JSON.parse(readFileSync(resolve(root, path), 'utf8')).track_id === trackId);
if (!contractPath || !existsSync(resolve(root, contractPath))) { console.error(`Contrato não encontrado: ${trackId}`); process.exit(1); }
const contract = JSON.parse(readFileSync(resolve(root, contractPath), 'utf8'));
const command = (gitArgs) => execFileSync('git', gitArgs, { cwd: root, encoding: 'utf8' }).split(/\r?\n/).filter(Boolean);
const changed = new Set([...command(['diff', '--name-only']), ...command(['diff', '--cached', '--name-only']), ...command(['ls-files', '--others', '--exclude-standard'])]);
const governance = new Set(['AGENTS.md', 'README.md', 'tracks/README.md', 'tracks/career/junior-developer/TRACK.json', 'scripts/check-track-scope.mjs']);
const matches = (file, pattern) => pattern.endsWith('/**') ? file.startsWith(pattern.slice(0, -2)) : file === pattern;
const outside = [...changed].filter((file) => !contract.allowed_write.some((pattern) => matches(file, pattern)) && !(allowGovernance && governance.has(file)));
if (outside.length) { console.error(`FALHA: ${trackId} possui arquivos fora do escopo:`); outside.forEach((file) => console.error(`- ${file}`)); process.exit(1); }
console.log(`PASS: ${trackId}; ${changed.size} arquivo(s) verificado(s) dentro do escopo autorizado.`);
