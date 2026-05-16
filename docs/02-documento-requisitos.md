# 02 — Documento de Requisitos do Software

> **Grupo:** Grupo 2
> **Aplicação:** VoxScript  
> **Comunidade:** Crianças e adolescentes com deficiência auditiva atendidos no CMAEE Dr. Tarso de Coimbra

---

## 1. Visão Geral

A aplicação é um sistema de conversão de voz para texto em tempo real, destinado a crianças e adolescentes com deficiência auditiva atendidos no CMAEE Dr. Tarso de Coimbra. Seu objetivo é facilitar a comunicação no ambiente educacional, transformando a fala do professor em texto exibido na tela, corrigido gramaticalmente por Inteligência Artificial, e traduzido para Libras por meio do avatar do VLibras. O projeto promove inclusão e autonomia através do acesso visual e em língua de sinais ao conteúdo falado.

## 2. Público-Alvo

| Campo | Informação |
| ------- | ----------- |
| Perfil dos usuários | Crianças e adolescentes com deficiência auditiva ou surdez, estudantes atendidos no CMAEE Dr. Tarso de Coimbra, que necessitam de apoio visual para acompanhar a comunicação oral em ambiente educacional. |
| Faixa etária | Entre 8 e 18 anos. |
| Necessidades de acessibilidade | Interface visual de alta legibilidade, com texto ampliado, contraste adequado, uso de ícones intuitivos, botões grandes e tradução simultânea para Libras via VLibras. |
| Nível de familiaridade com tecnologia | Variável - a interface foi projetada com baixa complexidade (operação em praticamente um clique), priorizando a usabilidade visual para garantir autonomia independentemente da experiência prévia. |

> **Lembrete (Tarso de Coimbra):** Os usuários possuem deficiência auditiva/surdez. A interface deve ser **visual, intuitiva e de baixa complexidade**. Prioridade em elementos visuais objetivos sobre texto extenso.

## 3. Requisitos Funcionais

| ID | Requisito | Prioridade | Origem da demanda |
| ---- | ---------- | :----------: | ------------------ |
| RF01 | Captar o áudio do ambiente por meio do microfone do dispositivo e converter a fala em texto bruto em tempo real utilizando a Web Speech API nativa do navegador. | Alta | Reunião com a comunidade (CMAEE Dr. Tarso de Coimbra) |
| RF02 | Processar o texto bruto utilizando Inteligência Artificial (Google Gemini) via Processamento de Linguagem Natural (PLN) para aplicar pontuação, interrogações, vírgulas e capitalização adequadas ao contexto. | Alta | Evolução técnica do projeto (Mai/2026) |
| RF03 | Exibir o texto transcrito e pontuado na interface de forma clara, em uma área de leitura editável e expansível. | Alta | Reunião com a comunidade (CMAEE Dr. Tarso de Coimbra) |
| RF04 | Integrar o VLibras (widget) para realizar a leitura do texto atualizado no DOM e exibir a tradução simultânea em Libras via avatar animado. | Alta | Reunião com a comunidade (CMAEE Dr. Tarso de Coimbra) |
| RF05 | Permitir a limpeza da tela e do buffer de gravação através de interação manual (botões UI) ou via Comando de Voz oculto ("Vox, apague o texto"). | Média | Inovação de Acessibilidade Hands-Free |

## 4. Requisitos Não Funcionais

| ID | Requisito | Categoria |
| ---- | ---------- | ----------- |
| RNF01 | A aplicação deve ser web, responsiva e acessível via navegador (foco no Google Chrome para suporte de API de voz). | Acessibilidade / Compatibilidade |
| RNF02 | O sistema deve possuir arquitetura de "Tripla Redundância" para o processamento de texto (Back-end Vercel > IA Client-Side > Regras Locais Offline) para evitar falhas por queda de internet. | Resiliência / Estabilidade |
| RNF03 | A interface deve utilizar o framework Bootstrap 5 para garantir contraste, clareza e adaptação a dispositivos móveis e desktops. | Usabilidade |
| RNF04 | O processamento da IA não deve ultrapassar a latência aceitável para manter o fluxo de tradução do VLibras natural. | Performance |
| RNF05 | O sistema operará em tempo real na memória (Serverless), não armazenando áudios ou textos em banco de dados, garantindo privacidade absoluta (LGPD) dos alunos e professores. | Segurança / Privacidade |

## 5. Requisitos de Acessibilidade

- [x] Interface predominantemente visual (ícones, cores, imagens)
- [x] Textos curtos e objetivos
- [x] Botões grandes e identificáveis
- [x] Contraste adequado de cores
- [x] Compatível com Libras (se aplicável: vídeos, sinais, glossário)
- [x] Sem dependência de áudio para funcionalidades essenciais
- [x] Outro: *Área de texto otimizada como `div contenteditable` para compatibilidade estrita com o leitor de tela do VLibras.*

## 6. Tecnologias Escolhidas

| Componente | Tecnologia |
| ----------- | ----------- |
| Front-end | HTML5, CSS3, JavaScript Vanilla e Bootstrap 5. |
| Back-end (Serverless) | Node.js operando em Vercel Functions para contornar bloqueios de CORS e interagir com segurança com APIs externas. |
| Inteligência Artificial | API do Gemini 1.5 Flash (Google AI Studio) com prompt especialista em NLP e POS Tagging. |
| Banco de dados | N/A (Removido do escopo do MVP para priorizar processamento em tempo real e privacidade). |
| Hospedagem | Vercel (Front-end e Back-end unificados). |
| Outras ferramentas | Web Speech API (reconhecimento de voz no client), VLibras Widget, Git/GitHub. |

## 7. Protótipo / Wireframes

*(As imagens das telas e do protótipo final estão armazenadas na documentação do repositório, dentro da pasta `evidencias/` e exibidas no relatório principal).*

## 8. Escopo Mínimo Viável (MVP)

*(Funcionalidades que compõem a versão entregue à comunidade)*

- [x] **Captura de áudio em tempo real:** Utilização do microfone via Web Speech API para converter a fala contínua em blocos de texto.
- [x] **Processamento de Linguagem Natural (PLN):** Envio do bloco de texto para o back-end para aplicação de regras gramaticais e de pontuação via Inteligência Artificial, melhorando o sentido da frase.
- [x] **Exibição do texto na tela:** Apresentação clara do texto transcrito e corrigido, com interface de atualização instantânea e botões intuitivos de controle de gravação.
- [x] **Integração com VLibras:** Acionamento automático do widget do VLibras sempre que um novo bloco de texto pontuado é gerado, oferecendo a via de comunicação nativa para os usuários surdos.

## 9. Funcionalidades Desejáveis (Roadmap Futuro - Versão 2.0)

- **Motor Acústico Python (Speech-to-Text):** Substituição do processamento em texto por um modelo neural em Python (ex: OpenAI Whisper) capaz de captar o arquivo `.webm` e pontuar as frases com base no timbre, entonação e respiração do usuário.
- **Histórico e Banco de Dados:** Implementação de um banco de dados NoSQL para salvar os relatórios de aula e as transcrições diárias, permitindo que os alunos revisem o conteúdo escrito gerado durante os encontros.
- **Perfis de Usuário:** Configurações salvas em nuvem para preferências de tamanho de fonte, modo escuro e velocidade de transcrição.