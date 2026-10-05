import { subtract } from "../src/subtract";

describe("subtract function", () => {
  it("should subtract positive numbers correctly", () => {
    // Arrange
    const a = 10;
    const b = 3;
    const expectedResult = 7;

    // Act
    const result = subtract(a, b);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should handle negative numbers correctly", () => {
    // Arrange
    const a = -5;
    const b = -3;
    const expectedResult = -2;

    // Act
    const result = subtract(a, b);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should handle zero correctly", () => {
    // Arrange
    const a = 5;
    const b = 0;
    const expectedResult = 5;

    // Act
    const result = subtract(a, b);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it('should work with decimal numbers', () => {
    // Arrange
    const a = 5.5;
    const b = 2.3;
    const expectedResult = 3.2;

    // Act
    const result = subtract(a, b);

    // Assert
    expect(result).toBeCloseTo(expectedResult);
});
});
