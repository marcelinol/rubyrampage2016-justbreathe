//= require timepiece

(function($) {
  'use strict';

  var durationInSeconds = $($('#session-duration')[0]).data('duration') * 60000;
  console.log(durationInSeconds);
  setInterval(function() { $('#finish-session').click(); console.log('session finished') }, durationInSeconds);
})(jQuery)
