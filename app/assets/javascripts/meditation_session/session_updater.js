(function($) {
  'use strict';

  var updateSessionInfo = function() {
    $.ajax({
      url: location.pathname,
      type: 'GET',
      dataType: "json",
    }).success(function(data) {
      var sessionData = data.meditation_session;
      if(sessionData.status == 'started') {
        location.reload();
      } else {
        $('#participants').text(sessionData.participants);
      }
    });
  }

  $(function () {
    window.setInterval(function(){
      updateSessionInfo();
    }, 2000);
  });
})(jQuery)
