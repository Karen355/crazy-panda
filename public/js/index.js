$( function() {
    var selectingTypeColor = "color"
    $( "button" ).click( function( event ) {
      $("button").removeClass("active");
      $(this).addClass("active");
      selectingTypeColor = event.target.innerHTML;
    } );
    function hexFromRGB(r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }
    function refreshContent() {      
      var red = $( ".red" ).slider( "value" ),
        green = $( ".green" ).slider( "value" ),
        blue = $( ".blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
      if (selectingTypeColor == "backgroundColor") {
        $( ".content" ).css( "background-color", "#" + hex );
      }
      else if (selectingTypeColor == "color") {
        $(".content-text").css("color", "#" + hex);
      }
      
    }
 
    $( ".red, .green, .blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshContent,
      change: refreshContent
    });
    $( ".red" ).slider( "value", 255 );
    $( ".green" ).slider( "value", 140 );
    $( ".blue" ).slider( "value", 60 );
  } );