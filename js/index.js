//tooltip widget
$( function() {
  $( document ).tooltip();
});
//button widget
$( function() {
  $( "#submitBtn" ).button();
  $( "button" ).click( function( event ) {
    event.preventDefault();
  });
});
//autocomplete
$( function() {
    var products = [
      {
        value: "fried rice",
        label: "Fried Rice",
        desc: "Stir-fried in a wok and mixed with eggs, vegetables, seafood and meat",
        icon: "../img/rice_icon.jpg"
      },
      {
        value: "noodles",
        label: "Noodles",
        desc: "Made from unleavened dough which is stretched, extruded, or rolled flat and cut into one of a variety of shapes.",
        icon: "../img/noodles_icon.jpg"
      },
      {
        value: "curry",
        label: "Curry",
        desc: "Complex combinations of spices or herbs, usually including fresh or dried hot chillies.",
        icon: "../img/curry_icon.jpg"
      },
      {
        value: "soup",
        label: "Soup",
        desc: "Made by combining ingredients such as meat and vegetables with stock, juice, water, or another liquid.",
        icon: "../img/soup_icon.jpg"
      },{
        value: "spice box",
        label: "Spice Box",
        desc: "Deep-fried chips, crispy shredded chicken, sliced red/green/chili peppers, fried onions and a variety of sauces.",
        icon: "../img/spicebox_icon.png"
      }
    ];
 
    $( "#searchProducts" ).autocomplete({
      minLength: 0,
      source: products,
      focus: function( event, ui ) {
        $( "#searchProducts" ).val( ui.item.label );
        return false;
      },
      select: function( event, ui ) {
        $( "#searchProducts" ).val( ui.item.label );
        $( "#product-id" ).val( ui.item.value );
        $( "#product-description" ).html( ui.item.desc );
        $( "#product-icon" ).attr( "src", "images/" + ui.item.icon );
 
        return false;
      }
    })
    .autocomplete( "instance" )._renderItem = function( ul, item ) {
      return $( "<li>" )
        .append( "<div>" + item.label + "<br>" + item.desc + "</div>" )
        .appendTo( ul );
    };
  } );