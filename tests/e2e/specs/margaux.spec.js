describe("Scenarios for page Antonio", () => {
  it("Visits page /antonio", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[href="/margaux"]').click();
    cy.url().should("include", "/margaux");
  });

  it("les urls réseaux sont bonnes", () => {
    cy.get("#linkedin").should(
      "have.attr",
      "href",
      "https://www.linkedin.com/in/margauxmalsch/"
    );
    cy.get("#tiktok").should(
      "have.attr",
      "href",
      "https://vm.tiktok.com/ZMRgRUkdo/"
    );
    cy.get("#instagram").should(
      "have.attr",
      "href",
      "https://www.instagram.com"
    );
    cy.get("#github").should(
      "have.attr",
      "href",
      "https://github.com/MargauxMalsch"
    );
  });
});
