import { filterEven } from "../src/filterEven";

describe("filter even numbers function", () => {
  it("should filter even numbers in an array", () => {
    // Arrange
    const array = [1, 2, 3, 4, 5, 6];
    const expectedResult = [2, 4, 6];
    const arrayLength = 3;

    // Act
    const result = filterEven(array);

    // Assert
    expect(result).toEqual(expectedResult);
    expect(result).toHaveLength(arrayLength);
  });

  it("should change nothing when all numbers are even", () => {
    // Arrange
    const array = [2, 4, 6];
    const expectedResult = [2, 4, 6];
    const arrayLength = 3;

    // Act
    const result = filterEven(array);

    // Assert
    expect(result).toEqual(expectedResult);
    expect(result).toHaveLength(arrayLength);
  });

  it("should return empty array when no even numbers are given", () => {
    // Arrange
    const array = [1, 3, 5];
    const expectedResult: number[] = [];
    const arrayLength = 0;

    // Act
    const result = filterEven(array);

    // Assert
    expect(result).toEqual(expectedResult);
    expect(result).toHaveLength(arrayLength);
  });

  it("should ignore an empty array", () => {
    // Arrange
    const array: number[] = [];
    const expectedResult: number[] = [];
    const arrayLength = 0;

    // Act
    const result = filterEven(array);

    // Assert
    expect(result).toEqual(expectedResult);
    expect(result).toHaveLength(arrayLength);
  });

  it("should process 0 as even", () => {
    // Arrange
    const array = [0, 1, 2];
    const expectedResult = [0, 2];
    const arrayLength = 2;

    // Act
    const result = filterEven(array);

    // Assert
    expect(result).toEqual(expectedResult);
    expect(result).toHaveLength(arrayLength);
  });

  it("should process negative numbers", () => {
    // Arrange
    const array = [-2, -1, 0, 1, 2];
    const expectedResult = [-2, 0, 2];
    const arrayLength = 3;

    // Act
    const result = filterEven(array);

    // Assert
    expect(result).toEqual(expectedResult);
    expect(result).toHaveLength(arrayLength);
  });
});
