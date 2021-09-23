describe("test sacha", () => {
  it("should visit a site", () => {
    cy.visit("localhost:8080/");
    cy.get('[href="/sachag"]').click();
    cy.get(".link_sportnconnect").should(
      "have.attr",
      "href",
      "https://sportsnconnect.com"
    );
    cy.get(".link_curent_work").should(
      "have.attr",
      "href",
      "https://sportsnconnect.com/home/organisateurs"
    );
    cy.get(".profile_picture").should(
      "have.attr",
      "src",
      "https://media-exp1.licdn.com/dms/image/C4D03AQGVNIerdGgB0w/profile-displayphoto-shrink_800_800/0/1581111282751?e=1637798400&v=beta&t=liSwGsFa-BneVeYR5NdyHpwCv7DxR4O0HxUKCo6gZkg"
    );
  });
});
