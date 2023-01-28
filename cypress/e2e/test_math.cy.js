// Dummy Application
let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

// Cypress Test
describe("Unit testing of our application", () => {
  context("Math with POSITIVE numbers", () => {

    it("should add positive numbers", () => {
      expect(add(3, 5)).to.eq(8);
    });

    it("should substract positive numbers", () => {
      expect(substract(8, 2)).to.eq(6);
    });

    it("should divide positive numbers", () => {
      expect(divide(9, 3)).to.eq(3);
    });

    it("should multiply positive numbers", () => {
      expect(multiply(8, 5)).to.eq(40);
    });
  });

  describe("Math with DECIMAL numbers", () => {

    it('should add decimal numbers', () => {
        expect(add(3.2,1.2)).to.eq(4.4);
    });

    it('should substract decimal numbers', () => {
        expect(substract(3.2,1.2)).to.eq(2);
    });

    /* it('should divide decimal numbers', () => {
        expect(divide(3.2,1.2)).to.eq(2.0);
    });

    it('should multiply decimal numbers', () => {
        expect(multiply(3.2,1.2)).to.eq(2.0);
    }); */
  });

});
