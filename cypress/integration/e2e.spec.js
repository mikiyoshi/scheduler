const { CYCLIC_KEY } = require('@storybook/addon-actions');

describe('Appointments', () => {
  beforeEach(() => {
    cy.request('GET', '/api/debug/reset'); // DB reset

    cy.visit('/'); // check start from Home

    cy.contains('Monday'); // Monday default
  });

  it('should book an interview', () => {
    cy.get('[alt=Add]').first().click();

    cy.get('[data-testid=student-name-input]').type('Mikiyoshi Kokura');
    cy.get('[alt="Sylvia Palmer"]').click();

    cy.contains('Save').click();

    cy.contains('.appointment__card--show', 'Mikiyoshi Kokura');
    cy.contains('.appointment__card--show', 'Sylvia Palmer');
  });
  it('should edit an interview', () => {
    cy.get('[alt=Edit]').first().click({ force: true });

    cy.get('[data-testid=student-name-input]').clear().type('Mikiyoshi Kokura');
    cy.get("[alt='Tori Malcolm']").click();

    cy.contains('Save').click();

    cy.contains('.appointment__card--show', 'Mikiyoshi Kokura');
    cy.contains('.appointment__card--show', 'Tori Malcolm');
  });
  it('should cancel an interview', () => {
    cy.get('[alt=Delete]').click({ force: true });

    cy.contains('Confirm').click();

    cy.contains('Deleting').should('exist');
    cy.contains('Deleting').should('not.exist');

    cy.contains('.appointment__card--show', 'Archie Cohen').should('not.exist');
  });
});
