(function($) {
  'use strict';

  var bell = $('#silence-bell')[0];
  var bellInterval;

  $(window).on('start-session', function() {
    bellInterval = setInterval(function() {
      bell.currentTime = 0;
      bell.play();
    }, 1000);
  });

  $(window).on('finish-session', function() {
    clearInterval(bellInterval)
  });
})(jQuery);
