'use strict';

let i=0;

console.log("aaa");



let aaaa;

postsend();

function postsend() {
  let fd = new FormData();
  fd.append('score',199);
  fd.append('name','ra-men');
  let xhr = new XMLHttpRequest();
  xhr.open('POST','php.php');
  xhr.send(fd);
  xhr.onreadystatechange=function () {
    if ((xhr.readyState == 4) && (xhr.status == 200)) {
      aaaa = JSON.parse(xhr.responseText);
      console.log(aaaa[0]);
    }
  };
}
