describe('End to End Test Recruitment Paragon - Muhammad Akbar Pratama Putra', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('https://recruitment-staging-queenbee.paradev.io/');
    cy.wait(3000);

    cy.ifShownClick('header[id="chakra-modal--header-1"]', 'header[id="chakra-modal--header-1"] > svg');

    cy.textShouldVisible('sample/sampleElement/paragraph', 'Selamat datang di Beyondly!');
  });

  it('Users at login page and want to go to login page', () => {
    cy.clickElement('sample/sampleElement/loginNavigationBar');
    cy.elementShouldVisible('sample/sampleElement/tabPhoneNumber');
  });

  it('Negative - Users at login page and want to login with phone number but not input anything on field', () => {
    // Go to login page
    cy.clickElement('sample/sampleElement/loginNavigationBar');
    cy.elementShouldVisible('sample/sampleElement/tabPhoneNumber');

    // Click login
    cy.clickElement('sample/sampleElement/loginButton');

    // Assert innerline
    cy.elementShouldVisible('sample/sampleElement/innerLineErrorFillPhonenUmber');
  });

  it('Users at login page and want to login with phone number', () => {
    // Go to login page
    cy.clickElement('sample/sampleElement/loginNavigationBar');
    cy.elementShouldVisible('sample/sampleElement/tabPhoneNumber');

    // Input phone number & password
    cy.typeValue('sample/sampleElement/fieldPhoneNumber', '8123456789');
    cy.typeValue('sample/sampleElement/fieldPassword', 'Testing1234');

    // Click login
    cy.clickElement('sample/sampleElement/loginButton');
  });

  it('Users at login page and want to login with email', () => {
    // Go to login page
    cy.clickElement('sample/sampleElement/loginNavigationBar');
    cy.elementShouldVisible('sample/sampleElement/tabPhoneNumber');

    // Tab email
    cy.clickElement('sample/sampleElement/tabEmail');

    // Input email & password
    cy.typeValue('sample/sampleElement/fieldEmail', 'test@gmail.com');
    cy.typeValue('sample/sampleElement/fieldPassword', 'Testing1234');

    // Click login
    cy.clickElement('sample/sampleElement/loginButton');
  });
});
