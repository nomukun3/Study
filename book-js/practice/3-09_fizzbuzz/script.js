'use strict';

let num = 0;

function fizzbuzz(num) {
  if (num%5 === 0 && num%3 === 0) {
    return 'fizzbuzz';
  } else if (num%5 === 0){
    return 'fizz';
  } else if (num%3 === 0){
    return 'buzz';
  } else {
    return num;
  }
}

let i = 0;
while (i < 30) {
  console.log(fizzbuzz(i));
  i += 1;
}
