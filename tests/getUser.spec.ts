import { getAllUsers, getUser } from "../src/getUser";

describe("getUser function", () => {
  it("should return User object when id matches User.id", () => {
    // Arrange
    const id = 2;
    const expectedUser = { id: 2, name: "Bram", active: false };

    // Act
    const result = getUser(id);

    // Assert
    expect(result).toMatchObject(expectedUser);
  });

  it("should return Undefined when no User.id matches id", () => {
    // Arrange
    const id = 5;

    // Act
    const result = getUser(id);

    // Assert
    expect(result).toBeUndefined();
  });

  it("should return Undefined when User.id is negative", () => {
    // Arrange
    const id = -5;

    // Act
    const result = getUser(id);

    // Assert
    expect(result).toBeUndefined();
  });

  it("should not mutate array length", () => {
    // Arrange
    const users = getAllUsers();
    const expectedLength = users.length;

    // Act
    getUser(1);
    getUser(5);

    // Assert
    expect(users).toHaveLength(expectedLength);
  });
});
