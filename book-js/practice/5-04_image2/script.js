'use strict';

console.log('aaa');

const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(function(item, index) {
  item.onclick = function() {
    console.log(this.dataset.image);
  }
});
