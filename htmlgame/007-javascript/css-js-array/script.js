'use strict';

var data = [1,8,5,7,2,6,7,4,0];

console.log(data);

var r0 = data.length;

console.log(r0);

var r1 = data.indexOf(2);

console.log(r1);

var r2 = data.lastIndexOf(2);

console.log(r2);

var r3 = data.splice(2,4);

console.log(r3);

var r4 = data.sort();

console.log(r4);

var r5 = data.push(9);

console.log(r5);

var data2 = [1,8,5,7,2,6,7,4,0];

var r6 = data2.pop();

console.log(r6);

console.log(data2);

data2.forEach(function (n) {
  console.log("n=" + n);
});

















