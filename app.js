 $( function() {
    function runEffect() {
      var options = {};
      $( "#effect" ).show( "fade", options, 500, callback );
    };
 
    function callback() {
      $( "#hide" ).on( "click", function() {
        $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
      });
    };
    $( "#button" ).on( "click", function() {
      runEffect();
    });
 
    $( "#effect" ).hide();
  } );