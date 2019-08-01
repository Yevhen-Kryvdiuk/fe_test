const R = require('ramda');

const getSum = R.compose(
  R.sum,
  R.map(Number),
  R.split(' ')
);

export default getSum;
