const { CYCLIC_KEY } = require('@storybook/addon-actions');

describe('Appointments', () => {
  beforeEach(() => {
    cy.request('GET', '/api/debug/reset'); // DB reset

    cy.visit('/'); // check start from Home

    cy.contains('Monday'); // Monday default
  });

  it('should book an interview', () => {
    cy.get('[alt=Add]').first().click(); // click +

    cy.get('[data-testid=student-name-input]').type('Lydia Miller-Jones'); // type input box
    cy.get('[alt="Sylvia Palmer"]').click(); // choose interviewer

    cy.contains('Save').click(); // save

    cy.contains('.appointment__card--show', 'Lydia Miller-Jones'); // result student name
    cy.contains('.appointment__card--show', 'Sylvia Palmer'); // result interviewer
  });
  it('should edit an interview', () => {
    cy.get('[alt=Edit]').first().click({ force: true });

    cy.get('[data-testid=student-name-input]')
      .clear()
      .type('Lydia Miller-Jones');
    cy.get("[alt='Tori Malcolm']").click();

    cy.contains('Save').click();

    cy.contains('.appointment__card--show', 'Lydia Miller-Jones');
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
