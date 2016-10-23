//= require audio_playback

(function($) {
  'use strict';

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
      var sessionData = data.meditation_session;
      if(sessionData.status === 'started') {
        $('#start-meditation').click();
      } else {
        $('#participants').text('Participants: ' + sessionData.participants);
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
    $(window).trigger('start-session');

    setupTimer();
    clearInterval(pollingInterval);
  }

  var finishSession = function() {
    $('#finished-room').fadeIn('slow').removeClass('hide');
    $('#waiting-room, #started-room').fadeOut('slow').addClass('hide');
    $(window).trigger('finish-session');

    if (sessionInterval) {
      clearInterval(sessionInterval);
    }
  }
})(jQuery)
