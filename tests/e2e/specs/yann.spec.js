// https://docs.cypress.io/api/introduction/api.html

describe("Scenarios for page Yann", () => {
  it("Visits page /yann", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[href="/yann"]').click();
    cy.url().should("include", "/yann");
  });

  it("play a youtube video", () => {
    cy.visit("http://localhost:8080/yann");

    cy.get(".card > p").should("have.text", "Étudiant en troisième année à l'IIM en recherche d'une alternance");

    cy.get("#projExemple").click();
  });
});
