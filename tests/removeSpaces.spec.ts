import { removeSpaces } from "../src/removeSpaces";

describe("removeSpaces function", () => {
  it("should remove spaces", () => {
    // Arrange
    const string = "Hello World!";
    const expectedResult = "HelloWorld!";

    // Act
    const result = removeSpaces(string);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should ignore empty string", () => {
    // Arrange
    const string = "";
    const expectedResult = "";

    // Act
    const result = removeSpaces(string);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should return empty string if only spaces are given", () => {
    // Arrange
    const string = "         ";
    const expectedResult = "";

    // Act
    const result = removeSpaces(string);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should work with special characters", () => {
    // Arrange
    const string = "Hé!!0 W0rlD👋";
    const expectedResult = "Hé!!0W0rlD👋";

    // Act
    const result = removeSpaces(string);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should work with very long strings", () => {
    // Arrange
    const string = "a ".repeat(10_000);
    const expectedResult = "a".repeat(10_000);

    // Act
    const result = removeSpaces(string);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should work with numbers only", () => {
    // Arrange
    const string = "10 000 000";
    const expectedResult = "10000000";

    // Act
    const result = removeSpaces(string);

    // Assert
    expect(result).toBe(expectedResult);
  });
});
