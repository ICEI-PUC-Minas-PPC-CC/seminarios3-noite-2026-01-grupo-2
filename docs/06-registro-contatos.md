# 06 — Registro de Contatos com a Comunidade

> **Grupo:** Grupo 2  
> **Comunidade:** Escola / Comunidade Tarso de Coimbra

---

> **Importante:** Em Seminários III, o grupo **deve manter contato com a comunidade** ao longo do semestre para levantamento de demandas, validação de protótipos e ajustes na aplicação. Registre aqui todos os contatos realizados. O primeiro contato e a entrega devem ser realizados por todo o grupo, já os contatos realizados durante o desenvolvimento, podem ser feitos por um representante do grupo.
> Para a Tarso de Coimbra, estes contatos podem ser realizados às quintas das 14h às 16h20 no Laboratório de Informática 3 da PUC Minas *campus* Poços de Caldas.

---

## Contatos Realizados

### Contato #1

| Campo | Informação |
| ------- | ----------- |
| Data | 24/02/2026 |
| Forma de contato | Online (Microsoft Teams) |
| Participantes do grupo | Wagner Oliveira e Gabriel Araújo |
| Participantes da comunidade | Coordenação Pedagógica e Direção da escola Tarso de Coimbra |
| Objetivo do contato | Alinhamento inicial do projeto de extensão e verificação de viabilidade técnica para cooperação. |

**Resumo do que foi tratado:**
Apresentação formal mútua dos integrantes do grupo e da equipe diretiva da instituição de ensino. Foram expostos os objetivos acadêmicos da disciplina de Seminários III da PUC Minas e aberta discussão sobre como o grupo poderia desenvolver uma solução web personalizada e sem custos de infraestrutura para mitigar dificuldades administrativas ou operacionais do cotidiano da escola. A liderança se mostrou receptiva e pontuou que a burocracia documental consome muito tempo do corpo docente.

**Encaminhamentos:**
Ficou acordada a realização de uma nova reunião focada especificamente no mapeamento aprofundado dos processos críticos para a identificação exata das demandas operacionais da coordenação e dos alunos.

---

### Contato #2

| Campo | Informação |
| ------- | ----------- |
| Data | 03/03/2026 |
| Forma de contato | Online (Microsoft Teams) |
| Participantes do grupo | Wagner Oliveira e Gabriel Araújo |
| Participantes da comunidade | Equipe de Coordenação e Professores da Tarso de Coimbra |
| Objetivo do contato | Levantamento detalhado de demandas operacionais e elicitação de requisitos do sistema. |

**Resumo do que foi tratado:**
Identificou-se que o principal gargalo de produtividade está centrado no registro manual de extensas atas de reuniões pedagógicas e conselhos de classe. Esse processo manual demanda demasiado tempo pós-evento e acaba gerando atrasos crônicos na consolidação e na divulgação formal das decisões para o auxílio e acompanhamento das atividades dos alunos. A coordenação sugeriu uma ferramenta direta de transcrição de voz para texto, enfatizando que o sistema deve ser extremamente simples, leve e sem exigências de cadastros ou telas de login para mitigar barreiras tecnológicas.

**Encaminhamentos:**
O grupo assumiu o compromisso de projetar a arquitetura da aplicação cliente (VoxScript) com base na Web Speech API nativa e confeccionar wireframes de baixa fidelidade para as primeiras validações.

---

### Contato #3

| Campo | Informação |
| ------- | ----------- |
| Data | 28/04/2026 |
| Forma de contato | Presencial (Laboratório de Informática 3 da PUC Minas) |
| Participantes do grupo | Wagner Oliveira |
| Participantes da comunidade | Coordenador Geral da Tarso de Coimbra |
| Objetivo do contato | Apresentação do protótipo inicial funcional (Sprint 1) e coleta de feedback intermediário. |

**Resumo do que foi tratado:**
Demonstração em tempo real da interface em HTML5/CSS3 integrada ao script JavaScript inicial de captura contínua de áudio. O protótipo provou-se capaz de converter a fala em strings de texto diretamente na tela. O coordenador utilizou o sistema e propôs melhorias fundamentais de ergonomia: aumentar o tamanho das fontes e o contraste visual das cores de fundo para acessibilidade e, muito importante, substituir ícones puramente abstratos por rótulos de texto explícitos nos botões para facilitar o uso por pessoas com pouca alfabetização digital.

**Encaminhamentos:**
O grupo validou os ajustes e programou para a Sprint 2 o polimento visual com foco em acessibilidade e a refatoração do algoritmo JavaScript para gerenciar melhor as pausas longas de voz.

---

### Contato #4

| Campo | Informação |
| ------- | ----------- |
| Data | 11/06/2026 |
| Forma de contato | Presencial (Laboratório de Informática 6 da PUC Minas *campus* Poços de Caldas, MG) |
| Participantes do grupo | Wagner Oliveira e Gabriel Araújo |
| Participantes da comunidade | Corpo Docente, Coordenação e Representantes da Tarso de Coimbra |
| Objetivo do contato | Entrega oficial do software VoxScript, oficina técnica de capacitação e homologação final. |

**Resumo do que foi tratado:**
Apresentação da versão estável do VoxScript hospedada em ambiente de produção pública no Netlify. Realizou-se uma oficina prática guiada onde os representantes da comunidade puderam testar o fluxo de ponta a ponta utilizando seus próprios dispositivos móveis conectados à internet. O sistema funcionou de forma fluida e veloz. A recepção foi muito positiva devido ao design limpo, ausência de burocracias de autenticação e a utilidade do botão de cópia automática para transferência imediata de atas para o Word.

**Encaminhamentos:**
O software foi homologado com sucesso, o termo de recebimento foi assinado e o link definitivo foi compartilhado para o uso contínuo da instituição no suporte diário às suas atividades documentais.

---

## Resumo das Demandas Identificadas

| # | Demanda | Prioridade | Como será atendida no software |
| --- | --------- | :----------: | ------------------------------- |
| 1 | Transcrição de voz em tempo real de reuniões e conselhos pedagógicos. | **Alta** | Integração em JavaScript com a Web Speech API nativa para capturar o áudio do microfone de forma contínua e convertê-lo em texto corrido em português brasileiro (*pt-BR*). |
| 2 | Interface simplificada e de rápido acesso por usuários com baixa alfabetização digital. | **Alta** | Desenvolvimento de uma arquitetura client-side pura (HTML5/CSS3) de página única, sem formulários de login ou cadastros, utilizando botões textuais explícitos de alta legibilidade. |
| 3 | Capacidade de realizar correções ortográficas rápidas e exportar o texto gerado. | **Média** | Implementação de uma área de texto editável (`textarea`) atualizada dinamicamente pelo algoritmo de voz, acoplada a uma rotina de cópia rápida com um clique para a área de transferência do dispositivo. |
