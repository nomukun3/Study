'use strict';

console.log('aaa');

$(document).ready(function() {
  $('.submenu h3').on('click', function() {
    $(this).next().toggleClass('hidden');
  });
});
