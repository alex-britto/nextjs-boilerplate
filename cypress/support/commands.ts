Cypress.Commands.add("getByData", (seletor) => {
  return cy.get(`[data-cy=${seletor}]`)
})

Cypress.Commands.add("textVerify", (seletor, text) => {
  cy.get(`${seletor}`).contains(`${text}`)
})

Cypress.Commands.add("login", (user, password) => {
  cy.visit("/login")
  cy.getByData("user-input").type(`${user}`)
  cy.getByData("password-input").type(`${password}`)
  cy.getByData("login-button").click()
})
