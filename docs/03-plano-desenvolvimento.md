# 03 — Plano e Cronograma de Desenvolvimento

> **Grupo:** Grupo 2  
> **Aplicação:** VoxScript

---

## 1. Divisão de Tarefas

| Integrante | Responsabilidades principais |
| ----------- | ------------------------------ |
| Gabriel Araújo Bernardes | Documentação, testes de usabilidade, contato com a comunidade, validações e relatórios. |
| Wagner Oliveira Claudiano | Arquitetura Full-Stack: Front-end (HTML/CSS/JS), Back-end Serverless (Node.js), integração de IA (Gemini API), Web Speech API e VLibras. |

## 2. Cronograma de Desenvolvimento

| Semana | Período (dd/MM à dd/MM) | Atividade planejada | Responsável | Status |
| :------: | --------- | -------------------- | -----------: | :------: |
| 1 | 18/02 à 25/02 | Formação do grupo | Todos | concluído |
| 2 | 26/02 à 06/03 | Contato com comunidade e Levantamento de demandas | Todos | concluído |
| 3 | 06/03 à 21/03 | Definição de requisitos | Todos | concluído |
| 4 | 11/03 à 21/03 | Prototipação / wireframes | Wagner | concluído |
| 5 | 21/03 à 25/03 | Desenvolvimento — Sprint 1 (Front-end base) | Wagner | concluído |
| 6 | 26/03 à 01/04 | Desenvolvimento — Sprint 1 (Captura de Voz) | Wagner | concluído |
| 7 | 02/04 à 08/04 | Validação com a comunidade | Gabriel | concluído |
| 8 | 09/04 à 15/04 | Desenvolvimento — Sprint 2 (Back-end Serverless e API IA) | Wagner | concluído |
| 9 | 16/04 à 22/04 | Desenvolvimento — Sprint 2 (Integração VLibras e NLP) | Wagner | concluído |
| 10 | 23/04 à 29/04 | Testes e ajustes (Tripla Redundância) | Gabriel, Wagner | concluído |
| 11 | 30/04 à 06/05 | Deploy / hospedagem na Vercel | Wagner | concluído |
| 12 | 07/05 à 13/05 | Validação final com a comunidade | Gabriel | concluído |
| 13 | 14/05 à 20/05 | **Entrega presencial** | Todos | iniciado |
| 14 | 21/05 à 27/05 | Preenchimento dos relatórios APC | Todos | não iniciado |

> Ajuste o cronograma conforme o calendário do semestre e os feriados.

## 3. Marcos (Milestones)

| Marco | Data prevista | Critério de conclusão |
| ------- | :------------: | ---------------------- |
| Demandas levantadas | 06/03/2026 | Registro de contato com a comunidade |
| Requisitos definidos | 21/03/2026 | Documento `02-documento-requisitos.md` preenchido |
| Protótipo aprovado | 21/03/2026 | Wireframes validados com a comunidade |
| MVP funcional | 01/04/2026 | Funcionalidades mínimas operacionais (Voz e LIBRAS) |
| Deploy realizado | 06/05/2026 | Aplicação acessível pela Internet (Vercel) |
| Entrega presencial | 20/05/2026 | Software apresentado à comunidade |
| Relatórios APC | 27/05/2026 | Relatório e autoavaliação preenchidos |

## 4. Estratégia de Desenvolvimento

### Ambiente de desenvolvimento

<ul>
  <li> <strong>Editor de código:</strong> VS Code</li>
  <li> <strong>Controle de versão:</strong> Git + GitHub (branch main para produção, relatórios em pastas organizadas)</li>
  <li> <strong>Ferramentas e Serviços:</strong> Google AI Studio (Gemini 1.5 Flash), Web Speech API nativa, VLibras API.</li>
</ul>

(O projeto dispensou o uso de bancos de dados como Firebase devido à natureza em tempo real da transcrição, focando em processamento ágil via memória e Serverless.)

### Estratégia de testes

<ul>
  <li> Testes manuais de usabilidade com a comunidade (Sprint 1 e validações – Gabriel).</li>
  <li> Testes de latência de Processamento de Linguagem Natural e queda de rede (verificação da redundância offline – Wagner).</li>
  <li> Testes de acessibilidade (ativação correta da janela do VLibras e formatação do texto – Wagner/Gabriel).</li>
</ul>

### Estratégia de deploy

<ul>
  <li> <strong>Hospedagem unificada (Front-end e Back-end):</strong> Vercel.</li>
  <li> <strong>Arquitetura:</strong> Arquivos estáticos servidos rapidamente combinados com rotas Serverless (`/api`) executando Node.js.</li>
  <li> <strong>Domínio:</strong> Subdomínio gratuito da Vercel (`.vercel.app`).</li>
</ul>

## 5. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
| ------- | :------------: | :-------: | ---------- |
| Queda de internet na entrega | Média | Alto | Implementada Arquitetura de Tripla Redundância com motor gramatical offline em JS nativo (Wagner). |
| Bloqueios de API (CORS) | Alta | Médio | Criação de Back-end Serverless próprio atuando como proxy seguro para a API do Gemini. |
| Comunidade indisponível para reuniões | Baixa | Médio | Gabriel agenda com antecedência e mantém contato por e-mail/WhatsApp. |
| Dificuldade na leitura pelo VLibras | Baixa | Alto | Conversão das tags HTML de entrada para divs editáveis otimizadas para o motor de libras (Wagner). |

## 6. Comunicação do Grupo

| Canal | Finalidade |
| ------- | ----------- |
| WhatsApp | Comunicação diária |
| GitHub | Controle de tarefas e versionamento de código e documentação |
| Reuniões semanais (segunda-feira, 19h) | Alinhamento do grupo e revisão das entregas da disciplina |