describe("Testando formulário de login", () => {
  it("Deve acessar página de dashboard, caso realize o login corretamente", () => {
    cy.login("Teste", "12345")
    cy.location("pathname").should("eq", "/dashboard")
  })
})
