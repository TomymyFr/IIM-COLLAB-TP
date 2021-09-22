describe("Task to-do", () => {
  it("Visite la page /Florent", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[href="/florent"]').click();
    cy.url().should("include", "/florent");
  });

  it("Vérifier qu'il y a le bon texte dans la div intro", () => {
    cy.visit("http://localhost:8080/florent");
    cy.get(".intro").should("have.text", "Salut moi c'est Florent Quintin");
  });

  it("Visiter la page Twitch en cliquant sur le lien", () => {
    cy.get(".twitch").click();
  });
});
