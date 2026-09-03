# EX008 — Análise de código produzido por IA

Leia o código abaixo, aparentemente gerado por IA, e escreva sua análise em `response.md`.

```ts
async function createUser(request: Request) {
  const body = request.json();
  await db.query(`INSERT INTO users (email) VALUES ('${body.email}')`);
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
```

Explique o que ele tenta fazer, pelo menos três riscos ou falhas, hipóteses assumidas, como testá-lo e alterações recomendadas. Não implemente uma correção neste exercício.

Execute: `npm run test:exercise -- ex008`
