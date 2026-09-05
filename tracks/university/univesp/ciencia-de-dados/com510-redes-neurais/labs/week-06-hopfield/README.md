# Lab: Memória associativa com rede de Hopfield

Status: pronto para a primeira tentativa. `AI_MODE=off`.

## START HERE

1. Ative o ambiente local: `& .\.venv\Scripts\Activate.ps1` a partir da raiz da COM510.
2. Abra `src/hopfield.py`.
3. Faça somente o **Checkpoint 1** e execute o teste relacionado.
4. Avance um checkpoint por vez; registre erros e decisões no progresso depois da tentativa.

## Comandos validados

Execute a partir da raiz do repositório:

```powershell
$com510 = 'tracks\university\univesp\ciencia-de-dados\com510-redes-neurais'
Set-Location $com510
& .\.venv\Scripts\Activate.ps1
python -m pytest tests
python -m pytest tests\test_week_06_hopfield.py
python -m pytest tests\test_week_06_hopfield.py -k checkpoint_1
```

O último comando é o teste do primeiro checkpoint. Ainda não existe exemplo manual executável: a primeira execução manual deve ser criada por você após implementar uma parte do desafio.

## Desafio em checkpoints

1. **Representação:** entender lista, `numpy.ndarray`, estados `-1/+1` e `shape`.
2. **Pesos iniciais:** criar e inspecionar `W`.
3. **Treinamento:** atualizar pesos a partir de padrões.
4. **Ruído:** fornecer um padrão semelhante a um armazenado, com bits alterados.
5. **Atualização:** calcular um novo estado.
6. **Convergência:** repetir até estabilizar ou chegar em `max_steps`.
7. **Recuperação:** verificar se o resultado corresponde a uma memória armazenada.

O arquivo editável tem assinaturas e TODOs, não uma solução. Os testes pulam apenas a parte que ainda lança `NotImplementedError`; após implementar um checkpoint, eles passam a revelar falhas de comportamento, não o algoritmo.

## Competências de desenvolvedor treinadas neste lab

Python, NumPy, arrays e matrizes, loops, funções/classes, leitura de `shape`, estados, debugging, testes e raciocínio algorítmico. Essa relação é apenas documental: nenhum conteúdo foi movido para a trilha Dev Jr.
