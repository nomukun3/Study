'use strict';

// geolocation
function success(pos) {
  ajaxRequest(pos.coords.latitude, pos.coords.longitude);
}

function fail(error) {
  alert('位置情報の取得に失敗しました。エラーコード:' + error.code);
}

navigator.geolocation.getCurrentPosition(success, fail);



// UTCをミリ秒に
function utcToJSTime(utcTime) {
  return utcTime * 1000;
}




// データ取得
function ajaxRequest(lat, long) {
  const url = 'https://api.openweathermap.org/data/2.5/forecast';
  const appId = '0a34d03a4f93ee0fdd47f0fce3162c60';


  $.ajax({
    url : url,
    data: {
      appid: appId,
      lat: lat,
      lon: long,
      units: 'metric',
      lang: 'ja'
    }
  })
  .done(function(data) {
    console.log(data);


    // 都市名,国名
    console.log('都市名:' + data.city.name);
    console.log('国名:' + data.city.country);


    $('#place').text(data.city.name + ', ' + data.city.country);



    // 天気予報でーた 
    data.list.forEach(function(forecast, index) {
      const dateTime = new Date(utcToJSTime(forecast.dt));
      const month = dateTime.getMonth() + 1;
      const date = dateTime.getDate();
      const hours = dateTime.getHours();
      const min = String(dateTime.getMinutes()).padStart(2, '0');
      const temperature = Math.round(forecast.main.temp);
      const description = forecast.weather[0].description;
      const iconPath = `images/${forecast.weather[0].icon}.svg`;

      console.log('日時:' + `${month}/${date} ${hours}:${min}`);
      console.log('気温:' + temperature);
      console.log('天気:' + description);
      console.log('画像パス:' + iconPath);


      if (index === 0) {
        const currentWeather = `
        <div class="icon"><img src="${iconPath}" alt=""></div>
        <div class="info">
          <p>
            <span class="description">現在の天気:${description}</span>
            <span class="temp">${temperature}</span>°C
          </p>
        </div>`;
        $('#weather').html(currentWeather);
      }else{
        const tableRow = `
        <tr>
          <td class="info">${month}/${date} ${hours}:${min}</td>
          <td class="icon"><img src="${iconPath}" alt=""></td>
          <td><span class="description">${description}</span></td>
          <td><span class="temp">${temperature}°C</span></td>
        </tr>`;
        $('#forecast').append(tableRow);
      }
    });
  })

  .fail(function() {
    console.log('$.ajax failed!');
  });
}
