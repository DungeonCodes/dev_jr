# UNIVESP — Ciência de Dados — COM510 Redes Neurais

Trilha prática da disciplina, separada da preparação Dev Jr. O objetivo não é espelhar o Moodle: cada semana conecta conteúdo, implementação em Python, execução, testes, debugging, explicação técnica e aplicação real.

1. Leia [`syllabus/observed-curriculum.md`](syllabus/observed-curriculum.md).
2. Abra a semana prioritária em [`study/roadmap.md`](study/roadmap.md) e faça uma tentativa sem solução antecipada.
3. Registre a sessão em [`progress/progress.json`](progress/progress.json), usando `AI_MODE` `off`, `review` ou `assisted`.

Lógica testável fica em `exercises/` ou `labs/`; notebooks, quando houver, ficam somente para exploração/visualização.

```powershell
node scripts/check-track-scope.mjs --track university-univesp-com510-redes-neurais
python -m pytest tracks/university/univesp/ciencia-de-dados/com510-redes-neurais/tests
```

O segundo comando será habilitado quando Python e pytest funcionarem. Não instale frameworks pesados sem gate explícito.
