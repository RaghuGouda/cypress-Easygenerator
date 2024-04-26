import { PageFactory } from '../../src/factory/pageFactory';

describe('Functional Tests', () => {
  let practicePageTestData: any;
  beforeEach(() => {
    cy.visit('/');

    cy.fixture('alert-text.txt').then(function (data) {
      practicePageTestData = data;
    });
  });

  it('should navigate to the practice page and perform actions', () => {
    const practicePage = new PageFactory().getPracticePage(practicePageTestData);
    practicePage.navigate();
    practicePage.performAllActions();
  });

  it('should navigate to the practice page and verify the text in alert box', () => {
    const practicePage = new PageFactory().getPracticePage(practicePageTestData);
    practicePage.navigate();
    practicePage.checkAndVerifyAlert();
  });

  it('should navigate to the practice page', () => {
    const practicePage = new PageFactory().getPracticePage(practicePageTestData);
    practicePage.navigate();
    practicePage.selectIframeMenu();
    practicePage.verifyWhyEasygeneratorTextInIframe('Why Easygenerator?');
  });

  it('mock easygenerator api', () => {
    cy.intercept('GET', 'https://easygenerator.com/', {
      fixture: 'response-data.json'
    });
  });
});
