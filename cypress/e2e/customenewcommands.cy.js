//First Custom command 
describe('Login Tests', () => {
    it('should successfully log in', () => {
      cy.login('standard_user', 'secret_sauce');
      cy.url().should('include', 'inventory.html'); // Check if redirected to inventory page
    });
  });