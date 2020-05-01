'use strict';

let aaa=1;

function insertItem() {
  var container = document.getElementById("container");
  var item = document.createElement("li");

  item.textContent = "hello"+aaa;
  container.appendChild(item);

  aaa++;
}

function removeItem() {
  var container = document.getElementById("container");
  var item = container.firstChild;

  if (item) {
    container.removeChild(item);
  }
}
