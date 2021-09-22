describe("Scenarios for page SachaL", () => {
  it("Visits page /sachaL", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[href="/sachaL"]').click();
    cy.url().should("include", "/sachaL");
  });

  it("Vérification titre page", () => {
    cy.get(".link").should("contain", "Le Bras Sacha").and("be.visible");
    cy.get(".link").click();
    cy.get(".link").should("have.attr", "href", "https://github.com/Sacha-lb");
  });

  it("Vérification CSS", () => {
    cy.get("#page").should(
      "have.css",
      "background-color",
      "rgb(245, 245, 239)"
    );
    cy.get(".git").should("have.css", "font-weight", "700");
  });

  it("Vérification fonctionnement bouttons", () => {
    cy.get(".left").should("have.css", "opacity", "0");
    cy.get(".right").should("have.css", "opacity", "1");
    cy.get(".left").click();
    cy.get(".left").should("have.css", "opacity", "1");
    cy.get(".right").should("have.css", "opacity", "0");
    cy.get(".right").click();
    cy.get(".left").should("have.css", "opacity", "0");
    cy.get(".right").should("have.css", "opacity", "1");
  });

  it("Vérification lien projet", () => {
    cy.get(".projectSingle").click();
    cy.get(".projectSingle").should(
      "have.attr",
      "href",
      "https://github.com/Sacha-lb/renduPOO"
    );
  });
});
