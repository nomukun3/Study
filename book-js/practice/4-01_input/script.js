'use strict';

document.getElementById('form').onsubmit = function(event){
  event.preventDefault();
  const search = document.getElementById('form').word.value;
  document.getElementById('output').textContent = `「${search}」の検索中...`;
};
