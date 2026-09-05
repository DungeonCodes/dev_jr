# Roadmap prático semanal

Em toda semana: estudar o conteúdo observado, tentar implementar, executar validação, depurar, explicar tecnicamente e registrar em `progress/progress.json`. Este é um backlog — não contém soluções ou respostas avaliativas.

| Semana | O que estudar / explicar | Implementar e exercícios | Lab | Validação e reflexão |
| --- | --- | --- | --- | --- |
| 1 — título oficial: *Introdução às Redes Neurais Artificiais* | Conceito de rede neural, neurônio, aprendizagem e representação do conhecimento. Explicar entrada, peso, soma ponderada, bias, ativação e saída. | Neurônio simples com Python/NumPy; ativação básica; variar entradas e descrever efeito. | Neurônio artificial do zero. | Casos numéricos pequenos calculados manualmente; testar ativações/dimensões. O que é aprendido e qual limite tem um neurônio isolado? |
| 2 — título oficial: *Arquiteturas de redes, preparação dos dados e modelos lineares* | Grafos, realimentação, treino/validação/teste e pré-processamento. Explicar feature, target, escala e data leakage. | Dataset pequeno; separar features/target; normalizar usando só treino; modelo linear simples. | Pipeline mínimo de preparação de dados. | Conferir tamanhos, semente e ausência de leakage. Que hipótese linear é assumida e como verificar generalização? |
| 3 — `internal_label`: *MLP e introdução a redes profundas* (título oficial não informado) | MLP, profundidade, forward pass e não linearidade. Explicar por que XOR não cabe em uma única fronteira linear. | Perceptron, forward pass e comparação entre uma/múltiplas camadas. | Resolver XOR com rede multicamada. | Tabela-verdade, formatos das matrizes e entradas conhecidas. Onde os pesos agem e por que ativação importa? |
| 4 — título oficial: *Otimização, treinamento e regularização em redes MLP* | Generalização, validação cruzada, arquitetura, under/overfitting, convergência e regularização. | Comparar arquiteturas e curvas de loss; classificar cenários de ajuste insuficiente/excessivo. | Provocar e diagnosticar overfitting. | Comparar métricas treino/validação com configuração registrada. Que evidência apoia a conclusão? |
| 5 — título oficial: *Introdução às redes de funções de base radial (RBF) e aos mapas auto-organizáveis (SOM)* | RBF, distância a centros, SOM e sua avaliação. Explicar centros e organização dos dados. | Experimento RBF pequeno; conceito de SOM e visualização de distâncias. | Mapa auto-organizável sobre dataset pequeno. | Conferir dimensões e atualização planejada. Que estrutura o SOM preserva e como avaliá-la? |
| 6 — `internal_label`: *Sistemas dinâmicos, Hopfield e Boltzmann* (`Tema_da_Semana_6` é placeholder) | Sistemas dinâmicos, atratores, Hopfield, memória associativa e energia; Boltzmann/RBM ficam conceituais. | Padrões binários, ruído, recuperação, parada e observação de energia. | Memória associativa com rede de Hopfield. | Testar padrões conhecidos e ruído controlado. Quais são entrada, saída, pesos e atratores espúrios? |
| 7 — `internal_label`: *RNN, BPTT e sequências* (`Tema_da_Semana_7` é placeholder) | Recorrência, estado oculto, BPTT, encoder-decoder e dependência temporal. | Descrever atualização recorrente; experimento simples de predição sem framework pesado. | Predição de sequência simples. | Separar dados no tempo e comparar baseline. Que passado o estado carrega e como testar generalização temporal? |

## Ordem inicial

1. Semana 6 — deadline acadêmico em 2026-09-06 23:59.
2. Semana 7 — deadline acadêmico em 2026-09-11 23:59.
3. Semanas 1 a 5 — consolidação sem marcar conclusão sem evidência.
