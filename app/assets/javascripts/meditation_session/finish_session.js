(function($) {

  var bell = $('#bell')[0];
  bell.play();

  $('#play').on('click', function() {
    var interval = setInterval(function(){
      bell.play();
      clearInterval(interval);
    }, 3*1000)
  });

})(jQuery)
