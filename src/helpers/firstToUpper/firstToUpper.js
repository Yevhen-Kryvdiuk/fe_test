'use strict';

function applyFirstToUpper() {
  ''.__proto__.firstToUpper = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
}

module.exports = applyFirstToUpper;
