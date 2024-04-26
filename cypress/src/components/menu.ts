import 'cypress-iframe';
export class Menu {
  varifyText(text: string) {
    cy.wait(2000);
    cy.frameLoaded('#courses-iframe');
    cy.iframe().find('.pitch-page-header-title').contains(text);
    return this;
  }

  async selectMenu(element: string, menuItem: string) {
    cy.frameLoaded('#courses-iframe');
    cy.iframe().find(element).contains(menuItem).click({ force: true });
  }
}
