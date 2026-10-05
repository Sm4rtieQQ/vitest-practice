import { getUserName } from "../src/getUserName";

describe("getUserName function", () => {
  it("should return Guest if user === null", () => {
    // Arrange
    const user = null;
    const expectedResult = "Guest";

    // Act
    const result = getUserName(user);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should return Guest if user === undefined", () => {
    // Arrange
    const user = undefined;
    const expectedResult = "Guest";

    // Act
    const result = getUserName(user);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should return Anonymous if name property does not exist", () => {
    // Arrange
    const user = {};
    const expectedResult = "Anonymous";

    // Act
    const result = getUserName(user);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should return Anonymous if name property is empty", () => {
    // Arrange
    const user = { name: "" };
    const expectedResult = "Anonymous";

    // Act
    const result = getUserName(user);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should return Anonymous if name property is only whitespaces", () => {
    // Arrange
    const user = { name: "           " };
    const expectedResult = "Anonymous";

    // Act
    const result = getUserName(user);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should return a string with no whitespaces at the ends", () => {
    // Arrange
    const user = { name: "    Jan       " };
    const expectedResult = "Jan";

    // Act
    const result = getUserName(user);

    // Assert
    expect(result).toBe(expectedResult);
  });
});
