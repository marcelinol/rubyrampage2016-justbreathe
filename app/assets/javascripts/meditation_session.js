//= require timepiece

(function($) {
  'use strict';

  var bell = $('#bell')[0];
  var sessionDuration = $('#session-duration').first().data('duration') * 60000;
  var sessionInterval;
  var pollingInterval = setInterval(function() {
    updateSessionInfo();
  }, 1000);

  $('#start-meditation').on('click', function() {
    startSession();
  });

  $('#finish-session').on('click', function() {
    finishSession();
  });

  var updateSessionInfo = function() {
    $.get(location.pathname, function(data) {
      var sessionData = data;
      if(sessionData.status === 'started') {
        $('#start-meditation').click();
      } else {
        $(document).trigger('updateSessionInfo', sessionData);
      }
    }, 'json');
  }

  var setupTimer = function() {
    sessionInterval = setInterval(function() {
      $('#finish-session').click();
    }, sessionDuration);
  }

  var startSession = function() {
    $('#started-room').fadeIn('slow').removeClass('hide');
    $('#waiting-room, #finished-room').fadeOut('slow').addClass('hide');

    bell.play();
    setupTimer();
    clearInterval(pollingInterval);
  }

  var finishSession = function() {
    $('#finished-room').fadeIn('slow').removeClass('hide');
    $('#waiting-room, #started-room').fadeOut('slow').addClass('hide');

    bell.play();
    if (sessionInterval) {
      clearInterval(sessionInterval);
    }
  }
})(jQuery)
