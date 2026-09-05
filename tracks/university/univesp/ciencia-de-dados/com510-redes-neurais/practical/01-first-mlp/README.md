# PRACTICAL 01 — FIRST MLP

Objetivo: conduzir um fluxo completo de classificação binária com uma MLP pequena, do dataset ao registro de experimentos. `AI_MODE=off`: tente cada checkpoint antes de pedir revisão.

Arquivos de trabalho:

- `src/first_mlp.py`: sua tentativa.
- `tests/test_first_mlp.py`: validações comportamentais.
- `results/experiment-log.md`: registro dos experimentos.

## CHECKPOINT 1 — DATASET

### OBJETIVO

Carregar um dataset binário didático e separar features de target.

### TAREFA

Em `load_dataset`, carregue Breast Cancer Wisconsin, separe `X` e `y`, e inspecione os shapes, a quantidade de exemplos e a quantidade de features.

### COMO VALIDAR

Execute somente o teste deste checkpoint. Ele deve confirmar que features e target têm formatos compatíveis e não estão vazios.

### DOCUMENTAÇÃO/API QUE POSSO CONSULTAR

`load_breast_cancer`

### PERGUNTAS DE REFLEXÃO

O que cada linha de `X` representa? Por que `y` tem uma dimensão diferente de `X`?

## CHECKPOINT 2 — TRAIN / TEST

### OBJETIVO

Separar dados de treino e teste de forma reproduzível.

### TAREFA

Em `split_train_test`, separe features e target, defina um `random_state` e confira os quatro shapes produzidos.

### COMO VALIDAR

O teste deve confirmar que treino e teste não estão vazios, mantêm o número de features e recompõem a quantidade original de exemplos.

### DOCUMENTAÇÃO/API QUE POSSO CONSULTAR

`train_test_split`

### PERGUNTAS DE REFLEXÃO

Qual o papel do `random_state`? Por que o target precisa ser separado junto com as features?

## CHECKPOINT 3 — PREPROCESSAMENTO

### OBJETIVO

Padronizar as features sem vazar informação do teste para o treino.

### TAREFA

Em `standardize_features`, ajuste o scaler somente com o conjunto adequado, transforme treino e teste e inspecione os resultados.

### COMO VALIDAR

O teste deve confirmar que os formatos foram preservados e que os valores transformados são finitos, sem `NaN`.

### DOCUMENTAÇÃO/API QUE POSSO CONSULTAR

`StandardScaler`

### PERGUNTAS DE REFLEXÃO

Em quais dados o scaler deve aprender seus parâmetros? O que poderia acontecer se ele visse o conjunto de teste antes?

## CHECKPOINT 4 — PRIMEIRA MLP

### OBJETIVO

Criar e treinar uma MLP pequena e reproduzível.

### TAREFA

Em `create_model`, defina uma arquitetura simples e um `random_state`. Em `train_model`, treine o modelo com os dados padronizados.

### COMO VALIDAR

O teste deve confirmar que o modelo treinado disponibiliza previsões para o conjunto de teste.

### DOCUMENTAÇÃO/API QUE POSSO CONSULTAR

`MLPClassifier`

### PERGUNTAS DE REFLEXÃO

Como você descreve a arquitetura escolhida? Que configuração pretende manter fixa para comparar experiências depois?

## CHECKPOINT 5 — PREDIÇÃO

### OBJETIVO

Gerar previsões para exemplos que ficaram fora do treino.

### TAREFA

Em `make_predictions`, gere as previsões usando o conjunto de teste padronizado.

### COMO VALIDAR

O teste deve confirmar que a saída tem uma previsão por exemplo de teste.

### DOCUMENTAÇÃO/API QUE POSSO CONSULTAR

`MLPClassifier.predict`

### PERGUNTAS DE REFLEXÃO

Por que as previsões devem ser produzidas sobre dados que não participaram do treino?

## CHECKPOINT 6 — AVALIAÇÃO

### OBJETIVO

Medir o resultado das previsões com métricas de classificação.

### TAREFA

Em `evaluate_predictions`, calcule accuracy e confusion matrix para target e previsões do teste.

### COMO VALIDAR

O teste deve confirmar que accuracy está entre zero e um e que a matriz de confusão tem formato válido para as classes observadas.

### DOCUMENTAÇÃO/API QUE POSSO CONSULTAR

`accuracy_score`; `confusion_matrix`

### PERGUNTAS DE REFLEXÃO

Que tipo de erro aparece fora da diagonal da matriz? Accuracy sozinha descreve esse erro com detalhe suficiente?

## CHECKPOINT 7 — EXPERIMENTO

### OBJETIVO

Comparar arquiteturas sem antecipar qual delas terá o melhor resultado.

### TAREFA

Teste pelo menos três arquiteturas: uma camada pequena, duas camadas e duas camadas maiores. Registre arquitetura, parâmetros, accuracy e observações em `results/experiment-log.md`.

### COMO VALIDAR

Verifique se há ao menos três registros completos e se cada um permite reproduzir a comparação.

### DOCUMENTAÇÃO/API QUE POSSO CONSULTAR

`MLPClassifier`

### PERGUNTAS DE REFLEXÃO

Qual mudança de arquitetura pareceu ajudar ou piorar? Sua conclusão é sustentada por quais resultados?
