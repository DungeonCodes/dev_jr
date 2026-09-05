# Semana 6 — estudo dirigido: Hopfield

Este guia usa o `internal_label` **Sistemas dinâmicos, Hopfield e Boltzmann**. O título visível no Moodle era o placeholder `Tema_da_Semana_6`; portanto, não é tratado como título acadêmico oficial.

## Parte A — o problema

Uma memória comum recupera um dado a partir de um endereço: você pede a posição e recebe o conteúdo. Uma memória associativa parte de uma pista: apresenta um padrão parcial ou com ruído e tenta recuperar o padrão completo mais parecido que foi armazenado.

Uma rede pode exercer esse papel quando seu estado muda em resposta às conexões entre neurônios, até atingir uma configuração estável. Este comportamento é a ponte entre sistemas dinâmicos e memória.

## Parte B — memória associativa

- **Memória por endereço:** a posição identifica diretamente o conteúdo.
- **Memória associativa:** uma parte do próprio conteúdo é a chave de recuperação.

No lab, um padrão corrompido será a pista. O objetivo não é “descobrir” qualquer resposta, mas verificar se a dinâmica recupera um padrão que a rede já armazenou.

## Parte C — rede de Hopfield

Uma Hopfield simples tem neurônios com estados, conexões ponderadas e uma regra de atualização.

- **Neurônios:** as unidades do padrão.
- **Estados:** os valores atuais dessas unidades.
- **Pesos:** a força com que uma unidade influencia outra.
- **Conexões:** no modelo didático, os neurônios são conectados entre si.
- **Atualização:** um neurônio calcula a influência recebida e escolhe seu novo estado.
- **Convergência:** as atualizações deixam de mudar o estado, ou atingem o limite definido.
- **Padrão armazenado / recuperado:** o primeiro participa do treinamento; o segundo é o resultado após apresentar uma pista ruidosa.

## Parte D — atratores

Pense em uma bola solta sobre uma paisagem. O estado inicial é onde a bola começa; cada atualização é um movimento; um vale é um estado estável. Um **atrator** é esse estado para o qual várias condições iniciais próximas podem convergir. Um padrão armazenado idealmente se torna um atrator.

## Parte E — energia

A função de energia é uma maneira de atribuir um número a cada estado da rede. Neste primeiro contato, não é necessário derivá-la: a ideia importante é que atualizações adequadas tendem a mover a rede para estados de menor energia e mais estáveis. Ela ajuda a explicar por que a rede pode parar de mudar. Atualizações assíncronas são a forma clássica de preservar essa intuição no modelo simples.

## Parte F — limitações

Hopfield não é uma memória perfeita. A capacidade é limitada; padrões muito parecidos podem interferir; a dinâmica pode cair em mínimos espúrios; e um padrão ruidoso pode ser recuperado incorretamente. Por isso o lab precisa registrar tanto sucesso quanto falha.

## Parte G — Boltzmann e RBM

Uma Hopfield didática usa atualização determinística. Máquinas de Boltzmann introduzem comportamento probabilístico e são estudadas como modelos de distribuições. Uma **RBM** separa unidades visíveis (dados observados) de unidades ocultas (representações), com conexões restritas entre essas camadas. Nesta semana, Boltzmann/RBM são visão conceitual: não serão implementadas neste lab.

## Matemática mínima para o lab

O vetor de estado é `x = [x1, x2, ..., xn]`, com cada estado bipolar em `-1` ou `+1`. Os pesos ficam em uma matriz `W`.

Para o neurônio `i`, a influência recebida é:

`h_i = Σ(w_ij * x_j)`

Depois, o estado pode ser atualizado por `x_i = sign(h_i)`. Antes de programar, decida e documente o que sua implementação fará se `h_i` for zero.

No treinamento, a regra de Hebb combina padrões armazenados para reforçar pares de unidades que assumem estados compatíveis. Matematicamente, ela pode ser escrita como uma soma de produtos externos dos padrões, seguida de uma normalização escolhida. Você não precisa demonstrar a fórmula agora: use a documentação da atividade para relacionar a expressão à ideia de “reforçar associações”.

Em uma Hopfield simples, normalmente `w_ii = 0`: um neurônio não deve reforçar diretamente o próprio estado. A diagonal zerada também deixa mais clara a influência das outras unidades.

## Exemplo didático — não é o desafio do lab

Considere dois neurônios, estado inicial `[+1, +1]` e uma matriz simétrica com diagonal zero em que cada neurônio apoia o outro. A soma ponderada de cada unidade é positiva; aplicar `sign` preserva `[+1, +1]`. Esse é um exemplo de estado estável. Ele só ilustra estado, pesos, soma e estabilidade; o desafio usa outros padrões e exige que você escreva o treinamento e a recuperação.

## Antes de programar

Explique com suas palavras: qual é a pista de entrada, qual é a memória recuperada, o que é atualizado e o que contaria como evidência de convergência. Só então siga os checkpoints do lab.
