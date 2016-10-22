//= require timepiece

(function($) {
  'use strict';

  var bell = $('#xunda')[0];
  bell.onended = function() {
    bell.pause();
  }

  var durationInSeconds = $($('#session-duration')[0]).data('duration') * 60000;
  setInterval(function() { bell.play() }, durationInSeconds);
})(jQuery)
