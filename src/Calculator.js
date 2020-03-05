export const Calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => (x > y ? x - y : y - x),
  multiply: (x, y) => x * y,
  div: (x, y) => (x > y ? x / y : y / x)
};

export const Total = (x, y) => {
  return (
    Calculator.add(x, y) +
    Calculator.subtract(x, y) +
    Calculator.multiply(x, y) +
    Calculator.div(x, y)
  );
};
