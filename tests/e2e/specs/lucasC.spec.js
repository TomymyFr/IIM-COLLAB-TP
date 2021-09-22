describe("Scenarios for page Antonio", () => {
  it("Visits page /lucasC", () => {
    cy.visit("http://localhost:8080/lucasC");
    cy.url().should("include", "/lucasC");
  });

  it("Should have the good text content", () => {
    cy.visit("http://localhost:8080/lucasC");

    cy.get(".header > h1").should("have.text", "Salut moi c Lucas lol");
    cy.get(".info > .pres").should(
      "have.text",
      "Moi c'est Lucas futur devops eheh"
    );
  });

  it("should see if counter work", () => {
    cy.get(".button-counter").click();
    cy.get(".counter").should("contain", "1");

    cy.get(".button-counter").click();
    cy.get(".counter").should("contain", "2");
  });
});
