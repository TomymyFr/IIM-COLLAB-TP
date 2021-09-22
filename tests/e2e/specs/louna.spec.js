describe("node app", () => {
  it("should visit a site", () => {
    cy.visit("http://localhost:8080/louna/");
  });

  it("louna_test1", () => {
    //verif text descriptif d'un lien
    cy.get("#test1").should("have.text", " - GitHub");
  });

  it("louna_test2", () => {
    // verif style d'un bouton
    cy.get("#test2").should("have.css", "border", "0px none rgb(0, 0, 0)");
  });
});
