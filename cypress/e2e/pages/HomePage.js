const util = require("../utils/util");

class HomePage {
  constructor() {
    // Mapeamento de todos os seletores da Home da Cielo em um único lugar
    this.selectores = {
      banner: "section.hero",
      tituloBanner: "section.hero .box-textos .titulo",
      containerTaxas: "section.hero .box-taxas .taxas",
      botaoOferta: 'section.hero .box-cta a.primary-button',
      carrosselContainer: "section.slider-products",
      carrosselBotoesNavegacao: "section.slider-products .boxSliderMenu .cta",
      carrosselPaineis: "section.slider-products .sliderResult .boxResult",
    };
  }

  /**
   * Acessa a home da Cielo utilizando a baseUrl definida no cypress.config.js
   * e fecha o popup de LGPD caso esteja visível.
   */
  visitar() {
    cy.visit("/");
    //util.aceitarCookiesLgpd();
  }

  /**
   * Valida a visibilidade do título principal do banner
   * @param {string} tituloEsperado
   */
  validarTituloBanner(tituloEsperado) {
    cy.get(this.selectores.tituloBanner)
      .should("be.visible")
      .and("have.text", tituloEsperado);
  }

  /**
   * Valida se o banner principal está visível e possui imagem de fundo
   */
  validarVisibilidadeBanner() {
    cy.get(this.selectores.banner)
      .should("be.visible")
      .and("have.attr", "style")
      .should("include", "background-image")
      .and("include", "amazonaws.com");
  }

  /**
   * Valida as taxas comerciais exibidas na home
   * @param {Array} taxas - Array de objetos contendo modalidade e valor
   */
  validarTaxasComerciais(taxas) {
    cy.get(this.selectores.containerTaxas).should("be.visible").within(() => {
      taxas.forEach((taxa) => {
        cy.contains(".text", taxa.modalidade)
          .parent()
          .find(".value")
          .should("include.text", taxa.valor);
      });
    });
  }

  /**
   * Valida o botão de ofertas
   * @param {string} textoBotao
   */
  validarBotaoOfertas(textoBotao) {
    cy.get(this.selectores.botaoOferta)
      .filter(":visible") // Garante que pegamos apenas o botão visível (desktop ou mobile)
      .first()
      .should("be.visible")
      .and("have.text", textoBotao)
      .and("have.attr", "href", "#ofertas");
  }

  /**
   * Clica em uma opção (aba) específica no menu do carrossel de produtos
   * @param {string} nomeAba - O texto da aba a ser clicada (ex: "Maquininhas")
   */
  selecionarAbaCarrossel(nomeAba) {
    cy.get(this.selectores.carrosselBotoesNavegacao)
      .contains(nomeAba)
      .click();
  }

  /**
   * Valida se o painel ativo do carrossel exibe o título e o botão esperados
   * @param {string} tituloEsperado
   * @param {string} textoBotao
   */
  validarConteudoCarrossel(tituloEsperado, textoBotao) {
    cy.get(this.selectores.carrosselPaineis)
      .filter(":visible")
      .should("have.class", "is-selected")
      .within(() => {
        cy.get(".titulo-result")
          .should("be.visible")
          .and("have.text", tituloEsperado);

        // Valida o botão dentro do painel ativo (pode ser <a> ou <button>)
        cy.get(".box-cta .primary-button")
          .filter(":visible")
          .first()
          .should("be.visible")
          .and("have.text", textoBotao);
      });
  }
}

module.exports = new HomePage();