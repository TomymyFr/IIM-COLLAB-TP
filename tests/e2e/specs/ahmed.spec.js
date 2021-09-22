describe("Ahmed test", () => {
  it("should visit a site", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[href="/ahmed"]').click();
    cy.url().should("include", "/ahmed");
  });

  it("profile", () => {
    cy.get("h1,h3").should("have.length", 2);
    cy.get("#b1").should("have.length", 1);
  });

  it("url ok", () => {
    cy.get("#b1:nth-child(1)").should(
      "have.attr",
      "href",
      "https://ahmed-jibrilaitouaret.fr/"
    );
    cy.get("#b1:nth-child(2)").should(
      "have.attr",
      "href",
      "https://motomaxfrance.com/"
    );
    cy.get("#b1:nth-child(3)").should(
      "have.attr",
      "href",
      "https://services-store.peugeot.fr/"
    );
  });
});
