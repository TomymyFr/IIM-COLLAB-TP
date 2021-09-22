// https://docs.cypress.io/api/introduction/api.html

describe("Scenarios for page Julien", () => {
  it("Visits page /antonio", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[href="/julien"]').click();
    cy.url().should("include", "/julien");
  });

  it("Should change title when the shuffle button is clicked", () => {
    cy.visit("http://localhost:8080/julien");

    cy.get("h2").should("have.text", "Développeur Back-End");

    cy.get(".main-switch").click();

    cy.get("h2").not("have.text", "Développeur Back-End");
  });
});
