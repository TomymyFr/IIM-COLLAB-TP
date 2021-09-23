describe("Test de Kevin", () => {
  it("Visits the app root url", () => {
    cy.visit("http://localhost:8080/");
  });
});
it("Verify if the content is correct", () => {
  cy.visit("http://localhost:8080/kevin");
  cy.get("h1").contains("Kevin Ho");
  cy.get("h2").contains("i want to be FullStack dev foreal");
  //   cy.get('.contain').find('img').should('have.attr', 'src').should('include','../assets/profil.jpg')
});
