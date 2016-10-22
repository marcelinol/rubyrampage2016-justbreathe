(function($) {

  var bell = $('#bell')[0];
  bell.play();

  bell.onended = function() {
    bell.pause();
  }

})(jQuery)
