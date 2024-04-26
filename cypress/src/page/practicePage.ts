import { Button } from '../components/button';
import { DropDown } from '../components/drop-down';
import { Menu } from '../components/menu';
import { TextBox } from '../components/text-box';
import { BasePracticePage } from './basePracticePage';

export class PracticePage extends BasePracticePage {
    testData: any;
  
    constructor(testData: any) {
      super();
      this.testData = testData;
    }
  
    // Method to navigate to the practice page and verify the URL and header visibility
    navigate() {
      cy.get('header > a > svg').should('be.visible');
      cy.url().should('be.equal', 'http://localhost:8080/');
    }
  
    // Method to perform all actions on the practice page
    performAllActions() {
      // Select an option from a dropdown
      new DropDown().selectOption('select', 'Option2');
  
      // Upload a file
      cy.fileUpload('cypress/fixtures/download.png');
  
      // Click a button that triggers an alert
      new Button().click('#alertbtn');
  
      // Perform a hover action and then click a button
      new Button().mouseoverClick('button.btn.btn-primary.hover-btn');
  
      // Click on a button based on its text content
      new Button().clickOnText('.hover-content', 'Top');
  
      // Handle tab switching
      cy.handleTab();
    }
  
    // Method to enter text, trigger an alert, and verify its text content
    checkAndVerifyAlert() {
      // Enter text in a text box
      new TextBox().enterText('#name', this.testData);
  
      // Click a button that triggers an alert
      new Button().click('#alertbtn');
  
      // Verify the text of the alert
      cy.on('window:alert', text => {
        expect(text).eql('Hello Hello from Easygenerator, share this practice page and share your knowledge');
      });
  
      // Click a button that triggers a confirmation dialog
      new Button().click('#confirmbtn');
  
      // Verify the text of the confirmation dialog
      cy.on('window:confirm', text => {
        expect(text).eql('Hello , Are you sure you want to confirm?');
      });
    }
  
    // Method to select a menu item within an iframe
    selectIframeMenu() {
      // Select a menu item within an iframe
      new Menu().selectMenu('#menu-top-navigation', 'Why Easygenerator');
    }
  
    // Method to verify text within an iframe
    verifyWhyEasygeneratorTextInIframe(value: string) {
      // Verify text within an iframe
      new Menu().varifyText(value);
    }
  }
  