/**
 * Arquivo de funções utilitárias globais para automação Cypress.
 */

class Util {
  /**
   * Fecha o popup de cookies (LGPD) clicando em "Aceitar tudo".
   * Utiliza verificação segura para não falhar caso o popup não esteja presente.
   */
  aceitarCookiesLgpd() {
    const botaoAceitarLgpd = "#lgpd-banner-accept-all";
    cy.get("body").then(($body) => {
      if ($body.find(botaoAceitarLgpd).length > 0) {
        cy.get(botaoAceitarLgpd)
          .should("be.visible")
          .click({ force: true });
      }
    });
  }
}

module.exports = new Util();