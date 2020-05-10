'use strict';

var ctx, x = 150, y = 150, isKeyDown, isOpen = true, rotate = 0;


function init() {
  var canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  document.onkeydown = mykeydown;
  document.onkeyup = keyup;
 
  setInterval(tick, 200);
}

function tick() {
  if (isKeyDown) {
    isOpen = !isOpen;
  }
  paint();
}

function mykeydown(e) {
  switch (e.keyCode) {
    case 37:
      rotate = Math.PI;
        break;
    case 38:
      rotate = -Math.PI / 2;
        break;
    case 39:
      rotate = 0;
        break;
    case 40:
      rotate = +Math.PI / 2;
        break;
  }
  isKeyDown = true;
}

function keyup(e) {
  isKeyDown = false;
}

function paint() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 300, 300);

  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.save();
  ctx.translate(x,y);
  ctx.rotate(rotate);
  ctx.moveTo(0,0);

  if (isOpen) {
    ctx.arc(0, 0, 30, -Math.PI / 4, Math.PI / 4, true);
  } else{
    ctx.arc(0, 0, 30, 0, 2 * Math.PI, true);
  }
  ctx.restore();
  ctx.fill();
}
