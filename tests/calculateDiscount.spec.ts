import { calculateDiscount } from "../src/calculateDiscount";

const priceError = "Price cannot be negative";
const discountError = "Discount must be between 0 and 100";

describe("calculateDiscount function", () => {
  it("should throw when value is negative", () => {
    // Arrange
    const price = -50;
    const discount = 10;

    // Act & Assert
    expect(() => calculateDiscount(price, discount)).toThrow(priceError);
  });

  it("should throw when discount is negative", () => {
    // Arrange
    const price = 100;
    const discount = -10;

    // Act & Assert
    expect(() => calculateDiscount(price, discount)).toThrow(discountError);
  });

  it("should throw when discount > 100", () => {
    // Arrange
    const price = 100;
    const discount = 150;

    // Act & Assert
    expect(() => calculateDiscount(price, discount)).toThrow(discountError);
  });

  it("should calculate discount", () => {
    // Arrange
    const price = 100;
    const discount = 20;
    const expectedResult = 80;

    // Act
    const result = calculateDiscount(price, discount);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should calculate 0% discount", () => {
    // Arrange
    const price = 50;
    const discount = 0;
    const expectedResult = 50;

    // Act
    const result = calculateDiscount(price, discount);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should accept 100% discount", () => {
    // Arrange
    const price = 100;
    const discount = 100;
    const expectedResult = 0;

    // Act
    const result = calculateDiscount(price, discount);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should accept 0 price with discount", () => {
    // Arrange
    const price = 0;
    const discount = 20;
    const expectedResult = 0;

    // Act
    const result = calculateDiscount(price, discount);

    // Assert
    expect(result).toBe(expectedResult);
  });
});
