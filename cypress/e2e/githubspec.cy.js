function successful login() {
Cy.visit("www.sucedemo.com")
Cy.get("#username").type("standard_user")
cy.get("#password").type("secret_sauce")
cy.get("login-button").click()
cy.get("#dashboard-username").should("contain",standard_user)
}