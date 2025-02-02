describe("Checkout", function () {
  it("Test Checkout", function () {
    cy.visit(Cypress.config("baseUrl"));
    cy.get(".chakra-button").contains("Izinkan semua cookies").click();
    cy.get('svg[width="45"][height="46"]').click(); //close pop up
    cy.contains("Masuk").click();
    cy.get("#page-login__tabs-email").click();
    cy.get(".chakra-input.styles_field-input__odpyq.css-1c6j008").type(
      "putrasan0700@gmail.com"
    );
    cy.get("#page-login__tabs-email__input-password").type("Password123#");
    cy.get("#page-login__button-login").click();
    cy.scrollTo(0, 750);
    cy.get(".HeaderQbee_total-cart-num__JcmEp span")
      .invoke("text")
      .should("match", /^\d+$/)
      .then(($count) => {
        const itemcount = parseInt($count.trim()) || 0;

        if (itemcount > 0) {
          cy.log("Keranjang tidak kosong, melakukan penghapusan...");
          cy.get(".HeaderQbee_total-cart__Acy0A").click();
          cy.wait(1000)
          for (let i = 0; i < 2; i++) {
            cy.get(".chakra-checkbox__control.css-3a538a").click();
          }
          cy.wait(2000);
          cy.contains("Hapus semua").should("be.visible");
          cy.contains("Hapus semua").click();
          cy.get(
            ".chakra-button.styles_popup-delete__button__i5ksa.css-pvbe82"
          ).click();
          cy.get(
            ".chakra-toast > .chakra-toast__inner > .styles_toast-container__4_Rq9 > .styles_close-btn__7qyfq"
          ).click();
          cy.get("svg.chakra-icon.css-13o5j5u").click();
        } else {
          cy.log("Keranjang kosong, langsung checkout...");
        }
        cy.get(
          ":nth-child(6) > .styles_card-info-wrapper__9HT1O > :nth-child(2) > #add-to-cart-recomendation"
        ).click();
        cy.get(
          ":nth-child(7) > .styles_card-info-wrapper__9HT1O > :nth-child(2) > #add-to-cart-recomendation"
        ).click();
        cy.wait(2000);
        cy.scrollTo(0, 780);
        cy.get(
          ":nth-child(11) > .styles_card-info-wrapper__9HT1O > :nth-child(2) > #add-to-cart-recomendation"
        ).click();
        cy.get(
          ":nth-child(12) > .styles_card-info-wrapper__9HT1O > :nth-child(2) > #add-to-cart-recomendation"
        ).click();
        cy.scrollTo("top");
        cy.scrollTo(0, 400);
        cy.contains("Beli sekarang").click();
        cy.contains("Belum menjadi Member").should("be.visible");
        cy.get(".chakra-button.css-13m7q47").click();
        cy.wait(7000);
        for (let i = 0; i < 2; i++) {
          cy.get(".chakra-checkbox__control.css-3a538a").click();
        }
        cy.get(".css-1pilj7v").click();
        // cy.get(".chakra-button.styles_modal-button__Y657x.css-f6n2t5").click();
        // cy.get(".chakra-button.styles_modal-button__SuiXO.css-f6n2t5").click();
        // cy.get(".chakra-button.styles_modal-button__FKoB0.css-f6n2t5").click();
        cy.get(".pickDelivery_pickDelivery-upper__gRRQ_").click();
        cy.contains("Regular").click();
        cy.contains("jne").click();
        cy.get(
          ".chakra-button.checkoutSummary_checkout-btn__eCqC8.css-1kmr4oq"
        ).click();
        cy.contains("Pilih Pembayaran").should("be.visible");
      });
  });
});
