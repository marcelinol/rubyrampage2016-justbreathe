//= require timepiece

(function($) {
  'use strict';

  var durationInSeconds = $($('#session-duration')[0]).data('duration') * 60000;
  setInterval(function() { $('#fininsh-session').click(); }, durationInSeconds);
})(jQuery)
