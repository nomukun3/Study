'use strict';

document.getElementById('pi').textContent = Math.PI;
document.getElementById('floor').textContent = Math.floor(Math.PI);


function point(num, digit) {
  const mover = 10 ** digit;
  return Math.floor(num*mover)/mover;
}

document.getElementById('output').textContent = point(Math.PI, 2);
