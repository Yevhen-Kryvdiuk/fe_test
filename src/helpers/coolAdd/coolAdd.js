'use strict';

const coolAdd = (...args) => {
  const sumOfArgs = (arrayOfArgs) => {
    return arrayOfArgs.reduce((acc, currentValue) => acc + currentValue);
  };

  let currentSum = sumOfArgs(args);

  const nextFunc = (...nextArgs) => {
    const nextArgsSum = sumOfArgs(nextArgs);
    currentSum += nextArgsSum;
    return nextFunc;
  };

  nextFunc.toString = () => currentSum;
  nextFunc.valueOf = () => currentSum;
  return nextFunc;
};

module.exports = coolAdd;
