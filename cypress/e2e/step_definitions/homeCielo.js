const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("eu acesso o site Cielo", () => {
  cy.visit("https://cielo.com.br");
});

Then("o banner deve exibir o título principal {string}", (tituloEsperado) => {
  cy.get("section.hero .box-textos .titulo")
    .should("be.visible")
    .and("have.text", tituloEsperado);
});

Then("eu devo visualizar o banner", (dataTable) => {
  cy.get("section.hero").should("be.visible").and("have.attr", "style").should("include", "background-image").and("include", "amazonaws.com"); // Garante que a URL da imagem foi injetada
});

Then("deve conter as taxas comerciais atualizadas:", (dataTable) => {
  const taxas = dataTable.hashes();

  taxas.forEach((taxa) => {
    // Procura pelo bloco específico da modalidade (ex: .item.pix, .item.debito)
    // O HTML da Cielo usa classes bem limpas para cada item
    cy.get("section.hero .box-taxas .taxas")
      .should("be.visible")
      .within(() => {
        // Encontra o texto da modalidade e garante que o valor correspondente está correto no mesmo bloco
        cy.contains(".text", taxa.modalidade)
          .parent() // Sobe para o container do item
          .find(".value")
          .should("include.text", taxa.valor);
      });
  });
});

Then("o botao {string} deve estar visivel e direcionar para as ofertas", (textoBotao) => {
  cy.get("section.hero .box-cta a.primary-button")
    .first() // Como o HTML tem o bloco mobile e desktop replicado, pegamos o primeiro visível
    .should("be.visible")
    .and("have.text", textoBotao)
    .and("have.attr", "href", "#ofertas"); // Garante que ancora o usuário para a seção de compras
});