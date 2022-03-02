describe('Navigation', () => {
  it('should visit root', () => {
    cy.visit('/');
  });
  it('should navigate to Tuesday', () => {
    // cy.get('li').contains('Tuesday').click();
    // cy.contains('li', 'Tuesday').should(
    //   'have.css',
    //   'background-color',
    //   'rgb(242, 242, 242)'
    // );

    cy.contains('li', 'Tuesday')
      .click()
      .should('have.css', 'background-color', 'rgb(242, 242, 242)');
    // cy.visit('/');

    // cy.contains('[data-testid]', 'Tuesday') // this is a extra task from W8D2 Integration Testing
    //   .click()
    //   .should('have.class', 'day-list__item--selected');
  });
});
