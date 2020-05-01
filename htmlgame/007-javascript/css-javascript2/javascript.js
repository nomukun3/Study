'use strict';

var ufo, newufo;
function init() {
  window.addEventListener("keydown", keydown);
  ufo = new UFO(document.getElementById("ufo"), 100);
  NewUFO.prototype = ufo;
  newufo = new NewUFO(100);
}

function keydown(e) {
  if (e.keyCode == 37) {
    ufo.moveLeft();
  }else if(e.keyCode ==39) {
    ufo.moveRight();
  }else if(e.keyCode == 38){
    newufo.moveUP();
  }else if(e.keyCode == 40){
    newufo.moveDown();
  }
}

function UFO(_elem, _xpos) {
  this.elem = _elem;
  this.xpos = _xpos;
  this.moveLeft = function () {
    this.xpos -= 10;
    this.elem.style.left = this.xpos + "px";
  };
  this.moveRight = function () {
    this.xpos += 10;
    this.elem.style.left = this.xpos + "px";
  };
  this.elem.style.left = this.xpos + "px";
}

function NewUFO(_ypos) {
  this.ypos = _ypos;
  this.moveUP = function () {
    this.ypos -= 10;
    this.elem.style.top = this.ypos + "px";
  };
  this.moveDown = function () {
    this.ypos += 10;
    this.elem.style.top = this.ypos + "px";
  };
  this.elem.style.top = this.ypos + "px";
}



