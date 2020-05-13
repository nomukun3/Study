'use strict';

let ctx, x = 1100, y = 150 + 50, keyCode, keyCode1;

let canvas = document.getElementById("main");

let m = 0,n = 0,mkmk = 0;


let onpu2 = {};

ctx = canvas.getContext("2d");

for (let i = 0; i < 10; ++i) {
  onpu2['number'+i] = {};
  onpu2['number'+i]['x'+i]=x;
  onpu2['number'+i]['y'+i]=Math.floor(Math.random()*20)*10+100;
  onpu2['number'+i]['sonzai'+i]=true;
  onpu2['number'+i]['image'+i]=document.getElementById("onpu");
}



console.log(onpu2);


function init() {
  setInterval(mainloop1, 50);
}



function mainloop1() {
  document.getElementById("good").innerHTML="score:"+mkmk;
  key();
  
  ctx.clearRect(onpu2['number'+m]['x'+m], onpu2['number'+m]['y'+m], onpu2['number'+m]['image'+m].width, onpu2['number'+m]['image'+m].height);

  verticalline();
  sedeline();


  if (m<9) {
    ctx.drawImage(onpu2['number'+m]['image'+m], onpu2['number'+m]['x'+m]-20, onpu2['number'+m]['y'+m]);
    onpu2['number'+m]['x'+m] = onpu2['number'+m]['x'+m] - 10;
    // console.log(onpu2['number'+m]['x'+m]);
    if (onpu2['number'+m]['x'+m] < 0) {
      m=m+1;
    }
  }
}



// どのキーを押しているか確認
document.onkeydown = function(event) {
  if (event) {
    if (event.keyCode) {
        keyCode = event.keyCode;
        n = 0;
    } else if (event.which) {
        keyCode = event.which;
        n = 0;
    }
  }
  // console.log(keyCode);
};

document.onkeyup = function(event) {
  if (event) {
    if (event.keyCode) {
        keyCode1 = event.keyCode;
        n = 1;
    } else if (event.which) {
        keyCode1 = event.which;
        n = 1;
    }
  }
  // console.log(keyCode);
};




function key() {
  if (keyCode==65 && n==0 &&onpu2['number'+m]['x'+m]<200 && onpu2['number'+m]['x'+m]>50) {
    console.log("good");
    mkmk+=1;
  }else{
    console.log();
  }
}




// 背景の線
function verticalline() {
  ctx.strokeStyle = "#696969";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(150, 100);
  ctx.lineTo(150, 600);
  ctx.stroke();
}


function sedeline() {
  for (let i = 0; i < 5; ++i) {
    ctx.strokeStyle = "#696969";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50 , 150 + (30 * i) );
    ctx.lineTo(1200, 150 + (30 * i) );
    ctx.stroke();
  }
}

