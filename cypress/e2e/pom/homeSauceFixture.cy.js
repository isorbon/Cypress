import homeSaucePage from "../../pom_modules/homeSaucePage";
import inventoryPage from "../../pom_modules/inventoryPage";

const tests = require("../pom/data-driven.json");

describe("Home Sauce Demo", () => {
  beforeEach(function() {
    cy.visit("https://www.saucedemo.com/");
  });

  tests.forEach((test) => {
    it(test.name, function () {
      homeSaucePage.typeUsername(tests.username);
      homeSaucePage.typePassword(tests.password);
      homeSaucePage.clickLogin();

      if (test.name === "should login to inventory page") {
        inventoryPage.elements.titleSpan().should("have.text", test.expected);
      } else {
        homeSaucePage.elements
          .errorMessage()
          .should("have.text", test.expected);
      }
    });
  });
});
