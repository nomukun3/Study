'use strict';

$(document).ready(function(){
  //ファイルの読み込み
  $.ajax({url: 'data.json', dataType: 'json'})
  .done(function(data){
    data.forEach(function(item, index){
      console.log(item);
      if (item.crowded === 'yes') {
        const idName = '#' + item.id;
        $(idName).find('.check').addClass('crowded');
      }
    });
  })
  
  .fail(function(){
    window.alert('読み込みエラー');
  });

  $('.check').on('click', function(){
    if ($(this).hasClass('crowded')) {
      $(this).text('残席わずか').addClass('red');
    } else {
      $(this).text('お席あります').addClass('green');
    }
  });
});
