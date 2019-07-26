'use strict';

const coolAdd = (...args) => {
  return args.length === 2
    ? args.reduce((a, b) => a + b)
    : b => args[0] + b;
};

module.exports = coolAdd;
