'use strict';

let ctx, x = 1100, y = 150 + 50;


let canvas = document.getElementById("main");
ctx = canvas.getContext("2d");


function init() {
  setInterval(main, 10);
}







function main() {
  let onpu = document.getElementById("onpu");
  
  if (x >= 100) {
    ctx.clearRect(x, y, onpu.width, onpu.height);
    x=x-10;
    verticalline();
    sedeline();
    ctx.drawImage(onpu, x, y);
  }else{
    ctx.clearRect(x, y, onpu.width, onpu.height);
    verticalline();
    sedeline();
  }
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




