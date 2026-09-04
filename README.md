# Dev Jr Training

Ambiente progressivo para praticar testes técnicos de Desenvolvedor e Software Engineer Júnior. O foco é resolver, testar, depurar, explicar e revisar código — inclusive código assistido por IA.

## Começo rápido

```powershell
npm install
npm test
npm run typecheck
```

`npm test` valida a infraestrutura usando soluções de referência separadas. Para avaliar sua tentativa, use o ID do exercício:

```powershell
npm run test:exercise -- ex001
npm run test:category -- 02-javascript
```

Leia primeiro o `README.md` do exercício e implemente somente no arquivo indicado. Registre a tentativa em `progress/progress.json` após concluí-la.

## Estrutura

* `training/`: enunciados, sua área de solução, testes e metadados.
* `references/`: soluções de referência usadas pela validação da infraestrutura; não consultar antes de tentar o exercício.
* `progress/`: registro simples de evolução.
* `learning/`: roadmap, materiais, checklists e registro curto de estudo.
* `simulations/`: espaço preparado para simulados futuros.
* `docs/`: contexto, decisões, regras e guias de operação.

Consulte [a arquitetura](docs/architecture.md), [o guia de exercícios](docs/exercises.md), a [trilha de aprendizagem](learning/README.md) e [as regras para agentes](AGENTS.md).
