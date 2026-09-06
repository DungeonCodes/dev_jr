# Trilhas de aprendizagem

`tracks/` é o registro canônico de escopo. Cada trilha possui um `TRACK.json` com identidade, objetivo, caminhos autorizados e comandos de validação.

- `career-junior-developer`: trilha legada Dev Jr; os materiais continuam em `training/`, `learning/`, `references/`, `progress/`, `simulations/` e `docs/`, sem migração destrutiva.
- `university-univesp-com510-redes-neurais`: trilha acadêmica isolada em `tracks/university/univesp/ciencia-de-dados/com510-redes-neurais/`.

```powershell
node scripts/check-track-scope.mjs --track university-univesp-com510-redes-neurais
```

Em tarefa estrutural explicitamente autorizada, `--allow-governance` permite somente arquivos centrais enumerados pelo verificador; nunca conteúdo de outra trilha.

Todas as trilhas usam a metodologia comum em [`docs/pedagogy/active-learning.md`](../docs/pedagogy/active-learning.md). Registros de respostas conceituais e filas de revisão permanecem no diretório `progress/` da respectiva trilha.
