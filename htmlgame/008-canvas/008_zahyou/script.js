'use strict';

var ctx;

function init() {
  var canvas = document.getElementById("canvas");

  ctx = canvas.getContext("2d");


  for (let i = 0; i < 12; ++i) {
    ctx.save();

    var r = Math.PI / 6 * i;
    ctx.translate(100, 100);
    ctx.rotate(r);

    ctx.beginPath();
    ctx.moveTo(0, -60);
    ctx.lineTo(0, -50);
    ctx.stroke();

    ctx.restore();
  }
}
