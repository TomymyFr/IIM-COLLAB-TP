describe("Scenarios for page Louis", () => {
  it("Visits page /Louis", () => {
    cy.visit("http://localhost:8080/Louis");
  });

  it("Check the spotify link", () => {
    cy.get("#spotify").should(
      "have.attr",
      "href",
      "https://open.spotify.com/album/3HaEZ2xc3dWnWYby3jQ0mm?si=qQOcBhf8Tb2_3qNfETy3SQ&dl_branch=1"
    );
  });

  it("Check the H1 CSS ", () => {
    cy.get(".titreprenom").should("have.css", "color", "rgb(255, 255, 255)");
  });
});
