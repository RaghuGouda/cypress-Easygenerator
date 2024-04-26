export class TextBox{

     async enterText(element:string,text:string){
        cy.get(element).fill(text)
        return this
    }
}