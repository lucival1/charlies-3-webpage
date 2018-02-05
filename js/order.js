//accordion widget
$( function() {
  $( "#orderAccordion" ).accordion({
    collapsible: true,
    heightStyle: "content"
  });
});
//date picker widget
$( function() {
  $( "#datepicker" ).datepicker({
    showOtherMonths: true,
    selectOtherMonths: true
  });
} );
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
//dialog widget
$( function () {
  $( "#confirmationMsg" ).dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "drop",
      duration: 1000
    }
  });
   
$( "#submitBtn" ).on( "click", function() {
    $( "#confirmationMsg" ).dialog( "open" );
  });
});
//select menu widget
  $( function() {
    $( "#paymentType" ).selectmenu();
    $( ".typeOfDish" ).selectmenu();
    $( ".typeOfDrink" ).selectmenu();
    $( ".mainDish" ).selectmenu();
    $( ".quantity" ).selectmenu();
});
  
  //add remove input/button
  $(document).ready(function(){
    var maxField = 5; //Input fields increment limitation
    var addButton = $('.add_button'); //Add button selector
    var wrapper = $('.field_wrapper'); //Input field wrapper
    var fieldHTML = '<div><input type="text" name="dishe" value=""/><a href="javascript:void(0);" class="remove_button" title="Remove field"><i class="fa fa-minus" aria-hidden="true"></i></a></div>'; //New input field html 
    var x = 1; //Initial field counter is 1
    $(addButton).click(function(){ //Once add button is clicked
      if(x < maxField){ //Check maximum number of input fields
        x++; //Increment field counter
        $(wrapper).append(fieldHTML); // Add field html
      }
    });
    $(wrapper).on('click', '.remove_button', function(e){ //Once remove button is clicked
      e.preventDefault();
      $(this).parent('div').remove(); //Remove field html
      x--; //Decrement field counter
    });
});