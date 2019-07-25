'use strict';

const coolAdd = require('./coolAdd');

//here '+' because the function returns a function
test('for coolAdd(1)', () => {
  expect(+coolAdd(1))
    .toBe(1);
});

test('for coolAdd(1, 2)', () => {
  expect(+coolAdd(1, 2))
    .toBe(3);
});

test('for coolAdd(1)(2)', () => {
  expect(+coolAdd(1)(2))
    .toBe(3);
});

test('for coolAdd(1, 2, 3)', () => {
  expect(+coolAdd(1, 2, 3))
    .toBe(6);
});

test('for coolAdd(1)(2)(3)', () => {
  expect(+coolAdd(1)(2)(3))
    .toBe(6);
});

test('for coolAdd(1, 2)(3)', () => {
  expect(+coolAdd(1, 2)(3))
    .toBe(6);
});

test('for coolAdd(1, 2)(3, 4)', () => {
  expect(+coolAdd(1, 2)(3, 4))
    .toBe(10);
});
