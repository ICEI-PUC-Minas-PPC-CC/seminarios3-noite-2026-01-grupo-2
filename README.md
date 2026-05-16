# 💻 Seminários III — Projeto Extensionista

> **Disciplina:** Seminários III — PUC Minas  
> **Professor Responsável:** Harison Herman Silva  
> **Formato:** Sala de aula invertida (protagonismo dos alunos)

---

## 👥 Identificação do Grupo

| Campo | Informação |
| ------- | ----------- |
| **Nome do Grupo** | Grupo 2 |
| **Integrantes** | Gabriel de Araújo Bernardes, Wagner Oliveira Claudiano |
| **E-mail de contato** | gabrielaraujoojuara@gmail.com |
| **E-mail de contato** | wagneroliveira2395@gmail.com |
| **Comunidade parceira** | Tarso Coimbra |

---

## 🎯 Software a Ser Desenvolvido: VoxScript

O VoxScript é uma aplicação web de transcrição de voz para texto em tempo real projetada especificamente para promover a acessibilidade pedagógica e a inclusão de crianças e adolescentes com deficiência auditiva atendidos no CMAEE Dr. Tarso de Coimbra.

O objetivo do sistema é converter o fluxo de fala contínuo dos professores em uma interface visual de alta legibilidade. O grande diferencial do software é o seu motor de Processamento de Linguagem Natural (PLN): o texto bruto capturado pelo microfone passa por uma camada de Inteligência Artificial que analisa o contexto semântico e sintático para aplicar vírgulas, pontos de interrogação e letras maiúsculas corretamente. Em seguida, o texto estruturado alimenta de forma automatizada o widget do VLibras, permitindo que os estudantes acompanhem a explicação em sala de aula tanto pela leitura em português quanto pela Língua Brasileira de Sinais (LIBRAS) por meio de um avatar digital animado.

---

## 📁 Estrutura do Repositório

```cmd
├── README.md                              ← Este arquivo
├── docs/
│   ├── 01-termo-autorizacao.md         ← Termo de autorização e agendamento
│   ├── 02-documento-requisitos.md      ← Documento de requisitos do software
│   ├── 03-plano-desenvolvimento.md     ← Plano e cronograma de desenvolvimento
│   ├── 04-checklist-logistica.md       ← Checklist de preparação e logística
│   ├── 05-diario-bordo.md             ← Diário de bordo do grupo
│   └── 06-registro-contatos.md         ← Registro de contatos com a comunidade
├── src/                                   ← Código-fonte da aplicação
│   └── README.md                          ← Instruções de setup e execução
├── evidencias/
│   ├── fotos/                             ← Fotos da entrega presencial
│   └── prints/                            ← Prints de tela da aplicação
└── relatorios/
    └── 07-relatorio-atividades.md      ← Base para o relatório APC (grupo)
```

---

## 📋 Fluxo de Trabalho

1. **Etapa 1 — Formação e Contato Inicial:** Preencher o `README.md`, contatar a comunidade, levantar demandas (`docs/06-registro-contatos.md`) e preencher o termo (`docs/01-termo-autorizacao.md`).
2. **Etapa 2 — Requisitos:** Documentar os requisitos do software em contato com a comunidade (`docs/02-documento-requisitos.md`).
3. **Etapa 3 — Desenvolvimento:** Desenvolver a aplicação (`src/`), seguindo o plano (`docs/03-plano-desenvolvimento.md`) e registrando o progresso (`docs/05-diario-bordo.md`).
4. **Etapa 4 — Entrega Presencial:** Entregar o software presencialmente à comunidade. Registrar fotos em `evidencias/fotos/`.
5. **Etapa 5 — Relatórios:** Preencher os relatórios no APC usando como base no `relatorios/07-relatorio-atividades.md`.

---

## 🛠️ ## 🛠️ Tecnologias Utilizadas

A stack de engenharia do projeto foi selecionada para garantir baixíssima latência, escalabilidade em nuvem e total segurança de dados (Privacy by Design) para o ambiente escolar:

- **Front-end:** HTML5, CSS3, JavaScript (Vanilla ES6) e Bootstrap 5 para design responsivo.
- **Back-end Serverless:** Node.js integrado às Vercel Serverless Functions (na pasta `/api`) para ocultar chaves privadas e processar requisições sem persistência de dados em disco.
- **Inteligência Artificial:** Modelo Gemini 1.5 Flash API (Google AI Studio) por meio de engenharia de prompts voltada à análise léxica e correção sintática.
- **Acessibilidade & Voz:** `Web Speech API` (captura acústica local) e Widget de Tradução Digital VLibras (LAPI/UFPB).
- **Hospedagem em Nuvem:** Vercel (Hospedagem unificada com CI/CD acoplado ao GitHub).

---

## ⚠️ Lembretes Importantes

- O grupo **deve manter contato com a comunidade** ao longo do semestre (reuniões presenciais ou online).
- A entrega do software **deve ser presencial** (no colégio parceiro ou na PUC Minas).
- **Tirem muitas fotos** no dia da entrega — elas serão anexadas ao relatório APC.
- Mantenham o **diário de bordo atualizado** ao longo do semestre.
- Idealmente, o software deve ser **hospedado em nuvem** para acesso pela Internet.
- Sem o desenvolvimento do software, entrega presencial e preenchimento dos relatórios, o grupo **não pode ser aprovado**.
