describe("Test de Hugo", () => {
  it("visiter le site", () => {
    cy.visit("http://localhost:8080/hugo");
  });

  it("Homepage ?", () => {
    cy.get("h1").should("have.text", "Hugo Boudalier");
  });

  it("Test lien Insta", () => {
    cy.get("#instagram").should(
      "have.attr",
      "href",
      "https://www.instagram.com/hugo_kouizine/?hl=fr"
    );
  });

  it("Test lien site", () => {
    cy.get("#rockyourpodcast").should(
      "have.attr",
      "href",
      "https://rockyourpodcast.fr"
    );
  });
});
