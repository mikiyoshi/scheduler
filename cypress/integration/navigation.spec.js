describe('Navigation', () => {
  it('should visit root', () => {
    cy.visit('/'); // check start from Home
  });
  it('should navigate to Tuesday', () => {

    cy.contains('li', 'Tuesday') // if nav include Tuesday, change color
      .click()
      .should('have.css', 'background-color', 'rgb(242, 242, 242)');
  });
});
