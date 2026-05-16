# 📂 Código-Fonte da Aplicação

> Coloque aqui o código-fonte do software desenvolvido pelo grupo.

---

## Informações do Projeto

| Campo | Informação |
|-------|-----------|
| Nome da aplicação | VoxScript |
| Tecnologias utilizadas | HTML5, CSS3, JavaScript (Vanilla), Node.js (Vercel Serverless Functions), API Google Gemini 1.5 Flash (IA/PLN), Web Speech API e VLibras. |
| URL em produção | <a href="https://seminarios-iii-audio-sign-nlp.vercel.app/" target="_blank">VoxScript</a> |

## Como Executar Localmente

Para rodar a aplicação em seu computador, siga os passos abaixo. Como a aplicação possui uma arquitetura de Tripla Redundância, o front-end funcionará mesmo sem o servidor local rodando, utilizando a Inteligência Artificial direta pelo navegador ou o motor gramatical offline.

```bash
# 1. Clone o repositório da disciplina para a sua máquina
git clone [https://github.com/WagnerxOliveira/seminarios3-noite-2026-01-grupo-2.git](https://github.com/WagnerxOliveira/seminarios3-noite-2026-01-grupo-2.git)

# 2. Acesse a pasta do código-fonte
cd seminarios3-noite-2026-01-grupo-2/src

# 3. Execução do Front-end (Simples)
# Abra o projeto no VS Code e utilize a extensão "Live Server" no arquivo index.html.

# 4. Execução Full-Stack (Opcional - Requer Vercel CLI)
# Caso queira rodar o back-end (Node.js) localmente para testar a rota /api/processar:
npm i -g vercel
vercel dev
```

## Estrutura do Código

```
src/
├── api/
│   └── processar.js     # Back-end Serverless (Node.js) que se comunica com o Google Gemini.
├── index.html           # Estrutura da interface web, botões e importação do widget VLibras.
├── style.css            # Folha de estilos, transições e ajustes de responsividade.
└── app.js               # Motor principal (Web Speech API, Tripla Redundância NLP e eventos do VLibras).
```

*(Adapte conforme as tecnologias escolhidas pelo grupo.)*

## Deploy

*O deploy da aplicação foi realizado de forma contínua (CI/CD) através da plataforma Vercel.

A Vercel foi escolhida por sua capacidade de unificar a hospedagem em um único ambiente: ela serve os arquivos estáticos do Front-end (index.html, style.css e app.js) através de sua CDN global de alta performance e, simultaneamente, converte a pasta /api em Serverless Functions (funções sem servidor).
Link aplicação no (Vercel):<a href="https://seminarios-iii-audio-sign-nlp.vercel.app/" target="_blank">VoxScript</a>

Dessa forma, o arquivo processar.js atua como um microserviço em Node.js sob demanda. Essa arquitetura garantiu que a nossa chave de API do Google Gemini ficasse oculta e protegida no servidor, contornando bloqueios de CORS do navegador, oferecendo máxima segurança, escalabilidade e baixa latência para o Processamento de Linguagem Natural.*
