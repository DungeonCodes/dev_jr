# Aprendizagem ativa e reavaliação contínua

Esta é a metodologia padrão para todas as trilhas. Ela complementa exercícios e testes: teste aprovado demonstra comportamento do código; a sessão conceitual registra evidência de compreensão.

## Fluxo de uma sessão

1. Escolha **um** conceito e apresente uma explicação curta, ligada a uma situação prática.
2. Faça uma pergunta curta. O aluno responde antes de qualquer correção e pode usar linguagem simples.
3. Registre a resposta e classifique-a como `correct`, `partial` ou `incorrect`.
4. Quando necessário, separe **acerto**, **erro** e **correção**. Corrija somente o ponto que impede a compreensão.
5. Faça uma pergunta equivalente, com formulação ou exemplo diferente. Não forneça a resposta.
6. Só avance quando o conceito principal estiver correto e a pergunta de reforço tiver resposta correta sem consulta. Erro conceitual persistente impede o avanço.
7. Coloque conceitos `partial` ou `review-needed` na fila de revisão para uma sessão futura.

Evite aula longa antes da prática. Uma sessão curta segue o [template](session-template.md).

## Estados de compreensão

| Estado | Uso |
| --- | --- |
| `not-seen` | O conceito ainda não foi trabalhado. |
| `introduced` | O conceito foi apresentado, mas ainda não há evidência suficiente. |
| `partial` | A resposta mostrou compreensão parcial ou erro que precisa de reforço. |
| `consolidated` | A resposta de reforço foi correta sem consulta. |
| `review-needed` | Um conceito antes consolidado voltou a apresentar erro. |

`consolidated` não significa que o assunto nunca mais será revisado. Se houver erro posterior, o novo registro usa `review-needed` e entra na fila.

## Registro por trilha

Cada trilha possui `progress/concept-attempts.json` e `progress/review-queue.json`. Use o [schema](assessment-schema.json) para os dois arquivos. Acrescente uma entrada a `attempts` por sessão conceitual; não altere respostas já registradas. A tentativa mais recente de cada `concept_id` representa seu estado atual nas métricas.

Registre `error_type` quando aplicável: `terminology`, `conceptual`, `logic`, `implementation`, `interpretation`, `memory` ou `incomplete-answer`. `null` é adequado para uma resposta correta sem erro identificado.

Use o modo de IA da sessão. Para checagem de compreensão, prefira `off`: a IA pergunta e espera a resposta antes de avaliar. Em `review`, ela só revisa depois da tentativa; em `assisted`, registre que houve ajuda durante a sessão.

## Revisão e métricas

Preencha uma entrada em `review_queue` para cada conceito frágil, com o motivo, a última tentativa e uma data sugerida de retorno. Remova-a apenas depois de registrar uma nova tentativa consolidada.

Use os comandos abaixo; eles apenas leem e validam os arquivos, nunca geram respostas para o aluno:

```powershell
node scripts/concept-learning.mjs validate progress/concept-attempts.json progress/review-queue.json
node scripts/concept-learning.mjs summary progress/concept-attempts.json
node scripts/concept-learning.mjs review progress/review-queue.json
```

Substitua `progress/` pelo diretório de progresso da trilha em uso. `summary` mostra conceitos vistos, consolidados, parciais, que exigem revisão, tentativas por conceito, erros recorrentes e `consolidation_rate = consolidated / concepts_seen`.

Para reavaliar: execute `review`, selecione poucos itens da fila, apresente uma nova pergunta sem consulta, registre a tentativa e atualize o estado e a fila. O comando não fabrica pergunta ou resposta.

## Exemplo estrutural: COM510

Uma sequência inicial pode tratar `Dense / units / input_dim`, `ReLU`, `loss`, `optimizer`, `metrics`, `epochs`, `batch_size`, treino versus validação e overfitting. Isto é apenas uma ordem de conceitos; não representa histórico do aluno.

Para `Dense(units=5, input_dim=7)`, a primeira pergunta pode pedir a quantidade de neurônios. A pergunta de reforço pode perguntar quantas entradas cada neurônio recebe. O objetivo é diferenciar `units` de `input_dim`, e a consolidação depende da segunda resposta correta.
