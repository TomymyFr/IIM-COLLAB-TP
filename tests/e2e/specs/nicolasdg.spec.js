// https://docs.cypress.io/api/introduction/api.html

describe("Scenarios for page NicolasDG", () => {
  it("Visits page /nicolasdegarrigues", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[href="/nicolasdegarrigues"]').click();
    cy.url().should("include", "/nicolasdegarrigues");
  });

  it("Should change project when the shuffle button is clicked", () => {
    cy.visit("http://localhost:8080/nicolasdegarrigues");

    cy.get(".desc > a").should(
      "have.text",
      "Projet de groupe Harmonisation du code"
    );

    cy.get(".shuffle").click();

    for (let i = 0; i < 10; i++) {
      cy.get(".counter").click();
    }

    cy.get(".desc > a").should(
      "not",
      "have.text",
      "API REST Associations du pôle"
    );
  });
});
