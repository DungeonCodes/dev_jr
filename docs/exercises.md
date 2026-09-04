# Como trabalhar com exercícios

## Resolver

1. Abra o `README.md` e `metadata.json` do exercício.
2. Implemente apenas no arquivo de resposta indicado.
3. Execute `npm run test:exercise -- <id>`.
4. Registre a tentativa, tempo e `aiMode` em `progress/progress.json`.

## Explicação técnica

Depois de exercícios de implementação, debugging ou revisão, registre também: o que a solução faz, por que funciona, por que essa abordagem foi escolhida, entrada, saída, falhas possíveis, casos extremos, como testar e uma alternativa viável. Avalie solução, fundamento, debugging e explicação de 0 a 10; código aprovado sem explicação continua sendo uma lacuna.

## Criar um exercício

Crie uma pasta em uma categoria de `training/` contendo `README.md`, `metadata.json`, arquivo de resposta e teste automatizado quando aplicável. Adicione sua entrada em `training/exercises.json`. Mantenha a referência equivalente em `references/`, sem incluí-la no enunciado.

## Modos de IA

* `off`: resolvido sem IA.
* `review`: IA usada somente após a solução para revisão.
* `assisted`: IA usada durante a implementação.

## Avaliação

Os testes avaliam comportamento. Exercícios de explicação e revisão incluem rubricas no enunciado e requerem avaliação técnica adicional; passar em uma verificação estrutural não substitui essa avaliação.
