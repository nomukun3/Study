'use strict';

var timerId;

function timeoutStart() {
  timerId = setTimeout(whatime, 3000);
}

function timeoutStop() {
  clearTimeout(timerId);
}

function intervalStart() {
  timerId = setInterval(whatime, 0);
}

function intervalStop() {
  clearInterval(timerId);
}

function whatime() {
  document.getElementById("info").textContent = new Date();
}
