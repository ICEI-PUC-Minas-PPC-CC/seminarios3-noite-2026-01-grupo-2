# 02 — Documento de Requisitos do Software

> **Grupo:** Krome Angels (Grupo 2)
> **Aplicação:** VoxScript  
> **Comunidade:** Crianças e adolescentes com deficiência auditiva atendidos no CMAEE Dr. Tarso de Coimbra

---

## 1. Visão Geral

A aplicação é um sistema de conversão de voz para texto em tempo real, destinado a crianças e adolescentes com deficiência auditiva atendidos no CMAEE Dr. Tarso de Coimbra. Seu objetivo é facilitar a comunicação no ambiente educacional, transformando a fala do professor em texto exibido na tela e também em Libras por meio do avatar do VLibras, promovendo inclusão e autonomia por meio do acesso visual e em língua de sinais ao conteúdo falado.

## 2. Público-Alvo

| Campo | Informação |
| ------- | ----------- |
| Perfil dos usuários | Crianças e adolescentes com deficiência auditiva ou surdez, estudantes atendidos no CMAEE Dr. Tarso de Coimbra, que necessitam de apoio visual para acompanhar a comunicação oral em ambiente educacional. |
| Faixa etária | Entre 8 e 18 anos. |
| Necessidades de acessibilidade | Interface visual de alta legibilidade, com texto ampliado, contraste adequado, uso de ícones e elementos gráficos intuitivos, botões de fácil interação, possibilidade de ajustes personalizados (tamanho da fonte, cores, histórico de conversas) e tradução para Libras via VLibras. |
| Nível de familiaridade com tecnologia | Variável - os usuários estão inseridos em um ambiente institucional com acesso a dispositivos digitais, mas a interface deve ser projetada com baixa complexidade, priorizando a simplicidade e a usabilidade visual para garantir autonomia independentemente do nível de experiência prévia. |

> **Lembrete (Tarso de Coimbra):** Os usuários podem ter deficiência auditiva/surdez. A interface deve ser **visual, intuitiva e de baixa complexidade**. Priorize elementos visuais (imagens, ícones, cores) sobre texto extenso.

## 3. Requisitos Funcionais

| ID | Requisito | Prioridade | Origem da demanda |
| ---- | ---------- | :----------: | ------------------ |
| RF01 | Captar o áudio do ambiente por meio do microfone do dispositivo e converter a fala em texto em tempo real utilizando uma API de reconhecimento de voz (Google Speech-to-Text ou similar). | Alta | Reunião com a comunidade (CMAEE Dr. Tarso de Coimbra) em 06/03/2026 |
| RF02 | Exibir o texto transcrito na interface de forma clara, com atualização em tempo real, garantindo legibilidade imediata para o usuário. | Alta | Reunião com a comunidade (CMAEE Dr. Tarso de Coimbra) em 06/03/2026 |
| RF03 |Integrar o VLibras (widget) para exibir, simultaneamente ao texto transcrito, a tradução para Libras por meio de avatar animado, oferecendo uma segunda via de comunicação para os usuários. | Alta | Reunião com a comunidade (CMAEE Dr. Tarso de Coimbra) em 06/03/2026 |
| RF04 | Disponibilizar opções de ajuste de acessibilidade na interface, incluindo controle de tamanho da fonte, seleção de cores de alto contraste e modo de exibição noturno. | Média | Reunião com a comunidade (CMAEE Dr. Tarso de Coimbra) em 06/03/2026 |
| RF05 | Armazenar em banco de dados o histórico das transcrições realizadas, associando cada sessão a data, horário e, quando aplicável, à identificação do contexto (ex.: aula, professor). | Média | Reunião com a comunidade (CMAEE Dr. Tarso de Coimbra) em 06/03/2026 |
| RF06 | Permitir que o usuário visualize e pesquise o histórico de transcrições armazenadas, com filtros por data e palavra-chave, para revisão de conteúdos passados. | Baixa | Reunião com a comunidade (CMAEE Dr. Tarso de Coimbra) em 06/03/2026 |

## 4. Requisitos Não Funcionais

| ID | Requisito | Categoria |
| ---- | ---------- | ----------- |
| RNF01 | A aplicação deve ser acessível via navegador web | Acessibilidade |
| RNF02 | A interface deve ser simples e intuitiva | Usabilidade |
| RNF03 | A aplicação deve funcionar em dispositivos móveis | Compatibilidade |
| RNF04 | O sistema deve transcrever a fala com baixa latência, não ultrapassando 2 segundos entre a fala e a exibição do texto na tela | Performance |
| RNF05 | Os dados de histórico devem ser armazenados de forma segura, garantindo a privacidade das informações dos usuários, em conformidade com a LGPD | Segurança / Privacidade |

## 5. Requisitos de Acessibilidade

- [x] Interface predominantemente visual (ícones, cores, imagens)
- [x] Textos curtos e objetivos
- [x] Botões grandes e identificáveis
- [x] Contraste adequado de cores
- [x] Compatível com Libras (se aplicável: vídeos, sinais, glossário)
- [x] Sem dependência de áudio para funcionalidades essenciais
- [ ] Outro: *(especificar)*

## 6. Tecnologias Escolhidas

| Componente | Tecnologia |
| ----------- | ----------- |
| Front-end | HTML5, CSS3 e JavaScript (com possibilidade de uso do framework React para maior organização da interface) |
| Back-end (se houver) | Firebase Cloud Functions (serverless) para gerenciar chamadas seguras à API e autenticação |
| Banco de dados (se houver) | Firebase Firestore (banco de dados NoSQL em tempo real) |
| Hospedagem | Vercel (para o front-end) ou Firebase Hosting (integração nativa com o ecossistema Firebase) |
| Outras ferramentas | Google Speech-to-Text API (reconhecimento de voz), VLibras (widget de tradução para Libras), Git/GitHub para versionamento, Figma para prototipagem (ou desenhos no papel) |

## 7. Protótipo / Wireframes

(Inclua esboços das telas principais ou links para protótipos — mesmo rascunhos simples em papel são válidos. Salvem imagens dos wireframes em `evidencias/prints/`.)

## 8. Escopo Mínimo Viável (MVP)

(Quais funcionalidades compõem a versão mínima que pode ser entregue à comunidade?)

- [ ] Captura de áudio e transcrição em tempo real – Utilização do microfone do dispositivo e da API Google Speech-to-Text para converter a fala em texto com baixa latência.
- [ ] Exibição do texto na tela – Apresentação clara e legível do texto transcrito, com atualização contínua e suporte a ajustes básicos de tamanho de fonte e contraste (botões grandes e identificáveis).
- [ ] Controles simples de iniciar/parar captura – Interface com botões de destaque para o usuário iniciar e interromper o reconhecimento de voz, garantindo autonomia no uso.

## 9. Funcionalidades Desejáveis (se houver tempo)

- Armazenamento e visualização de histórico – Persistência das transcrições em banco de dados (Firestore) com opção de listagem por data e palavra-chave, permitindo que o usuário revise conteúdos de aulas anteriores.
- Personalização avançada de acessibilidade – Implementação completa dos ajustes de tamanho de fonte, contraste (incluindo modo noturno) e layout responsivo com salvamento das preferências no dispositivo ou no perfil do usuário.
