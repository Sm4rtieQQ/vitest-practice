import { capitalize } from "../src/capitalize";

describe("capitalize function", () => {
  it("should capitalize a string", () => {
    // Arrange
    const string = "hello";
    const expectedResult = "Hello";

    // Act
    const result = capitalize(string);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should do nothing if string is already capitalized", () => {
    // Arrange
    const string = "Hello";
    const expectedResult = "Hello";

    // Act
    const result = capitalize(string);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should ignore empty strings", () => {
    // Arrange
    const string = "";
    const expectedResult = "";

    // Act
    const result = capitalize(string);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should retain whitespaces", () => {
    // Arrange
    const string = "   ";
    const expectedResult = "   ";

    // Act
    const result = capitalize(string);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should ignore strings where first character is not a letter", () => {
    // Arrange
    const string = "123abc";
    const expectedResult = "123abc";

    // Act
    const result = capitalize(string);

    // Assert
    expect(result).toBe(expectedResult);
  });
});
