'use strict';

var ctx;


function init() {
  var canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  ctx.strokeStyle = "#FF0000";
  ctx.lineWidth = 5;

  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(150, 50);
  ctx.lineTo(200, 100);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "#FF00FF";
  ctx.moveTo(300, 100);
  ctx.lineTo(400, 100);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "#FFFF00";
  ctx.moveTo(500, 100);
  ctx.lineTo(550, 50);
  ctx.lineTo(600, 100);
  ctx.fill();

  ctx.fillRect(100, 30, 80, 50);
  ctx.strokeRect(200, 30, 80, 50);

  ctx.fillRect(300, 30, 80, 50);
  ctx.clearRect(320, 50, 50, 20);



}













