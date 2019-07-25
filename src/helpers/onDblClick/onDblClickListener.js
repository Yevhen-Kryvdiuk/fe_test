'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const test = () => console.info('Double clicked');
  document.getElementById('button').addEventListener('dblclick', test);
});
