export abstract class BasePracticePage {
  // Method to wait for a loader element to be visible
  async waitForLoader() {
    // Wait for the loader element with a timeout of 12 seconds
    cy.get('.div.wrapper', { timeout: 12000 }).should('be.visible');
  }

  // Abstract method to navigate to the practice page
  abstract navigate();

  // Abstract method to perform all actions on the practice page
  abstract performAllActions();

// Abstract method to select Iframe Menu on the practice page
  abstract selectIframeMenu();

  // Abstract method to verify text within an iframe on the practice page
  abstract verifyWhyEasygeneratorTextInIframe(value: string);
}
