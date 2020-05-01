'use strict';

function calc(argument) {
  var w = document.getElementById("weight").value;

  var h = document.getElementById("height").value;

  var r = w/(h*h);

  r = Math.floor(r);

  document.getElementById("result").textContent="あなたのBMIは"+r+"です。";
}
