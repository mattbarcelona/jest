const { isNumber, add, subtract, multiply, divide } = require("./index");

describe("isNumber", () => {
  it("should return true if a is a number", () => {
    expect(isNumber(1)).toBe(true);
  });
  it("should return false if a is not a number", () => {
    expect(isNumber("1")).not.toBe(true);
  });
});

describe("add", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("should throw an error if a or b are not numbers", () => {
    expect(() => add(1, "2")).toThrow("a and b must be numbers");
  });
});

describe("subtract", () => {
  it("should subtract two numbers", () => {
    expect(subtract(1, 2)).toBe(-1);
  });
  it("should throw an error if a or b are not numbers", () => {
    expect(() => subtract(1, "2")).toThrow("a and b must be numbers");
  });
});

describe("multiply", () => {
  it("should multiply two numbers", () => {
    expect(multiply(1, 2)).toBe(2);
  });
  it("should throw an error if a or b are not numbers", () => {
    expect(() => multiply(1, "2")).toThrow("a and b must be numbers");
  });
});

describe("divide", () => {
  it("should divide two numbers", () => {
    expect(divide(1, 2)).toBe(0.5);
  });
  it("should throw an error if a or b are not numbers", () => {
    expect(() => divide(1, "2")).toThrow("a and b must be numbers");
  });
  it("should throw an error if b is 0", () => {
    expect(() => divide(1, 0)).toThrow("divisor must be different from 0");
  });
});
