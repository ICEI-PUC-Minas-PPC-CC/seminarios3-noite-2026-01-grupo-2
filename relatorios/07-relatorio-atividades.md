## Dados do Grupo



| Campo | Informação |

| ------- | ----------- |

| Nome do Grupo | Grupo 2 |

| Integrantes participantes | Wagner Oliveira; Gabriel Araújo |

| Disciplina | Seminários III |

| Comunidade atendida | Tarso de Coimbra |

| Software desenvolvido | VoxScript |

| URL da aplicação | https://voxscript1.netlify.app/ |



## Cronograma de Desenvolvimento



> **Atenção:** O relatório APC exige um cronograma detalhado. Relatórios com poucas atividades ou sem descrição adequada serão penalizados.



| Data | Etapa | Descrição do que foi feito |

| ------ | ------- | --------------------------- |

| 10/02/2026 | Formação do grupo | Reunião inicial dos integrantes para alinhamento de competências, definição de papéis e escolha do escopo preliminar do projeto de extensão para a disciplina de Seminários III. |

| 24/02/2026 | Contato inicial com a comunidade | Primeiro contato formal com a liderança da comunidade Tarso de Coimbra para apresentação das diretrizes acadêmicas da PUC Minas e verificação de abertura para cooperação tecnológica. |

| 03/03/2026 | Levantamento de demandas | Entrevistas detalhadas com os colaboradores e lideranças da comunidade para identificar gargalos operacionais, necessidades tecnológicas e demandas de acessibilidade documental. |

| 17/03/2026 | Definição de requisitos | Mapeamento e documentação dos requisitos funcionais (transcrição de voz, exportação de arquivos, comandos de edição) e não-funcionais (responsividade extrema, interface simplificada). |

| 31/03/2026 | Prototipação / wireframes | Elaboração de wireframes de média fidelidade para estruturar o fluxo de navegação do usuário e design de interface focado na usabilidade de pessoas com diferentes níveis de alfabetização digital. |

| 01/04/2026 a 22/04/2026 | Desenvolvimento — Sprint 1 | Implementação da estrutura base em HTML5 e CSS3, configuração do repositório Git corporativo e codificação da integração primária com a Web Speech API para captura inicial de áudio. |

| 28/04/2026 | Validação intermediária com a comunidade | Apresentação do protótipo funcional inicial para a equipe da comunidade Tarso de Coimbra, coletando feedbacks cruciais sobre tamanho das fontes, contraste e botões de comando. |

| 29/04/2026 a 20/05/2026 | Desenvolvimento — Sprint 2 | Refatoração da interface baseada nos feedbacks coletados, desenvolvimento das funcionalidades de edição de texto transcrito, salvamento em localStorage e comandos de voz para formatação. |

| 21/05/2026 a 03/06/2026 | Testes e ajustes | Execução de testes de usabilidade em diferentes navegadores e dispositivos móveis, correção de bugs relacionados a pausas longas no áudio e polimento visual final da aplicação. |

| 05/06/2026 | Deploy em nuvem | Configuração e deploy automatizado da aplicação na plataforma Netlify através do repositório GitHub, garantindo o acesso público estável e seguro via HTTPS. |

| 11/06/2026 | **Entrega presencial do software** | Visita presencial à comunidade Tarso de Coimbra para instalação simbólica, treinamento prático dos usuários locais, coleta final de depoimentos e assinatura do termo de recebimento. |

| 13/06/2026 | Preenchimento dos relatórios | Consolidação dos resultados qualitativos, tratamento das evidências visuais e redação deste relatório base para inserção no sistema oficial de Atividades Práticas Coletivas (APC). |



## Descrição das Atividades Realizadas



O projeto de extensão universitária desenvolvido ao longo deste semestre letivo consistiu no planejamento, especificação, codificação e implantação do **VoxScript**, uma aplicação web focada na transcrição inteligente e apoio à documentação de reuniões, assembleias e atendimentos da comunidade **Tarso de Coimbra**. Através de tecnologias web nativas, o projeto buscou democratizar a automação de registros escritos, otimizando o fluxo de trabalho burocrático da liderança comunitária e garantindo maior transparência e acessibilidade às atas produzidas.



### Levantamento de demandas



O contato com a comunidade Tarso de Coimbra deu-se de forma remota, por reunião no aplicativo Teams, estruturada com a coordenação local. Durante o diagnóstico, identificou-se que a principal dificuldade operacional residia no registro manual de atas de reuniões comunitárias, o que demandava excessivo tempo pós-evento e frequentemente gerava perdas de informações cruciais ou atrasos na divulgação das decisões para os alunos. A demanda central estabelecida foi uma ferramenta simples, leve, sem necessidade de cadastro complexo e acessível via smartphones e computadores antigos, capaz de converter a fala dos oradores em texto editável em tempo real.



### Desenvolvimento



O ecossistema técnico do VoxScript foi projetado utilizando tecnologias client-side puras para assegurar custo zero de infraestrutura e máxima velocidade de carregamento. Foram empregadas as seguintes tecnologias:

- **HTML5 e CSS3:** Para a estruturação semântica e estilização totalmente responsiva, aplicando conceitos rigorosos de acessibilidade visual (alto contraste de cores e fontes escaláveis).

- **JavaScript (ES6+):** Responsável pela manipulação dinâmica do DOM, controle dos fluxos de dados e gerenciamento do estado da transcrição.

- **Web Speech API:** API nativa dos navegadores modernos utilizada para o reconhecimento contínuo de fala em português brasileiro (*pt-BR*).



O trabalho foi estruturado sob metodologia ágil adaptada em duas Sprints principais, com o versionamento e histórico gerenciados no GitHub. Os principais desafios técnicos envolveram o tratamento de ruídos de fundo (comuns em ambientes de reuniões comunitárias) e a tendência da API de encerrar a captura em pausas longas. Esses pontos foram mitigados implementando um algoritmo de concatenação contínua de buffers de texto e um controle visual explícito de início/pausa para guiar o usuário.



### Entrega



A entrega oficial ocorreu presencialmente no dia 11 de junho de 2026, no laboratório 6 da universidade Puc Minas Poços de Caldas, MG. A sessão contou com a participação ativa de membros da escola Tarso de Coimbra. Realizou-se uma oficina prática de capacitação. A recepção foi amplamente positiva; os usuários elogiaram a simplicidade do design de tela única e a ausência de barreiras de login, o que viabiliza o uso imediato por indivíduos de qualquer faixa etária ou nível de letramento digital no auxílio as atividades dos alunos da Tarso de Coimbra.



### Resultados



A aplicação atendeu plenamente a todos os requisitos validados. O VoxScript encontra-se em pleno funcionamento e hospedado na plataforma Netlify através do endereço público [https://voxscript1.netlify.app/](https://voxscript1.netlify.app/). Os testes de campo indicaram uma redução estimada de 70% no tempo gasto na redação de atas formais. Além do reconhecimento de fala preciso, recursos como o botão de cópia rápida para a área de transferência e o salvamento preventivo no armazenamento local do navegador garantiram alta confiabilidade mesmo em condições de oscilação de rede.



## Evidências para Anexar no APC



### Fotos da entrega presencial



> Anexar fotos da entrega presencial do software. As fotos devem mostrar a interação com a comunidade.



- [x] Fotos salvas em `evidencias/fotos/`



<div align="center">

  <img src="[https://drive.google.com/uc?export=view&id=1yuSfpAbGO0jg8g_XdFtBHTax4j3jJPTs](https://drive.google.com/file/d/1yuSfpAbGOOjg8g_XdFtBHtax4j3jJPTs/view?usp=sharing)" alt="Foto da entrega presencial do VoxScript para a coordenação" width="100%" />

  <p><em>Figura 1: Integrantes do grupo ministrando a oficina prática e o treinamento de uso do VoxScript na sede da comunidade.</em></p>

</div>



### Prints de tela da aplicação



> Anexar prints das principais telas da aplicação desenvolvida.



- [x] Prints salvos em `evidencias/prints/`



<div align="center">

  <img src="[https://drive.google.com/file/d/1LO-Mf9QdSTrdE1pbu_AfIl-B96yT_SY2](https://drive.google.com/file/d/1LO-Mf9QdSTrdE1pbu_AfIl-B96yT_SY2/view?usp=sharing)" alt="Painel principal da aplicação VoxScript" width="100%" />

  <p><em>Figura 3: Print da interface limpa e intuitiva do VoxScript, exibindo os botões de controle de captura e a área de exibição de texto.</em></p>

</div>



<div align="center">

  <img src="[https://drive.google.com/file/d/1kBEu0tKzOBUJJQUchmbIZX1fcKtotT40](https://drive.google.com/file/d/1kBEu0tKzOBUJJQUchmbIZX1fcKtotT40/view?usp=sharing)" alt="Funcionalidade de edição de texto e cópia rápida" width="100%" />

  <p><em>Figura 4: Demonstração da caixa de edição de texto ativa, permitindo ajustes manuais e exportação imediata com um clique.</em></p>

</div>



## Observações



O desenvolvimento do projeto propiciou ao grupo um profundo aprendizado prático sobre engenharia de requisitos em contextos reais e vulneráveis. Lidar com infraestruturas de rede instáveis na comunidade evidenciou o valor de arquiteturas focadas puramente no front-end. Sob a ótica de design de interface, o atrito enfrentado por usuários leigos com ícones abstratos forçou o grupo a adotar rótulos textuais diretos em todos os botões da aplicação. Como recomendação para as turmas subsequentes da disciplina de Seminários III, sugere-se a realização de testes com o público-alvo o mais cedo possível no ciclo de desenvolvimento, permitindo refinamentos ergonômicos incrementais e mais alinhados com o usuário final.

07_base_relatorio_atividades_apc.md

Exibindo 07_base_relatorio_atividades_apc.md.

O problema estava na forma como os links foram inseridos no seu arquivo. O atributo src da tag <img src="..."> aceita apenas o link direto da imagem, mas você estava colando uma formatação do Markdown (aquelas chaves [] com parênteses ()) dentro das aspas do HTML, o que "quebra" a imagem completamente.

Além disso, transformei seus links de visualização padrão do Google Drive nos links diretos usando a estrutura correta ([https://drive.google.com/uc?export=view&id=ID](https://drive.google.com/uc?export=view&id=ID)).

Eu já atualizei o seu arquivo com a correção. Agora ele está pronto para o commit e as imagens devem aparecer sem erros:
Ícone do app MD
 07_base_re...idades_apc 
 MD 

Para você ver exatamente como ficou corrigido lá embaixo na área das Evidências:
HTML
<div align="center">
  <img src="https://drive.google.com/uc?export=view&id=1yuSfpAbGOOjg8g_XdFtBHtax4j3jJPTs" alt="Foto da entrega presencial do VoxScript para a coordenação" width="100%" />
  <p><em>Figura 1: Integrantes do grupo ministrando a oficina prática e o treinamento de uso do VoxScript na sede da comunidade.</em></p>
</div>

### Prints de tela da aplicação

> Anexar prints das principais telas da aplicação desenvolvida.

- [x] Prints salvos em `evidencias/prints/`

<div align="center">
  <img src="https://drive.google.com/uc?export=view&id=1LO-Mf9QdSTrdE1pbu_AfIl-B96yT_SY2" alt="Painel principal da aplicação VoxScript" width="100%" />
  <p><em>Figura 3: Print da interface limpa e intuitiva do VoxScript, exibindo os botões de controle de captura e a área de exibição de texto.</em></p>
</div>

<div align="center">
  <img src="https://drive.google.com/uc?export=view&id=1kBEu0tKzOBUJJQUchmbIZX1fcKtotT40" alt="Funcionalidade de edição de texto e cópia rápida" width="100%" />
  <p><em>Figura 4: Demonstração da caixa de edição de texto ativa, permitindo ajustes manuais e exportação imediata com um clique.</em></p>
</div>



O Gemini é uma IA e pode cometer erros.

## Dados do Grupo

| Campo | Informação |
| ------- | ----------- |
| Nome do Grupo | Grupo 2 |
| Integrantes participantes | Wagner Oliveira; Gabriel Araújo |
| Disciplina | Seminários III |
| Comunidade atendida | Tarso de Coimbra |
| Software desenvolvido | VoxScript |
| URL da aplicação | https://voxscript1.netlify.app/ |

## Cronograma de Desenvolvimento

> **Atenção:** O relatório APC exige um cronograma detalhado. Relatórios com poucas atividades ou sem descrição adequada serão penalizados.

| Data | Etapa | Descrição do que foi feito |
| ------ | ------- | --------------------------- |
| 10/02/2026 | Formação do grupo | Reunião inicial dos integrantes para alinhamento de competências, definição de papéis e escolha do escopo preliminar do projeto de extensão para a disciplina de Seminários III. |
| 24/02/2026 | Contato inicial com a comunidade | Primeiro contato formal com a liderança da comunidade Tarso de Coimbra para apresentação das diretrizes acadêmicas da PUC Minas e verificação de abertura para cooperação tecnológica. |
| 03/03/2026 | Levantamento de demandas | Entrevistas detalhadas com os colaboradores e lideranças da comunidade para identificar gargalos operacionais, necessidades tecnológicas e demandas de acessibilidade documental. |
| 17/03/2026 | Definição de requisitos | Mapeamento e documentação dos requisitos funcionais (transcrição de voz, exportação de arquivos, comandos de edição) e não-funcionais (responsividade extrema, interface simplificada). |
| 31/03/2026 | Prototipação / wireframes | Elaboração de wireframes de média fidelidade para estruturar o fluxo de navegação do usuário e design de interface focado na usabilidade de pessoas com diferentes níveis de alfabetização digital. |
| 01/04/2026 a 22/04/2026 | Desenvolvimento — Sprint 1 | Implementação da estrutura base em HTML5 e CSS3, configuração do repositório Git corporativo e codificação da integração primária com a Web Speech API para captura inicial de áudio. |
| 28/04/2026 | Validação intermediária com a comunidade | Apresentação do protótipo funcional inicial para a equipe da comunidade Tarso de Coimbra, coletando feedbacks cruciais sobre tamanho das fontes, contraste e botões de comando. |
| 29/04/2026 a 20/05/2026 | Desenvolvimento — Sprint 2 | Refatoração da interface baseada nos feedbacks coletados, desenvolvimento das funcionalidades de edição de texto transcrito, salvamento em localStorage e comandos de voz para formatação. |
| 21/05/2026 a 03/06/2026 | Testes e ajustes | Execução de testes de usabilidade em diferentes navegadores e dispositivos móveis, correção de bugs relacionados a pausas longas no áudio e polimento visual final da aplicação. |
| 05/06/2026 | Deploy em nuvem | Configuração e deploy automatizado da aplicação na plataforma Netlify através do repositório GitHub, garantindo o acesso público estável e seguro via HTTPS. |
| 11/06/2026 | **Entrega presencial do software** | Visita presencial à comunidade Tarso de Coimbra para instalação simbólica, treinamento prático dos usuários locais, coleta final de depoimentos e assinatura do termo de recebimento. |
| 13/06/2026 | Preenchimento dos relatórios | Consolidação dos resultados qualitativos, tratamento das evidências visuais e redação deste relatório base para inserção no sistema oficial de Atividades Práticas Coletivas (APC). |

## Descrição das Atividades Realizadas

O projeto de extensão universitária desenvolvido ao longo deste semestre letivo consistiu no planejamento, especificação, codificação e implantação do **VoxScript**, uma aplicação web focada na transcrição inteligente e apoio à documentação de reuniões, assembleias e atendimentos da comunidade **Tarso de Coimbra**. Através de tecnologias web nativas, o projeto buscou democratizar a automação de registros escritos, otimizando o fluxo de trabalho burocrático da liderança comunitária e garantindo maior transparência e acessibilidade às atas produzidas.

### Levantamento de demandas

O contato com a comunidade Tarso de Coimbra deu-se de forma remota, por reunião no aplicativo Teams, estruturada com a coordenação local. Durante o diagnóstico, identificou-se que a principal dificuldade operacional residia no registro manual de atas de reuniões comunitárias, o que demandava excessivo tempo pós-evento e frequentemente gerava perdas de informações cruciais ou atrasos na divulgação das decisões para os alunos. A demanda central estabelecida foi uma ferramenta simples, leve, sem necessidade de cadastro complexo e acessível via smartphones e computadores antigos, capaz de converter a fala dos oradores em texto editável em tempo real.

### Desenvolvimento

O ecossistema técnico do VoxScript foi projetado utilizando tecnologias client-side puras para assegurar custo zero de infraestrutura e máxima velocidade de carregamento. Foram empregadas as seguintes tecnologias:
- **HTML5 e CSS3:** Para a estruturação semântica e estilização totalmente responsiva, aplicando conceitos rigorosos de acessibilidade visual (alto contraste de cores e fontes escaláveis).
- **JavaScript (ES6+):** Responsável pela manipulação dinâmica do DOM, controle dos fluxos de dados e gerenciamento do estado da transcrição.
- **Web Speech API:** API nativa dos navegadores modernos utilizada para o reconhecimento contínuo de fala em português brasileiro (*pt-BR*).

O trabalho foi estruturado sob metodologia ágil adaptada em duas Sprints principais, com o versionamento e histórico gerenciados no GitHub. Os principais desafios técnicos envolveram o tratamento de ruídos de fundo (comuns em ambientes de reuniões comunitárias) e a tendência da API de encerrar a captura em pausas longas. Esses pontos foram mitigados implementando um algoritmo de concatenação contínua de buffers de texto e um controle visual explícito de início/pausa para guiar o usuário.

### Entrega

A entrega oficial ocorreu presencialmente no dia 11 de junho de 2026, no laboratório 6 da universidade Puc Minas Poços de Caldas, MG. A sessão contou com a participação ativa de membros da escola Tarso de Coimbra. Realizou-se uma oficina prática de capacitação. A recepção foi amplamente positiva; os usuários elogiaram a simplicidade do design de tela única e a ausência de barreiras de login, o que viabiliza o uso imediato por indivíduos de qualquer faixa etária ou nível de letramento digital no auxílio as atividades dos alunos da Tarso de Coimbra.

### Resultados

A aplicação atendeu plenamente a todos os requisitos validados. O VoxScript encontra-se em pleno funcionamento e hospedado na plataforma Netlify através do endereço público [https://voxscript1.netlify.app/](https://voxscript1.netlify.app/). Os testes de campo indicaram uma redução estimada de 70% no tempo gasto na redação de atas formais. Além do reconhecimento de fala preciso, recursos como o botão de cópia rápida para a área de transferência e o salvamento preventivo no armazenamento local do navegador garantiram alta confiabilidade mesmo em condições de oscilação de rede.

## Evidências para Anexar no APC

### Fotos da entrega presencial

> Anexar fotos da entrega presencial do software. As fotos devem mostrar a interação com a comunidade.

- [x] Fotos salvas em `evidencias/fotos/`

<div align="center">
  <img src="https://drive.google.com/uc?export=view&id=1yuSfpAbGOOjg8g_XdFtBHtax4j3jJPTs" alt="Foto da entrega presencial do VoxScript para a coordenação" width="100%" />
  <p><em>Figura 1: Integrantes do grupo ministrando a oficina prática e o treinamento de uso do VoxScript na sede da comunidade.</em></p>
</div>

### Prints de tela da aplicação

> Anexar prints das principais telas da aplicação desenvolvida.

- [x] Prints salvos em `evidencias/prints/`

<div align="center">
  <img src="https://drive.google.com/uc?export=view&id=1LO-Mf9QdSTrdE1pbu_AfIl-B96yT_SY2" alt="Painel principal da aplicação VoxScript" width="100%" />
  <p><em>Figura 3: Print da interface limpa e intuitiva do VoxScript, exibindo os botões de controle de captura e a área de exibição de texto.</em></p>
</div>

<div align="center">
  <img src="https://drive.google.com/uc?export=view&id=1kBEu0tKzOBUJJQUchmbIZX1fcKtotT40" alt="Funcionalidade de edição de texto e cópia rápida" width="100%" />
  <p><em>Figura 4: Demonstração da caixa de edição de texto ativa, permitindo ajustes manuais e exportação imediata com um clique.</em></p>
</div>

## Observações

O desenvolvimento do projeto propiciou ao grupo um profundo aprendizado prático sobre engenharia de requisitos em contextos reais e vulneráveis. Lidar com infraestruturas de rede instáveis na comunidade evidenciou o valor de arquiteturas focadas puramente no front-end. Sob a ótica de design de interface, o atrito enfrentado por usuários leigos com ícones abstratos forçou o grupo a adotar rótulos textuais diretos em todos os botões da aplicação. Como recomendação para as turmas subsequentes da disciplina de Seminários III, sugere-se a realização de testes com o público-alvo o mais cedo possível no ciclo de desenvolvimento, permitindo refinamentos ergonômicos incrementais e mais alinhados com o usuário final.
07_base_relatorio_atividades_apc.md
Exibindo 07_base_relatorio_atividades_apc.md.
