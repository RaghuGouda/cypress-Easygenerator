export class Button {
  async click(element: string) {
    cy.get(element).click();
    return this;
  }

  async mouseoverClick(element: string) {
    cy.get(element).trigger('mouseover');
    return this;
  }
  async clickOnText(element: string, text: string) {
    cy.get(element).contains(text).click();
    return this;
  }
}
