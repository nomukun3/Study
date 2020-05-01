'use strict';

var th = document.getElementsByName("th");

var count = 0;

function clickMe(e) {
  count++;
  if (count % 2 == 0) {
    e.textContent = "○";
  } else {
    e.textContent = "×";
  }
}
