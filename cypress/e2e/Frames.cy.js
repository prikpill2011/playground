
describe('single tested frame', function () {
   // test case
   it('Test Case7', function () {
      Cypress.on('uncaught:exception', (err, runnable) => {
         // returning false here prevents Cypress from
         // failing the test
         return false
       });
      // launch the application
      cy.visit("https://demoqa.com/frames")
      cy.wait(4000)//wait for 4 second seconds
      cy.get ('<htm1>').get('button').click({force: true});
         });
      });                                                                                                                 


      
describe('Nested Frame', function () {
   // test case
   it('Test Case7', function () {
      Cypress.on('uncaught:exception', (err, runnable) => {
         // returning false here prevents Cypress from
         // failing the test
         return false
       });
      // launch the application
      cy.visit("https://demoqa.com/frames")
      cy.wait(4000)//wait for 4 second seconds
      cy.get ('<body>').get('button').click({force: true});
         });
      }); 