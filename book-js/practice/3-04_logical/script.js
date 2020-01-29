'use strict';
const hour = new Date().getHours();

if(hour >= 19 && hour < 21) {
  window.alert('お弁当50%OFF');
}
else if(hour === 9 || hour === 15) {
  window.alert('お弁当一個買ったら一個おまけ');
}else{
  window.alert('お弁当はいかがですか');
}
