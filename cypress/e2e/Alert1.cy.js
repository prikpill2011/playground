describe('alert testing', function () {
  // test case
  it('Test Case1', function (){
     Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      });
     // launch the url
     cy.visit("https://demoqa.com/alerts")
     // click on submit button to produce the alert pop up
     cy.get('#alertButton').click();
  });
});

        it('Test timer alert', function () {
              Cypress.on('uncaught:exception', (err, runnable) => {
                 // returning false here prevents Cypress from
                 // failing the test
                 return false
               });
           // launch the url
           cy.visit("https://demoqa.com/alerts");
           // click on submit button to produce the alert pop up
           cy.get('#timerAlertButton').click();
           // wait for 5 seconds
           cy.wait(5000);//wait for 5 seconds
           cy.on('window:alert',(text) => {
              //Mocha assertions
              expect(text).to.contains('this alert appeard after 5 seconds');
        });
     });

  
     describe('confirm alert', function () {
        // test case
        it('Test Case3', function (){
           // launch the url
           cy.visit("https://demoqa.com/alerts")
           // click on submit button to produce the confirmation alert pop up
           cy.get('#confirmButton').click();
           // firing window: alert event with on() method
           cy.on('window:confirm',(txt)=>{
              //Mocha assertions
              expect(txt).to.contains('Do you confirm action?');
           })
        });
     });
     
