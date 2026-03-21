# 03 — Plano e Cronograma de Desenvolvimento

> **Grupo:** Krome Angels  
> **Aplicação:** VoxScript

---

## 1. Divisão de Tarefas

| Integrante | Responsabilidades principais |
| ----------- | ------------------------------ |
| Daniel Dias de Carvalho Santos | Back-end/integração (Firebase, API Google Speech-to-Text, VLibras)|
| Gabriel Araújo Bernardes | Documentação, testes, contato com a comunidade, validações |
| Wagner Oliveira Claudiano | Front-end (HTML/CSS/JS), prototipagem, ajustes de acessibilidade |

## 2. Cronograma de Desenvolvimento

| Semana | Período (dd/MM à dd/MM) | Atividade planejada | Responsável | Status |
| :------: | --------- | -------------------- | -----------: | :------: |
| 1 | 18/02 à 25/02 | Formação do grupo | Todos | iniciado |
| 2 | 26/02 à 06/03 | Contato com comunidade e Levantamento de demandas |Todos | concluído |
| 3 | 06/03 à 21/03 | Definição de requisitos | Todos | concluído |
| 4 | 11/03 à 21/03 | Prototipação / wireframes | Wagner | iniciado |
| 5 | 21/03 à 25/03 | Desenvolvimento — Sprint 1 | Wagner, Daniel | não iniciado |
| 6 | 26/03 à 01/04 | Desenvolvimento — Sprint 1 | Daniel | não iniciado |
| 7 | 02/04 à 08/04 | Validação com a comunidade | Gabriel | não iniciado |
| 8 | 09/04 à 15/04 | Desenvolvimento — Sprint 2 | Daniel | não iniciado |
| 9 | 16/04 à 22/04 | Desenvolvimento — Sprint 2 | Wagner | não iniciado |
| 10 | 23/04 à 29/04 | Testes e ajustes | Gabriel, Wagner | não iniciado |
| 11 | 30/04 à 06/05 | Deploy / hospedagem | Daniel | não iniciado |
| 12 | 07/05 à 13/05 | Validação final com a comunidade | Gabriel | não iniciado |
| 13 | 14/05 à 20/05 | **Entrega presencial** | Todos | não iniciado |
| 14 | 21/05 à 27/05 | Preenchimento dos relatórios APC | Todos | não iniciado |

> Ajuste o cronograma conforme o calendário do semestre e os feriados.

## 3. Marcos (Milestones)

| Marco | Data prevista | Critério de conclusão |
| ------- | :------------: | ---------------------- |
| Demandas levantadas | 06/03/2026 | Registro de contato com a comunidade |
| Requisitos definidos | 21/03/2026 | Documento `02-documento-requisitos.md` preenchido |
| Protótipo aprovado | 21/03/2026 | Wireframes validados com a comunidade |
| MVP funcional | 01/04/2026 | Funcionalidades mínimas operacionais |
| Deploy realizado | 06/05/2026 | Aplicação acessível pela Internet |
| Entrega presencial | 20/05/2026 | Software apresentado à comunidade |
| Relatórios APC | 27/05/2026 | Relatório e autoavaliação preenchidos |

## 4. Estratégia de Desenvolvimento

### Ambiente de desenvolvimento

| Editor de código: | VS Code |
| Controle de versão: | Git + GitHub (branch main para produção, dev para desenvolvimento, branches por feature) |
| Ferramentas: Figma (protótipo) ou desenho em folha, Firebase Console, Google Cloud Platform |

(Descreva o setup: editor de código, controle de versão, branches, etc.)

### Estratégia de testes

| Testes manuais de usabilidade com a comunidade | (sprint 1 e validações – Gabriel) |
| Testes de latência da transcrição | (cronometragem – Daniel) |
| Testes de acessibilidade | (verificador de contraste, navegação por teclado – Wagner) |

(Como o grupo vai testar a aplicação antes da entrega?)

### Estratégia de deploy

| Front-end: | Vercel (deploy contínuo via GitHub) |
| Back-end/Firebase: | Firebase Hosting + Firestore + Cloud Functions |
| Domínio: | Subdomínio gratuito (vercel.app) ou customizado se disponível |

(Onde e como a aplicação será hospedada?)

## 5. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
| ------- | :------------: | :-------: | ---------- |
| Atraso no cronograma | Média | Alto | Priorizar MVP (VLibras + transcrição); funcionalidades desejáveis postergadas |
| Dificuldade técnica inesperada | Média | Médio | Daniel (back-end) reserva tempo para estudo e prototipação antecipada |
| Comunidade indisponível para reuniões | Baixa | Médio | Gabriel agenda com antecedência e mantém contato por e-mail/WhatsApp |
| Problemas de infraestrutura no dia da entrega |  Baixa | Alto | Testar localmente; ter backup em notebook pessoal |

## 6. Comunicação do Grupo

| Canal | Finalidade |
| ------- | ----------- |
| WhatsApp | Comunicação diária |
| GitHub Issues / Projects | Controle de tarefas |
| Reuniões semanais (segunda-feira, 19h) | Alinhamento do grupo |
