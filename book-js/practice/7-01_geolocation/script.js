'use strict';

console.log('aaa');

function success(pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  const accuracy = pos.coords.accuracy;

  $('#loc').text(`緯度:${lat} 経度:${lng}`);
  $('#accuracy').text(accuracy);
}

function fail(error) {
  alert('位置情報の取得に失敗しました。エラーコード:' + error.code);
}

navigator.geolocation.getCurrentPosition(success, fail);
