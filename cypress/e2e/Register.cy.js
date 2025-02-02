describe("Register", function () {
  it("Test1 - Create Account", function () {
    cy.visit(Cypress.config("baseUrl")); //memanggil url yang berada pada cypressconfig secara global
    cy.get(".chakra-button").contains("Izinkan semua cookies").click();
    cy.get('svg[width="45"][height="46"]').click(); //close pop up
    cy.get("#daftar-reseller-navbar").click();

    cy.get("p.chakra-text.css-4hc13")
      .contains("Apakah Anda memiliki Kode Referral dari Sponsor?")
      .scrollIntoView();

    // Pilih opsi dan isi form
    cy.get(":nth-child(2) > .chakra-radio__control").click();
    cy.get(".chakra-button.styles_footer-button__z2tNi.css-taj3dd").click();
    cy.get(
      '[style="margin-top: 2rem; margin-right: 1rem; margin-bottom: 0px;"] > .chakra-input__group > .chakra-input'
    ).type("putra");
    cy.get(
      '[style="margin-right: 1rem; margin-bottom: 0px;"] > .chakra-input__group > .chakra-input'
    ).type("8123456789");
    cy.get(
      ".styles_flex-container__YCmn7 > :nth-child(2) > .chakra-input__group > .chakra-input"
    ).type("putrasan0700@gmail.com");
    cy.get(
      '[style="margin: 16px 0px;"] > .chakra-input__group > .chakra-input'
    ).type("Password123#");
    cy.get(".chakra-button").click();
    cy.get(
      ".chakra-modal__header.styles_registered-header__9Upbh.css-9fgtzh"
    ).should("be.visible");
  });
});
