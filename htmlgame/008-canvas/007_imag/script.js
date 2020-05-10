'use strict';


var ctx;

function init() {
  
  var canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");


  var photo = document.getElementById("photo");
  var photo2 = document.getElementById("photo2");


  ctx.drawImage(photo, 10, 10);

  ctx.drawImage(photo, 10, 300, 600, 100);

  ctx.drawImage(photo, 40, 50, 90, 90, 10, 500, 60, 60);




}
