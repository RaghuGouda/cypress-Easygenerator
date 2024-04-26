/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable<Subject> {
    /**Auto fill text fields instead of typing text in - Good for lengthy characters **/
    fill(text: string): Chainable<any>;
 /**Handle opening new tab in the browser **/   
    handleTab():Chainable<any>;
/**file upload in the app**/
    fileUpload(options?: any):Chainable<any>;
  }
}
