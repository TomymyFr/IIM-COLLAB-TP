// https://docs.cypress.io/api/introduction/api.html

describe("Scenarios for page Julien", () => {
  it("Visits page /julien", () => {
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

  it("Should start the disco party", () => {
    cy.visit("http://localhost:8080/julien");

    cy.get("#lesgo").should("have.text", "Let's go");

    cy.get("#lesgo").click();

    cy.get("#disco").should("not.have.css", "background-color", "rgb(0, 0, 0)");
  });
});
