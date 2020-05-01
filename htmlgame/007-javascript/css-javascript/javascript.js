'use strict';

var colors = ["red", "blue", "yellow", "green"];

var index = 0;

function changeColor() {
  document.getElementById("ufo").style.color = colors[index];

  console.log(index);

  if (index++ >= colors.length) {
    console.log(index);
    index = 0;
  }
  
}
