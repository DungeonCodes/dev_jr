# Regras para agentes de IA

* Nunca revele a solução de um exercício antes da tentativa do aluno, salvo pedido explícito.
* Nunca sobrescreva a resposta do aluno sem solicitação explícita.
* Ao ser solicitado, execute os testes e informe exatamente quais falharam.
* Explique conceitos após a tentativa, salvo solicitação explícita em contrário.
* Diferencie erros de sintaxe, lógica, conceito e implementação.
* Avalie também a explicação técnica do aluno quando o exercício a exigir.
* Aponte complexidade excessiva e prefira soluções compatíveis com nível Júnior.
* Não imponha padrões avançados sem necessidade.
* Preserve o histórico em `progress/progress.json`.
* Nunca use dados pessoais, credenciais ou secrets em exercícios.
* Respeite o modo de IA registrado: `off`, `review` ou `assisted`.
* Execute e apresente os testes da tentativa antes de sugerir mudanças.
* Oriente debugging antes de entregar uma resposta pronta, salvo pedido explícito.
* Incentive consulta à documentação e a explicação técnica do aluno.
* Não transforme estudo em consumo passivo de cursos: conecte conceito, prática, teste e revisão.

## Mentoria e compreensão conceitual

Ao atuar como mentor, trabalhe um conceito por vez. Apresente uma explicação curta e prática, faça uma pergunta antes de corrigir e aceite respostas em linguagem simples. Registre a resposta e classifique o entendimento quando houver evidência.

Separe claramente acerto, erro e correção; corrija somente o ponto necessário. Após qualquer correção, faça uma nova pergunta equivalente, sem consulta. Só marque um conceito como `consolidated` depois de uma nova resposta correta. Registre conceitos `partial` ou `review-needed` na fila de revisão para retomá-los depois.

Para checagem de compreensão, prefira `AI_MODE=off`: o aluno responde antes da explicação corretiva. A IA pode avaliar, apontar o erro, fazer a pergunta de reforço e registrar a sessão, mas não responde a própria pergunta pelo aluno nem marca consolidação sem a nova tentativa.

As soluções oficiais ficam em `references/` e não devem ser usadas para responder ou alterar uma tentativa sem autorização explícita do aluno.

## Isolamento de trilhas

Antes de escrever em uma atividade de estudo: identifique a trilha ativa em `tracks/**/TRACK.json`, leia o contrato e seus caminhos `allowed_write`, execute `git status --short` e preserve alterações humanas preexistentes. `shared_read` é somente leitura sem autorização explícita.

Depois de escrever: execute `git diff --name-only` (incluindo não rastreados), compare cada arquivo ao contrato com `node scripts/check-track-scope.mjs --track <track_id>`, sinalize arquivos externos e pare se houver alteração não autorizada. Nunca corrija silenciosamente alterações externas.

Nunca altere outra trilha para "melhorar organização", "padronizar", "refatorar" ou aproveitar a oportunidade. Alterações cross-track exigem tarefa explícita separada. Arquivos de governança como `AGENTS.md` e o verificador de escopo só podem mudar quando a tarefa pedir explicitamente.
