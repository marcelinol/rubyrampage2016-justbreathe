(function($) {

  var bell = $('#bell')[0];
  bell.play();

  var playLater = function() {
    var interval = setInterval(function(){
      bell.play();
      clearInterval(interval);
    }, 10*1000)
  };

  $('#play-now').on('click', function() {
    bell.play();
    playLater();
  });

})(jQuery)
