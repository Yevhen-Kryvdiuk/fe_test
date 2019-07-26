'use strict';

const coolAdd = require('./coolAdd');

test('for coolAdd(1, 2)', () => {
  expect(+coolAdd(1, 2))
    .toBe(3);
});

test('for coolAdd(1)(2)', () => {
  expect(+coolAdd(1)(2))
    .toBe(3);
});
