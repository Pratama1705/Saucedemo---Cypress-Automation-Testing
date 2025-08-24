// =================================================
// Get element based on yaml object model
// ! MAIN GET ELEMENT FOR SOME ENTIRE SCRIPT
// =================================================
Cypress.Commands.add('getElement', (component) => {
  const language = 'id';

  cy.task('getObjectModels', { component, language }).then(({ type, value }) => {
    if (type === 'cssSelector') {
      cy.get(value, { timeout: 60000 });
    } else if (type === 'xpath') {
      cy.xpath(value, { timeout: 60000 });
    } else {
      throw new Error(`Unsupported type: ${type}`);
    }
  });
});

// =================================================
// Logic if some element is shown, do action click
// =================================================
Cypress.Commands.add('ifShownClick', (selectorFind, selectorClick) => {
  cy.get('body').then(($body) => {
    if ($body.find(selectorFind).length > 0) {
      cy.get(selectorClick).click();
      cy.wait(3000);
    }
  });
});

// =================================================
// Type value into field element
// =================================================
Cypress.Commands.add('typeValue', (selector, value) => {
  cy.getElement(selector).type(value).should('have.value', value);
  cy.wait(1000);
});

// =================================================
// Verify element is visible
// =================================================
Cypress.Commands.add('elementShouldVisible', (selector) => {
  cy.getElement(selector).should('be.visible');
});

// =================================================
// Verify element contains text is visible
// ! This command only work for element css selector
// ! Only work also for 1 type of language
// =================================================
Cypress.Commands.add('textShouldVisible', (selector, text) => {
  cy.getElement(selector).contains(text).should('be.visible');
});

// =================================================
// Click element based on selector type
// =================================================
Cypress.Commands.add('clickElement', (selector) => {
  cy.getElement(selector).click();
  cy.wait(2000);
});

// =================================================
// Click element contains text
// ! This command only work for element css selector
// ! Only work also for 1 type of language
// =================================================
Cypress.Commands.add('clickText', (selector, text) => {
  cy.getElement(selector).contains(text).click();
  cy.wait(2000);
});
