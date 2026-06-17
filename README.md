# Projeto de Automação de Testes E2E - Cielo 🚀

Este projeto contém a automação de testes de ponta a ponta (End-to-End) para o site da Cielo. A arquitetura foi desenvolvida utilizando **Cypress** integrado ao **Cucumber (BDD)**, permitindo que os cenários de testes sejam escritos em formato de negócios (Gherkin) e executados de forma automatizada.

O projeto está configurado para rodar nativamente em ambiente **Windows** utilizando **Node 24+** e o empacotador de alta performance **esbuild**.

---

## 🛠️ Tecnologias Utilizadas

* **[Cypress](https://www.cypress.io/):** Framework de automação de testes front-end.
* **[Cucumber / Gherkin](https://cucumber.io/):** Abordagem BDD para escrita de cenários em linguagem natural.
* **[Esbuild](https://esbuild.github.io/):** Pré-processador ultra rápido para compilar os arquivos de testes.
* **[Node.js (v24+)](https://nodejs.org/):** Ambiente de execução do Javascript.

---

## 📁 Estrutura de Pastas do Projeto

A arquitetura do projeto foi desenhada separando as responsabilidades de negócio (Features) das implementações técnicas (Steps), utilizando a pasta `step_definitions` de forma global para reaproveitamento de código:

```text
cypress-cucumber-cielo/
├── cypress/
│   ├── e2e/                           # Todos os arquivos de testes E2E
│   │   ├── feature/                   # Cenários de negócio descritos em Gherkin (.feature)
│   │   │     └── homeCielo.feature
│   │   └── step_definitions/          # Implementação técnica dos passos (Javascript)
│   │         └── homeCieloSteps.js    # Passos globais reaproveitáveis
│   └── support/                       # Infraestrutura e configurações globais do Cypress
│       └── e2e.js                     # Inicialização e importação de plugins
├── cypress.config.js                  # Configurações do Cypress (Resolução Desktop, Caminhos)
├── package.json                       # Dependências e scripts de execução do NPM
└── README.md                          # Documentação do projeto

💻 Configurações Técnicas Relevantes
Resolução Desktop Padrão: O projeto está configurado no cypress.config.js para abrir os testes na resolução de 1366x768 (viewportWidth e viewportHeight). Isso garante o comportamento idêntico ao de um computador, impedindo que o site quebre ou ative o modo mobile.

Steps Globais: Graças à configuração do cypress-cucumber-preprocessor no package.json, qualquer arquivo .feature criado dentro da pasta correspondente consegue ler e reaproveitar os passos contidos em step_definitions.

🚀 Como Executar o Projeto
Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:

Git

Node.js (Versão 24 ou superior)

1. Clonar o projeto e instalar dependências
Abra o seu terminal no Windows (Prompt de Comando ou PowerShell) e execute:

Bash
# Clone o repositório (Substitua pela sua URL caso suba para o GitHub)
git clone [https://github.com/seu-usuario/cypress-cucumber-cielo.git](https://github.com/seu-usuario/cypress-cucumber-cielo.git)

# Acesse a pasta do projeto
cd cypress-cucumber-cielo

# Instale todas as dependências necessárias
npm install
2. Executar os testes em Modo Interface (Interativo)
Para abrir o painel visual do Cypress onde você pode escolher e acompanhar a execução dos testes na tela:

Bash
npm run cypress:open
Clique em E2E Testing, escolha o navegador de sua preferência (Chrome/Electron) e selecione o arquivo .feature para rodar.

3. Executar os testes em Modo Headless (Terminal)
Para rodar os testes em segundo plano (ideal para esteiras de CI/CD como GitHub Actions ou Jenkins):

Bash
npm run cypress:run