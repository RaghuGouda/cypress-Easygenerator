export abstract class BasePracticePage{
    async  waitForLoader() {
        cy.get('.div.wrapper',{timeout:12000}).should('be.visible')
        
    }
     abstract  navigate()
     abstract  performAllActions()
     abstract  verifyWhyEasygeneratorTextInIframe(value:string)
}