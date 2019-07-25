'use strict';

const applyFirstToUpper = require('./firstToUpper');

const source = ['Hi', '1hi', 'hello', 'my name', '*star', ' by'];
applyFirstToUpper();

test('for \'Hi\'.firstToUpper', () => {
  expect(source[0].firstToUpper())
    .toBe('Hi');
});

test('for \'1hi\'.firstToUpper', () => {
  expect(source[1].firstToUpper())
    .toBe('1hi');
});

test('for \'hello\'.firstToUpper', () => {
  expect(source[2].firstToUpper())
    .toBe('Hello');
});

test('for \'my name\'.firstToUpper', () => {
  expect(source[3].firstToUpper())
    .toBe('My name');
});

test('for \'*star\'.firstToUpper', () => {
  expect(source[4].firstToUpper())
    .toBe('*star');
});

test('for \' by\'.firstToUpper', () => {
  expect(source[5].firstToUpper())
    .toBe(' by');
});
