'use strict';

let W = 9, H = 9,open_cell = 60, cell = [], number=[];

function init() {
  loop: while (true) {
    make();
    for (let j = 0; j < H; ++j) {
      for (let i = 0; i < W; ++i) {
        if (cell[j][i].anser==undefined) {
          var deletetr = document.getElementById("main");
          while (deletetr.firstChild) {
            deletetr.removeChild(deletetr.firstChild);
          }
          continue loop;
        }
      }
    }
    break loop;
  }
  open();
  kotaeawase();
}

function kotaeawase() {
  let sousin=document.createElement("div");
  sousin.textContent="採点";
  let other=document.getElementById("other");
  other.appendChild(sousin);
  sousin.addEventListener("click", kennsyou);
}

function kennsyou() {
  let n=0;
  for (let j = 0; j < H; ++j) {
    for (let i = 0; i < W; ++i) {
      if ((cell[j][i].open!=true)&&(cell[j][i].anser!=cell[j][i].kaitou)) {
        n++;
      }
    }
  }
  console.log(n);
  if (n<=0) {
    console.log("you are win");
    let other=document.getElementById("other");
    let kekka = document.createElement("p");
    kekka.textContent="You are win";
    other.appendChild(kekka);
  }else{
    console.log("you are lose");
    let other=document.getElementById("other");
    let kekka = document.createElement("p");
    kekka.textContent="you are lose";
    other.appendChild(kekka);
  }
}

function open() {
  for (let i = 0; i < open_cell; ++i) {
    while (true) {
      let x = Math.floor(Math.random()*W);
      let y = Math.floor(Math.random()*H);
      if (!cell[y][x].open) {
        cell[y][x].open=true;
        break;
      }
    }
    for (let l = 0; l < H; ++l) {
      for (let k = 0; k < W; ++k) {
        if (cell[l][k].open==true) {
          cell[l][k].textContent=cell[l][k].anser;
        }
      }
    }
  }
}




function click(e) {
  let src = e.currentTarget;
  if (src.open!=true) {
    src.kaitou=src.kaitou+1;
    src.className="kaitou";
    if (src.kaitou>=10) {
      src.kaitou=0;
    }
    src.textContent=src.kaitou;
  }
  console.log(src.anser);
}

function make() {
  let main = document.getElementById("main");

  for (let j = 0; j < H; ++j) {
    let tr = document.createElement("tr");
    cell[j]=[];
    lineW(j,tr);//横線

    for (let i = 0; i < W; ++i) {
      let td = document.createElement("td");
      td.className = "cell";
      td.block=block(j,i);
      cell[j][i] = td;
      cell[j][i].kaitou=0;
      tr.appendChild(td);
      td.addEventListener("click", click);
      lineH(i,td);//縦線
    }
    main.appendChild(tr);
  }
  for (let j = 0; j < W; ++j) {
    for (let n = 1; n < 10; ++n) {
      number.push(n);
    }
    //number1~9まで
    let tmp = [];//仮置き
    let tmp2 = [];
    for (let i = 0; i < W; ++i) {
      //縦かぶらないための処理
      ////////////////////////////////////////////////////////////////////
      for (let n = 0; n < j; ++n) {
        for (let l = 0; l < number.length; ++l) {
          if (number[l]==cell[n][i].anser) {
            number.splice(l,1);//縦のやつとかぶらないように
            tmp.push(cell[n][i].anser);//この時に被ってた縦のやつの記録
          }
        }
      }
      //ブロックがかぶらないように
      ////////////////////////////////////////////////////////////////////
      for (let m = 0; m < j; ++m) {
        for (let mm = 0; mm < W; ++mm) {
          if (cell[m][mm].block==cell[j][i].block) {
            for (let l = 0; l < number.length; ++l) {
              if (number[l]==cell[m][mm].anser) {
                number.splice(l, 1);
                tmp2.push(cell[m][mm].anser);
              }
            }
          }
        }
      }
      let num = Math.floor(Math.random()*number.length);
      cell[j][i].anser=number[num];
      number=number.concat(tmp);
      number=number.concat(tmp2);
      tmp=[];//縦の被ってたやつの記録のリセット
      tmp2=[];
      number.splice( num, 1);//横のやつとかぶらないように
    }
  }
}


function lineW(j,k) {
  if (j==2||j==5) {
    k.style.borderBottom="1px solid #ff00ff";
  }
}

function lineH(i,k) {
  if (i==2||i==5) {
    k.style.borderRight="1px solid #ff00ff";
  }
}

function block(tdy, tdx) {
  switch (Math.floor(tdy/3)) {
    case 0:
        switch (Math.floor(tdx/3)) {
          case 0:
            return 0;
          case 1:
            return 1;
          case 2:
            return 2;
        }
        break;
    case 1:
        switch (Math.floor(tdx/3)) {
          case 0:
            return 3;
          case 1:
            return 4;
          case 2:
            return 5;
        }
        break;
    case 2:
        switch (Math.floor(tdx/3)) {
          case 0:
            return 6;
          case 1:
            return 7;
          case 2:
            return 8;
        }
        break;
  }
}
