'use strict';

function minmax() {
  var n = document.getElementById("randomRange").value;
  var a = Math.min(3, n);
  var b = Math.max(3, n);
  var c = Math.max(3, Math.min(6, n));

  var s = "n=" + n + " min(3, n)=" + a + " max(3, n)=" + b + " c=" + c;
  document.getElementById("info").textContent = s;
}

function random() {
  var n = document.getElementById("randomRange").value;
  var a = Math.random();
  var b = Math.floor(a * n);
  var s = "n=" + n + " a=" + a + " b=" + b;

  document.getElementById("info").textContent = s;
  console.log(Math.sqrt(n));
}
