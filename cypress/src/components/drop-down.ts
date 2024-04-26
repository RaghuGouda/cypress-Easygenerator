export class DropDown {
  async selectOption(element: string, option: string) {
    cy.get(element).select(option);
    return this;
  }
}
