'use strict';

console.log('hello');

const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(function(item, index) {
  item.onclick = function() {
      console.log(this.dataset.image);
  }
});
