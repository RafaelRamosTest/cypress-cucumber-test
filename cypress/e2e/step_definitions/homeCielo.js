const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const homePage = require("../pages/HomePage");

Given("eu acesso o site Cielo", () => {
  homePage.visitar();
});

Then("o banner deve exibir o título principal {string}", (tituloEsperado) => {
  homePage.validarTituloBanner(tituloEsperado);
});

Then("eu devo visualizar o banner", () => {
  homePage.validarVisibilidadeBanner();
});

Then("o sistema deve exibir as seguintes taxas comerciais em destaque:", (dataTable) => {
  const taxas = dataTable.hashes();
  homePage.validarTaxasComerciais(taxas);
});

Then("o botao {string} deve estar visivel e direcionar para as ofertas", (textoBotao) => {
  homePage.validarBotaoOfertas(textoBotao);
});

When("eu seleciono a opção {string} no carrossel de produtos", (nomeAba) => {
  homePage.selecionarAbaCarrossel(nomeAba);
});

Then("o carrossel deve exibir o título {string}", (tituloEsperado) => {
  cy.wrap(tituloEsperado).as("tituloCarrossel");
});

Then("o botão {string} deve estar visível", (textoBotao) => {
  cy.get("@tituloCarrossel").then((titulo) => {
    homePage.validarConteudoCarrossel(titulo, textoBotao);
  });
});
