(function( $ ) {
  var original_title,
      $title   = $( "title" ).first();
      interval = null;
 
  var start = function ( notification_message, duration ) {
  	duration = duration || 1000;
  	
    stop();
    original_title = $title.html();
  
    interval = setInterval(function() {
      if ( $title.html() == original_title ) {
        $title.html( notification_message );
      } else {
        $title.html( original_title );
      }
    }, duration );
  };
  
  var stop = function() {
  	if ( interval !== null ) {
  		window.clearInterval( interval );
  		$title.html( original_title );
  	}
  };
  
  $( window ).on( "focus.attention-whore", stop );
 
 	$.theAttentionWhore = {
 		"attract" : start,
 		"shutup"  : stop
 	};
})( jQuery );
