export const Calculator = {
  add: (x, y) => {
    return x + y;
  },
  subtract: (x, y) => {
    return x > y ? x - y : y - x;
  },
  multiply: (x, y) => {
    return x * y;
  },
  div: (x, y) => {
    return x > y ? x / y : y / x;
  }
};
