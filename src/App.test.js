import { Calculator, Total } from "./Calculator";

const add = jest.fn(() => Calculator.add(2,2));

//UNIT TEST
test("Calc-Add", () => {
  expect(Calculator.add(2, 2)).toBe(4);
  expect(add).toHaveBeenCalledTimes(1);
});
test("Calc-Subtract", () => {
  expect(Calculator.subtract(1, 2)).toBe(1);
});
test("Calc-Multiply", () => {
  expect(Calculator.multiply(1, 2)).toBe(2);
});
test("Calc-Div", () => {
  expect(Calculator.div(1, 2)).toBe(2);
});

//INTEGRATTION TEST
test("Calc-TOTAL", () => {
  expect(Total(10, 20)).toBe(242);
});
