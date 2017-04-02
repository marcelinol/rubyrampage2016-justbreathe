(function($) {
  'use strict';

  $(document).on('updateSessionInfo', function(event, sessionData) { updateSessionInfo(sessionData) });

  var updateSessionInfo = function(sessionData) {
    var knownParticipantsLength = $('#js-participants-ready-state').children().length;

    if (knownParticipantsLength != sessionData.participants.length) {
      var participantsNames = parseParticipantsNames(sessionData.participants);
      updateParticipantsNames(participantsNames);

      updateParticipantsReadyStates(sessionData.participants);
    }
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

  var updateParticipantsReadyStates = function(participants) {
    removeOldParticipants();
    addNewParticipants(participants);
    return;
  }

  var removeOldParticipants = function() {
    var myNode = document.getElementById("js-participants-ready-state");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
  }

  var addNewParticipants = function(participants) {
    for (var participant of participants) {
      var checkbox = createCheckbox(participant);
      document.getElementById('js-participants-ready-state').appendChild(checkbox);
    }
    return;
  }

  var createCheckbox = function(participant) {
    var div = $("<div>", {"class": "input-group"});
    var inputId = "js-participant-id-" + participant.id
    var input = $('<input>', { 'id': inputId, 'data-participant-id': participant.id, 'type': 'checkbox', 'disabled': 'true' });

    if (participant.ready == 'true')
      input.prop('checked', 'true')

    var label = document.createElement('label')
    label.htmlFor = "js-participant-id-" + participant.id;
    label.appendChild(document.createTextNode(participant.name));

    div[0].appendChild(input[0]);
    div[0].appendChild(label);

    return div[0];
  }

})(jQuery);
