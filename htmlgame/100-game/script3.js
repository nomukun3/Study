'use strict';

let ctx, x = 1100, y = 150 + 50, keyCode;

let r = 0, n = 1;

let canvas = document.getElementById("main");
let onpu = [];
let onpux = [];
let onpuy = [];

for (let i = 0; i < 5; ++i) {
  onpu[i] = document.getElementById("onpu");
  onpux[i] = x;
  onpuy[i] = y;
}



ctx = canvas.getContext("2d");


function init() {
  if (n <= 6) {
    setInterval(main, 100);
    n += 1;
    console.log(n);
  }else{
    clearInterval(setInterval(main, 100));
  }
}

function main() {
  verticalline();
  sedeline();
  ctx.drawImage(onpu[n], onpux[n], y);
  onpux[n] = onpux[n] - 10;
}


// 背景の線
function verticalline() {
  ctx.strokeStyle = "#696969";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(150, 100);
  ctx.lineTo(150, 600);
  ctx.stroke();
}


function sedeline() {
  for (let i = 0; i < 5; ++i) {
    ctx.strokeStyle = "#696969";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50 , 150 + (30 * i) );
    ctx.lineTo(1200, 150 + (30 * i) );
    ctx.stroke();
  }
}

