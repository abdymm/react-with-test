// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';
import { Calculator } from "./Calculator";

test("Calc-Add", () => {
  expect(Calculator.add(1,2)).toBe(3);
});
test("Calc-Subtract", () => {
  expect(Calculator.subtract(1,2)).toBe(1);
});
test("Calc-Multiply", () => {
  expect(Calculator.multiply(1,2)).toBe(2);
});
test("Calc-Div", () => {
  expect(Calculator.div(1,2)).toBe(2);
});
test("Calc-Multiply-Failed", () => {
  expect(Calculator.multiply(100,223)).toBe(2);
});
