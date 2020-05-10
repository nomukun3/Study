'use strict';

var ctx;
function init() {
  var canvas = document.getElementById("canvas");

  ctx = canvas.getContext("2d");
  ctx.strokeStyle = "#FF0000";
  ctx.fillStyle = "#00FF00";
  ctx.lineWidth = 10;
  ctx.lineCap = "round";

  ctx.shadowColor = "#000000";
  ctx.shadowBlur = 20;
  ctx.beginPath();

  ctx.moveTo(100, 100);
  ctx.lineTo(300, 150);
  ctx.stroke();

  ctx.fillRect(100, 200, 200, 100);
  ctx.strokeRect(100, 200, 200, 100);
}
