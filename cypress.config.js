const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  // Configuração para geração de relatórios HTML após a execução dos testes
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Relatório de Testes - Cielo",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    baseUrl: "https://cielo.com.br",
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    //supportFile: false, // Desabilita o arquivo de suporte global
    // Configura a resolução desktop padrão para todos os testes 💻
    viewportWidth: 1366,
    viewportHeight: 768,
    async setupNodeEvents(on, config) {
      // Integração do gerador de relatórios
      require("cypress-mochawesome-reporter/plugin")(on);

      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      return config;
    },
  },
});