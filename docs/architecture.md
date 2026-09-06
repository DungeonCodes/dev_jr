# Arquitetura do treinamento

## Princípios

Cada exercício separa enunciado, área de resposta, teste e metadados. As soluções oficiais ficam em `references/`, fora da área de resolução. Não há aplicação, banco de dados ou Docker nesta fase.

`learning/` fornece teoria curta, materiais e checklists; cada tópico aponta para exercícios existentes ou para sua categoria futura. `progress/progress.json` conserva tentativas e diagnóstico simples, sem dashboard ou banco.

`docs/pedagogy/` define a metodologia comum de aprendizagem ativa, seu template de sessão e o schema de registros conceituais. Cada trilha guarda as próprias tentativas e fila de revisão no seu diretório de progresso; não há banco, frontend ou conteúdo específico compartilhado.

## Categorias

`training/` usa numeração progressiva: `01-logica`, `02-javascript`, `03-typescript`, `04-http-rest`, `05-sql`, `06-node`, `07-react`, `08-nextjs`, `09-git-terminal`, `10-debugging`, `11-testing`, `12-auth`, `13-python`, `14-docker`, `15-ai-native`, `16-desafios-integrados` e `17-simulados`.

Categorias sem exercícios iniciais são preservadas por `.gitkeep` e recebem conteúdo conforme a evolução.

## Testes

Vitest é a única ferramenta de testes JavaScript/TypeScript. `npm test` executa todos os contratos com as referências; `npm run test:exercise -- <id>` executa a tentativa local; e `npm run test:category -- <categoria>` executa uma categoria.
