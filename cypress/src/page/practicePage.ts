import { Button } from "../components/button";
import { DropDown } from "../components/drop-down";
import { Menu } from "../components/menu";
import { TextBox } from "../components/text-box";
import { BasePracticePage } from "./basePage";

export class PracticePage extends BasePracticePage{
    testData: any;
    constructor(testData:any){
        super();
        this.testData=testData
    }

  navigate(){
        cy.get('header > a > svg').should('be.visible');
        cy.url().should('be.equal', 'http://localhost:8080/');
    }

   performAllActions() {
    new DropDown().selectOption('select','Option2')

    cy.fileUpload('cypress/fixtures/download.png')

    new Button().click('#alertbtn')

    new Button().mouseoverClick('button.btn.btn-primary.hover-btn')

    new Button().clickOnText('.hover-content','Top')

    cy.handleTab()
    
   }

    checkAndVerifyAlert(){
        new TextBox().enterText('#name',this.testData)
        new Button().click('#alertbtn')

        cy.on('window:alert',(text)=>{
            expect(text).eql('Hello Hello from Easygenerator, share this practice page and share your knowledge')
        })
        
         new Button().click('#confirmbtn')
        cy.on('window:confirm',(text)=>{
            expect(text).eql('Hello , Are you sure you want to confirm?')
    })

   }

   selectIframeMenu(){
    new Menu().selectMenu('#menu-top-navigation','Why Easygenerator')
  } 

   verifyWhyEasygeneratorTextInIframe(value: string) {
    new Menu().varifyText(value)
   }

}