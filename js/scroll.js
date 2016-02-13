var stage = 0;
  $(document).ready(function() {
    //$('.dropdown').toggle();
    var temp = 0;
    $('.dropdown').click(function() {

      $('.container').animate({
        top: "-=1000"
      }, 2500, function() {
        //finished anim
        $('#intro').remove();
        
      });//end animate

    });//end click
    $('.fl').delay(1500).fadeIn(1000);

    $('.sl').delay(3000).fadeIn(1000);
    $('.tl').delay(4500).fadeIn(1000);
    $('.dropdown').delay(5000).css("bottom", "-=150px").fadeIn(700);
  $('img').on('dragstart', function(event) { event.preventDefault(); });
});//end ready
