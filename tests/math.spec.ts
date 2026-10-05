import { add } from "../src/math";

describe("add function", () => {
  it("should add two numbers", () => {
    // Arrange
    const a = 2;
    const b = 3;

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(5);
  });

  it("should return a negative number when adding two negative numbers", () => {
    // Arrange
    const a = -2;
    const b = -3;

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(-5);
  });

  it("should return 0 when adding 0 and 0", () => {
    // Arrange
    const a = 0;
    const b = 0;

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(0);
  });
});
