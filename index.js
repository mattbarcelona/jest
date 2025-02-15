function isNumber(a) {
  return typeof a === "number";
  // return !isNaN(a); // Otra opción
}
function add(a, b) {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error("a and b must be numbers");
  }
  return a + b;
}

function subtract(a, b) {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error("a and b must be numbers");
  }
  return a - b;
}

function multiply(a, b) {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error("a and b must be numbers");
  }
  return a * b;
}

function divide(a, b) {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error("a and b must be numbers");
  }
  if (b === 0) {
    throw new Error("divisor must be different from 0");
  }
  return a / b;
}

module.exports = {
  isNumber,
  add,
  subtract,
  multiply,
  divide,
};
