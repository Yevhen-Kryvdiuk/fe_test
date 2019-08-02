const R = require('ramda');

const capitalize = R.compose(
  R.join(''),
  R.juxt([R.compose(R.toUpper, R.head), R.tail])
);

const capitalizeForAll = R.compose(
  R.join(' '),
  R.map(capitalize),
  R.split(' ')
);

export default capitalizeForAll;
