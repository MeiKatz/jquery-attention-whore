  /*
   * LICENSE: "THE BEER-WARE LICENSE" (Revision 42)
   * <gregor.mitzka@gmail.com> wrote this file. As long as you retain this notice you
   * can do whatever you want with this stuff. If we meet some day, and you think
   * this stuff is worth it, you can buy me a beer in return Gregor Mitzka
   * 
   * @package      jQuery Attention Whore
   * @author       Gregor Mitzka <gregor.mitzka@gmail.com>
   * @copyright    2014 (C) Gregor Mitzka
   * @version      1.0
   * @license      The Beer-Ware License
   */
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
