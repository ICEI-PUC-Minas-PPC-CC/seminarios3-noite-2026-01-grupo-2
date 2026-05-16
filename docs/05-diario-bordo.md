# 05 — Diário de Bordo do Grupo

> **Grupo:** *Grupo 2*  
> **Aplicação:** *VoxScript*

---

> **Importante:** Mantenha este diário atualizado ao longo do semestre. Ele será a base para o cronograma do relatório de atividades no APC. Registre **todas** as atividades: reuniões com a comunidade, sessões de desenvolvimento, testes, decisões técnicas, etc.

---

## Registro de Atividades

### Semana 01 — 18/02/2026 a 25/02/2026

**O que foi feito:**
Formação da dupla de trabalho e primeiras reuniões de brainstorming para definição do escopo do projeto extensionista. Pesquisa de instituições locais que poderiam se beneficiar de soluções tecnológicas de acessibilidade.

**Quem participou:**
Gabriel Araújo Bernardes e Wagner Oliveira Claudiano.

**Decisões técnicas tomadas:**
Foco em tecnologias web (HTML, CSS, JS) para garantir facilidade de acesso (sem necessidade de instalação de aplicativos).

**Próximos passos:**
Entrar em contato com o CMAEE Dr. Tarso de Coimbra para agendar uma reunião de levantamento de demandas.

---

### Semana 02 — 26/02/2026 a 06/03/2026

**O que foi feito:**
Reunião com a equipe do CMAEE Dr. Tarso de Coimbra. Levantamento das necessidades de alunos com deficiência auditiva durante as aulas. Identificação da barreira de comunicação quando o professor fala rapidamente.

**Quem participou:**
Gabriel Araújo Bernardes e Wagner Oliveira Claudiano.

**Decisões técnicas tomadas:**
O software será focado em reconhecimento de voz em tempo real (Speech-to-Text) acoplado a um tradutor virtual de Libras.

**Próximos passos:**
Estruturar o Documento de Requisitos e iniciar a prototipação da interface.

---

### Semana 03 e 04 — 06/03/2026 a 21/03/2026

**O que foi feito:**
Preenchimento do documento de requisitos. Criação dos wireframes da interface, priorizando botões grandes, alto contraste e uma área de leitura clara (design focado em acessibilidade visual).

**Quem participou:**
Gabriel Araújo Bernardes e Wagner Oliveira Claudiano.

**Decisões técnicas tomadas:**
Adoção do framework Bootstrap 5 para acelerar o desenvolvimento do front-end e garantir responsividade. 

**Próximos passos:**
Iniciar a codificação (Sprint 1) do Front-end.

---

### Semana 05 e 06 — 21/03/2026 a 01/04/2026

**O que foi feito:**
Desenvolvimento da interface principal e implementação da `Web Speech API` nativa do navegador para capturar o áudio do microfone e gerar a transcrição bruta na tela.

**Quem participou:**
Wagner Oliveira Claudiano.

**Decisões técnicas tomadas:**
Uso do JavaScript puro (Vanilla JS) para gerenciar o estado da gravação, evitando o peso de frameworks complexos nesta fase do MVP.

**Próximos passos:**
Validar o reconhecimento de voz com a comunidade.

---

### Semana 07 e 08 — 02/04/2026 a 15/04/2026

**O que foi feito:**
Validação inicial do protótipo funcional. Identificamos que a "Web Speech API" gerava textos sem pontuação (sem vírgulas ou pontos de interrogação), o que prejudicava a leitura e a posterior tradução para Libras. Início da implementação do back-end.

**Quem participou:**
Gabriel Araújo Bernardes (Validação) e Wagner Oliveira Claudiano (Desenvolvimento).

**Decisões técnicas tomadas:**
**Pivotagem de Arquitetura:** Descartamos o uso de banco de dados e focamos em Processamento de Linguagem Natural (PLN). Decidimos criar um Back-end Serverless em Node.js utilizando a API do Google Gemini para pontuar o texto automaticamente antes de exibi-lo.

**Próximos passos:**
Integrar a IA com o VLibras e criar redundância de código.

---

### Semana 09 e 10 — 16/04/2026 a 29/04/2026

**O que foi feito:**
Integração do widget do VLibras. Resolução do conflito do DOM (o VLibras não lia a tag `textarea`, então alteramos para uma `div contenteditable`). Implementação do comando de voz hands-free ("Vox, apague o texto"). Construção da "Tripla Redundância" para evitar quedas no dia da apresentação.

**Quem participou:**
Wagner Oliveira Claudiano (Código) e Gabriel Araújo Bernardes (Testes).

**Decisões técnicas tomadas:**
O código agora tenta acionar a Vercel; se falhar, tenta a API Direta; se falhar, aciona um motor heurístico offline de pontuação local baseado em Regex.

**Próximos passos:**
Deploy na plataforma Vercel.

---

### Semana 11 e 12 — 30/04/2026 a 13/05/2026

**O que foi feito:**
Hospedagem unificada do Front-end e Back-end Serverless na Vercel (`voxscript.vercel.app`). Testes exaustivos de estresse (falha de rede, bloqueios de permissão de microfone). 

**Quem participou:**
Gabriel Araújo Bernardes e Wagner Oliveira Claudiano.

**Decisões técnicas tomadas:**
Garantia de que a aplicação não guarda dados (Privacy by Design), operando 100% em memória para conformidade com a proteção de dados de menores no ambiente escolar.

**Próximos passos:**
Apresentação e entrega presencial.

---

## Registro da Entrega Presencial

**Data:** 
**Local:** 
**Horário:**   
**Participantes do grupo presentes:** Gabriel Araújo Bernardes e Wagner Oliveira Claudiano.  
**Nº de participantes da comunidade:** 

### Descrição da entrega



### Feedback da comunidade



### Lições aprendidas

**O que deu certo:** .

**O que faríamos diferente:** 
