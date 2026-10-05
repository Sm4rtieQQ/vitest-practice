import { multiply } from "../src/multiply";

describe("multiply function", () => {
  it("should multiply positive numbers", () => {
    // Arrange
    const a = 3;
    const b = 4;
    const expectedResult = 12;

    // Act
    const result = multiply(a, b);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should multiply negative numbers", () => {
    // Arrange
    const a = -2;
    const b = 3;
    const expectedResult = -6;

    // Act
    const result = multiply(a, b);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should multiply 0", () => {
    // Arrange
    const a = 5;
    const b = 0;
    const expectedResult = 0;

    // Act
    const result = multiply(a, b);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should multiply decimals", () => {
    // Arrange
    const a = 2.5;
    const b = 4;
    const expectedResult = 10;

    // Act
    const result = multiply(a, b);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should multiply large numbers", () => {
    // Arrange
    const a = 1000;
    const b = 1000;
    const expectedResult = 1000000;

    // Act
    const result = multiply(a, b);

    // Assert
    expect(result).toBe(expectedResult);
  });
});
