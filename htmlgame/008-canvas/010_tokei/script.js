'use strict';

var ctx, h, m, s;


function gobj(id) {
  return document.getElementById(id);
}


function init() {
  ctx = gobj("clock").getContext("2d");
  setInterval(tick, 1000);
}


function tick() {
  var now = new Date();

  h = now.getHours()%12;
  m = now.getMinutes();
  s = now.getSeconds();

  gobj("time").textContent = now.toTimeString();
  paint();
}


function drowHand(rotation, length, width, color) {
  ctx.save();
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.translate(150, 150);
  ctx.rotate(rotation);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.restore();
}


function paint() {
  ctx.clearRect(0, 0, 300, 300);


  ctx.save();
  ctx.translate(150, 150);
  ctx.strokeStyle = "black";
  var pitch = Math.PI * 2 / 60;
  for (let i = 0; i < 60; ++i) {
    ctx.beginPath();
    ctx.lineWidth = (i % 5) == 0 ? 3 : 1; //3項演算子
    ctx.moveTo(0, -120);
    ctx.lineTo(0, -140);
    ctx.stroke();
    ctx.rotate(pitch);
  }
  ctx.restore();

  var radH = (Math.PI * 2) / 12 * h + (Math.PI * 2) / 12 * (m / 60);
  var radM = (Math.PI * 2) / 60 * m;
  var radS = (Math.PI * 2) / 60 * s;


  drowHand(radH, 80, 6, "black");
  drowHand(radM, 120, 4, "black");
  drowHand(radS, 140, 2, "red");


}
