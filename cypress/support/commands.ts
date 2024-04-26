// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --

Cypress.Commands.add(
  'fill',
  {
    prevSubject: 'element'
  },
  (subject, value) => {
    cy.wrap(subject).invoke('val', value).trigger('input').trigger('change');
  }
);

Cypress.Commands.add('handleTab',()=>{
  cy.get('#opentab').invoke('removeAttr','target').click()

})

Cypress.Commands.add('fileUpload', (filepath:string) => { 
    cy.get('input[type="file"]').selectFile(filepath)
});

