'use strict';

let ctx, x = 1100, y = 150 + 50, keyCode;

let r = 0;

let canvas = document.getElementById("main");
let onpu = document.getElementById("onpu");

let xxx = [];

let yyy = [];


ctx = canvas.getContext("2d");


function init() {


  verticalline();
  sedeline();

  setInterval(main1, 300);
  // setInterval(main2, 100);
}


function main1() {
  ctx.drawImage(onpu, x, xxx[r] * 20 + 100);
  r += 1;
}


function main2() {
  if (x >= 0) {
    write();
    key();
  }else{
    clear();
  }
}


for (let i = 1; i < 6; ++i) {
  xxx.push(Math.round( Math.random() * i));
}

console.log(xxx[2]);




function clear() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  verticalline();
  sedeline();
}



function write() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x=x-10;
    verticalline();
    sedeline();
    ctx.drawImage(onpu, x, xxx[2] * 20 + 100);
    // ctx.drawImage(onpu, x, xxx[r] * 20 + 100);
    // r += 1;

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


function key() {
  switch (keyCode) {
    case 65:
      clear();
        break;
    case 83:
      clear();
        break;
    case 68:
      clear();
        break;
    case 70:
      clear();
        break;
    case 71:
      clear();
        break;
    case 72:
      clear();
        break;
    case 74:
      clear();
        break;
    case 75:
      clear();
        break;
    case 76:
      clear();
        break;
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

