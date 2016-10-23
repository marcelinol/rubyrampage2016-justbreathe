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
    $.ajax({
      url: location.pathname,
      type: 'GET',
      dataType: "json"
    }).success(function(data) {
      var sessionData = data.meditation_session;
      if(sessionData.status === 'started') {
        $('#start-meditation').click();
      } else {
        $('#participants').text('Participants: ' + sessionData.participants);
      }
    });
  }

  var setupTimer = function() {
    sessionInterval = setInterval(function() {
      $('#finish-session').click();
    }, sessionDuration);
  }

  var startSession = function() {
    $('#started-room').removeClass('hide');
    $('#waiting-room, #finished-room').addClass('hide');

    bell.play();
    setupTimer();
    clearInterval(pollingInterval);
  }

  var finishSession = function() {
    $('#finished-room').removeClass('hide');
    $('#waiting-room, #started-room').addClass('hide');

    bell.play();
    if (sessionInterval) {
      clearInterval(sessionInterval);
    }
  }
})(jQuery)
