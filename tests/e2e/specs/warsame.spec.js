describe("Tests for page Warsame", () => {
  beforeEach(() => cy.visit("http://localhost:8080/warsame"));

  it("should verify main title", () => {
    cy.get("h1").should("have.text", "Bienvenue !");
  });

  it("should verify sub titles", () => {
    cy.get("h2").should("contain", "Qui je suis");
  });

  it("should check if button works", () => {
    cy.get(".more").click();
    cy.get(".more-text").should("contain", "Créatif");
  });

  it("should verify redirection", () => {
    cy.get(".github").click("");
    cy.get(".github").should(
      "have.attr",
      "href",
      "https://github.com/warsamefarah"
    );
  });
});
