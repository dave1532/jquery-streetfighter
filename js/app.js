
$(document).ready(function() {

playtheme();

  $('.ryu').mouseenter(function() {
    $('.ryu-still,.ryu-cool,.ryu-throwing').hide();
	$('.ryu-ready').show();
})
  .mouseleave(function() {
    $('.ryu-ready,.ryu-throwing,ryu-cool').hide();
	 $('.ryu-still').show();  
})
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready,.ryu-cool, ryu-still').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
      .animate(
        {'left':'300px'},
        500,
        function() {
          $(this).hide();
          $(this).css('left','-212px');
        }
      );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  
  });
$(document).keydown(function(e) {
  if (e.keyCode == 88 ) {
    $('.ryu-ready').hide();
    $('.ryu-still').hide();
    $('.ryu-cool').show();
  }
})

.keyup(function(e) {
  if (e.keyCode == 88){
    $('.ryu-ready').show();
    $('.ryu-cool').hide();
  };
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
function playtheme () {
  $('#playtheme')[0].volume = 0.3;
  $('#playtheme')[0].load();
  $('#playtheme')[0].play();
  }
});