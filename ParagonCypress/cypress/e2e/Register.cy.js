let isAccountCreated = false;

describe("Paragon", () => {
  beforeEach(() => {
    cy.visit("https://recruitment-staging-queenbee.paradev.io/");
  });

  it("Register", () => {
    if (!isAccountCreated) {
      cy.get(".css-1hyoz7m > .chakra-button").click();
      cy.get(".chakra-button.styles_button__lvBAN.css-taj3dd").click();
      cy.go("back");
      cy.get("#daftar-reseller-navbar").click();
      cy.get(":nth-child(2) > .chakra-radio__control");
      cy.get(".chakra-button");
      cy.get(
        '[style="margin-top: 2rem; margin-right: 1rem; margin-bottom: 0px;"] > .chakra-input__group > .chakra-input'
      ).type("ichsan");
      cy.get(
        '[style="margin-right: 1rem; margin-bottom: 0px;"] > .chakra-input__group > .chakra-input'
      ).type(83807891611);
      cy.get(
        ".styles_flex-container__YCmn7 > :nth-child(2) > .chakra-input__group > .chakra-input"
      ).type("tester@gmail.com");
      cy.get(
        '[style="margin: 16px 0px;"] > .chakra-input__group > .chakra-input'
      ).type("Password123#");
      cy.get(".chakra-button").click();

      isAccountCreated = true;
    } else {
      cy.log("Account already created. Skipping signup.");
    }
  });

  it("Checkout", () => {
    cy.get(
      ":nth-child(1) > .styles_card-info-wrapper__9HT1O > :nth-child(2) > #add-to-cart-recomendation > .ButtonKeranjangQbee_add-to-cart-text__wDLxl"
    ).click();
    cy.get(".css-1pmgona").click();
    cy.get(
      ":nth-child(7) > .styles_card-info-wrapper__9HT1O > :nth-child(2) > #add-to-cart-recomendation > .ButtonKeranjangQbee_add-to-cart-text__wDLxl"
    ).click();
    cy.get(
      ":nth-child(10) > .styles_card-info-wrapper__9HT1O > :nth-child(2) > #add-to-cart-recomendation"
    ).click();
    cy.get(
      ":nth-child(9) > .styles_card-info-wrapper__9HT1O > :nth-child(2) > #add-to-cart-recomendation > .ButtonKeranjangQbee_add-to-cart-text__wDLxl"
    ).click();
    cy.get(
      ":nth-child(16) > .styles_card-info-wrapper__9HT1O > :nth-child(2) > #add-to-cart-recomendation > .ButtonKeranjangQbee_add-to-cart-text__wDLxl"
    ).click();
    cy.go("back");
    cy.get(".icon-nav > ul > :nth-child(3)").click();
    cy.get(".css-1pilj7v").click();
    cy.get(".pickDelivery_pickDelivery-lower__Dl42_").click();
    cy.get(
      ":nth-child(2) > .pickDelivery_regular-delivery-content__9aYv_ > .pickDelivery_title-content__K_E9L > .pickDelivery_input-margin__Bg4Tr"
    ).click();
    cy.get(
      ":nth-child(2) > .pickDelivery_regular-delivery-content__9aYv_ > .pickDelivery_title-content__K_E9L > .pickDelivery_input-margin__Bg4Tr"
    ).click();
    cy.get(".checkoutSummary_checkout-total__A_3jU > .chakra-button").click();
  });
});
