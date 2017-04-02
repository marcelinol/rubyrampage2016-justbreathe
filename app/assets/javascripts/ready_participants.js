(function($) {
  'use strict';

  $(document).on('updateSessionInfo', function(event, sessionData) { updateSessionInfo(sessionData) });

  var updateSessionInfo = function(sessionData) {
    var participantsNames = parseParticipantsNames(sessionData.participants);
    updateParticipantsNames(participantsNames);
  }

  var updateParticipantsNames = function(participantsNames) {
    $('#participants').text(participantsNames.join(', '));
  }

  var parseParticipantsNames = function(participants) {
    var participantsNames = [];
    for (var participant of participants) {
      participantsNames.push(participant.name);
    }
    return participantsNames;
  }
})(jQuery);
