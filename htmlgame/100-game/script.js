'use strict';

let ctx, x = 1100, y = 150 + 50, keyCode;


let canvas = document.getElementById("main");
let onpu = document.getElementById("onpu");



ctx = canvas.getContext("2d");


function init() {
  setInterval(main, 100);
}



// どのキーを押しているか確認
document.onkeydown = function(event) {
  if (event) {
    if (event.keyCode) {
        keyCode = event.keyCode;
    } else if (event.which) {
        keyCode = event.which;
    }
  }
  console.log(keyCode);
};


function main() {
  if (x >= 0) {
    write();
    key();
  }else{
    clear();
  }
}




function key() {
  switch (keyCode) {
    case 65:
      clear2();
        break;
    case 83:
      clear2();
        break;
    case 68:
      clear2();
        break;
    case 70:
      clear2();
        break;
    case 71:
      clear2();
        break;
    case 72:
      clear2();
        break;
    case 74:
      clear2();
        break;
    case 75:
      clear2();
        break;
    case 76:
      clear2();
        break;
  }
}



function clear() {
  ctx.clearRect(x,y,canvas.width,canvas.height);
  verticalline();
  sedeline();
}


function clear2() {
  if (x > 50 && x < 150) {
    clear();
  }
}


function write() {
    ctx.clearRect(x, y, onpu.width, onpu.height);
    x=x-10;
    verticalline();
    sedeline();
    ctx.drawImage(onpu, x, y);
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

