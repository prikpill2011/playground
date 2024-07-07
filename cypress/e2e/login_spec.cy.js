

    //Test case1- Valid loginStandard User Login 
    describe('Standard User Login', () => {
      const username = 'standard_user';
      const password = 'secret_sauce';
      
      it('successfully logs in with valid credentials', () => {
      cy.timeout (['time-out'], 10000)
      cy.timeout('#username',{timeout:4000});
     });
      });
 // Test Case 2: Invalid Login

  describe('Standard User Login', () => {
    const invalidUsername = 'invalid_user';
    const invalidPassword = 'wrong_password';
    
    it('unsuccessfully logs in with invalid credentials', () => {
    cy.visit('www.saucedemo.com');
    cy.get('#user-name').type(invalidUsername);
    cy.get('#password').type(invalidPassword);
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service');
    });
    });
    

//Test Case 3: Navigation Through Pages


    describe('Standard User Login', () => {
      const username = 'standard_user';
      const password = 'secret_sauce';
      
      it('navigates through different pages', () => {
      cy.visit('www.saucedemo.com');
      cy.get('#user-name').type(username);
      cy.get('#password').type(password);
      cy.get('#login-button').click();
      
      cy.get('#inventory').click();
      cy.url().should('contain', 'www.saucedemo.com');
      
      cy.get('#cart').click();
      cy.url().should('contain', 'www.saucedemo.com');
      
      cy.get('#checkout').click();
      cy.url().should('contain', 'www.saucedemo.com');
      });
      });
      
      
      //Test Case 4: Adding Items to Cart
      
      
      describe('Standard User Login', () => {
      const username = 'standard_user';
      const password = 'secret_sauce';
      const itemName = 'Sauce Labs Backpack';
      
      it('adds item to cart', () => {
      cy.visit('www.saucedemo.com');
      cy.get('#user-name').type(username);
      cy.get('#password').type(password);
      cy.get('#login-button').click();
      
      cy.get('#inventory_container').contains(itemName).click();
      cy.get('#add-to-cart').click();
      cy.get('#shopping_cart_container').should('contain', itemName);
      });
      });
      
      
    //Test Case 5: Checking Out_
      
      
      describe('Standard User Login', () => {
      const username = 'standard_user';
      const password = 'secret_sauce';
      const itemName = 'Sauce Labs Backpack';
      
      it('completes checkout process', () => {
      cy.visit('www.saucedemo.com');
      cy.get('#user-name').type(username);
      cy.get('#password').type(password);
      cy.get('#login-button').click();
      
      cy.get('#inventory_container').contains(itemName).click();
      cy.get('#add-to-cart').click();
      cy.get('#shopping_cart_container').should('contain', itemName);
      
      cy.get('#checkout').click();
      cy.get('#first-name').type('Test');
      cy.get('#last-name').type('User');
      cy.get('#postal-code').type('12345');
      cy.get('#continue').click();
      cy.get('#finish').click();
      cy.url().should('contain', 'www.saucedemo.com');
      });
      });
      