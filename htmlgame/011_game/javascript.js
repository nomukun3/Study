'use strict';

var H = 10, W = 10, BOMB = 10, cell = [], opened = 0;

function init() {
  var main = document.getElementById("main");

  for (let i = 0; i < H; ++i) {
    cell[i] = [];

    var tr = document.createElement("tr");
    for (let j = 0; j < W; ++j) {
      var td = document.createElement("td");
      td.addEventListener("click", click);
      td.className = "cell";
      td.y = i;
      td.x = j;

      cell[i][j] = td;
      tr.appendChild(td);
    }
    main.appendChild(tr);
  }

  for (let i = 0; i < BOMB; ++i) {
    while (true) {
      var x = Math.floor(Math.random() * W);
      var y = Math.floor(Math.random() * H);
      if (!cell[x][y].bomb) {
        cell[x][y].bomb = true;

        // cell[x][y].textContent = "*";
        break;
      }
    }
  }
}

function count(x, y) {
  var b = 0;
  for (let j = y - 1; j <= y + 1; ++j) {
    for (let i = x - 1; i <= x + 1; ++i) {
      if (cell[j] && cell[j][i]) {
        if (cell[j][i].bomb) {
          b++;
        }
      }
    }
  }
  return b;
}

function open(x, y) {
  for (let j = y-1; j <= y+1; ++j) {
    for (let i = x-1; i <= x+1; ++i) {
      if (cell[j]&&cell[j][i]) {
        var c = cell[j][i];
        if (c.opened || c.bomb) {
          continue;
        }
        flip(c);
        var n = count(i,j);
        if (n==0) {
          open(i,j);
        }else{
          c.textContent=n;
        }
      }
    }
  }
}

function flip(cell) {
  cell.className = "cell_open";
  cell.opened = true;
  if (++opened >= (W*H-BOMB)) {
    document.getElementById("title").textContent="Good job!";
  }
}

function click(e) {
  var src = e.currentTarget;
  if (src.bomb) {
    cell.forEach(function (tr) {
      tr.forEach(function (td) {
        if (td.bomb) {
          td.textContent = "+";
        }
      });
    });
    document.getElementById("title").textContent="GameOver";
  }else{
    open(src.x,src.y);
  }
}