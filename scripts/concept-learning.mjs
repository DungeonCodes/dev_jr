import { readFileSync } from 'node:fs';

const [command, file] = process.argv.slice(2);
if (!['validate', 'summary', 'review'].includes(command) || !file) {
  console.error('Uso: node scripts/concept-learning.mjs <validate|summary|review> <arquivo> [fila-de-revisao]');
  process.exit(1);
}

const states = new Set(['not-seen', 'introduced', 'partial', 'consolidated', 'review-needed']);
const assessments = new Set(['correct', 'partial', 'incorrect']);
const errorTypes = new Set(['terminology', 'conceptual', 'logic', 'implementation', 'interpretation', 'memory', 'incomplete-answer']);
const aiModes = new Set(['off', 'review', 'assisted']);

function load(path) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (error) {
    console.error(`JSON inválido em ${path}: ${error.message}`);
    process.exit(1);
  }
}

function validDate(value, dateOnly = false) {
  return typeof value === 'string' && (dateOnly ? /^\d{4}-\d{2}-\d{2}$/.test(value) : !Number.isNaN(Date.parse(value)));
}

function validateAttempts(data, label) {
  const errors = [];
  if (data?.schema_version !== '1.0' || !Array.isArray(data?.attempts)) return [`${label}: esperado schema_version "1.0" e array attempts.`];
  const fields = ['concept_id', 'topic', 'question', 'student_answer', 'assessment', 'error_type', 'feedback', 'retry_question', 'retry_answer', 'final_state', 'date', 'ai_mode'];
  data.attempts.forEach((item, index) => {
    fields.forEach((field) => { if (!(field in item)) errors.push(`${label}: attempts[${index}].${field} ausente.`); });
    if (typeof item.concept_id !== 'string' || !item.concept_id) errors.push(`${label}: attempts[${index}].concept_id inválido.`);
    if (typeof item.topic !== 'string' || !item.topic) errors.push(`${label}: attempts[${index}].topic inválido.`);
    if (typeof item.question !== 'string' || !item.question) errors.push(`${label}: attempts[${index}].question inválida.`);
    if (!assessments.has(item.assessment)) errors.push(`${label}: attempts[${index}].assessment inválido.`);
    if (item.error_type !== null && !errorTypes.has(item.error_type)) errors.push(`${label}: attempts[${index}].error_type inválido.`);
    if (!states.has(item.final_state)) errors.push(`${label}: attempts[${index}].final_state inválido.`);
    if (!validDate(item.date)) errors.push(`${label}: attempts[${index}].date deve ser ISO 8601.`);
    if (!aiModes.has(item.ai_mode)) errors.push(`${label}: attempts[${index}].ai_mode inválido.`);
  });
  return errors;
}

function validateQueue(data, label) {
  const errors = [];
  if (data?.schema_version !== '1.0' || !Array.isArray(data?.review_queue)) return [`${label}: esperado schema_version "1.0" e array review_queue.`];
  data.review_queue.forEach((item, index) => {
    if (typeof item.concept_id !== 'string' || !item.concept_id) errors.push(`${label}: review_queue[${index}].concept_id inválido.`);
    if (typeof item.reason !== 'string' || !item.reason) errors.push(`${label}: review_queue[${index}].reason inválido.`);
    if (!validDate(item.last_attempt)) errors.push(`${label}: review_queue[${index}].last_attempt deve ser ISO 8601.`);
    if (!validDate(item.recommended_revisit, true)) errors.push(`${label}: review_queue[${index}].recommended_revisit deve ser YYYY-MM-DD.`);
  });
  return errors;
}

const data = load(file);
if (command === 'validate') {
  const queueFile = process.argv[4];
  const errors = validateAttempts(data, file);
  if (queueFile) errors.push(...validateQueue(load(queueFile), queueFile));
  if (errors.length) { errors.forEach((error) => console.error(error)); process.exit(1); }
  console.log(`PASS: ${file}${queueFile ? ` e ${queueFile}` : ''} seguem o schema conceitual.`);
} else if (command === 'review') {
  const errors = validateQueue(data, file);
  if (errors.length) { errors.forEach((error) => console.error(error)); process.exit(1); }
  if (!data.review_queue.length) console.log('Fila de revisão vazia.');
  else data.review_queue.forEach((item) => console.log(`${item.recommended_revisit}\t${item.concept_id}\t${item.reason}`));
} else {
  const errors = validateAttempts(data, file);
  if (errors.length) { errors.forEach((error) => console.error(error)); process.exit(1); }
  const latest = new Map();
  const attemptsByConcept = new Map();
  const recurringErrors = new Map();
  data.attempts.forEach((item) => {
    latest.set(item.concept_id, item);
    attemptsByConcept.set(item.concept_id, (attemptsByConcept.get(item.concept_id) ?? 0) + 1);
    if (item.error_type) recurringErrors.set(item.error_type, (recurringErrors.get(item.error_type) ?? 0) + 1);
  });
  const counts = Object.fromEntries([...states].map((state) => [state, 0]));
  latest.forEach((item) => { counts[item.final_state] += 1; });
  const seen = latest.size;
  console.log(JSON.stringify({
    concepts_seen: seen,
    consolidated: counts.consolidated,
    partial: counts.partial,
    review_needed: counts['review-needed'],
    introduced: counts.introduced,
    not_seen: counts['not-seen'],
    consolidation_rate: seen ? counts.consolidated / seen : 0,
    attempts_by_concept: Object.fromEntries(attemptsByConcept),
    recurring_errors: Object.fromEntries(recurringErrors)
  }, null, 2));
}
