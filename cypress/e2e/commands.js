// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/*
Cypress.Commands.add('login', (username, password) => {
    // login logic here
});

it ('logs in succesfully', () => {
    cy.login('standard_user', 'secret_sauce')
    //add assertions here to verify that the login was succesfull
    cy.visit('www.saucedemo.com');
    //cy.timeout (['time-out'], 10000)
    //cy. timeout('#username',{timeout:40000});
   });
    
 
  export const config = {
    pageLoadTimeout:60000 //sets the global page load timeout to 60 seconds
  }*/

  //Test case1- Valid loginStandard User Login 
  Cypress.Commands.add('login', (username, password) => {
    // login logic here
    cy.visit('www.saucedemo.com');
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click()
  })
